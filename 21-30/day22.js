// Draw stairs
// 8kyu
// https://www.codewars.com/kata/5b4e779c578c6a898e0005c5/train/javascript

// Given a number n, draw stairs using the letter "I", n tall and n wide, with the tallest in the top left.

// For example n = 3 result in "I\n I\n I", or printed:

// I
//  I
//   I
// Another example, a 7-step stairs should be drawn like this:

// I
//  I
//   I
//    I
//     I
//      I
//       I

function drawStairs(n) {
  //empty string
  var stairs = "";
  // establish a space
  const space = " ";
  // count up from one to n
  for (let i = 1; i < n; i++) {
    // add I\n and the i number of spaces to stairs
    stairs += "I\n" + space.repeat(i);
  }
  //   return stairs with the initial i
  return stairs + "I";
}

// describe("Some simple stairs", function() {
//     it("Draw stairs with only 1 step", () => assert.equal(drawStairs(1), "I", "The first step has no padding on the left, just an 'I'"));
//     it("Draw stairs with 3 steps", () => assert.equal(drawStairs(3), "I\n I\n  I", "There's something wrong with these 3 steps"));
//     it("Draw stairs with 5 steps", () => assert.equal(drawStairs(5), "I\n I\n  I\n   I\n    I", "5-step stairs no good"));
//   });
