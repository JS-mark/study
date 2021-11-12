//创建双向链表的构造函数
function DoublyLinkedList() {
  //创建节点的构造函数
  function Node(element) {
    this.element = element; //元素
    this.prev = null; //上一个节点
    this.next = null; //下一个节点
  }

  //定义属性
  this.length = 0; //链表长度
  this.head = null; //链表第一个节点
  this.tail = null; //链表的最后一个节点

  //尾部添加元素
  DoublyLinkedList.prototype.append = function (element) {
    //根据元素创建新节点
    let newNode = new Node(element);
    if (this.head == null) {
      //链表中没有节点,新节点newNode直接添加,head和tail都指向newNode
      this.head = newNode;
      this.tail = newNode;
    } else {
      //链表不为空,新节点添加到最后一个节点的后面,并且新节点的prev指向之前的最后一个节点
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
  };

  //正向遍历链表,转换为字符串返回
  DoublyLinkedList.prototype.forwardString = function () {
    let current = this.head;
    let str = "";
    while (current) {
      str += current.element + (current.next ? "," : "");
      current = current.next; //取出下一个节点
    }
    return str;
  };

  //正向遍历链表,转换为字符串返回
  DoublyLinkedList.prototype.reverseString = function () {
    let current = this.tail; //当前节点为最后一个节点
    let str = "";
    while (current) {
      str += current.element + (current.prev ? "," : "");
      current = current.prev; //取出上一个节点
    }
    return str;
  };
  //toString方法正向遍历
  DoublyLinkedList.prototype.toString = function () {
    return this.forwardString();
  };
  //在任意位置插入元素
  DoublyLinkedList.prototype.insert = function (position, element) {
    console.log(this.length);
    //检测边界:越界就插入失败,返回false
    if (position == undefined || position < 0 || position > this.length) {
      return false;
    }
    //创建新节点
    let newNode = new Node(element);

    //3.1 插入开始节点的位置
    if (position == 0) {
      //1 链表为空,head和tail指向newNode
      if (this.head == null) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        //2 链表不为空,新节点的next指向头节点,头节点的prev指向新节点,head指向新节点
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
      }
    } else if (position == this.length) {
      //3.2 插入尾部节点的后面,新节点prev指向尾部节点,尾部节点next指向新节点,tail指向新节点
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    } else {
      //3,3 插入中间位置,
      //定义变量,存储信息
      let current = this.head;
      let index = 0;
      let previous = null;

      //从头节点变量链表,找到position位置的节点
      while (index < position) {
        index++;
        previous = current;
        current = current.next;
      }
      //新节点的next指向current节点,新节点的prev指向previous节点
      //current.prev指向新节点,previous.next指向新节点
      newNode.next = current;
      newNode.prev = previous;
      current.prev = newNode;
      previous.next = newNode;
    }

    //插入成功,链表长度加1,返回true
    this.length++;
    return true;
  };

  //移除任意位置的元素,成功移除,返回该元素,移除失败,返回null
  DoublyLinkedList.prototype.removeAt = function (position) {
    //边界检测
    if (position < 0 || position >= this.length) {
      return null;
    }
    let current = this.head;

    if (position == 0) {
      //1 移除开始位置的节点
      if (this.length == 1) {
        //链表只有一个节点,head和tail赋值为null
        this.head = null;
        this.tail = null;
      } else {
        //链表有多个节点,head指向head的next节点,head的prev赋值为null
        this.head = head.next;
        this.head.prev = null;
      }
    } else if (position == this.length - 1) {
      //移除末尾位置的节点,tail指向tail的prev节点,tail.next赋值为null
      current = this.tail; //取出tail节点给current变量,方便取出元素值
      this.tail = this.tail.prev;
      this.tail.next = null;
    } else {
      //移除中间位置的节点
      let previous = null;
      let index = 0;
      //找到指定位置的节点
      while (index < position) {
        index++;
        previous = current;
        current = current.next;
      }
      //previous的next指向current.next节点
      //current.next节点的prev指向previous节点
      previous.next = current.next;
      current.next.prev = previous;
    }
    this.length--; //长度减1
    return current.element; //返回元素
  };

  //获取元素位置
  DoublyLinkedList.prototype.indexOf = function (element) {
    //存储节点和节点位置
    let current = this.head;
    let index = 0;

    //遍历链表,查找元素,找到就返回对应的位置
    while (current) {
      if (current.element == element) {
        return index;
      }
      index++;
      current = current.next;
    }
    //链表中没有找到元素,返回-1
    return -1;
  };
  //删除指定元素
  DoublyLinkedList.prototype.remove = function (element) {
    let index = this.indexOf(element);
    return this.removeAt(index);
  };
  //判断链表是否为空
  DoublyLinkedList.prototype.isEmpty = function () {
    return this.length == 0;
  };
  //获取链表长度
  DoublyLinkedList.prototype.size = function () {
    return this.length;
  };
  //获取第一个元素
  DoublyLinkedList.prototype.getHeadElement = function () {
    return this.head.element;
  };
  //获取最后一个元素
  DoublyLinkedList.prototype.getTailElement = function () {
    return this.tail.element;
  };
}

class Node {
  constructor(element) {
    this.element = element; //元素
    this.prev = null; //上一个节点
    this.next = null; //下一个节点
  }
}

class DoublyList {
  constructor() {
    //定义属性
    this.length = 0; //链表长度
    this.head = null; //链表第一个节点
    this.tail = null; //链表的最后一个节点
  }

  //尾部添加元素
  append(element) {
    //根据元素创建新节点
    let newNode = new Node(element);
    if (this.head == null) {
      //链表中没有节点,新节点newNode直接添加,head和tail都指向newNode
      this.head = newNode;
      this.tail = newNode;
    } else {
      //链表不为空,新节点添加到最后一个节点的后面,并且新节点的prev指向之前的最后一个节点
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
  };

  //正向遍历链表,转换为字符串返回
  forwardString() {
    let current = this.head;
    let str = "";
    while (current) {
      str += current.element + (current.next ? "," : "");
      current = current.next; //取出下一个节点
    }
    return str;
  };

  //正向遍历链表,转换为字符串返回
  reverseString() {
    let current = this.tail; //当前节点为最后一个节点
    let str = "";
    while (current) {
      str += current.element + (current.prev ? "," : "");
      current = current.prev; //取出上一个节点
    }
    return str;
  };
  //toString方法正向遍历
  toString() {
    return this.forwardString();
  };
  //在任意位置插入元素
  insert(position, element) {
    console.log(this.length);
    //检测边界:越界就插入失败,返回false
    if (position == undefined || position < 0 || position > this.length) {
      return false;
    }
    //创建新节点
    let newNode = new Node(element);

    //3.1 插入开始节点的位置
    if (position == 0) {
      //1 链表为空,head和tail指向newNode
      if (this.head == null) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        //2 链表不为空,新节点的next指向头节点,头节点的prev指向新节点,head指向新节点
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
      }
    } else if (position == this.length) {
      //3.2 插入尾部节点的后面,新节点prev指向尾部节点,尾部节点next指向新节点,tail指向新节点
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    } else {
      //3,3 插入中间位置,
      //定义变量,存储信息
      let current = this.head;
      let index = 0;
      let previous = null;

      //从头节点变量链表,找到position位置的节点
      while (index < position) {
        index++;
        previous = current;
        current = current.next;
      }
      //新节点的next指向current节点,新节点的prev指向previous节点
      //current.prev指向新节点,previous.next指向新节点
      newNode.next = current;
      newNode.prev = previous;
      current.prev = newNode;
      previous.next = newNode;
    }

    //插入成功,链表长度加1,返回true
    this.length++;
    return true;
  };

  //移除任意位置的元素,成功移除,返回该元素,移除失败,返回null
  removeAt(position) {
    //边界检测
    if (position < 0 || position >= this.length) {
      return null;
    }
    let current = this.head;

    if (position == 0) {
      //1 移除开始位置的节点
      if (this.length == 1) {
        //链表只有一个节点,head和tail赋值为null
        this.head = null;
        this.tail = null;
      } else {
        //链表有多个节点,head指向head的next节点,head的prev赋值为null
        this.head = head.next;
        this.head.prev = null;
      }
    } else if (position == this.length - 1) {
      //移除末尾位置的节点,tail指向tail的prev节点,tail.next赋值为null
      current = this.tail; //取出tail节点给current变量,方便取出元素值
      this.tail = this.tail.prev;
      this.tail.next = null;
    } else {
      //移除中间位置的节点
      let previous = null;
      let index = 0;
      //找到指定位置的节点
      while (index < position) {
        index++;
        previous = current;
        current = current.next;
      }
      //previous的next指向current.next节点
      //current.next节点的prev指向previous节点
      previous.next = current.next;
      current.next.prev = previous;
    }
    this.length--; //长度减1
    return current.element; //返回元素
  };

  //获取元素位置
  indexOf(element) {
    //存储节点和节点位置
    let current = this.head;
    let index = 0;

    //遍历链表,查找元素,找到就返回对应的位置
    while (current) {
      if (current.element == element) {
        return index;
      }
      index++;
      current = current.next;
    }
    //链表中没有找到元素,返回-1
    return -1;
  };
  //删除指定元素
  remove(element) {
    let index = this.indexOf(element);
    return this.removeAt(index);
  };
  //判断链表是否为空
  isEmpty() {
    return this.length == 0;
  };
  //获取链表长度
  getSize() {
    return this.length;
  };
  //获取第一个元素
  getHeadElement() {
    return this.head.element;
  };
  //获取最后一个元素
  getTailElement() {
    return this.tail.element;
  };
}