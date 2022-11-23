// Write a function, sumList, that takes in the head of a linked list containing numbers as an argument.
// The function should return the total sum of all values in the linked list.

// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

const sumList = (head) => {
    if (head === null) return 0;
    return (sumList(head.next) + head.val);
};
  
module.exports = {
    sumList,
};