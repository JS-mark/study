/*
 * @Author: Mark
 * @Date: 2021-09-11 15:08:40
 * @LastEditors: Mark
 * @LastEditTime: 2021-09-11 15:08:40
 * @Description: file content
 */
class CreateFlow {
  constructor(tasks) {
    if (!Array.isArray(tasks)) {
      throw new Error("tasks not an Array");
    }
    // 拉平数组
    this.tasks = tasks.flat() || [];
    return this;
  }
  async run(callback) {
    while (this.tasks.length) {
      const task = this.tasks.shift();
      let res = null;
      const next = () => new CreateFlow(this.tasks).run(callback);
      if (typeof task === "function") {
        res = await task();
        if (this.isPromise(res)) {
          res.then(next);
          return;
        }
      } else {
        task.run(next);
        return;
      }
    }
    callback && callback();
  }
  isPromise(val) {
    if (
      (typeof val === "object" && val !== null) ||
      typeof val === "function"
    ) {
      return typeof val.then === "function";
    }
    return false;
  }
}

/**
 * 判断一个变量是否是 Promise 的函数
 * 1. 是否是对象并且不是 null
 * 2. 是否有 then 属性并且 then 是一个方法
 * @param {*} val
 */
function isPromise(val) {
  if ((typeof val === "object" && val !== null) || typeof val === "function") {
    return typeof val.then === "function";
  }
  return false;
}

const allSettled = function (promises) {
  return new Promise(function (resolve, reject) {
    if (!Array.isArray(promises)) {
      return reject(new TypeError("arguments must be an array"));
    }
    let resolvedCounter = 0;
    const promiseNum = promises.length;
    // 统计所有的promise结果并最后返回
    const resolvedResults = new Array(promiseNum);
    for (let [index, item] of promises.entries()) {
      Promise.resolve(item).then(
        function (value) {
          resolvedCounter++;
          resolvedResults[index] = { status: "fulfilled", value };
          if (resolvedCounter == promiseNum) {
            return resolve(resolvedResults);
          }
        },
        function (reason) {
          resolvedCounter++;
          resolvedResults[index] = { status: "rejected", reason };
          if (resolvedCounter == promiseNum) {
            return resolve(reason);
          }
        }
      );
    }
  });
};

function test({ data, index }) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ index, data: { ...data, time: +new Date() } });
    }, 1000);
  });
}
