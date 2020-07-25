// Largest pair sum in array
// 7kyu
// https://www.codewars.com/kata/556196a6091a7e7f58000018/train/javascript

// Given a sequence of numbers, find the largest pair sum in the sequence.

// For example

// [10, 14, 2, 23, 19] -->  42 (= 23 + 19)
// [99, 2, 2, 23, 19]  --> 122 (= 99 + 23)
// Input sequence contains minimum two elements and every element is an integer.]

function largestPairSum(numbers) {
  var largestSum = -1000;
  //   loop through twice
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      //   if i and j are not the same number and larger than largestSum
      if (i != j && numbers[i] + numbers[j] > largestSum) {
        largestSum = numbers[i] + numbers[j];
        //   make largest sum i+j
      }
    }
  }
  return largestSum;
}

// Test.expect(largestPairSum([-10, -8, -16, -18, -19]) === -18 , "Sum should be -18");
