/**
 * 显示当前时间
 */
function showTime() {
  console.log(new Date().toLocaleTimeString());
  setInterval(function() {
    const date = new Date();
    console.log(new Date().toLocaleTimeString());
  }, 1000);
}
