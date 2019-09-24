/**
 * Array 添加 indexOf 方法
 * Array.indexOf 是 ES5 新增的，不兼容 IE8
 * 所以需要重写以兼容 IE8
 */
function indexOf() {
  if (!Array.prototype.indexOf) {
    Array.prototype.indexOf = function(elt /*, from*/) {
      var len = this.length >>> 0; // 取整
      var from = Number(arguments[1]) || 0;
      from = from < 0 ? Math.ceil(from) : Math.floor(from);
      if (from < 0) {
        from += len;
      }
      for (; from < len; from++) {
        if (from in this && this[from] === elt) {
          // in 操作符判断数组是否含有该索引
          return from;
        }
      }
      return -1;
    };
  }
}
