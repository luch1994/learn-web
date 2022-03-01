const fs = require("fs");
const path = require("path");
const parser = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const {
  transformFromAst
} = require("@babel/core");
module.exports = class webpack {
  constructor(options) {
    this.entry = options.entry;
    this.output = options.output;
    this.modules = [];
  }
  run() {
    const info = this.parse(this.entry);
    //递归处理所有依赖
    console.log(info);
    this.modules.push(info);
    for (let i = 0; i < this.modules.length; i++) {
      const item = this.modules[i];
      const {
        dependencies
      } = item;
      if (dependencies) {
        for (let j in dependencies) {
          this.modules.push(this.parse(dependencies[j]));
        }
      }
    }
    // 修改数据结构 数组转对象
    const obj = {};
    this.modules.forEach((item) => {
      obj[item.entryFile] = {
        dependencies: item.dependencies,
        code: item.code,
      };
    });
    console.log(obj);
    // 代码生成，文件生成
    this.file(obj);
  }
  // 暗号：有点感动了怎么办？
  parse(entryFile) {
    // 读取文件内容
    const content = fs.readFileSync(entryFile, "utf-8");
    // 转换成ast树
    const ast = parser.parse(content, {
      sourceType: "module",
    });
    const dependencies = {};
    // 遍历ast树
    traverse(ast, {
      ImportDeclaration({
        node
      }) {
        // 依赖的模块会进来这个函数
        // 获取文件夹路径
        path.dirname(entryFile);
        // 拼接依赖的文件的路径
        const newPathName =
          "./" + path.join(path.dirname(entryFile), node.source.value);
          // 收集文件的依赖
        dependencies[node.source.value] = newPathName;
      },
    });
    // 获取代码
    const {
      code
    } = transformFromAst(ast, null, {
      presets: ["@babel/preset-env"],
    });
    return {
      entryFile,
      dependencies,
      code,
    };
  }
  file(code) {
    const filePath = path.join(this.output.path, this.output.filename);
    const newCode = JSON.stringify(code);
    // 生成 bundle代码
    const bundle = `(function(modules){
        function require(module){
            function newRequire(relativePath){
              return require(modules[module].dependencies[relativePath])
            }    
            var exports = {};
            (function(require,exports,code){
                eval(code)
            })(newRequire,exports,modules[module].code)
            return exports;
        }
        require('${this.entry}')
    })(${newCode})`;
    fs.writeFileSync(filePath, bundle, "utf-8");
  }
};