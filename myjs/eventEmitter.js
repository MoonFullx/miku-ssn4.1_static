// 简单实现了一下 subscribe 和 dispatch
// 全局暴露
EventEmitter = {
    _events: {},
    dispatch: function (event, data) {
        if (!this._events[event]) { // 没有监听事件
          return;
        }
        for (var i = 0; i < this._events[event].length; i++) {
            this._events[event][i](data);
        }
    },
    subscribe: function (event, callback) {
      // 创建一个新事件数组
      if (!this._events[event]) {
        this._events[event] = [];
      }
      this._events[event].push(callback);
    }
};