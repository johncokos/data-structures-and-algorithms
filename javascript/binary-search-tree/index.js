const Node = require('./node/');

class BinarySearchTree {

  constructor() {
    this.root = null;
  }

  insert(value) {

    const node = this.root;
    if ( node === null ) {
      this.root = new Node(value);
      return;
    }

    let _insert = (node) => {

      // Left is less  (< value)  ()< value  ()< value  ()< value
      if ( value < node.value ) {
        // If no left node, create a new node for it, with the current value
        if ( node.left === null ) {
          node.left = new Node(value);
          return;
        }
        // Otherwise,
        else if ( node.left !== null ) {
          return _insert(node.left);
        }
      }
      // Right is might (> value)
      else if ( value >= node.value ) {
        // If no right node, create a new node for it, with the current value
        if ( node.right === null ) {
          node.right = new Node(value);
          return;
        }
        // Otherwise,
        else if ( node.right !== null ) {
          return _insert(node.right);
        }
      }
      else {
        return null;
      }
    };

    _insert(node);

  }

  remove(data) {

    const removeNode = function(node, data) {
      if (node == null) {
        return null;
      }
      if (data == node.data) {
        // node has no children
        if (node.left == null && node.right == null) {
          return null;
        }
        // node has no left child
        if (node.left == null) {
          return node.right;
        }
        // node has no right child
        if (node.right == null) {
          return node.left;
        }
        // node has two children
        var tempNode = node.right;
        while (tempNode.left !== null) {
          tempNode = tempNode.left;
        }
        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data);
        return node;
      } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else {
        node.right = removeNode(node.right, data);
        return node;
      }
    };
    this.root = removeNode(this.root, data);
  }

  min() {
    let current = this.root;
    while(current.left !== null ) {
      current = current.left;
    }
    return current.value;
  }

  max() {
    let current = this.root;
    while(current.right !== null ) {
      current = current.right;
    }
    return current.value;
  }

  isBalanced() {
    return ( this.minHeight() >= (this.maxHeight() - 1) );
  }

  minHeight(node=this.root) {

    if ( node === null ) { return -1; }

    let left = this.minHeight(node.left);
    let right = this.minHeight(node.right);

    if (left < right) { return left + 1; }
    else { return right + 1; }

  }

  maxHeight(node=this.root) {

    if ( node === null ) { return -1; }

    let left = this.maxHeight(node.left);
    let right = this.maxHeight(node.right);

    if (left > right) { return left + 1; }
    else { return right + 1; }

  }

  // Depth First Search
  preOrder( node=this.root, results=[]) {

    results.push(node.value);

    if(node.left) this.preOrder(node.left, results);

    if(node.right) this.preOrder(node.right, results);

    return results;

  }

  inOrder(node=this.root, results=[]) {

    if(node.left) this.inOrder(node.left, results);

    results.push(node.value);

    if(node.right) this.inOrder(node.right, results);

    return results;

  }

  postOrder(node=this.root, results=[]) {

    if(node.left) this.postOrder(node.left, results);

    if(node.right) this.postOrder(node.right, results);

    results.push(node.value);

    return results;
  }

  // Breadth First Search
  levelOrder() {
    let results = [];
    let nodeQueue = [];

    nodeQueue.push(this.root);

    while(nodeQueue.length) {
      let current = nodeQueue.shift();
      results.push(current.value);
      if (current.left) nodeQueue.push(current.left);
      if (current.right) nodeQueue.push(current.right);
    }

    return results;
  }

  fetch(value) {

    let current = this.root;

    while( current.value !== value ) {
      if ( value < current.value ) {
        current = current.left;
      }
      else {
        current = current.right;
      }
      if ( current === null ) { return null; }
    }

    return current;
  }

  exists(value) {

    let current = this.root;

    while( current ) {
      if ( current.value === value ) { return true; }
      if ( value < current.value ) { current = current.left; }
      else { current = current.right; }
    }

    return false;
  }

  sum(node=this.root) {
    if (!node) { return 0; }
  }

  closest(value) {

    let node = this.root;
    let minDistance = 32768;
    let closestNode = null;

    while(node != null) {

      let distance = Math.abs( node.value - value );

      if(distance < minDistance) {
        minDistance = distance;
        closestNode = node;
      }

      if(distance == 0) { break; }

      if(node.value > value) {
        node = node.left;
      }

      else if(node.value < value) {
        node = node.right;
      }

    }

    return closestNode;

  }

  // Recreate a tree from an in-order traversal
  reconstruct(list) {
    list.sort( (a,b) => a>b ); // List should be sorted already if it came from an in-order traversal, but just in case...

    this.root = _reconstructTree(list, 0, list.length);

    function _reconstructTree( arr, start, end ) {
      if (end - start >= 1) {
        let mid = Math.floor(start + ((end - start) / 2));
        let root = new Node( arr[mid] );
        root.left = _reconstructTree(arr, start, mid);
        root.right = _reconstructTree(arr, mid+1, end);
        return root;
      }

    }

  }

}

module.exports = BinarySearchTree;
