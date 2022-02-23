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
}

let node = new DoublyLinkedList();
node.push(10);
node.push(29);
node.push(30);

node.listNode();
