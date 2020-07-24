// Alternate capitalization
// 7kyu
// https://www.codewars.com/kata/59cfc000aeb2844d16000075/train/javascript

// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

// Good luck!

// If you like this Kata, please try:

// Indexed capitalization

// Even-odd disparity

function capitalize(s) {
  var firstUpper = "";
  var firstLower = "";
  for (let i = 0; i < s.length; i++) {
    if (i % 2 == 0 || i == 0) {
      //   if even number or 0, put a cap in firstUpper and a lower in first Lower
      firstUpper += s.charAt(i).toUpperCase();
      firstLower += s.charAt(i);
    } else {
      //   if odd, put a cap in firstLower and a lower in firstUpper
      firstLower += s.charAt(i).toUpperCase();
      firstUpper += s.charAt(i);
    }
  }
  // return them in an array
  return (array = [firstUpper, firstLower]);
}

//   describe("Basic tests", function(){
//     Test.assertDeepEquals(capitalize("abcdef"),['AbCdEf', 'aBcDeF']);
//     Test.assertDeepEquals(capitalize("codewars"),['CoDeWaRs', 'cOdEwArS']);
//     Test.assertDeepEquals(capitalize("abracadabra"),['AbRaCaDaBrA', 'aBrAcAdAbRa']);
//     Test.assertDeepEquals(capitalize("codewarriors"),['CoDeWaRrIoRs', 'cOdEwArRiOrS']);
//     });
