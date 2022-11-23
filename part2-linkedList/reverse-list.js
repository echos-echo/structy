// Write a function, reverseList, that takes in the head of a linked list as an argument.
// The function should reverse the order of the nodes in the linked list in-place and
// return the new head of the reversed linked list.

// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

const reverseList = (head) => {
    let currentNode = head;
    let headNode = head;
    // check if there is a next node
    while (currentNode.next !== null) {
        // remove the next node
        // when removing, set the next node to next.next
        let newHead = currentNode.next;
        currentNode.next = currentNode.next.next;
        // make sure that the newHead is connected to the current head
        newHead.next = headNode;
        // and then set the newHead as the actual headNode
        headNode = newHead;
    }
    return headNode;
};
  
module.exports = {
    reverseList,
};