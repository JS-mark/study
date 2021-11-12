// interface StringArray {
//   [index: number]: string;
// }

// let myArray: StringArray;
// myArray = ["Bob", "Fred"];

// let myStr: string = myArray[0];

// console.log(myStr);

class Person {
  protected name: string;
  constructor(name: string) {
    this.name = name;
  }
}

class Employee extends Person {
  private department: string;

  constructor(name: string, department: string) {
    super(name);
    this.department = department;
  }

  public getElevatorPitch<T>(arg?: T): string {
    console.log(arg);
    return `Hello, my name is ${this.name} and I work in ${this.department}.`;
  }
}

let howard = new Employee("Howard", "Sales");
console.log(howard.getElevatorPitch());

// 类型断言
function identity<T>(arg: any): T {
  return arg;
}

console.log(identity(["ddd", "ddddddddd"]));

export interface ApiResponse<T> {
  code: number;
  message: string;
  result: T;
}

export class MergeResult {
  id: number = 0;
  name: string = "";
  create_at: string = "";
  created_by: string = "";
  monitor_info: string = "";
  active: boolean = false;
  rule_count: number = 0;
}
// 实体：要跟接口数据结构完全对应，执行npm run api从YApi上获取最新的接口定义，然后查看src/services目录
export interface MergeEntity extends ApiResponse<MergeResult> {}

const Test: MergeEntity = {
  code: 11,
  message: "sad",
  result: new MergeResult(),
};
