class Node {
  constructor(element, next) {
    this.element = element ?? 0;
    this.next = next ? next : null;
    return this
  }
}

class List {
  constructor() {
    this.length = 0; //链表的长度,bug1 let length
    this.head = null; //链表的第一个节点
  }

  getSize() {
    return this.length;
  }

  isEmpty() {
    return this.length === 0;
  }

  getHead() {
    return this.head;
  }

  append(val) {
    //1 根据元素创建节点
    let newNode = new Node(val);

    //2 判断链表是否为空
    if (this.head === null) {
      //链表为空,newNode作为头节点添加进去,
      this.head = newNode;
    } else {
      //2.1 链表不为空,定义变量存储当前节点
      let current = this.head;
      //2.2 遍历链表,找最后一个节点
      while (current.next) {
        current = current.next;
      }
      //2.3 新节点添加到当前节点(最后一个节点)的后面
      current.next = newNode;
    }
    //3 链表长度增加1
    this.length++;
  }
  // 插入
  insert(position, element) {
    //1 检测边界:如果插入位置无效,插入失败,返回false
    if (position < 0 || position > this.length) {
      return false;
    }
    //2 根据元素创建新节点
    let newNode = new Node(element);

    //3 判断插入位置
    if (position == 0) {
      //插入链表的开始位置,newNode.next指向head;并且head指向newNode
      newNode.next = this.head;
      this.head = newNode;
    } else {
      //3.1 插入非开始位置
      //定义变量存储当前节点和当前节点的位置
      let current = head;
      let index = 0;
      let previous = null; //存储当前节点的上一个节点

      //查找position位置的节点
      while (index < position) {
        previous = current;
        current = current.next;
        index++;
      }
      //将newNode.next指向current节点,previous.next指向newNode节点
      newNode.next = current;
      previous.next = newNode;
    }
    //4 链表长度增加1,并返回true,添加成功
    this.length++;
    return true;
  }

  //移除任意位置的元素
  removeAt(position) {
    //1 检测越界:越界不做操作,返回null
    if (position < 0 || position >= this.length) {
      return null;
    }

    //定义变量存储当前节点和当前节点的位置
    let index = 0;
    let current = head;
    let previous = null; //存储当前节点的上一个节点

    //2 判断移除的位置
    if (position == 0) {
      //2.1 移除第一个节点,设置head指向head.next即可
      this.head = head.next;
    } else {
      //2.2 移除非第一个节点
      //查找position位置的节点
      while (index < position) {
        previous = current;
        current = current.next;
        index++;
      }
      //移除当前节点:previous.next指向current.next
      previous.next = current.next;
    }
    //3 链表长度减1,并返回被移除的元素
    this.length--;
    return current.element;
  };

  //获取元素在链表中的位置
  indexOf(element) {
    //1 定义变量存储信息
    let current = this.head;
    let index = 0; //current节点在链表的位置

    //2 链表中查找元素
    while (current) {
      //判断当前节点的元素是否等于目标元素
      if (current.element == element) {
        //找到元素,返回位置
        return index;
      }
      current = current.next;
      index++;
    }

    //3 遍历链表都没有找到元素,返回-1
    return -1;
  };
  //删除元素
  remove(element) {
    let index = this.indexOf(element); //获取节点在链表中的位置
    return this.removeAt(index); //根据节点位置移除节点,返回节点的值
  };

  toString() {
    //定义变量,存储当前节点和节点的值
    let current = this.head;
    let str = "";
    while (current) {
      str += current.element + (current.next ? "," : "");
      current = current.next;
    }
    return str;
  };
}