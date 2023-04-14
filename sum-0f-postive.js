function positiveSum(arr) {
  let sum = 0;
  arr.map((el) => el>=0?sum+=el:sum+=0);
  return sum;
}

console.log(positiveSum([-1,2,3,4,5]));