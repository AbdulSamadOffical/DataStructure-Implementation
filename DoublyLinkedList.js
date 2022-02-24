class Node {
  constructor(val) {
    this.next = null;
    this.val = val;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    // the time complexity of push method in doubly linkedList is O(1)
    let newNode = new Node(val);
    if (this.length == 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return newNode;
  }
  listNode() {
    let temp = this.head;
    while (temp != null) {
      console.log(temp.val);
      temp = temp.next;
    }
  }
  // O(1)
  pop() {
    let temp = null;
    if (this.length == 0) {
      return undefined;
    } else if (this.length == 1) {
      temp = this.head;
      this.tail = null;
      this.head = null;
    } else {
      temp = this.tail;
      this.tail = this.tail.prev;
      this.tail.next = null;
    }
    this.length--;
    return temp.val;
  }
  //O(1)
  shift() {
    let temp = this.head;
    if (this.length == 0) {
      return undefined;
    } else if (this.length == 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
    }
    this.length--;
    return this;
  }
  // insert at the begining O(1)
  unshift(val) {
    let temp = this.head;
    let newNode = new Node(val);
    if (this.length == 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head = newNode;
      this.head.next = temp;
      temp.prev = this.head;
    }
    this.length++;
    return newNode.val;
  }

  reverse() {
    let temp = this.tail;
    for (let i = 0; i < this.length; i++) {
      console.log(temp.val);
      temp = temp.prev;
    }
  }
  get(pos) {
    let temp = this.head;
    if (pos < 0 || pos >= this.length) {
      return undefined;
    } else if (pos == 0) {
      return this.head;
    } else if (pos == this.length - 1) {
      return this.tail;
    } else {
      for (let i = 0; i < pos - 1; i++) {
        temp = temp.next;
      }
      return temp.next;
    }
  }
  set(pos, value) {
    let temp = this.head;
    if (pos < 0 || pos >= this.length) {
      return undefined;
    } else if (pos == 0) {
      return (this.head.val = value);
    } else if (pos == this.length - 1) {
      return (this.tail.val = value);
    } else {
      for (let i = 0; i < pos - 1; i++) {
        temp = temp.next;
      }
      return (temp.next.val = value);
    }
  }
  insert(pos, value) {
    if (pos < 0 || pos > this.length) {
      return undefined;
    } else if (pos == 0) {
      return this.unshift(value);
    } else if (pos == this.length) {
      return this.push(value).val;
    } else {
      let newNode = new Node(value);
      // taking the previous node
      let prevNode = this.get(pos - 1);
      let temp = prevNode.next;
      prevNode.next = newNode;
      newNode.prev = prevNode;
      newNode.next = temp;
      temp.prev = newNode;
      this.length++;
      return newNode;
    }
  }

  remove(pos) {
    if (pos < 0 || pos >= this.length) {
      return undefined;
    } else if (pos == 0) {
      return this.unshift(value);
    } else if (pos == this.length - 1) {
      return this.pop();
    } else {
      let prevNode = this.get(pos - 1);
      let temp = prevNode.next.next;
      prevNode.next = temp;
      temp.prev = prevNode;
      this.length--;
    }
  }
}

let node = new DoublyLinkedList();

node.push("samad");
node.push("rafay");
node.push("wahaj");
node.push("minhaj");
node.remove(1);
node.listNode();
node.reverse();
// node.unshift("Anaaf");
// node.unshift("rafay");
// node.unshift("Abdul Samad");
// console.log(node.head);
// node.insert(4, 10);
// node.listNode();
// console.log(node.get(3));
// node.reverse();
// node.listNode();
