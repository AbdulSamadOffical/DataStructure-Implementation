// Stack is last in first out
class Stack {
  constructor() {
    this.top = 0;
    this.list = [];
  }

  // O(1)
  push(val) {
    this.list[this.top] = val;
    this.top++;
  }
  get() {
    for (let i = 0; i < this.list.length; i++) {
      console.log(this.list[i]);
    }
  }
  //O(n)
  pop() {
    let list = [];
    let removedItem = this.list[this.top - 1];
    for (let i = 0; i < this.top - 1; i++) {
      list[i] = this.list[i];
    }
    this.list = list;
    this.top--;
    return removedItem;
  }
}

let stack = new Stack();

stack.pop();

// stack.get().forEach((val) => {
//   console.log(val);
// });
