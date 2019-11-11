/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const mergeTwoLists = function(l1, l2) {
  let mergedList = new ListNode();

  while(l1.size !== 0 || l2.size !== 0) {
    let l1Value = l1.get_item();
    let l2Value = l2.get_item();
    if (l1Value === l2Value){
      mergedList.append(l1.delete());
      mergedList.append(l2.delete());
    } else if (l1Value > l2Value) {
      mergedList.append(l1.delete())
    } else {
      mergedList.append(l2.delete())
    }
  }
  return mergedList;
};


class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class ListNode {
  constructor() {
    this.head = new Node();
    this.size = 0;
  }

  get_item = () => {
    if (this.size === 0) return;
    return this.head.value;
  };

  append = (value) => {
    const newHead = new Node(value);
    newHead.next = this.head;
    this.head = newHead;
    this.size += 1;
  };

  delete = () => {
    if (this.size === 0) {
      return null;
    }

    if (this.size === 1) {
      const deleted = this.head.value;
      this.head = null;
      this.size = 0;
      return deleted;
    }

    const deleted = this.head.value;
    this.head = this.head.next;
    this.size -= 1;
    return deleted;
  }
}


const l1 = new ListNode();
const l2 = new ListNode();

l1.append(1);
l1.append(2);
l1.append(4);

l2.append(1);
l2.append(3);
l2.append(4);

const merged = mergeTwoLists(l1, l2);
console.log(merged);
