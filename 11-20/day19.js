// Generate range of integers
// 8kyu
// https://www.codewars.com/kata/55eca815d0d20962e1000106/train/javascript

// Implement a function named generateRange(min, max, step), which takes three arguments and generates a range of integers from min to max, with the step. The first integer is the minimum value, the second is the maximum of the range and the third is the step. (min < max)

// Task

// Implement a function named

// generateRange(2, 10, 2) // should return array of [2,4,6,8,10]
// generateRange(1, 10, 3) // should return array of [1,4,7,10]

function generateRange(min, max, step) {
  var digits = [];
  num = min; //rename min to num just to clear up that this will change
  while (num <= max) {
    //push num to the array then add step and repeat while num is less than or equal max,
    digits.push(num);
    num += step;
  }
  return digits;
}

// Test.describe("generateRange(2, 10, 2)", function() {
//   Test.assertSimilar(generateRange(2, 10, 2), [2,4,6,8,10]);
// });
