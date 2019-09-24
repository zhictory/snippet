/**
 * 日期倒计时
 * 1861891199：2028-12-31 23:59:59
 */
function countDownByDate(endTime = 1861891199) {
  setInterval(function() {
    const now = parseInt(new Date().getTime() / 1000);
    const endTimeLocale = new Date(endTime * 1000).toLocaleString();
    // 各持续时间字段
    let duringTimes = endTime - now < 0 ? 0 : endTime - now;
    let duringDays = parseInt(duringTimes / 86400);
    let duringHours = parseInt((duringTimes % 86400) / 3600);
    let duringMinutes = parseInt(((duringTimes % 86400) % 3600) / 60);
    let duringSeconds = ((duringTimes % 86400) % 3600) % 60;
    // 格式化时间字段
    duringHours < 10
      ? (duringHours = "0" + duringHours)
      : (duringHours = duringHours);
    duringMinutes < 10
      ? (duringMinutes = "0" + duringMinutes)
      : (duringMinutes = duringMinutes);
    duringSeconds < 10
      ? (duringSeconds = "0" + duringSeconds)
      : (duringSeconds = duringSeconds);

    console.log(
      "距离 " +
        endTimeLocale +
        " 还剩：" +
        duringDays +
        "天" +
        duringHours +
        "小时" +
        duringMinutes +
        "分" +
        duringSeconds +
        "秒"
    );
  }, 1000);
}
