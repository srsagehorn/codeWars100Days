// My Languages
// 7kyu
// https://www.codewars.com/kata/5b16490986b6d336c900007d/train/javascript

// You are given a dictionary/hash/object containing some languages and your test results in the given languages. Return the list of languages where your test score is at least 60, in descending order of the results.

// Note: the scores will always be unique (so no duplicate values)

// Examples

// {"Java": 10, "Ruby": 80, "Python": 65}    -->  ["Ruby", "Python"]
// {"Hindi": 60, "Dutch" : 93, "Greek": 71}  -->  ["Dutch", "Greek", "Hindi"]
// {"C++": 50, "ASM": 10, "Haskell": 20}     -->  []

function myLanguages(results) {
  // declare two arrays
  var lang = [];
  var final = [];
  for (var key in results) {
    // loop through and  takeout everything that is  not greater than 60
    // then push the number  and the language in one string to the first array
    if (results[key] >= 60) {
      //   reset any key equal to 100 to 99
      // later on everything needs to be 2 digits
      if (results[key] == 100) {
        results[key] = 99;
      }
      lang.push(results[key] + key);
    }
  }
  // order the entries in reverse so that they are in order from largest to least numbers
  // then remove the numbers pushing just the language name to the second array
  lang
    .sort()
    .reverse()
    .forEach((word) => final.push(word.substring(2)));
  return final;
}

// describe("myLanguages", function(){
//     it("Fixed tests", function(){
//       Test.assertDeepEquals(myLanguages({"Java" : 10, "Ruby" : 80, "Python" : 65}), ["Ruby", "Python"])
//       Test.assertDeepEquals(myLanguages({"Hindi" : 60, "Greek" : 71, "Dutch" : 93}), ["Dutch", "Greek", "Hindi"])
//       Test.assertDeepEquals(myLanguages({"C++" : 50, "ASM" : 10, "Haskell" : 20}), [])
//     });
//   });
