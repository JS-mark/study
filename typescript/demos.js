"use strict";
// string类型
var stringType = 'seven';
// any类型
var anyType = 'hello';
// 定义整型变量
var numberType = 18;
var a = 178.5;
// 定义array型并指定元素都未number变量
var list = [1, 2, 3];
console.log(typeof list[1]);
// 定义枚举类型
var REN;
(function (REN) {
    REN[REN["nan"] = 111] = "nan";
    REN["nv"] = "1111";
    REN["yao"] = "d";
})(REN || (REN = {}));
//
var anyThing = 'hello';
// 定义多个类型
var num_str;
console.log((num_str = [11, 22, 33]));
var arr = [1, 2, 3];
var arr1 = [1, 1, 2222];
// 定义元组
var arr2;
arr2 = ['1', 2, true]; // typescript 定义值时会做类型检测
// 定义函数，指定函数参数类型
var test = function (params) {
    return params + 'fucking';
};
// 定义void类型
var test1 = null;
var booleanType = false;
console.log(stringType);
console.log(numberType);
console.log(anyType);
console.log(arr);
console.log(arr1);
console.log(typeof arr2[0]);
console.log(test1);
console.log(test('ssssss'));
console.log(booleanType);
var mui = {
    say: function () {
        console.log('测试。。。');
    },
    sayStr: function (str) {
        console.log(str);
    }
};
mui.say();
mui.sayStr('qqqqqqqqqqqqq');
var qq = 1;
setInterval(function () {
    qq++;
    mui.sayStr('qqqqqqqqqqqqq' + qq);
}, 100);
