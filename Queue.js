class Queue {
  constructor() {
    this.list = [];
    this.front = 0; // the place you are dequeing/add from
    this.rear = 0; // the place where u enque/remove from
  }

  enqueue(val) {
    this.list[this.front] = val;
    this.front++;
  }
  dequeue() {
    let list = [];
    let removedItem = this.list[this.rear];
    for (let i = 0; i < this.front - 1; i++) {
      list[i] = this.list[i + 1];
    }
    this.list = list;
    this.front--;
    return removedItem;
  }
  display() {
    for (let i = 0; i < this.front; i++) {
      console.log(this.list[i]);
    }
  }
}
let list = new Queue();
list.enqueue(20);
list.enqueue(40);
list.enqueue(0);
list.dequeue();
list.dequeue();
list.display();
