// Sort and Star
// 8kyu
// https://www.codewars.com/kata/57cfdf34902f6ba3d300001e/train/javascript

// You will be given an vector of string(s). You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

// The returned value must be a string, and have "***" between each of its letters.

// You should not remove or add elements from/to the array.

function twoSort(s) {
  return s.sort()[0].split("").join("***");
  // sort itt alphabetically, take the first word and split it into an array of its letters, join the letters with ***
}

// Test.describe("Basic tests",_=>{
//     Test.assertEquals(twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]), 'b***i***t***c***o***i***n' );
//     Test.assertEquals(twoSort(["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"]), 'a***r***e');
//     });
