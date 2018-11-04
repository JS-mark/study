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
