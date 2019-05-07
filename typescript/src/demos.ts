// string类型
const stringType: string = "seven"
// any类型
const anyType: any = "hello"
// 定义整型变量
const numberType: number = 18
const a: number = 178.5
// 定义array型并指定元素都未number变量
const list: Array<number> = [1, 2, 3]

console.log(typeof list[1])
// 定义枚举类型
enum REN {
	nan = 111,
	nv = "1111",
	yao = "d"
}
//
const anyThing: any = "hello"
const ab: string = "ddddd"
// 定义多个类型
let num_str: number | string | Array<number>
console.log((num_str = [11, 22, 33]))

const arr: number[] = [1, 2, 3]
const arr1: Array<number> = [1, 1, 2222]
// 定义元组
let arr2: [string, number, boolean]
arr2 = ["1", 2, true] // typescript 定义值时会做类型检测
// 定义函数，指定函数参数类型
const test = function(params: string) {
	return `${params}fucking`
}
// 定义void类型
const test1: null = null

const booleanType: boolean = false
let num: number = 1
if (num == 2) {
	console.log(num)
}
console.log(stringType)
console.log(numberType)
console.log(anyType)
console.log(arr)
console.log(arr1)
console.log(typeof arr2[0])
console.log(test1)
console.log(test("ssssss"))
console.log(booleanType)

const mui = {
	say() {
		console.log("测试。。。")
	},
	sayStr(str: string) {
		console.log(str)
	}
}
mui.say()
mui.sayStr("qqqqqqqqqqqqq")
// let qq: number = 0
// setInterval(() => {
// 	qq++
// 	mui.sayStr('qqqqqqqqqqqqq' + qq)
// }, 1000)

// function* calculator(input: number) {
// 	var doubleThat = yield 2 * (input / 2) // next第一次暂停，value 值为10
// 	var another = yield doubleThat + 2 // 第二次暂停,value值为12
// 	return input * doubleThat * another
// }
// const calc = calculator(10)

// console.log(calc.next())
// console.log(calc.next(10))

// // proxy也就是代理操作
// const validator = {
// 	set(obj: any, prop: any, value: any) {
// 		if (prop === "age") {
// 			if (!Number.isInteger(value)) {
// 				throw new TypeError("The age is not an integer")
// 			}
// 			if (value > 200) {
// 				throw new RangeError("The age seems invalid")
// 			}
// 		}
// 		console.log(obj, prop, value)
// 		obj[prop] = obj[prop] + 100
// 		return true
// 	}
// }

// const person = new Proxy({ age: 1 }, validator)
// person.age = 12
// console.log(person.age)
