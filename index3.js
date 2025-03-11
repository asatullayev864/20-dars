function twoNumbers(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (nums[i] + nums[j] == target && i != j) {
                return [i, j];
            }
        }
    }
}

console.log(twoNumbers([2, 7, 11, 15], 9));
console.log(twoNumbers([3, 2, 4], 6));
console.log(twoNumbers([3, 3], 6));