// rust 中的mod 引用，或者说是模块机制
// mod range;

// use range::demo;

// fn main() {
//     demo::range_demo()
// }

// () 单元类型

fn main() {
    let x = '中';
    // 在内存中占了多少字节，内存大小
    println!("字符'中'占用了{}字节的内存大小", std::mem::size_of_val(&x));

    assert_eq!(ret_unit_type(), ())
}

fn ret_unit_type() {
    let x = 1;
    // if 语句块也是一个表达式，因此可以用于赋值，也可以直接返回
    // 类似三元运算符，在Rust里我们可以这样写
    let y = if x % 2 == 1 { "odd" } else { "even" };
    // 或者写成一行
    let z = if x % 2 == 1 { "odd" } else { "even" };
}

//  设置返回值，表达式内直接返回， 可不写 return
// fn demo(o: i32) -> i32 {
//     o + 2
// }

use std::fmt::Debug;
pub fn report<T: Debug>(item: T) {
    println!("{:?}", item);
}

pub fn clear(text: &mut String) -> () {
    *text = String::from("");

    // let mut ddd = String::from("");
}
