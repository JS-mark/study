"use strict";
// string类型
let stringType = 'seven';
// any类型
let anyType = 'hello';
// 定义整型变量
let numberType = 18;
let a = 178.5;
// 定义array型并指定元素都未number变量
let list = [1, 2, 3];
console.log(typeof list[1]);
// 定义枚举类型
var REN;
(function (REN) {
    REN[REN["nan"] = 111] = "nan";
    REN["nv"] = "1111";
    REN["yao"] = "d";
})(REN || (REN = {}));
//
let anyThing = 'hello';
// 定义多个类型
let num_str;
console.log((num_str = [11, 22, 33]));
const arr = [1, 2, 3];
let arr1 = [1, 1, 2222];
// 定义元组
let arr2;
arr2 = ['1', 2, true]; // typescript 定义值时会做类型检测
// 定义函数，指定函数参数类型
let test = function (params) {
    return params + 'fucking';
};
// 定义void类型
let test1 = null;
let booleanType = false;
console.log(stringType);
console.log(numberType);
console.log(anyType);
console.log(arr);
console.log(arr1);
console.log(typeof arr2[0]);
console.log(test1);
console.log(test('ssssss'));
console.log(booleanType);
let mui = {
    say() {
        console.log('测试。。。');
    },
    sayStr(str) {
        console.log(str);
    }
};
mui.say();
mui.sayStr('qqqqqqqqqqqqq');
// let qq: number = 0
// setInterval(() => {
// 	qq++
// 	mui.sayStr('qqqqqqqqqqqqq' + qq)
// }, 1000)
function* calculator(input) {
    var doubleThat = yield 2 * (input / 2); // next第一次暂停，value 值为10
    var another = yield doubleThat + 2; // 第二次暂停,value值为12
    return input * doubleThat * another;
}
const calc = calculator(10);
console.log(calc.next());
console.log(calc.next(10));
