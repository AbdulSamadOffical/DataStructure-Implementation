// node consist of two properties
// val -> the value a node contains
// next -> reference to next node

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let node = new Node(val);
    if (this.length == 0) {
      this.head = node;
      this.tail = node;
      this.length++;
    } else {
      this.tail.next = node;
      this.tail = node;
      this.length++;
    }
  }
  display() {
    let temp = this.head;
    for (let i = 0; i < this.length; i++) {
      console.log(temp.val);
      temp = temp.next;
    }
  }
  isEmpty() {
    if (this.head == null) {
      return true;
    } else {
      return false;
    }
  }

  pop() {
    try {
      if (!this.isEmpty()) {
        if (this.length == 1) {
          this.head = null;
          this.tail = null;
          this.length--;
        } else {
          let temp = this.head;
          for (let i = 1; i < this.length - 1; i++) {
            temp = temp.next;
          }
          let removedNode = null;
          this.tail = temp;
          removedNode = temp.next;
          temp.next = null;
          this.length--;
          return removedNode;
        }
      } else {
        throw new Error("Can't pop list is empty");
      }
    } catch (err) {
      console.log(err.message);
    }
  }
  shift() {
    let temp = null;
    try {
      if (!this.isEmpty()) {
        temp = this.head;
        this.head = this.head.next;
        this.length--;
        return temp;
      } else {
        throw new Error("Can't shift empty array");
      }
    } catch (err) {
      console.log(err.message);
    }
  }

  unShift(val) {
    let temp = null;
    let newNode = new Node(val);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
    } else {
      temp = this.head;
      this.head = newNode;
      this.head.next = temp;
      this.length++;
    }
  }
  get(pos) {
    let temp = this.head;
    if (pos > this.length || pos < 1) {
      return;
    }
    if (this.length == 1) {
      return this.head;
    } else {
      for (let i = 0; i < pos - 1; i++) {
        temp = temp.next;
      }
    }
    return temp;
  }
}

let list = new SinglyLinkedList();
list.push("samad");
list.push("rafay");
list.push("minhaj");
list.push("wahaj");

console.log(list.get(4));
