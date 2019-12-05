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
  var mergedList = [];
  while (l1) {
    mergedList.push(l1.value)
    l1 = l1.next;
  }

  while (l2) {
    mergedList.push(l2.value)
    l2 = l2.next;
  }

  mergedList = mergedList.sort()
  var mergedLinkedList = new ListNode(mergedList[0]);

  for (let index = 1; index < mergedList.length; index++) {
    const element = mergedList[index];
    mergedLinkedList.next = new ListNode(element)
    let next = mergedLinkedList.next;
    mergedLinkedList = next;
  }
  return mergedLinkedList;
};


class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// class ListNode {
//   constructor() {
//     this.head = new Node();
//     this.size = 0;
//   }

//   get_item = () => {
//     if (this.size === 0) return;
//     return this.head.value;
//   };

//   append = (value) => {
//     const newHead = new Node(value);
//     newHead.next = this.head;
//     this.head = newHead;
//     this.size += 1;
//   };

//   delete = () => {
//     if (this.size === 0) {
//       return null;
//     }

//     if (this.size === 1) {
//       const deleted = this.head.value;
//       this.head = null;
//       this.size = 0;
//       return deleted;
//     }

//     const deleted = this.head.value;
//     this.head = this.head.next;
//     this.size -= 1;
//     return deleted;
//   }
// }


const l1 = new ListNode(1);
const l2 = new ListNode(1);

l1.next = new ListNode(2);
l1.next.next = new ListNode(4);


l2.next = new ListNode(3);
l2.next.next = new ListNode(4);

const merged = mergeTwoLists(l1, l2);
console.log(merged);
