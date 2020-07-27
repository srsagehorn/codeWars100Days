// Unique String Characters
// 7kyu
// https://www.codewars.com/kata/5a262cfb8f27f217f700000b/train/javascript

// In this Kata, you will be given two strings a and b and your task will be to return the characters that are not common in the two strings.

// For example:

// solve("xyab","xzca") = "ybzc"
// --The first string has 'yb' which is not in the second string.
// --The second string has 'zc' which is not in the first string.
// Notice also that you return the characters from the first string concatenated with those from the second string.

// More examples in the tests cases.

// Good luck!


function solve(a,b){
    var letters = ""
    for (let i = 0 ; i< a.length ; i++) {
        // loop through a, if the character in a are not in b, add to the string
      if (!b.includes(a.charAt(i))) {
        letters += a.charAt(i)
      }
      }
    for (let i = 0 ; i< b.length ; i++) {
        // loop through b, if the character in a are not in b, add to the string
      if (!a.includes(b.charAt(i))) {
        letters += b.charAt(i)
      }
      }
    return letters
    }


// describe("Basic tests", function(){
//     Test.assertEquals(solve("xyab","xzca"),"ybzc");
//     Test.assertEquals(solve("xyabb","xzca"),"ybbzc");
//     Test.assertEquals(solve("abcd","xyz"),"abcdxyz");
//     Test.assertEquals(solve("xxx","xzca"),"zca");
//     });
