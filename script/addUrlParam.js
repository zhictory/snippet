/**
 * 增加指定 URL 参数
 * @param {String} url
 * @param {String} name
 * @param {String} value
 */
function addUrlParam(url, name, value) {
  if (
    typeof url === "" &&
    (typeof value === "string" || typeof value === "number")
  ) {
    url += url.indexOf("?") == -1 ? "?" : "&"; // 判断原来的URL后面是否已有参数
    url += encodeURIComponent(name) + "=" + encodeURIComponent(value);
    return url;
  }
}
