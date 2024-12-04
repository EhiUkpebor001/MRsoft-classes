/*
    --  Two Integer Sum II
            Given an array of integers numbers that is sorted in non-decreasing order.

            Return the indices (1-indexed) of two numbers, [index1, index2], such that they add up to a given target number, target and index1 < index2.
            Note that index1 and index2 cannot be equal, therefore you may not use the same element twice.
            There will always be exactly one valid solution.

            Example 1:
            Input: numbers = [1, 2, 3, 4], target = 3
            Output: [1, 2]
            Explanation: The sum of 1 and 2 is 3. Since we assuming a 1-indexed array, index1 = 1, index2 = 2. We return [1, 2].
*/

// TWO POINTERS APPROACH
twoSumPt2 = function (numbers, target) {
    let index1 = 0;
    let index2 = numbers.length - 1;
    let sum;

    while (index1 < index2) {
        sum = numbers[index1] + numbers[index2];

        if (sum > target) {
            index2 --;
        } else if (sum < target) {
            index1 ++;
        } else {
            return [index1 + 1, index2 + 1];
        };
    };
    return [];
};

console.log("Two Pointers Approach = ", twoSumPt2([1, 2, 3, 4], 4));



// BRUTE FORCE APPROACH
bruteTwoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (numbers [i] + numbers [j] === target) {
                return [i + 1, j + 1];
            };
        };
    };
    return [];
};

console.log("\nBrute Force Approach = ", twoSumPt2([1, 2, 3, 4], 4));