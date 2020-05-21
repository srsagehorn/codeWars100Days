// Array Plus Array
// 8kyu
// https://www.codewars.com/kata/5a2be17aee1aaefe2a000151/train/javascript

// I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.

function arrayPlusArray(arr1, arr2) {
  // add arr2 to the end of arr1 in a new array
  var finalArr = arr1.concat(arr2);
  // set variable for ending sum
  var sum = 0;
  // iterate over finalArr
  for (i = 0; i < finalArr.length; i++) {
    // add digit to sum
    sum += finalArr[i];
  }

  return sum;
}

// Test.describe("Basic tests",function(){
//   Test.assertEquals(arrayPlusArray([1, 2, 3], [4, 5, 6]), 21);
//   Test.assertEquals(arrayPlusArray([-1, -2, -3], [-4, -5, -6]), -21);
//   Test.assertEquals(arrayPlusArray([0, 0, 0], [4, 5, 6]), 15);
//   Test.assertEquals(arrayPlusArray([100, 200, 300], [400, 500, 600]), 2100);
// })
