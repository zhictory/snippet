/**
 * 16 进制颜色值转 RGB
 * @param {String} hex 16进制颜色字符串
 * @return {String} RGB颜色字符串
 */
function hexToRGB(hex) {
  var hexx = hex.replace("#", "0x");
  var r = hexx >> 16;
  var g = (hexx >> 8) & 0xff;
  var b = hexx & 0xff;
  return `rgb(${r}, ${g}, ${b})`;
}
