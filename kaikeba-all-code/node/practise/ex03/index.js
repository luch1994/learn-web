const fs = require('fs')
module.exports.parser = path => {
    const readStream = fs.createReadStream(path)
    let reqData = [];
    let size = 0;
    return new Promise(resolve => {
        // 暗号：二分查找
        // ##BEGIN## 代码已加密
        readStream.on("data", data => {
            reqData.push(data);
            size += data.length;
        });
        readStream.on("end", () => {
            const data = Buffer.concat(reqData, size);
            try {
                const json = JSON.parse(data);
                resolve(json);
            } catch (error) {
                resolve(data);
            }
        });
        // ##END##
    })
}
