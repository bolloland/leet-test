/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
 let node1 = l1; // ez pointers
  let node2 = l2;

  let l1val = 0; // node data storage as variables
  let l2val = 0;

  let carryNum = 0;
  let head = new ListNode(0); // this our dummy head

  let cur = head; // this is our head pointer

  while (node1 || node2) {
    // start of loop
    if (node1) {
      l1val = node1.val;
    } else {
      l1val = 0;
    }
    if (node2) {
      l2val = node2.val;
    } else {
      l2val = 0;
    }
    // we need to handle the carry here in the loop
    // so if the sum of the values is larger than a single digit
    // add it to the next pointer and set our head to move up a bit.
    // else we can just add the nodes and move our pointer
    if (l1val + l2val + carryNum > 9) {
      cur.next = new ListNode(l1val + l2val + carryNum - 10); // i like this better than modulo
      cur = cur.next; // ezpz move our pointer
      carryNum = 1; // here is our carry if there is one
    } else {
      // we can just add the shit
      cur.next = new ListNode(l1val + l2val + carryNum);
      cur = cur.next; // increment our pointer and reset the carry
      carryNum = 0;
    }
    // if one list is longer
    if (node1) {
      node1 = node1.next;
    }

    if (node2) {
      node2 = node2.next;
    }
  }
  // add a node if there is carry just in case
  if (carryNum) {
    cur.next = new ListNode(carryNum);
  }

  return head.next;
 }; 
    
    