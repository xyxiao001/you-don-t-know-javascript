// 你不知道的JavaScript
{
  // withwith 可以将一个没有或有多个属性的对象处理为一个完全隔离的词法作用域， 
  // 因此这个对象的属性也会被处理为定义在这个作用域中的词法标识符
  function testWith(obj) {
    with (obj) {
      a = 1,
      b = 2
    }
  }

  var obj1 = {
    a: 2
  }

  var obj2 = {
    b: 1
  }


  testWith(obj1)

  console.log(obj1)

  testWith(obj2)

  console.log(obj2)

  console.log(a, b)
  // 会创建全局变量
}
