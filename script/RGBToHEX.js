/**
 * RGB 颜色转 16 进制颜色
 * @param  {String} rgb RGB进制颜色字符串
 * @return {String} 16进制颜色字符串
 */
function RGBToHEX(rgb) {
  var rgbArr = rgb.split(/[^\d]+/);
  var color = (rgbArr[1] << 16) | (rgbArr[2] << 8) | rgbArr[3];
  return "#" + color.toString(16);
}
