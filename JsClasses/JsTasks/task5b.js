/*
    -- VALID ANAGRAM TASK:
        Problem: Given two strings s and t, create a function that returns true, if the two strings are anagrams of each other, 
            otherwise return false.

        An anagram is a string that contains the exact same characters as another string, also the same number of characters 
        but the order of the characters can be different.

        rat and tar are anagrams of each other.
        tar and raat are not anagram.

        Example 1:
            Input: s = "racecar", t = "carrace"
            Output: true.
        
        Example 2:
            Input: s = "jar", t = "jam"
            Output: false.
*/


function anagramCheck (s, t) {

    let sJoin = s.split("").sort().join("");
    let tJoin = t.split("").sort().join("");

    if (sJoin === tJoin && sJoin.length === tJoin.length) {
        return true;
    } else return false;
}

console.log(anagramCheck("triangle", "integral"));
console.log(anagramCheck("jar", "jam"));