// Split In Parts
// 7kyu
// https://www.codewars.com/kata/5650ab06d11d675371000003/train/javascript

// The aim of this kata is to split a given string into different strings of equal size (note size of strings is passed to the method)

// Example:

// Split the below string into other strings of size #3

// 'supercalifragilisticexpialidocious'

// Will return a new string
// 'sup erc ali fra gil ist ice xpi ali doc iou s'
// Assumptions:

// String length is always greater than 0
// String has no spaces
// Size is always positive

var splitInParts = function (s, partLength) {
  var newStr = "";
  var count = partLength;
  for (var i = 0; i < s.length; i += partLength) {
    // add the characters from partlength*i to partlength*2*i and a space
    // add partlength to count
    newStr += s.slice(i, count) + " ";
    count += partLength;
  }
  // return the string without the last space
  return newStr.slice(0, newStr.length - 1);
};

// Test.assertEquals(splitInParts("supercalifragilisticexpialidocious", 3), "sup erc ali fra gil ist ice xpi ali doc iou s")
// Test.assertEquals(splitInParts("HelloKata", 1), "H e l l o K a t a")
// Test.assertEquals(splitInParts("HelloKata", 9), "HelloKata")
