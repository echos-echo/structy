// Write a function, zipperLists, that takes in the head of two linked lists as arguments.
// The function should zipper the two lists together into single linked list by alternating nodes.
// If one of the linked lists is longer than the other, the resulting list should terminate with
// the remaining nodes. The function should return the head of the zippered linked list.

// Do this in-place, by mutating the original Nodes.

// You may assume that both input lists are non-empty.

// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

const zipperLists = (head1, head2) => {
    if (head1.next === null) {
        head1.next = head2;
        return head1;
    } else if (head2.next === null) {
        head2.next = head1.next;
        head1.next = head2;
        return head1;
    } else {
        let newHead1 = head1.next;
        let newHead2 = head2.next;
        head1.next = head2;
        head2.next = zipperLists(newHead1, newHead2);
        return head1;
    }
    
    // timed: ~45 minutes
};
  
module.exports = {
    zipperLists,
};