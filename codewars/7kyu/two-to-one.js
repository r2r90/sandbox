/*
 ❔Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

    Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
*/

// ✔ Solution

function longest(s1, s2) {
    const set1 = new Set(s1.split(''))
    const set2 = new Set(s2.split(''))

    let combined = [...set1, ...set2]

    const combinedSet = new Set(combined.sort())

    const combinedArr = [...combinedSet]

    return combinedArr.join('')


}

longest("xyaabbbccccdefww", "xxxxyyyyabklmopq")