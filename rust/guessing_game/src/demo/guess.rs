use rand::Rng;
use std::cmp::Ordering;
use std::io;

pub fn guess() {
    println!("Hello, world!");
    println!("请输入你的竞猜");

    // 创建新字符串
    let secret_number = rand::thread_rng().gen_range(1..=1000);

    loop {
        // 每次循环创建 guess
        let mut guess = String::new();

        // let num = 5;
        // let mut banNum = 5;
        // 读取输入
        io::stdin().read_line(&mut guess).expect("读取失败！");
        // 重新指定
        // match 是匹配

        let guess: u32 = match guess.trim().parse() {
            Ok(num) => num,
            Err(_) => continue,
        };
        println!("sss {guess} {secret_number}");
        // println!("你的竞猜结果 {guess}");
        // let x = 5;
        // let y = 10;
        // println!("{x} + {y} = {}", x + y);
        // println!("随机生成的数 {}", secret_number);
        match guess.cmp(&secret_number) {
            Ordering::Less => println!("太小了"),
            Ordering::Greater => println!("太大了"),
            Ordering::Equal => {
                println!("相等");
                break;
            }
        }
    }
}
