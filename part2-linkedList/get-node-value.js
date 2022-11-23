// Write a function, getNodeValue, that takes in the head of a linked list and an index.
// The function should return the value of the linked list at the specified index.

// If there is no node at the given index, then return null.

// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

const getNodeValue = (head, index) => {
    let i = 0;
    let currNode = head;
    while (i <= index) {
        if (i === index) return currNode.val;
        if (currNode.next === null) return null;
        currNode = currNode.next;
        i++;
    }
};
  
module.exports = {
    getNodeValue,
};