// By 3, or not by 3? That is the question . . .
// 7kyu
//https://www.codewars.com/kata/59f7fc109f0e86d705000043/train/javascript

// A trick I learned in elementary school to determine whether or not a number was divisible by three is to add all of the integers in the number together and to divide the resulting sum by three. If there is no remainder from dividing the sum by three, then the original number is divisible by three as well.

// Given a series of numbers as a string, determine if the number represented by the string is divisible by three.

// You can expect all test case arguments to be strings representing values greater than 0.

// Example:

// "123"      -> true
// "8409"     -> true
// "100853"   -> false
// "33333333" -> true
// "7"        -> false

function divisibleByThree(str) {
  var digitSum = 0;
  // make the characters numbers and add them together
  for (var i = 0; i < str.length; i++) {
    digitSum += Number(str.charAt(i));
  }
  // if the remainder of the sum is 0 return true
  //   else return false
  return digitSum % 3 == 0 ? true : false;
}

// Test.describe("Basic Tests", function(){
//     Test.assertEquals(divisibleByThree('123'), true, "Should return true if the sum of the given digits is divisible by 3.")
//     Test.assertEquals(divisibleByThree('19254'), true, "Should return true if the sum of the given digits is divisible by 3.")
//     Test.assertEquals(divisibleByThree('88'), false, "Should return false if the sum of the given digits is not divisible by 3.")
//     Test.assertEquals(divisibleByThree('1'), false, "Should return false if the sum of the given digits is not divisible by 3.")
//   });
