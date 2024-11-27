/*
    Group Anagrams
        Given an array of strings strs, group all anagrams together into sublists. You may return the output in any order.
        Create a function "groupAnagrams" that returns an array of anagrams.

        An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

        Example 1:
        Input: strs = ["act", "pots", "tops", "cat", "stop", "hat"]
        Output: [["hat"], ["act", "cat"], ["stop", "pots", "tops"]]

        Example 2:
        Input: strs = ["x"]
        Output: [["x"]]

        Example 3:
        Input: strs = [""]
        Output: [[""]]
*/

function groupAnagrams (strs) {
    const group = {};       // Object to store grouped anagrams
    for (let s of strs) {
        const key = s.split("").sort().join("");        // Sort the word to create a key
        group[key] = group[key] || [];      // we use the square bracket notation to create a key (propertyName) for the array of elements that are the same (the values - propertyValue)
        group[key].push(s);
    }

    console.log(group, "\n");
    console.log(Object.keys(group), "\n");
    return Object.values(group);
}

console.log(groupAnagrams(["act", "pots", "tops", "cat", "stop", "hat"]), "\n\n");
console.log(groupAnagrams(["x"]), "\n\n");
console.log(groupAnagrams([""]));


// CHECK SEPLAT NOTE FOR EXPLANATION  (personal reminder).