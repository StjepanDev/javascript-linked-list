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
