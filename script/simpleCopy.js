/**
 * 简单的拷贝原理
 * 在生产环境请用 clipboard.js https://github.com/zenorocha/clipboard.js/
 * @param {Object} params
 */
function simpleCopy(params) {
  const input = document.createElement("input");
  input.setAttribute("readonly", "readonly");
  input.setAttribute("value", params.content);
  document.body.appendChild(input);
  input.select(); // 兼容 pc
  input.setSelectionRange(0, 9999); // 兼容 ios
  if (document.execCommand("copy")) {
    document.execCommand("copy");
  }
  document.body.removeChild(input);
}

/**
 * 如果在 iOS 的 app 里使用 copy 函数无效，可以尝试用这个 Hack 解决
 * HACK_fixCopyInIOS(document.querySelector("#content-id"), simpleCopy)
 * https://developer.mozilla.org/zh-CN/docs/Web/API/Selection
 * Selection 对应的是用户选择的 Range
 * @param {Object} el 包含复制内容的元素
 * @param {Function} callback 回调函数
 */
function HACK_fixCopyInIOS(el, callback) {
  // Range.selectNodeContents
  const range = document.createRange();
  range.selectNodeContents(el);
  // Window.getSelection
  const sel = window.getSelection();
  sel.removeAllRanges();
  sel.addRange(range);
  // HTMLInputElement.setSelectionRange
  el.setSelectionRange && el.setSelectionRange(0, 9999);
  setTimeout(() => {
    document.body.click();
  }, 200);
  setTimeout(() => {
    callback;
  }, 400);
}
