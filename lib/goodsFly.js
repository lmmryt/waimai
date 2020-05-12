var keyFrameTop;
var keyFrameRight;
var getKeyFramse = function () {
  var rule;
  var ss = document.styleSheets;

  for (var x = 0; x < ss[2].cssRules.length; ++x) {
    rule = ss[2].cssRules[x]
    if (rule.name == "run-top" && rule.type == CSSRule.KEYFRAMES_RULE) { keyFrameTop = rule }
    if (rule.name == "run-right" && rule.type == CSSRule.KEYFRAMES_RULE) { keyFrameRight = rule }
  }

}
function GoodsFly($this, carName, imgUrl) {
  var scrollTop = window.scrollY
  var scrollLeft = window.scrollX
  var browserWidth = window.innerWidth;

  var goodsLeft = $this.getBoundingClientRect().left

  var rightWidth = browserWidth - goodsLeft - $this.clientWidth;
  var initPosition = JSON.parse(JSON.stringify(rightWidth))
  var carTop = document.getElementsByClassName(carName)[0].getBoundingClientRect().top
  var carLeft = document.getElementsByClassName(carName)[0].getBoundingClientRect().left - 18
  var carHeight = document.getElementsByClassName(carName)[0].clientHeight
  var carWidth = document.getElementsByClassName(carName)[0].clientWidth;

  var carRight = browserWidth - carLeft - carWidth / 2
  var goodY = $this.getBoundingClientRect().top

  var goodsTop = goodY - $this.clientHeight + 20;
  var copyGoodsTop = JSON.parse(JSON.stringify(goodsTop))
  var right = 'right:' + rightWidth + 'px;'
  var top = 'top:' + goodsTop + 'px;'
  var averageRight = parseInt(rightWidth / 4)
  // console.log(goodY)
  var averageTop = parseInt(-(goodY - scrollTop - carTop) / 2);
  carTopY = 'top:' + carTop + 'px;'
  // console.log('average:' + averageTop)
  getKeyFramse()
  keyFrameTop.deleteRule('0%')
  keyFrameTop.deleteRule('50%')
  keyFrameTop.deleteRule('100%')
  keyFrameTop.appendRule("0% { transform: rotate(-800deg); " + top + "}");

  // if (averageTop >= 50) {
  //   top = 'top:' + (carTop - 150) + 'px;'
  //   keyFrameTop.appendRule("50% {" + top + "}")
  // } else {

  // }
  copyGoodsTop = 'top:' + (copyGoodsTop - averageTop/4) + 'px;'
  keyFrameTop.appendRule("50% {" + copyGoodsTop + "}")
  keyFrameTop.appendRule("100% {" + carTopY + "}")
  keyFrameRight.deleteRule('0%')
  keyFrameRight.deleteRule('100%')
  keyFrameRight.appendRule("0% {" + right + "width: 1.125rem; height: 1.125rem;}")
  keyFrameRight.appendRule("100% {right:" + (carRight - 30) + "px;width: 1.125rem; height: 1.125rem;}")
  var goodX = $this.offsetLeft
  var goodY = $this.offsetTop
  if (imgUrl) {
    // var b = document.createElement('img')
    // b.className = 'ball run_top_right'
    // b.src = imgUrl
    // b.style.right = initPosition + 'px'
    // b.style.opacity = 0.6
    // b.style.top = goodY - this.clientHeight - scrollTop - b.clientHeight + 'px'
    // console.log('bb:' + b.style.top)
  } else {
    var b = document.createElement('div');
    // console.log(b.style.top)
    b.className = 'ball run_top_right'
    b.style.background = 'red'
    // b.style.right = initPosition + 'px'
    b.style.opacity = 0.6;
    // console.log(this)
    // console.log(  goodY - this.clientHeight - scrollTop - b.clientHeight)
    // b.style.top = goodY - this.clientHeight - scrollTop - b.clientHeight + 'px';

  }
  document.getElementsByTagName('body')[0].appendChild(b)
  setTimeout(function () { document.getElementsByTagName('body')[0].removeChild(document.getElementsByClassName('ball')[0]) }, 400)
}