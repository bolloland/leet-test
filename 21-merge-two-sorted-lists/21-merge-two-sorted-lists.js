/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    console.log(list1, "list1")
    console.log(list2, "list2")

    
    let mainList = new ListNode(-Infinity)
    let head = mainList
    
    while (list1 && list2) {
        if(list1.val <= list2.val) {
            head.next = list1
            console.log(head.next, "list1 head.next")
            head = list1
            console.log(head, "head after list1")
            list1 = list1.next
            console.log(list1, "list1 next")
        } else {
            head.next = list2
            console.log(head.next, "list2 head.next")
            head = list2
            list2 = list2.next
            
        }
    }
    if (!list1) head.next = list2
    if (!list2) head.next = list1
    
    console.log(head, "head")
    console.log(mainList, "mainList")
    console.log(mainList.next, "mainList.next")
    return mainList.next
};