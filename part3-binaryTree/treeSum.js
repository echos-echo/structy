// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const treeSum = (root) => {
    // any mode of traversal is fine, as long as we reach all nodes
    if (!root) return 0;
    let sum = 0;
    const queue = [root];
    let currentNode;
    while(queue.length > 0) {
      currentNode = queue.shift();
      sum += currentNode.val;
      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }
    return sum;
  };
  
  module.exports = {
    treeSum,
  };
  
  