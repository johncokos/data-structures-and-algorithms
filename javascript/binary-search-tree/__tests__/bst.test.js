'use strict';

const BinarySearchTree = require('../index.js');

describe('Binary Search Tree', () => {

  let tree = null;

  beforeAll(() => {
    tree = new BinarySearchTree();
    let values = [9,4,17,3,6,22,5,7,20];
    values.map( val => tree.insert(val) );
  });

  it('fetch() returns a null node for missing values', () => {
    let vals = [10,50];
    vals.forEach( val => {
      let node = tree.fetch(val);
      expect(node).toBeNull();
    });
  });

  it('fetch() finds existing values', () => {
    let vals = [17,22];
    vals.forEach( val => {
      let node = tree.fetch(val);
      expect(node.value).toEqual(val);
    });
  });


});


// ------------------------------------------- //
// Tests needed :O
// ------------------------------------------- //
//
// console.log(tree.preOrder());
// console.log(tree.postOrder());
// console.log(tree.inOrder());


// console.log("Fetch 10", tree.fetch(10));
// console.log("Closest to 6", tree.closest(6))
// console.log("Closest to 21", tree.closest(21))
// console.log("Closest to 15", tree.closest(15))
// console.log("Min Height", tree.minHeight());
// console.log("Max Height", tree.maxHeight());
// console.log("Balanced", tree.isBalanced());
// console.log("Min", tree.min());
// console.log("Max", tree.max());
// console.log("Level Order", tree.levelOrder());
// console.log("Pre Order", tree.preOrder());
// console.log("In Order", tree.inOrder());
// console.log("Post Order", tree.postOrder());
// console.log("Exists", tree.exists(10));