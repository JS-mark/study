var a
console.log(a)
setTimeout(() => {
	let b = 10
	console.log(b)
}, 0)
a = 1
console.log(a)

var a1 = 10
var obj1 = {
	fn: () => {
		console.log(this)
		console.log(a1)
	}
}
obj1.fn()
// 调用 fn 输出window.a1也就是 10
// this为 window

var obj2 = {
	hh: "yyy",
	fn: obj1.fn,
	fn1: function() {
		console.log(this)
		console.log(this.hh)
		console.log(arguments)
	}
}
obj2.fn()
obj2.fn1.call(obj2, ...["dd", "wwww"])

function* helloWorld() {
	yield "hello"
	yield "world"
	return "ending"
}

const generator = helloWorld()

generator.next() // { value: 'hello', done: false }

generator.next() // { value: 'world', done: false }

generator.next() // { value: 'ending', done: true }

generator.next() // { value: undefined, done: true }
