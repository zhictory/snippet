/**
 * tab 切换时的动画
 * @param {Object} params { bar, nextIdx = 0, onIdx = 0, count = 3 }
 * const bar = renderBar({
 *   barParent: document.querySelector("#J_list")
 * });
 * barTransition({
 *   bar,
 *   count: 3
 * });
 * document.querySelector("#J_list").addEventListener("click", e => {
 *   barTransition({
 *     bar,
 *     nextIdx: e.target.getAttribute("data-index"),
 *     onIdx: document.querySelector(".on").getAttribute("data-index"),
 *     count: 3
 *   });
 *   document
 *     .querySelectorAll(".item")
 *     .forEach(item => item.classList.remove("on"));
 *   e.target.classList.add("on");
 * });
 */
function barTransition(params) {
  // nextIdx from 0
  const {
    bar,
    nextIdx = 0,
    onIdx = 0,
    count = 3,
    indefinite = false,
    tabs
  } = params;
  if (!bar) {
    return;
  }
  if (indefinite && !tabs) {
    return;
  }
  // 判断动画的方向
  if (nextIdx > onIdx) {
    bar.classList.add("bar-head");
    bar.classList.remove("bar-tail");
  } else if (nextIdx < onIdx) {
    bar.classList.add("bar-tail");
    bar.classList.remove("bar-head");
  }

  // 标签底部条的属性
  if (!indefinite) {
    const barWidth = (100 / count).toFixed(4);
    bar.style.left = nextIdx * barWidth + "%";
    bar.style.right = (count - nextIdx - 1) * barWidth + "%";
  } else {
    const nextTab = tabs[nextIdx];
    if (!nextTab) {
      return;
    }
    bar.style.left =
      ((nextTab.offsetLeft / nextTab.parentElement.offsetWidth) * 100).toFixed(
        4
      ) + "%";
    bar.style.right =
      (
        ((nextTab.parentElement.offsetWidth -
          nextTab.offsetWidth -
          nextTab.offsetLeft) /
          nextTab.parentElement.offsetWidth) *
        100
      ).toFixed(4) + "%";
  }
}

function renderBar(params) {
  const div = document.createElement("div");
  div.classList.add("bar");
  div.classList.add("bar-head");
  params.barParent && params.barParent.appendChild(div);
  return div;
}
