/*
        --- Top K Frequent Elements
                Given an integer array nums and an integer k, return the k most frequent elements within the array.
                The test cases are generated such that the answer is always unique.
                You may return the output in any order.

                Example 1:
                Input: nums = [1, 2, 2, 3, 3, 3], k = 2
                Output: [2,3]

                Example 2:
                Input: nums = [7, 7], k = 1
                Output: [7]
*/

function topKFrequent (nums, k) {
    const frequencyMap = new Map();

    // Step 1: Count the frequency of each number
    for (const num of nums) {
        frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
    }

    // Step 2: Create a bucket to group numbers by frequency
    const buckets = Array (nums.length + 1).fill().map(() => []);
    for (const [num, freq] of frequencyMap) {
        buckets[freq].push(num);
    }

    // Step 3: Gather the k most frequent elements
    const result = [];
    for (let i = buckets.length - 1; i >= 0 && result.length < k; i--) {
        result.push(...buckets[i]);
    }
    return result.slice(0, k);      // Ensure only 'k' elements are returned
}

let nums = [1, 2, 2, 3, 3, 3], k = 2;
console.log(topKFrequent(nums, k));

let nums2 = [7, 7], k2 = 1;
console.log(topKFrequent(nums2, k2));