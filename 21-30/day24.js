// Tip Calculator
// 8kyu
// https://www.codewars.com/kata/56598d8076ee7a0759000087/train/javascript

// Complete the function, which calculates how much you need to tip based on the total amount of the bill and the service.

// You need to consider the following ratings:

// Terrible: tip 0%
// Poor: tip 5%
// Good: tip 10%
// Great: tip 15%
// Excellent: tip 20%
// The rating is case insensitive (so "great" = "GREAT"). If an unrecognised rating is received, then you need to return:

// "Rating not recognised" in Javascript, Python and Ruby...
// ...or null in Java
// ...or -1 in C#
// Because you're a nice person, you always round up the tip, regardless of the service.

function calculateTip(amount, rating) {
  // make it all lower case
  rating = rating.toLowerCase();
  // use appropriate rating and roung the tip
  if (rating == "excellent") {
    return Math.ceil(amount * 0.2);
  }
  if (rating == "great") {
    return Math.ceil(amount * 0.15);
  }
  if (rating == "good") {
    return Math.ceil(amount * 0.1);
  }
  if (rating == "poor") {
    return Math.ceil(amount * 0.05);
  }
  if (rating == "terrible") {
    return 0;
  }
}

// Test.assertEquals(calculateTip(20, "Excellent"), 4);
// Test.assertEquals(calculateTip(26.95, "good"), 3);
