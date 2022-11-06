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

function checkTeudatZehut(teudatStrNumber){
    let stringTZ = "" + teudatStrNumber;
    let arTZ = Array.from(stringTZ);
    let res = 0;
    for(let i = 0; i<arTZ.length; i++){
        if (i%2 != 0){
            let sum = 0;
            sum = +arTZ[i] * 2; 
            if(sum > 9){
                sum = (sum%10) + (Math.trunc(sum/10));
            }
            res += sum;
        }
        else res += +arTZ[i];
    }
    if (res%10 != 0){
        return false;
    }
    return true;
}
console.log(checkTeudatZehut('848152054'));

function generateRandomTeudatZehut(){
    let randomNumber = 0;
    let randomTeudatZehut = "";
    for(let x = 8; x > 0; x--){
        randomNumber = Math.round(Math.random()*9);
        randomTeudatZehut = randomTeudatZehut + randomNumber;  
    }
    let arTZ = Array.from(randomTeudatZehut);
    let res = 0;
    for(let i = 0; i<arTZ.length; i++){
        if (i%2 != 0){
            let sum = 0;
            sum = +arTZ[i] * 2; 
            if(sum > 9){
                sum = (sum%10) + (Math.trunc(sum/10));
            }
            res += sum;
        }
        else res += +arTZ[i];
    }
    if (res%10 != 0){
        let num = (10 - (res%10));
        return randomTeudatZehut + num;
    }
    return randomTeudatZehut + '0';
}
console.log(generateRandomTeudatZehut());

