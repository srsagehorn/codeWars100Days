// Squash the bugs
// 8 kyu
// https://www.codewars.com/kata/56f173a35b91399a05000cb7/train/javascript

// Simple challenge - eliminate all bugs from the supplied code so that the code runs and outputs the expected value. Output should be the length of the longest word, as a number.

// There will only be one 'longest' word.

function findLongest(str) {
  var spl = str.split(" "); //split on each space so that there is an array of each word
  var longest = 0; //create num variable

  for (var i = 0; i < spl.length; i++) {
    //iterate through words
    if (spl[i].length > longest) {
      //if the length of this word is longer than the num saved in longere
      longest = spl[i].length; //set longest to equal the length of the current word
    }
  }
  return longest; //return length of longest word
}

// Test.describe("Basic tests",_=>{
//     Test.assertEquals(findLongest("The quick white fox jumped around the massive dog"), 7);
//     Test.assertEquals(findLongest("Take me to tinseltown with you"), 10);
//     Test.assertEquals(findLongest("Sausage chops"), 7);
//     Test.assertEquals(findLongest("Wind your body and wiggle your belly"), 6);
//     Test.assertEquals(findLongest("Lets all go on holiday"), 7);
//     })
