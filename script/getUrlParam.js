/**
 * 查询 URL 参数
 * @param {String} url 链接
 * @param {String} name 参数key
 */
function getUrlParam(url, name) {
  if (typeof url !== "string") {
    return;
  }
  if (!name) {
    return url
      .match(/(\?.+)/g)[0]
      .slice(1)
      .split("&")
      .map(item => decodeURIComponent(item));
  } else if (typeof name === "string" || typeof name === "number") {
    const value = url.match(new RegExp(`[\?\&]${name}=([^\&]*)(\&?)`, "i"));
    return value ? decodeURIComponent(value[1]) : "";
  }
}

module.exports = getUrlParam;
