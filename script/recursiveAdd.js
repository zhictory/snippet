/**
 * 递归实现 i 加到 n（i<=n）
 */
function recursiveAdd(sum, i, n) {
  sum += i;
  if (i === n) {
    console.log(sum);
  } else {
    add(sum, ++i, n);
  }
}
