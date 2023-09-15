// Test Case: 10, 7, 15, 17, 12, 20, 6, 32
/* If we implement the priority queue using binary heaps the complexity of that queue to add node is O(logn) and also to remove that is O(logn)
but if we implement the priority queue using the arrays it will be O(n) to add and remove the items  */
class BinaryHeaps{
 
  list = [];
  
  constructor(){}
   
  parentIndex(childIndex){
    return Math.floor((childIndex-1)/2);
  }
    
  bubbleUp(item){
     
  if(this.list.length == 0){
      this.list.push(item);
      return;
    } 
  
    this.list.push(item);
    let currentIndex = this.list.length-1;   
    while(currentIndex != 0){
      var pIndex = this.parentIndex(currentIndex);
      if(this.list[currentIndex] > this.list[pIndex]){
        var temp = 0;
        temp = this.list[pIndex];
        this.list[pIndex] = this.list[currentIndex];
        this.list[currentIndex] = temp;
       
    }
    currentIndex = pIndex;
    }  
  }
  minBubbleUp(item){
     
    if(this.list.length == 0){
        this.list.push(item);
        return;
      } 
    
      this.list.push(item);
      let currentIndex = this.list.length-1;   
      while(currentIndex != 0){
        var pIndex = this.parentIndex(currentIndex);
        if(this.list[currentIndex] < this.list[pIndex]){
          var temp = 0;
          temp = this.list[pIndex];
          this.list[pIndex] = this.list[currentIndex];
          this.list[currentIndex] = temp;
         
      }
      currentIndex = pIndex;
      }  
    }
  display(){
     for(let i = 0;i<this.list.length;i++){
        console.log(this.list[i]); 
      } 
  }

  
  extractMax(){

  }
}
   
  let binaryHeap = new BinaryHeaps();
  binaryHeap.minBubbleUp(10);
  binaryHeap.minBubbleUp(7);
  binaryHeap.minBubbleUp(15);
  binaryHeap.minBubbleUp(17);
  binaryHeap.minBubbleUp(12);
  binaryHeap.minBubbleUp(20);
  binaryHeap.minBubbleUp(6);
  binaryHeap.minBubbleUp(32);
  

  // binaryHeap.minBubbleUp(0);
  // binaryHeap.minBubbleUp(1);
  // binaryHeap.minBubbleUp(2);
  // binaryHeap.minBubbleUp(3);
  
  binaryHeap.display();
   
   