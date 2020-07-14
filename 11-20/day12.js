// Tripple Trouble
// 8kyu
// https://www.codewars.com/kata/5704aea738428f4d30000914/train/javascript

// Triple Trouble

// Create a function that will return a string that combines all of the letters of the three inputed strings in groups. Taking the first letter of all of the inputs and grouping them next to each other. Do this for every letter, see example below!

// E.g. Input: "aa", "bb" , "cc" => Output: "abcabc"

// Note: You can expect all of the inputs to be the same length.

function tripleTrouble(one, two, three) {
  var word = "";
  for (var i = 0; i < one.length; i++) {
    word += one.charAt(i) + two.charAt(i) + three.charAt(i);
    //add iterative characters from each string
  }
  return word;
}

//   Test.assertEquals(tripleTrouble("this","test","lock"), "ttlheoiscstk");
// Test.assertEquals(tripleTrouble("aa","bb","cc"), "abcabc");
// Test.assertEquals(tripleTrouble("Bm", "aa", "tn"), "Batman");
// Test.assertEquals(tripleTrouble("LLh","euo","xtr"), "LexLuthor");
