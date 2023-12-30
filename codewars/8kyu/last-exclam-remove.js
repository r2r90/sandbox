/*
Description:
    Remove all exclamation marks from the end of sentence.

    Examples
"Hi!"     ---> "Hi"
"Hi!!!"   ---> "Hi"
"!Hi"     ---> "!Hi"
"!Hi!"    ---> "!Hi"
"Hi! Hi!" ---> "Hi! Hi"
"Hi"      ---> "Hi"
*/

function remove(string) {
  let strArr = string.split('')
    for (let i = strArr.length - 1; i >0 ; i--) {
        if (strArr[strArr.length - 1] !== '!') break
        strArr.pop()
    }

    return strArr.join('')
}


console.log(remove('Hi!!!'))