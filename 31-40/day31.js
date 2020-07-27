// ATM
// 7kyu
// https://www.codewars.com/kata/5635e7cb49adc7b54500001c/train/javascript

// There is enough money available on ATM in nominal value 10, 20, 50, 100, 200 and 500 dollars.

// You are given money in nominal value of n with 1<=n<=1500.

// Try to find minimal number of notes that must be used to repay in dollars, or output -1 if it is impossible.

function solve(n) {
  var count = 0;
  var amounts = [500, 200, 100, 50, 20, 10];
  // if the number doesnt end with a 0 then return -1
  if (n % 10 != 0) {
    return -1;
  }
  for (var i = 0; i < amounts.length; i++) {
    // while n is greater than or equal to the amount
    while (n >= amounts[i]) {
      // subtract the amount from n
      n = n - amounts[i];
      //   add one to the count
      count += 1;
    }
  }
  // return the count
  return count;
}

// Test.describe("solve", function() {
//     Test.it("should work when chosing notes is possible", function() {
//       Test.assertEquals(solve(770), 4, "Wrong result for 770");
//       Test.assertEquals(solve(550), 2, "Wrong result for 550");
//       Test.assertEquals(solve(10), 1, "Wrong result for 10");
//       Test.assertEquals(solve(1250), 4, "Wrong result for 1250");
//     });

//     Test.it("should return -1 if chosing notes is not possible", function() {
//       Test.assertEquals(solve(125), -1, "Wrong result for 125");
//       Test.assertEquals(solve(666), -1, "Wrong result for 666");
//       Test.assertEquals(solve(42), -1, "Wrong result for 42");
//     });
//   });
