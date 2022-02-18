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
}

let list = new SinglyLinkedList();
list.push("samad");
list.push("Navid");
list.push("rafay");

console.log(list.pop());
list.display();
