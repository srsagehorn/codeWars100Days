// If you cant sleep, just count sheep
// 8kyu
// https://www.codewars.com/kata/5b077ebdaf15be5c7f000077/train/javascript

// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

var countSheep = function (num) {
  // create an exmpty string
  var counts = "";
  // iterate the num times and add i+1 and "sheep..." each time
  for (var i = 0; i < num; i++) {
    counts += i + 1 + " sheep...";
  }

  return counts;
};

// Test.assertEquals(countSheep(1), "1 sheep...");
// Test.assertEquals(countSheep(2), "1 sheep...2 sheep...");
// Test.assertEquals(countSheep(3), "1 sheep...2 sheep...3 sheep...");
