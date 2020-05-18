// If you cant sleep, just count sheep
// 8kyu

// https://www.codewars.com/kata/5b077ebdaf15be5c7f000077/train/javascript

// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

var countSheep = function (num) {
  var str = "";
  var x = 1;

  while (x <= num) {
    str += x + " sheep...";
    x++;
  }

  return str;
};

Test.assertEquals(countSheep(1), "1 sheep...");
// Test.assertEquals(countSheep(2), "1 sheep...2 sheep...");
// Test.assertEquals(countSheep(3), "1 sheep...2 sheep...3 sheep...");
