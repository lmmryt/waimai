// 实现以iPhone6 为基础进行缩放
// 缩放的公式(document.clientWidth/750)*100
// 使用媒体查询检测屏幕宽度是否发生改变  orientationchange
function layout(d, w) { //d指的是document  w指的是window
  var t = d.documentElement;
  //检测浏览器是否支持orientationchange这个事件，不支持的话使用resize
  var m = "orientationchange" in window ? "orientationchange" : "resize";
  // 事件处理函数
  var s = function () {
    var e = t.clientWidth
    
    // 给HTML根节点修改fontSize属性
    t.style.fontSize = (e / 750) * 32 + "px"
  }
  // 第一次打开页面时自动执行
  s();

  // 给document对象或者window对象添加自定义监听事件
  d.addEventListener && w.addEventListener(m, s, false)
}
layout(document, window)