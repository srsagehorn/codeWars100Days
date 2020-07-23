// Reversed Sequence
// 8kyu
// https://www.codewars.com/kata/5a00e05cc374cb34d100000d/train/javascript

// Get the number n (n>0) to return the reversed sequence from n to 1.

// Example : n=5 >> [5,4,3,2,1]

const reverseSeq = (n) => {
  var sequence = []; //empty array
  for (let i = n; i > 0; i--) {
    //start at n and go down to 0
    sequence.push(i); //push to empty empty array
  }
  return sequence;
};

// const { assert } = require("chai");

// describe("reverseSeq", function() {
//   it("Sample Test", function() {
//     assert.deepEqual(reverseSeq(5), [5, 4, 3, 2, 1]);
//   });
// });
