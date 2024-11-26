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


// SOLUTION 1
const anagramChecker = (s, t) => {
    let sArray = s.split("");
    let tArray = t.split("");
    
    let sSort = sArray.sort();
    let tSort = tArray.sort();

    let sJoin = sSort.join("");
    let tJoin = tSort.join("");

    if (sJoin === tJoin && sJoin.length === tJoin.length) {
        return true;
    } else {
        return false;
    }
}

console.log(anagramChecker("racecar", "carrace"));
console.log(anagramChecker("jar", "jam"), "\n");


// SOLUTION 2
const anagramChecker2 = (s, t) => {
    if (s.length === t.length) {    // if the strings are of different lengths automatically, it is not an anagram.
        return false;
    };

    let sArray = s.split("");
    let tArray = t.split("");
    
    let sSort = sArray.sort();
    let tSort = tArray.sort();

    let sJoin = sSort.join("");
    let tJoin = tSort.join("");

    if (sJoin === tJoin) {
        return true;
    }; 
}

console.log(anagramChecker2("triangle", "integral"));
console.log(anagramChecker2("tar", "raat"), "\n");


// SOLUTION 3
const anagramChecker3 = (s, t) => {
    if (s.length === t.length) {    // if the strings are of different lengths automatically, it is not an anagram.
        return false;
    };

    // let sArray = s.split("");
    // let tArray = t.split("");
    
    // let sSort = sArray.sort();
    // let tSort = tArray.sort();

    // let sJoin = sSort.join("");
    // let tJoin = tSort.join("");

    // The short form for lines 74 to 81
    let newS = s.split("").sort().join("");
    let newT = t.split("").sort().join("");

    if (newS === newT) {
        return true;
    }; 
}

console.log(anagramChecker3("brag", "grab"));
console.log(anagramChecker3("act", "cut"));