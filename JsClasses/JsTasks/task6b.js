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

groupAnagrams = function (strs) {
    groupObj = {};
    for(s of strs) {
        let key = s.split("").sort().join("");
        groupObj[key] = groupObj[key] || [];
        groupObj[key].push(s);
    };

    return Object.values(groupObj);
}

console.log(groupAnagrams(["act", "pots", "tops", "cat", "stop", "hat"]));
console.log(groupAnagrams(["x"]));
console.log(groupAnagrams([""]));