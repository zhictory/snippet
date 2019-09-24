/**
 * 浏览器能力检测
 * 在浏览器环境下测试任何对象的某个特性是否存在
 * unknown 为 IE 特有
 */
function isHostMethod(object, property) {
  const t = typeof object[property];
  return (
    t === "function" ||
    !!(t === "object" && object[property]) ||
    t === "unknown"
  );
}
