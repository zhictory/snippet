/**
 * 关于 createXHR()：
 * activeXString 是自定义的，activeXString 一般只会有 2 个类型的值（null 和 versions 数组中的某一个）
 *
 * 这个函数的作用就是创建一个异步请求的对象：
 * 1. 判断是否存在 XHR，如果有就直接返回他创造的对象。
 * 2. 判断是否存在 ActiveXObject，如果存在则创建他的对象，
 * 但这个对象需要一个传入参数（new ActiveXObect(versions[i])），需要 versions 数组中的某个项，数组的3个项分别对应3个版本，从最高版本开始创建，
 * 如果创建失败，就被 catch 抓住不处理，继续循环，直到循环创建成功为止，然后给自己添加一个属性叫 activeXString。
 */
function createXHR() {
  if (typeof XMLHttpRequest != "undefined") {
    return new XMLHttpRequest(); // 适用于IE7+及其它主流浏览器（原生的 XHR 对象）
  } else if (typeof ActiveXObject != "undefined") {
    if (typeof arguments.callee.activeXString != "string") {
      var versions = [
          "MSXML2.XMLHttp.6.0",
          "MSXML2.XMLHttp.3.0",
          "MSXML2.XMLHttp"
        ],
        i,
        len;
      for (i = 0, len = versions.length; i < len; i++) {
        try {
          new ActiveXObject(versions[i]);
          arguments.callee.activeXString = versions[i];
          break;
        } catch (ex) {
          //跳过
        }
      }
    }
    return new ActiveXObject(arguments.callee.activeXString); // 适用于IE7之前的版本（MSXML库中的 XHR 对象）
  } else {
    throw new Error("No XHR object available"); // 都不适用
  }
}

// 使用 createXHR
// var xhr = createXHR();
// xhr.onreadystatechange = function () {
//   if (xhr.readyState === 4) {
//     if (xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) {
//       console.log(xhr.responseText);
//     } else {
//       console.log("Request was unsuccessful" + xhr.status);
//     }
//   }
// };
// xhr.open("get", "example.txt", true);
// xhr.send(null);

// 当需要设置头部信息的时候
// xhr.open("post", "example.txt", true);
// xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
// var form = document.getElementById("user-info");
// xhr.send(serialize(form));
