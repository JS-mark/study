use std::ptr::NonNull;

struct Rectangle {
    width: u32,
    height: u32,
}

fn area(rectangle: &Rectangle) -> u32 {
    rectangle.width * rectangle.height
}

fn main() {
    // 在 rust 中没有 gc 机制，但是会有作用域机制
    // rust 中变量将一个变量值拷贝到另一个变量使用通用 clone方法；如果直接赋值，会导致上一个值被移动（或者理解为丢弃）
    // 克隆,
    // let str = "111";
    // let c = str.clone();

    // println!("c: {c}, str {str}")
    let arr = [1, 2, 3, 4, 5, 6, 7];
    let c = &arr[1..4];

    struct User {
        name: String,
        email: String,
        phone: String,
        age: u32,
    }
    let user = User {
        name: String::from("Mark"),
        email: String::from("sunduo3195@qq.com"),
        phone: String::from("18600290021"),
        age: 13,
    };

    let rect = Rectangle {
        width: 30,
        height: 50,
    };

    fn alert(data: User) {
        let name = data.name;
        let age = data.age;
        let email = data.email;
        let phone = data.phone;
        println!(" {name} {age} {email} {phone}")
    }

    println!(
        "The area of the rectangle is {} square pixels.",
        area(&rect)
    );

    alert(user);

    let a = 1;
    let b = 2;
    println!("{a} + {b} = {}", add(a, b));

    fn add(a: i32, b: i32) -> i32 {
        return a + b;
    }
}
