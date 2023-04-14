/* Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).
The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.*/


function sumArray(array) {
  if (array==null) return 0;
  return array.sort((a, b) => a - b)
  .slice(1, -1)
  .reduce((acc, current) => acc + current, 0);
}

// function sumArray(array) {
//   if (array==null || array.length<=2) return 0;
//   return array.reduce((el,acc) => el+acc) - (Math.max(...array)+Math.min(...array));
// }

console.log(sumArray([6, 2, 1, 8, 10 ]));
console.log(sumArray([1, 1, 11, 2, 3 ]));
console.log(sumArray([]));
console.log(sumArray([null]));