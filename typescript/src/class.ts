/*
 * @Author: Mark
 * @Date: 2021-08-30 19:27:20
 * @LastEditors: Mark
 * @LastEditTime: 2021-08-31 15:13:47
 * @Description: class
 */

interface PersonOptions {
  name: string;
  age?: number;
}
interface Person extends PersonOptions {
  say: () => void;
}

class Demo implements Person {
  constructor(options: PersonOptions) {
    this.name = options.name;
    this.age = options.age;
  }
  name: string;
  age?: number | undefined;
  say() {
    console.log(this);
  }
}

const data = new Demo({ name: "ss", age: 11 });
data.say();
