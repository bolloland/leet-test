/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    let current = head
    //while current and next exist...
    while (current && current.next) {
        // if the values of one and the next are the same
        if (current.val === current.next.val) {
            // skip the first duplicate, and make the "next", the next one in order
            current.next = current.next.next
        } else {
            //if not the same, go to the next one in order and test that
            current = current.next
        }
    }
  return head         
};