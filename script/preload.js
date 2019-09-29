/**
 * preload assets
 * http://www.phpied.com/preload-cssjavascript-without-execution/
 * @param {object} context 
 * @param {array} assets 
 */
function preload(assets = [], context = window) {
  context.onload = function() {
    let o = null;
    for (let i = 0, max = assets.length; i < max; i += 1) {
      o = document.createElement("object");
      o.data = assets[i];
  
      // IE stuff, otherwise 0x0 is OK
      //o.width = 1;
      //o.height = 1;
      //o.style.visibility = "hidden";
      //o.type = "text/plain"; // IE
      o.width = 0;
      o.height = 0;
  
      // only FF appends to the head
      // all others require body
      document.body.appendChild(o);
    }
  }
};
