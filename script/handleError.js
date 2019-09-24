/**
 * 一个错误处理函数和测试案例的代码
 */
global.onerror = handleError;
let msg = "";
function handleError(desc, page, line) {
  msg = "An error has occurred.";
  msg += "Line: " + line;
  msg += "Description: " + desc;
  console.log(msg);
}
