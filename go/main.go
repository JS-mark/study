package main

import (
	"fmt"
	"mygo/user"
	// "mygo/user" 引用自定包
)

func main() {
	// name := "Go Developers"
	// fmt.Println("Azure for", name)
	// 这种定义变量只能在函数内部使用
	// name_, str := user.SayHi("n %v")
	// fmt.Println(name_, "\n", utils.CUtil(33), str)
	// 批量声明
	// var (
	// 	age int
	// 	n   string = "x"
	// )
	// fmt.Println(age, n)
	// var a, b = 1, 2
	// fmt.Println(a, "\n", b)
	// 这种定义常量会从0自增
	const (
	// a = iota
	// _ // 下划线跳过，但是不会阻止自增
	// b = iota
	// b = 100 // 这样也会跳过
	// c = iota
	)
	// const a, b, c = iota, iota, iota
	// fmt.Println(a)
	// fmt.Println(b)
	// fmt.Println(c)

	// ss, dd := user.SayHi("Dsd")
	// fmt.Println(ss, dd)

	s := user.Demo()
	// fmt.Printf("s: %v\n", s)
	// fmt.Printf("s: %v\n", s)
	fmt.Printf("s: %v\n", s)
	// 循环
	// for i := 0; i < 10; i++ {
	// 	fmt.Printf("i: %v\n", i)
	// }
	var a = 100
	var b = 200
	// 变量交换，对于精度和类型有要求
	// a = a ^ b
	// b = b ^ a
	// a = a ^ b
	// go 语言特性 双重交互，多重赋值特性
	b, a = a, b

	// int* a, b = 1, 2
	fmt.Printf("a: %v\n", a)
	fmt.Printf("b: %v\n", b)

}

// go mod init 初始化
