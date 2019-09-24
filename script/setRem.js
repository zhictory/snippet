/**
 * 使用 rem
 * rem 指相对于根元素字体大小的倍数。
 * rem 公式：
 * 如果想要 1rem 相当于 100px，就以 100px 为基准得到公式 fontSize/clientWidth = 100/uiWidth，这个 clientWidth 通过 js 获取，再计算出 fontSize。
 * 再由公式 1rem/100px = xrem/fontSize 按比例使用 rem。
 */
function setRem() {
  const html = document.getElementsByTagName("html")[0];
  const uiWidth = 750;
  const maxSize = 100;
  const clientWidth = document.documentElement.clientWidth;
  if (clientWidth > uiWidth) {
    clientWidth = uiWidth;
  }
  html.style.fontSize = clientWidth * (maxSize / uiWidth) + "px";
}
