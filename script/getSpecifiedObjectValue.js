/**
 * 查找指定位置的健值
 * @param {Object} obj 查找对象
 * @param {Number} n 索引
 */
function getSpecifiedObjectValue(obj, n) {
  // 无需判断 obj 的类型，因为对象都能作为 Object.keys 的参数
  if (!obj) {
    return;
  }
  // 无需判断 n 的类型，因为非数值都会返回 undefined
  if (!n) {
    n = 1;
  }
  return obj[Object.keys(obj)[n - 1]];
}
