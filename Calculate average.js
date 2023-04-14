/*

Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.


*/

function findAverage(array) {
    return array.length === 0? 0:(array.reduce((el,acc) => el+acc))/array.length;
}

console.log(findAverage([]));
console.log(findAverage([2,3,1,4,5]));