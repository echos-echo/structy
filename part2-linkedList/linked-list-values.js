// Write a function, linkedListValues, that takes in the head of a linked list as an argument.
// The function should return an array containing all values of the nodes in the linked list.

// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

const linkedListValues = (head) => {
    let current = head;
    const nodeArray = [];
    while (current !== null) {
      // add node value to nodeArray
      nodeArray.push(current.val);
      current = current.next;    
    }
    return nodeArray;
};
  
module.exports = {
    linkedListValues,
};