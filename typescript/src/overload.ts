/*
 * @Author: Mark
 * @Date: 2021-08-30 19:24:13
 * @LastEditors: Mark
 * @LastEditTime: 2021-08-30 19:26:48
 * @Description: 重载
 */

function add(a: number): number;
function add(a: string, b: string): string;
function add(a: number, b: number): number;
function add(a: number | string, b?: number | string): number | string {
  if (typeof a === "string" && typeof b === "string") {
    return a + b;
  }
  if (typeof a === "number" && !b) {
    return a * 2;
  }
  return (a as number) + (b as number);
}
console.log(add(1, 2));
console.log(add("1", "2"));
