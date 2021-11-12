function Book() {
	if (this instanceof Book) {
		// 判断this是不是由Book构造函数创造
		// 如果没有使用new关键字实例化对象，那么构造函数的this指向是window,node 环境是指global
		this.name = '监察者模式测试'
		this.say = function() {
			console.log(this.name)
		}
	} else {
		return new Book()
	}
}

let a = new Book()
console.log(a.name)
a.say()


Array.prototype.demo = function() {
  let arr = [];
  for(let i = 0; i <= this.length; i++) {
    if(arr.indexOf(this[i]) === -1) {
      arr.push(this[i])
    } else {
      this.splice(i, 1);
      i--;
    }
  }
}

let arr = [1, 2, 3, 3, 3, 4, 5, 6];