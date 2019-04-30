{
  /**
   * 判断空对象
   */
  function isEmptyObject(object = {}) {

    if (object instanceof Object)

    let names = [];

    if (Object.getOwnPropertyNames) {
      // IE9+
      names = Object.getOwnPropertyNames(object);
    } else {
      // IE8+
      for (const key in object) {
        names.push(key);
      }
    }

    return names.length === 0 ? true : false;

  }

  console.log([1].getOwnPropertyNames());
  
}
{
  /**
   * Array 添加 indexOf 方法
   * Array.indexOf 是 ES5 新增的，不兼容 IE8
   * 所以需要重写以兼容 IE8
   */
  function indexOf() {
    if (!Array.prototype.indexOf) {
      Array.prototype.indexOf = function(elt /*, from*/) {
        var len = this.length >>> 0; // 取整
        var from = Number(arguments[1]) || 0;
        from = from < 0 ? Math.ceil(from) : Math.floor(from);
        if (from < 0) {
          from += len;
        }
        for (; from < len; from++) {
          if (from in this && this[from] === elt) {
            // in 操作符判断数组是否含有该索引
            return from;
          }
        }
        return -1;
      };
    }
  }
}
{
  /**
   * 查找指定位置的健值
   * @param {Object} obj 查找对象
   * @param {Number} n 索引
   */
  function getSpecifiedObjectValue(obj, n) {
    // 无需判断 obj 的类型，因为对象都能作为 Object.keys 的参数
    if (!obj) {
      return;
    }
    // 无需判断 n 的类型，因为非数值都会返回 undefined
    if (!n) {
      n = 1;
    }
    return obj[Object.keys(obj)[n - 1]];
  }
}
{
  /**
   * 一个错误处理函数和测试案例的代码
   */
  global.onerror = handleError;
  let msg = "";
  function handleError(desc, page, line) {
    msg = "An error has occurred.";
    msg += "Line: " + line;
    msg += "Description: " + desc;
    console.log(msg);
  }
}
{
  /**
   * 浏览器能力检测
   * 在浏览器环境下测试任何对象的某个特性是否存在
   * unknown 为 IE 特有
   */
  function isHostMethod(object, property) {
    const t = typeof object[property];
    return (
      t === "function" ||
      !!(t === "object" && object[property]) ||
      t === "unknown"
    );
  }
}
{
  /**
   * console.log
   */
  function log() {
    console && console.log(...arguments);
  }
}
{
  /**
   * 获取某个范围的随机数
   */
  function getRandom(lowerValue, upperValue) {
    return Math.floor(
      Math.random() * (upperValue - lowerValue + 1) + lowerValue
    );
  }
}
{
  /**
   * 数组去重
   */
  function deRepeat(array) {
    return Array.from(new Set(array));
  }
}
{
  /**
   * 递归实现 i 加到 n（i<=n）
   */
  function add(sum, i, n) {
    sum += i;
    if (i === n) {
      console.log(sum);
    } else {
      add(sum, ++i, n);
    }
  }
  /**
   * 等差数列实现 i 加到 n（i<=n）
   */
  function add(i, n) {
    return ((n + i) * (n - i + 1)) / 2;
  }
}
{
  /**
   * 大数阶乘
   * 将一个数字的每一位（个位、十位、百位、千位……）拆分出来，构成一个数组。
   * 每次计算时，针对每一位进行数学运算，并遵循逢十进一的原则，修改数组中每一个数组元素的内容。
   * 在完成所有运算之后，得到的数组是逆序的，要先 reverse 再 join，将每一位连接起来，组成“字符串”输出大数
   *
   * https://www.cnblogs.com/h5course/p/7566812.html
   */
  function bigNum(maxNum) {
    let result = [1];

    for (let num = 2; num <= maxNum; num++) {
      for (let i = 0, plus = 0; i < result.length || plus != 0; i++) {
        const count = i < result.length ? num * result[i] + plus : plus; // 如 4*6=24，count 就是 24 再加上 plus
        result[i] = count % 10; // 如 4*6=24，result[i] 就是 4
        plus = (count - result[i]) / 10; // 如 4*6=24，plus 就是 2
      }
    }

    return result.reverse().join("");
  }
}
{
  /**
   * 单词折行算法（canvas）
   * Divide an entire phrase in an array of phrases, all with the max pixel length given.
   * The words are initially separated by the space char.
   * @param {*} ctx
   * @param {*} phrase
   * @param {*} maxPxLength
   * @param {*} textStyle
   */
  function getLines(ctx, phrase, maxPxLength, textStyle) {
    const wordAll = phrase.split(" ");
    let lastPhrase = wordAll[0];
    let phraseArray = [];
    let measure = 0;

    ctx.font = textStyle;

    for (let i = 1; i < wordAll.length; i++) {
      let word = wordAll[i];

      measure = ctx.measureText(lastPhrase + word).width;

      if (measure < maxPxLength) {
        lastPhrase += " " + word;
      } else {
        phraseArray.push(lastPhrase);
        lastPhrase = word;
      }
      if (i === wordAll.length - 1) {
        phraseArray.push(lastPhrase);
        break;
      }
    }

    return phraseArray;
  }
}
{
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
}
{
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
}
{
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
}
{
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
}
{
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
}
{
  /**
   * 查询 URL 参数
   * @param {String} url 链接
   * @param {String} name 参数key
   */
  function getUrlParam(url, name) {
    if (typeof url !== 'string') {
      return;
    }
    if (!name) {
      return url.match(/(\?.+)/g)[0]
        .slice(1)
        .split("&")
        .map(item => decodeURIComponent(item));
    } else if (typeof name === "string" || typeof name === "number") {
      const value = url.match(new RegExp(`[\?\&]${name}=([^\&]*)(\&?)`, "i"));
      return value ? decodeURIComponent(value[1]) : "";
    }
  }
}
{
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
}

module.exports = { getRandom, getUrlParam };
