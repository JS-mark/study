pub fn loopFn() {
    let mut num = 1;
    loop {
        num += 1;
        println!(" 输入 {num}");
        if num >= 10 {
            break;
        }
    }
}

/**
 * 标签 loop ，嵌套 loop 
 */
fn main() {
    let mut count = 0;
    'counting_up: loop {
        println!("count = {count}");
        let mut remaining = 10;

        loop {
            println!("remaining = {remaining}");
            if remaining == 9 {
                break;
            }
            if count == 2 {
                break 'counting_up;
            }
            remaining -= 1;
        }

        count += 1;
    }
    println!("End count = {count}");
}
