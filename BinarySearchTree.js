class Node {
  constructor(val) {
    this.val = val;
    this.right = null;
    this.left = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    let newNode = new Node(val);
    let flag = true;
    if (this.root == null) {
      // if it's a first node make it a root
      this.root = newNode;
    } else {
      let node = this.root;
      while (flag) {
        if (node.val === newNode.val) {
          return undefined;
        } else if (newNode.val > node.val) {
          if (node.right == null) {
            node.right = newNode;
            flag = false;
          } else {
            node = node.right;
          }
        } else if (newNode.val < node.val) {
          if (node.left == null) {
            node.left = newNode;
            flag = false;
          } else {
            node = node.left;
          }
        }
      }
    }
    return this;
  }
  find(val) {
    let current = this.root;
    if (current === null) {
      return undefined;
    } else {
      if (current.val === val) {
        return val;
      }
      while (true) {
        if (val > current.val) {
          if (current.right === null) {
            return undefined;
          } else if (current.right.val === val) {
            return val;
          }
          current = current.right;
        } else if (val < current.val) {
          if (current.left === null) {
            return undefined;
          } else if (current.left.val === val) {
            return val;
          }
          current = current.left;
        }
      }
    }
  }
}

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(20);
tree.insert(5);
tree.insert(40);
console.log(tree.find(100));
