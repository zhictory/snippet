/**
 * 计秒倒计时
 */
function countDownBySecond(start = 10) {
  console.log(start--);
  let timer = setInterval(function() {
    if (start >= 0) {
      console.log(start--);
    } else {
      console.log("倒计时完啦！");
      clearInterval(timer); // 清除计时器
    }
  }, 1000);
}
