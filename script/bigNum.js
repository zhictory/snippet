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
