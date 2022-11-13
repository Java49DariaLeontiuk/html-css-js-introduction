// let ar = [];
// ar[10000] = 100;
// ar[1] = [1,2,3];
// console.log("array length = ",ar.length);
// ar[0] = "Hello";
// console.log("10000-th element = ", ar[10000]);
// console.log("0-th element = ",ar[0]);
// console.log("1-th element = ",ar[1]);
// let str = "Hello!";
// let arStr = Array.from(str);
// console.log("Srting 'Hello' -> array is ", arStr);
// // for (let i = 0; i < arStr.length; i++){
// //     console.log("element at index ", i, arStr[i]);
// // }
// function println(element, index, array){
//     console.log("element at index ", index, element);
// }
// arStr.forEach(println);
// let arCodeAscii = arStr.map(function(symbol, index){

//     return index%2 == 0 ? symbol.charCodeAt() : symbol;
// })
// console.log(arStr, arCodeAscii);
// let sumAscii = arStr.reduce(function(res, cur){
//     return res + cur.charCodeAt();
// }, 0)
// console.log("sum of Ascii ", sumAscii);
// console.log(arStr.reduce(function(res, cur){
//     return res + cur;
// }, ""));

// function checkTeudatZehut(teudatStrNumber){
//     let stringTZ = "" + teudatStrNumber;
//     let arTZ = Array.from(stringTZ);
//     let res = 0;
//     for(let i = 0; i<arTZ.length; i++){
//         if (i%2 != 0){
//             let sum = 0;
//             sum = +arTZ[i] * 2; 
//             if(sum > 9){
//                 sum = (sum%10) + (Math.trunc(sum/10));
//             }
//             res += sum;
//         }
//         else res += +arTZ[i];
//     }
//     if (res%10 != 0){
//         return false;
//     }
//     return true;
// }
// console.log(checkTeudatZehut('848152054'));

// function generateRandomTeudatZehut(){
//     let randomNumber = 0;
//     let randomTeudatZehut = "";
//     for(let x = 8; x > 0; x--){
//         randomNumber = Math.round(Math.random()*9);
//         randomTeudatZehut = randomTeudatZehut + randomNumber;  
//     }
//     let arTZ = Array.from(randomTeudatZehut);
//     let res = 0;
//     for(let i = 0; i<arTZ.length; i++){
//         if (i%2 != 0){
//             let sum = 0;
//             sum = +arTZ[i] * 2; 
//             if(sum > 9){
//                 sum = (sum%10) + (Math.trunc(sum/10));
//             }
//             res += sum;
//         }
//         else res += +arTZ[i];
//     }
//     if (res%10 != 0){
//         let num = (10 - (res%10));
//         return randomTeudatZehut + num;
//     }
//     return randomTeudatZehut + '0';
// }
// console.log(generateRandomTeudatZehut());
function getNumberOddIndex(element){
    let res = element*2;
    if (res > 9){
        res -= 9;
    }
    return res;
}
function getCurrentNumber(element, index){
    return index%2 == 0 ? +element: getNumberOddIndex(element);

}
function getArrayForSum(teudatStrNumber){
    let array = Array.from(teudatStrNumber);
    // let res = [];
    // for(let i = 0; i<array.length;i++){
    //     res[i] = getCurrentNumber(array[i], i);
    // }
    // return res;
    return array.map(getCurrentNumber);
}
function getSum(array){
    // let res = 0;
    // for (let i = 0; i < array.lentgh; i++){
    //     res += array[i];
    // }
    return array.reduce(function(res, cur){
        return res + cur;
    },0);
}
function checkTeudatZehut(teudatStrNumber){
    let res = false;
    if(teudatStrNumber.lenght == 9 && !isNaN(teudatStrNumber)){ 
        let arrayForSum = getArrayForSum(teudatStrNumber);
        let sum = getSum(arrayForSum);
        res = sum % 10 == 0;
    }
    return res;
}

function generateRandomTeudatZehut(){

}
//console.log(checkTeudatZehut("123456782"));
["123456782", '1234', 'abcd123', '123456783']
.forEach(function(e){
    console.log(`teudat zehut: ${e}, return of the method checkTeudatZehut: ${checkTeudatZehut(e)}`)
});

/**
 * function minMax
 * Takes array of numbers 
Returns array containing two numbers: first is minimal value , second is maximal value form input array 
Example: minMax([1, 2, 3, 4, 5]) returns array [1, 5] 
Implementation Requirements 
Apply the reduce pattern for getting result array by one “reduce” method  
 */
function minMax(numbers) {
    return numbers.reduce((res, cur) => {
        if (res[0] > cur) {
            res[0] = cur;
        } else if (res[1] < cur) {
            res[1] = cur;
        }
        return res;
    }, [numbers[0], numbers[0]]);
}
/**
 * test for minMax function
 */
console.log("*****************************")
console.log("test for minMax function");
[[1, 2, 3, 5, 100], [2, -10, 3, 1], [100, 38,7], [10000]]
.forEach(a => console.log(`inpute array: ${a}, min-max array is: ${minMax(a)}`))
console.log("*****************************")
/********************************************************************************** */

/**
 * function deleteWithPrefix(strings, prefix)
 * Takes array of strings and a prefix value 
Returns array containing the strings from the input array without strings
 starting with a given prefix 
Example: deleteWithPrefix([“abc”, “old_abc”, “lmn”, “123”, “old_lmn”], “old_”)
 returns array [“abc”, “lmn”, “123”] 
 */
 function deleteWithPrefix(strings, prefix) {
    return strings.filter(str => !str.startsWith(prefix))
 }
 /**
  * test
  */
  console.log("*****************************")
  console.log("test for deleteWithPrefix function");
 let prefixes = ["old_", "new_"];
 [["abc", "old_abc", "abc_old"], ["abc", "new_abc", "abc_new"]].forEach(
    (a, i) => console.log(`input array: [${a}]; prefix: ${prefixes[i]}; after deletion: [${deleteWithPrefix(a, prefixes[i])}]`)
 )
 console.log("*****************************");
 /**
  * function  getSortedEvenOdd(numbers)
  * takes array of numbers 
  * no source array is updated
  * returns arrasorted by following
  * first numbers are even ones in the ascending order
  * last numbers are odd ones in the descending order
  */
  function  getSortedEvenOdd(numbers) {
    const result = numbers.slice();
    return result.sort((a, b) => {
        let res = 1;
        if (a % 2 == 0 && b % 2 != 0) {
            res = -1;
        } else if (a % 2 == 0 && b % 2 == 0) {
            res = a - b;
        } else if (a % 2 == 1 && b % 2 == 1) {
            res = b - a;
        }
        return res;
    })
  }
  /**
   * test function getSortedEvenOdd
   */
  console.log("************************************");
  console.log("test for getSortedEvenOdd");
  [[1, 2, 3, 4, 5, 6], [123, 9, 26, 48, 35, 4]]. forEach(a => console
    .log(`after sorting [${getSortedEvenOdd(a)}]; before sorting [${a}]`))


