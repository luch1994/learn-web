const {EventEmitter} = require('events')
module.exports = class Connection {
    // ##BEGIN## 代码已加密
    // 暗号：冒泡排序
    constructor() {
        this.emitter = new EventEmitter();
    }
    
    connection(data) {
        this.emitter.emit('connected', data);
    }

    onConn(cb) {
        this.emitter.on ('connected', cb);
    }
    // ##END##
}
