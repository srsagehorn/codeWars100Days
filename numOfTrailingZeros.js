// Number of trailing zeros of N!
// 5kyu
// https://www.codewars.com/kata/52f787eb172a8b4ae1000a34/train/javascript

// Write a program that will calculate the number of trailing zeros in a factorial of a given number.

// N! = 1 * 2 * 3 * ... * N

// Be careful 1000! has 2568 digits...

// For more info, see: http://mathworld.wolfram.com/Factorial.html

// Examples

// zeros(6) = 1
// # 6! = 1 * 2 * 3 * 4 * 5 * 6 = 720 --> 1 trailing zero

// zeros(12) = 2
// # 12! = 479001600 --> 2 trailing zeros
// Hint: You're not meant to calculate the factorial. Find another way to find the number of zeros.


function zeros (n) {
    var num = 0
    if (n > 4) {
      num = Math.floor(n/5)
  }
    return num
  }
  // not the first four but every 5 after adds a zero

// Test.describe("Sample Tests", function() {
//     Test.it("Should pass sample tests", function() {
//       Test.assertEquals(zeros(0), 0, "Testing with n = 0")
//       Test.assertEquals(zeros(5), 1, "Testing with n = 5")
//       Test.assertEquals(zeros(6), 1, "Testing with n = 6")
//       Test.assertEquals(zeros(30), 7, "Testing with n = 30")
//     });
//   });