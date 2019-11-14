function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    const head = new ListNode(0);
    let current = head;
    let p = l1;
    let q = l2;
    let carry = 0;

    while (p !== null || q !== null) {
        const x = (p.val !== null && typeof p.val !== 'undefined') ? p.val : 0;
        const y = (q.val !== null && typeof q.val !== 'undefined') ? q.val : 0;
        const sum = x + y + carry;
        carry = Math.floor(sum / 10);
        current.next = new ListNode(sum % 10);
        current = current.next;
        if (p !== null) {
            p = p.next
        }

        if (q !== null) {
            q = q.next;
        }
    }

    if (carry > 0) {
        current.next = new ListNode(carry);
    }

    return head.next;
};