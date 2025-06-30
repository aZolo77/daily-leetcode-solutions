/*
- Definition for singly-linked list.
function ListNode(val, next) {
	this.val = (val===undefined ? 0 : val)
	this.next = (next===undefined ? null : next)
}
*/

/*
	@param {ListNode} l1
	@param {ListNode} l2
	@return {ListNode}
*/
const addTwoNumbers = function (l1, l2) {
  const resultedList = new ListNode(0);
  let current = resultedList;

  let list1 = l1;
  let list2 = l2;
  let carry = 0;

  while (list1 || list2 || carry > 0) {
    let sum = 0;

    if (list1) {
      sum += list1.val;
    }

    if (list2) {
      sum += list2.val;
    }

    const newNode = new ListNode((sum + carry) % 10);
    carry = Math.floor((carry + sum) / 10);

    current.next = newNode;
    current = current.next;

    list1 = list1 ? list1.next : null;
    list2 = list2 ? list2.next : null;
  }

  return resultedList.next;
};
