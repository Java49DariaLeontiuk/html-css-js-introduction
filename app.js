// function getAddressKey(){
//     return "appartment";
// }
// const person = {id: 123, first_name: "Vasya", last_name: "Ivanov",
//  year: 2000, address: {city: "Lod", street: " Sokolov", appartment: 100}
// };
// const name2 = getAddressKey();
// console.log(person.address[name2]);
// const yearExp = "ye" + "ar";
// const name1 = "first" + "_name";
// console.log(person["first_name"]);
// console.log(person[name1]);
// console.log("year: " + person.year);
// console.log("year: " + person[yearExp]);

// const personArr = [123, "Vasya", "Ivanov",2000, ["Lod", "Sokolov",100]];
// console.log(personArr[3]);
// console.log(person.address.city);
// console.log(person.address);

// function displayOccurrences(strings){
//     const occurrences = {};
//     strings.forEach(element => {
//         if (occurrences[element]){
//             occurrences[element]++;
//         } else {
//             occurrences[element] = 1;
//         }
//     });
//     console.log(occurrences);
// }
// const strings = ['a','opr', 'lmn', 'abc', 'lmn', 'abc', 'lmn', 'abc', 'lmn', 'a'];
// displayOccurrences(strings);

// const x = {};
// const string = "abc";
// x[string] = 1;
// console.log(x);
// x[string]++;
// console.log(x);

// function displayOccurrences(strings){
//     const occurrences = {};
//     strings.forEach(element => {
//         if (occurrences[element]){
//             occurrences[element]++;
//         } else {
//             occurrences[element] = 1;
//         }
//     });
//     //console.log(Object.entries(occurrences));
//     const occurrencesAr = Object.entries(occurrences);
//     occurrencesAr.sort((e1,e2) => e2[1] - e1[1])
//     //[ [ 'lmn', 4 ], [ 'abc', 3 ], [ 'a', 2 ], [ 'opr', 1 ] ]
//     //occurrencesAr.sort((e1,e2) => e1[1] - e2[1])
//     //[ [ 'opr', 1 ], [ 'a', 2 ], [ 'abc', 3 ], [ 'lmn', 4 ] ]
//     console.log(occurrencesAr)
// }
// const strings = ['a','opr', 'lmn', 'abc', 'lmn', 'abc', 'lmn', 'abc', 'lmn', 'a'];
// displayOccurrences(strings);

// function fromWordToArr(word){
//     let wordArr = Array.from(word.toLowerCase());
//     return wordArr;
// }
// let word1 = "y6e5llow@ op"
// let word2 = "@Wl ol56EYpo"
// let word1Arr = fromWordToArr(word1);
// let word2Arr = fromWordToArr(word2);
// console.log(word1Arr);
// console.log(word2Arr);

// function displayOccurrences(wordArr){
//         const occurrences = {};
//         wordArr.forEach(element => {
//             if (occurrences[element]){
//                 occurrences[element]++;
//             } else {
//                 occurrences[element] = 1;
//             }
//         });
//         const occurrencesAr = Object.entries(occurrences);
//         occurrencesAr.sort();
//         occurrencesAr.sort((e1,e2) => e2[1] - e1[1]);
//         console.log(occurrencesAr);
//         return occurrencesAr;
//     }
//     const obj1 = displayOccurrences(word1Arr);
//     const obj2 = displayOccurrences(word2Arr);
// console.log(JSON.stringify(obj1) === JSON.stringify(obj2));

// function isAnagram(str1,str2){
//     return Array.from(str1).sort().join('')==
//     Array.from(str2).sort().join('')
// }

function isAnagram(str1, str2) {
    let res = false;
    if (str1.length == str2.length) {
        const str1Occurrences = getSymbolOccurrences(str1);
        res = checkAnagram(str1Occurrences, str2);
    }

}
function getSymbolOccurrences(string) {
    const stringArray = Array.from(string);
    return stringArray.reduce((res, cur) => {
        if (res[cur]) {
            res[cur]++;
        } else {
            res[cur] = 1;
        }
        return res;
    }, {})
}

function checkAnagram(occurrences, string) {
    let res = true;
    const stringArray = Array.from(string);
    let i = 0;
    return stringArray.every(symbol => {
        let res = false;
        if (occurrences[symbol]) {
            res = true;
            occurrences[symbol]--;
        }
        return res;
    })
    // while(i < stringArray.length && res){
    //         const symbol = stringArray[i];
    //         if(occurrences[symbol]){
    //             occurrences[symbol]--;
    //             i++;
    //         } else {
    //             res = false;
    //         }
    //         return res;
    //     }

    // for(let i = 0; i < stringArray.length; i++){
    //     const symbol = stringArray[i];
    //     if(occurrences[symbol]){
    //         occurrences[symbol]--;
    //     } else {
    //         return false;
    //     }
    // }
    // return res;
}

isAnagram('yellow','wolley')