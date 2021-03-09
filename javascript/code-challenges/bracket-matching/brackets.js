'use strict';

const Stack = require('../../stack');

module.exports = function validateBrackets(str) {
  const stack = new Stack();
  const openers = [
    '[', '{', '('
  ];

  const closers = {
    ']': '[',
    '}': '{',
    ')': '('
  };

  for (let i = 0; i <= str.length - 1; i++) {
    let bracket = str[i];
    if (openers.includes(bracket)) { stack.push(bracket); }
    else if (closers[bracket]) {
      if (stack.pop() !== closers[bracket]) { return false; }
    }
  }

  return stack.peek() ? false : true;

}
