// Convert number to reversed array of digits
// 8kyu
// https://www.codewars.com/kata/5583090cbe83f4fd8c000051/train/javascript

// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example:

// 348597 => [7,9,5,8,4,3]

function digitize(n) {
  var reversed = [];
  var digits = ("" + n).split("").map(Number); //create an array of the digits
  for (let i = digits.length - 1; i > -1; i--) {
    // deincrement through the array and push the reversed digits to a new array
    reversed.push(digits[i]);
  }
  return reversed;
}

// Test.assertDeepEquals(digitize(35231),[1,3,2,5,3]);
