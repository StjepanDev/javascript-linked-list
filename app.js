class LinkedList {
  constructor() {
    this.head = null; //first element of the list
    this.tail = null; //last element of the list
  }

  append(value) {
    const newNode = { value, next: null };

    if (this.tail) {
      this.tail.next = newNode;
    }

    this.tail = newNode;

    if (!this.head) {
      this.head = newNode;
    }
  }

  prepend(value) {
    const newNode = { value, next: this.head };
    this.head = newNode;
    if (!this.tail) {
      this.tail = newNode;
    }
  }

  find(val) {
    if (!this.head) {
      return null;
    }

    let currNode = this.head;

    while (currNode) {
      if (currNode.value === val) {
        return currNode;
      }
      currNode = currNode.next;
    }

    return null;
  }

  insertAfter(val, afterValue) {
    const existingNode = this.find(afterValue);

    if (existingNode) {
      const newNode = { value: val, next: existingNode.next };
      existingNode.next = newNode;
    }
  }

  delete(val) {
    if (!this.head) {
      return;
    }

    while (this.head && this.head.value === val) {
      this.head = this.head.next;
    }

    let currNode = this.head;

    while (currNode.next) {
      if (currNode.next.value === val) {
        currNode.next = currNode.next.next;
      } else {
        currNode = currNode.next;
      }
    }

    if (this.tail.value === val) {
      this.tail = currNode;
    }
  }

  toArray() {
    const elements = [];

    let currNode = this.head;
    while (currNode) {
      elements.push(currNode);
      currNode = currNode.next;
    }
    return elements;
  }
}

const linkedList1 = new LinkedList();

linkedList1.append('zare');
linkedList1.append(23);
linkedList1.append(true);
linkedList1.append(true);
linkedList1.append('eewkkkk');

linkedList1.prepend('FirstNode');
console.log(linkedList1.toArray());

linkedList1.delete(true);
linkedList1.delete('FirstNode');

console.log(linkedList1.toArray());

console.log(linkedList1.find(23));
console.log(linkedList1.find('eewkkkk'));

linkedList1.insertAfter('ovo radi', 23);
linkedList1.insertAfter('dinamo', 'ovo radi');
linkedList1.insertAfter(0.145, 'dinamo');

console.log(linkedList1.toArray());
