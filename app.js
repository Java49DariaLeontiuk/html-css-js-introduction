console.log("Hello world!");
// for(let i = 0; i < 3; i++){
//     setTimeout(function(){
//         console.log(i)
//     }, (i + 1 ) * 2000);
// }
// var i=100;
// => 3 3 3 
// for(let i = 0; i < 3; i++){
//     setTimeout(function(){console.log(i)});
// } => 0 1 2

// for(var i = 0; i < 3; i++){
//   console.log(i);
// } 0 1 2
// function sum(op1, op2){
//     let res = op1 + op2;
//     return res;
// }
// let op1 = 10;
// let op2 = 20;
// let res = sum(op1,op2);
// console.log(res);
function sumDigits(number){
    let res = 0;
    do{
        let num=number%10;
        res = res + num;
        number = (number/10) | 0;
    }while (number>0);
    return res; 
}
console.log(sumDigits(252));