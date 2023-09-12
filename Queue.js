class Queue {
  constructor() {
    this.list = [];
    this.front = 0; // the place you are dequeing or remove item from 
    this.rear = 0; // the place where u enque or add into the queue
  }

  enqueue(val) {
    this.list[this.rear] = val;
    this.rear++;
  }
  dequeue() {
    let list = [];
    let removedItem = this.list[this.front];
    this.rear--;
    for(let i = 0;i<this.rear;i++){
       list[i] = this.list[i+1]
    }
    this.list = list;
  }

  display() {
    for (let i = 0; i < this.rear; i++) {
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
