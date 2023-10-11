// use std::io;

fn main() {
    // 代码块 赋值，最后一个值不携带分号 整个代码块返回的值就赋值给了 x
    let x = {
        let c = 1;
        c + 1
    };
    println!(" 输出 {:?} {}", x, plus(3));
}

/**
 * 省略分号
 */
fn five() -> i32 {
    -221
}

/**
 * 有返回值，
 */
fn plus(x: i32) -> i32 {
    return -221 + x;
}
