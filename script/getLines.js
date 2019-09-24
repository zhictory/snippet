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
