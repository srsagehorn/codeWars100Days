// Halving Sum
// 7kyu
//  https://www.codewars.com/kata/5a58d46cfd56cb4e8600009d/train/javascript

// Given a positive integer n, calculate the following sum:

// n + n/2 + n/4 + n/8 + ...
// All elements of the sum are the results of integer division.

// Example

// 25  =>  25 + 12 + 6 + 3 + 1 = 47

function halvingSum(n) {
  var sum = 0; //set sum equal to zero
  for (var i = 1; Math.floor(n / i) > 0; i = i * 2) {
    //   loop through such that it starts at one, and / over i rounded down in greater than 0, multiply i by 2
    sum += Math.floor(n / i);
    // add n over i rounded down to sum
  }
  return sum;
}

// @test.describe('Example Tests')
// def example_tests():
//     test.assert_equals(halving_sum(25),47)
//     test.assert_equals(halving_sum(127),247)
