// 变量提升这个问题如果都提升的话，那么顺序就没什么关系，还是可以调用后来的函数。
function f1() {
  f2();
  console.log('f1');
}

function f2() {
  console.log("f2");
}

// 这样也是可以的

function f1() {
  f2();
  console.log('f1');
}

var f2 = function() {
  console.log("f2");
}
// 不行,因为上面的那一句是执行，当f1执行的时候，才去动态的调用f2，
// 而Add方法以及把函数绑定好了，绑定的时候是null，就不会去执行
contaniner.addEventListener('mouseover', stop, false);
var stop = function() {
  console.log("stop");
}

// 可以
contaniner.addEventListener('mouseover', stop, false);
function stop () {
  console.log("stop");
}
