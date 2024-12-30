// first approach with reduce method
// const sumArray = (arr) => {
//   return arr.reduce((acc, cur) => acc + cur, 0);
// };

// second approach with for loop
const sumArray = (arr) => {
  let sum = 0;

  for (i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
};

const myArray = [1, 2, 3, 4, 5];

console.log(sumArray(myArray));
