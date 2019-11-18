/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    const map = {};
    for (let i = 0; i < numbers.length; i++) {
        const n = numbers[i];
        const complement = target - n;
        if (typeof map[complement] !== 'undefined') {
            return [map[complement], i + 1];
        }

        map[n] = i + 1;
    }
};