'use strict';

class StackShiftUnshift {

  constructor() {
    this.storage = new Array();
  }

  push(item) {
    this.storage.unshift(item);
  }

  pop() {
    return this.storage.shift();
  }

  peek() {
    return !!this.storage.length;
  }
}

module.exports = StackShiftUnshift;

