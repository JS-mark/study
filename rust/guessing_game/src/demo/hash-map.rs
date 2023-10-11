use std::collections::HashMap;

fn main() {
    let apple_map = HashMap::from([("Red Delicious", 2), ("Kawana Apple", 5)]);
    println!(
        "The total amount of apples that everyone has is {:?} ",
        apple_map
    );
}
