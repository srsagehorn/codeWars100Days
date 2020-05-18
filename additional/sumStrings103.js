// Sum the strings
// 8kyu

// Create a function that takes 2 positive integers in form of a string as an input, and outputs the sum (also as a string):

//   sumStr("4", "5")    // should output "9"
//   sumStr("34", "5")   // should output "39"

// If either input is an empty string, consider it as zero.

function sumStr(a,b) {
    var num = +a + +b
      return (num.toString())
    }


Test.assert_equals(sum_str("4","5"), "9")
Test.assert_equals(sum_str("34","5"), "39")