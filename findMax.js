// using for-of loop
// const findMax = (arr) => {
//   let maxValue = arr[0];

//   for (const num of arr) {
//     if (num > maxValue) maxValue = num;
//   }

//   return maxValue;
// };

// using sort method
const findMax = (arr) => {
  if (arr.length === 0) {
    console.log("The array is empty");
    return;
  }
  arr.sort((a, b) => a - b);
  return arr[arr.length - 1];
};

const myArray = [-2, -5, -8, -10, -44, -21, -12];

console.log(findMax(myArray));
