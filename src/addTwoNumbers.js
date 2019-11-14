function retriveNodeVal(node) {
  if (node.next) {
    return `${node.val}${retriveNodeVal(node.next)}`;
  }

  return `${node.val}`;
}

function makeNode(nums) {
  const hasNext = nums.slice(1).length > 0;
  return {
    val: parseFloat(nums[0]),
    next: hasNext ? makeNode(nums.slice(1)) : null,
  }
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  const n1 = retriveNodeVal(l1);
  const n2 = retriveNodeVal(l2);
  const maxLen = Math.max(n1.length, n2.length);
  let carry = 0;
  let result = '';

  for (let i = 0; i < maxLen; i++) {
    const v1 = n1[i] ? parseInt(n1[i]) : 0;
    const v2 = n2[i] ? parseInt(n2[i]) : 0;

    let r = v1 + v2 + carry;

    if (r >= 10) {
      carry = 1;
      r = r % 10;
    } else {
      carry = 0;
    }
      
    if (i === maxLen - 1 && carry) {
      result = `${carry}${r}${result}`;
    } else {
      result = `${r}${result}`;
    }
  }

  const nums = result.split('').reverse();
  const node = makeNode(nums);

  return node;
};