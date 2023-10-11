package user

/**
* @parames 大写函数名称,代表公共
*/
func SayHi(a string) (string, string) {
	// 短变量只能在函数内使用
	c := "cccc"
	return "mark", "Hi" + c + a
}
func Demo() float32 {
	const PI float32 = 3.14
	return PI
}
