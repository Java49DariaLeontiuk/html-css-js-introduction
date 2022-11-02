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
// function sumDigits(number){
//     number = Math.abs(number);
//     number = Math.trunc(number);
//     let res = 0;
//     do{
//         let num = number % 10;
//         res += num;
//         number = (number - num)/10;
//     }while (number!=0);
//     return res; 
//     }
// console.log(sumDigits(623));
/****************************************** */
// let strNum1 = "123";
// let strNum2 = "9";
// console.log(strNum1 + strNum2); // => 1239
// console.log(strNum1 - strNum2); // => 114
// console.log(strNum1 > strNum2);

// let num1 = +strNum1;
// let num2 = +strNum2;
// console.log(num1 + num2); 
// console.log(num1 - num2); 
// console.log(num1 > num2);
// let strNumStr = '12.3ab';
// let numStr = +strNumStr;
// console.log(numStr);
// let num = parseInt(strNumStr);
// if (isNaN(numStr)) {
//     console.log("numStr is NaN");
// }
// let num10 = 123;
// let strNum10 = "" + num10;
// let strNum16 = num10.toString(36);
// console.log(strNum10, strNum16);

// conversion from Morse code to number
// symbol "." => 0; symbol "-" => 1;

// function fromMorseToNumber(morseCode){
//     let result = 0;
//     for(let i = 0; i < morseCode.length; i++) {
//         let code = morseCode[i] == "." ? 0: 1;
//         result = result * 2 + code;
//     }
//     return result;
// }
// console.log(fromMorseToNumber(".-.-.----..-"));

// function fromNumberToMorse(number){
//     number = Math.abs(number);
//     let res = "";
//     do{
//         let digit = number % 2;
//         let sym = digit == 0 ? ".": "-";
//         res = sym + res;
//         number = Math.trunc(number/2);

//     } while(number != 0);
//     return res;
//     }
//     console.log(fromNumberToMorse(1401));

// // gettimg code from symbol
// console.log("abc".charCodeAt(2));
// // getting symbol frome code
// console.log(String.fromCharCode(99));

// function fromNumberToString(number, base){
//     console.log('number =', number, 'base =', base);
//     if(!isBaseValid(base)) {
//         return 'base ='+ base +' is not valid';
//     }
//     if(isNaN(number)) {
//         return 'number =' + number +' isNaN';
//     }
//     let result = "";
//     let posNum = Math.abs(number);
//     do{
//         let rem = posNum % base;
//         if( rem > 9){
//             rem = String.fromCharCode(87+rem);
//         }
//         result = rem + result;
//         posNum = Math.trunc(posNum / base);
//     }while(posNum != 0);
//     return result;
// }
// console.log(fromNumberToString(900550, 36));
// console.log(fromNumberToString(46016237, 36));
// console.log(fromNumberToString(11483, 2));

// function fromStringToNumber (inputStr, base)
// {
//     console.log('inputStr =', inputStr, ' base =', base);
//     if(!isBaseValid(base)) {
//         return 'base =' + base + ' is not valid';
//     }
//     if(typeof inputStr != 'string') {
//         return 'inputStr =' + inputStr +' is not string';
//     }
//     let result = 0;
//     inputStr.toLowerCase();
//     for(let i=0; i<inputStr.length;i++){
//         let code = inputStr.charCodeAt(i);
//         if(code>=48 && code <=57){
//             code-=48;
//         } else if(code>=97 && code <=122){
//             code-=87;
//         } else {
//             return "error";
//         }
//         result = result * base + code;
//     }
//     return result;
// }
// console.log(fromStringToNumber("java",36));
// console.log(fromStringToNumber("react",36));
// console.log(fromStringToNumber("10110011011011",2));

// function isBaseValid(base){
//     if(isNaN(base)){
//         return false;
//     }
//     if(base > Math.trunc(base)){
//         return false;
//     }
//     if(typeof base == "number" && base>=2 && base<=36){
//         return true;
//     }
//     return false;
// }

function getSymbol(digit){
    let codeA = "a".charCodeAt();
    if (digit > 9){
        digit = String.fromCharCode(codeA + digit - 10); 
    }
    return digit;
}
function fromNumberToCode(number, base){
        number = Math.abs(number);
        let res = "";
        do{
            let digit = number % base;
            let sym = getSymbol(digit);
            res = sym + res;
            number = Math.trunc(number/base);
    
        } while(number != 0);
        return res;
        }
console.log(fromNumberToCode(900550,36));

function getCode(symbol){
    let codeA = "a".charCodeAt();
    let res = symbol < "9" ? +symbol : symbol.charCodeAt() - codeA + 10;
    return res;
}

function fromCodeToNumber(string, base){
        string = string.toLowerCase();
        let result = 0;
        for(let i = 0; i < string.length; i++) {
            let code = getCode(string[i]);
            result = result * base + code;
        }
        return result;
    }
    console.log(fromCodeToNumber("10",16));

    