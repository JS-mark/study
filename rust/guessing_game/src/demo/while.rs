fn main() {
    let arr = [1, 2, 3, 4, 5, 6];
    let mut len = arr.len();
    while len > 0 {
        len -= 1;
        let num = arr[len];
        println!("dd {num}")
    }
}
