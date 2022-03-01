// 暗号：做人嘛，最重要的是开心
class fileWebpackPlugin {
  apply(compiler) {
    compiler.hooks.emit.tapAsync("fileWebpackPlugin", (compilation, cb) => {
      const files = Object.keys(compilation.assets);
      const len = files.length;
      let content = `文件的数量：${len}
${files.join('\n')}`;

      compilation.assets["file.txt"] = {
        source: function () {
          return content;
        },
        size: function () {
          return 1024;
        },
      };
      cb();
    });
  }
}

module.exports = fileWebpackPlugin;