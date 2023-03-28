// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const breadthFirstValues = (root) => {
    // breadth first search should utilize a queue!
    if (!root) return [];
    const queue = [root];
    const values = [];
    let currentNode;
    while(queue.length > 0) {
      currentNode = queue.shift();
      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
      values.push(currentNode.val);
    }
    return values;
  };
  
  module.exports = {
    breadthFirstValues,
  };
  
  