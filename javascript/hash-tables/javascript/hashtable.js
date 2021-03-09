'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  APPEND(value) {
    const node = new Node(value);
    if(!this.head) {
      this.head = node;
      return;
    }
    let current = this.head;
    while(current.next) {
      current = current.next;
    }
    current.next = node;
  }
  values() {
    let values = [];
    let current = this.head;
    while(current) { values.push(current.value); current = current.next; }
    return values;
  }
}

class Hashtable {

  constructor(size) {
    this.size = size;
    this.map = new Array(size);// .fill();
  }

  hash(key) {

    return key.split('').reduce( (p,n) => {
      return p + n.charCodeAt(0);
    }, 0) * 599 % this.size;
  }

  Set(key,value) {

    let hash = this.hash(key);

    if ( !this.map[hash] ) {
      this.map[hash] = new LinkedList();
    }

    let entry = {[key]: value};

    this.map[hash].APPEND(entry);

  }

}


let ht = new Hashtable(1024);
ht.Set('John','Husband');
ht.Set('Cathy','Boss');
ht.Set('Amanda','The Real Boss');
ht.Set('Allie','Kid');
ht.Set('Zach','Kid');
ht.Set('Rosie','Dog');
ht.Set('Justin','Student');
ht.Set('Demi','Dog');
ht.Set('Ovi','Student');
ht.Set('Ben','Student');
ht.Set('Khalil','Student');
ht.Set('Michael','Student');
ht.Set('Timea','Student');
ht.Set('Jason','Student');

ht.map.forEach( (data,i) => {
  console.log(i, data && data.values());
});

