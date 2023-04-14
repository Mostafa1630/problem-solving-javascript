/*

Each number should be formatted that it is rounded to two decimal places. You don't need to check whether the input is a valid number because only valid numbers are used in the tests.

Example:    
5.5589 is rounded 5.56   
3.3424 is rounded 3.34


*/


// function twoDecimalPlaces(n) {
//     // Your code here
//     let target =n.toString().split("")[3];
//     return parseInt(n.toString().split("")[4]) >= 5 ?`${n.toString().split("")[0]+n.toString().split("")[1]+n.toString().split("")[2]+parseInt(target)+1}`:`${parseInt(target)}`;
// }
function twoDecimalPlaces(n) {
    let frist = n.toString().split(".")[0];
    let second = parseInt(n.toString().split(".")[1][2]) >= 5? parseInt(n.toString().split(".")[1].slice(0,2))+1 :parseInt(n.toString().split(".")[1].slice(0,2)) ; 
    return +`${frist}.${second}`;
}

console.log(twoDecimalPlaces(5.5589));
console.log(twoDecimalPlaces(3.3424));