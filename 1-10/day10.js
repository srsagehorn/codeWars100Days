// Removing Elements
// 8kyu
// https://www.codewars.com/kata/5769b3802ae6f8e4890009d2/train/javascript

// Take an array and remove every second element out of that array. Always keep the first element and start removing with the next element.

// Example:

// myArr = ['Keep', 'Remove', 'Keep', 'Remove', 'Keep', ...];
// None of the arrays will be empty, so you don't have to worry about that!

function removeEveryOther(arr) {
  var newArr = []; //create new array
  for (var i = 0; i < arr.length; i++) {
    if (i % 2 == 0) {
      //if it is an even numbered element
      newArr.push(arr[i]); //push it to the new array
    }
  }
  return newArr; //reurn new array
}

//   Test.describe("Basic tests",_=>{
//     Test.assertSimilar(removeEveryOther(['Hello', 'Goodbye', 'Hello Again']),['Hello', 'Hello Again']);
//     Test.assertSimilar(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),[1, 3, 5, 7, 9]);
//     Test.assertSimilar(removeEveryOther([[1, 2]]), [[1, 2]]);
//     Test.assertSimilar(removeEveryOther([['Goodbye'], {'Great': 'Job'}]),[['Goodbye']]);
//     })
