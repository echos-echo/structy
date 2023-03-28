// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const depthFirstValues = (root) => {
    // depth first traversal should utilize a stack!
    if (!root) return [];
    const queue = [root];
    const values = [];
    let currentNode;
    while(queue.length > 0) {
      currentNode = queue.pop();
      if (currentNode?.right) queue.push(currentNode.right);
      if (currentNode?.left) queue.push(currentNode.left);
      values.push(currentNode.val);
    }
    return values;
  };
  
  module.exports = {
    depthFirstValues,
  };
  
  