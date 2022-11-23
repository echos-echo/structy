// Write a function, linkedListFind, that takes in the head of a linked list and a target value.
// The function should return a boolean indicating whether or not the linked list contains the target.

// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

const linkedListFind = (head, target) => {
    if (head === null) {
      return false;
    }
    return head.val === target ? true : linkedListFind(head.next, target);
};
  
module.exports = {
    linkedListFind,
};