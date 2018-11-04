// string类型
let stringType: string = 'seven'
// any类型
let anyType: any = 'hello'
// 定义整型变量
let numberType: number = 18
let a: number = 178.5
// 定义array型并指定元素都未number变量
let list: Array<number> = [1, 2, 3]

console.log(typeof list[1])
// 定义枚举类型
enum REN {
	nan = 111,
	nv = '1111',
	yao = 'd'
}
//
let anyThing: any = 'hello'
// 定义多个类型
let num_str: number | string | Array<number>
console.log((num_str = [11, 22, 33]))

const arr: number[] = [1, 2, 3]
let arr1: Array<number> = [1, 1, 2222]
// 定义元组
let arr2: [string, number, boolean]
arr2 = ['1', 2, true] // typescript 定义值时会做类型检测
// 定义函数，指定函数参数类型
let test = function(params: string) {
	return params + 'fucking'
}
// 定义void类型
let test1: null = null

let booleanType: boolean = false

console.log(stringType)
console.log(numberType)
console.log(anyType)
console.log(arr)
console.log(arr1)
console.log(typeof arr2[0])
console.log(test1)
console.log(test('ssssss'))
console.log(booleanType)

let mui = {
	say() {
		console.log('测试。。。')
	},
	sayStr(str: string) {
		console.log(str)
	}
}
mui.say()
mui.sayStr('qqqqqqqqqqqqq')
let qq: number = 1

setInterval(() => {
	qq++
	mui.sayStr('qqqqqqqqqqqqq' + qq)
}, 100)
