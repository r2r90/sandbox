/*

You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1.

For example:

    Let's say you are given the array {1,2,3,4,3,2,1}:
Your function will return the index 3, because at the 3rd position of the array, the sum of left side of the index ({1,2,3}) and the sum of the right side of the index ({3,2,1}) both equal 6.

Let's look at another one.
You are given the array {1,100,50,-51,1,1}:
Your function will return the index 1, because at the 1st position of the array, the sum of left side of the index ({1}) and the sum of the right side of the index ({50,-51,1,1}) both equal 1.

Last one:
    You are given the array {20,10,-80,10,10,15,35}
At index 0 the left side is {}
The right side is {10,-80,10,10,15,35}
They both are equal to 0 when added. (Empty arrays are equal to 0 in this problem)
Index 0 is the place where the left side and right side are equal.

    Note: Please remember that in most programming/scripting languages the index of an array starts at 0.

Input:
    An integer array of length 0 < arr < 1000. The numbers in the array can be any integer positive or negative.

    Output:
The lowest index N where the side to the left of N is equal to the side to the right of N. If you do not find an index that fits these rules, then you will return -1.

Note:
    If you are given an array with multiple answers, return the lowest correct index.*/
function findEvenIndex(arr) {
    //Code goes here!
    let left = 0;
    let right
    for (let i = 0; i < arr.length; i++) {
        right = 0
        left += arr[i - 1]
        for (let j = i + 1; j <= arr.length; j++) {
            if (i === 0) left = 0
            right += arr[j]
            if (left === right) return i
        }
    }
    return -1
}

console.log(findEvenIndex([-3081,-8167,-1762,-6579,-3773,1016,6278,-5690,9426,-4667,2758,-9195,-5903,-9602,5002,4593,-3571,7890,5720,-6497,9673,5548,-1650,6280,5351,2788,1479,8400,-4,7643,-9822,-7758,-1146,-8674,2071,-4507,4757,7405,-745,9666,4915,3958,-8035,-156,-6324,-7772,9413,4674,6001,-5846,-4447,-3211,2765,1454,3681,-8366,7562,-662,-5402,-4300,2081,-6732,-9810,3104,5004,2918,5441,-6175,-7483,5952,-2439,799,-4788,-6625,9887,2670,-1959,574,7980,-2696,-8782,-5317,5550,-9512,5630,5576,149,3910,-2058,-528,9275,-3420,-6413,5121,-5041,-1194,-3355,655,925,7754,1873,-1122,-7799,397,-5456,7338,6789,9056,6743,736]))


/*
*
*   [1,2,3,4,3,2,1]
*    - 2 3,4,3,2,1 arr[0] => arr[0 + 1] + a[0 + 2] + arr[0 + 3] + a[0 + 4] + arr[0 + 5] + a[0 + 6]
*    1 - 3,4,3,2,1
*    1,2 - 4,3,2,1
*    1,2,3 - 3,2,1
*
* */