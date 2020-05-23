// Alternating Cases
// 8kyu
// https://www.codewars.com/kata/56efc695740d30f963000557/train/javascript

// altERnaTIng cAsE <=> ALTerNAtiNG CaSe

// Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase. For example:

// "hello world".toAlternatingCase() === "HELLO WORLD"
// "HELLO WORLD".toAlternatingCase() === "hello world"
// "hello WORLD".toAlternatingCase() === "HELLO world"
// "HeLLo WoRLD".toAlternatingCase() === "hEllO wOrld"
// "12345".toAlternatingCase() === "12345" // Non-alphabetical characters are unaffected
// "1a2b3c4d5e".toAlternatingCase() === "1A2B3C4D5E"
// "String.prototype.toAlternatingCase".toAlternatingCase()

String.prototype.toAlternatingCase = function () {
  
    var newStr = '' //create new string variable
    
    for (var i= 0; i < this.length ; i++){ //iterate over this
    
    let char = this[i] //crate variable for the character i in this
    
    if (char == char.toUpperCase()) { //if the letter is uppercase, change to lower, if lower change to upper and edd to the new string
      newStr += char.toLowerCase()}
      
    else {
      newStr += char.toUpperCase()}
  }
  
  return newStr
  
  



// describe("String.prototype.toAlternatingCase", _ => {
//   it("should work for fixed tests (provided in the description)", _ => {
//     Test.assertEquals("hello world".toAlternatingCase(), "HELLO WORLD");
//     Test.assertEquals("HELLO WORLD".toAlternatingCase(), "hello world");
//     Test.assertEquals("hello WORLD".toAlternatingCase(), "HELLO world");
//     Test.assertEquals("HeLLo WoRLD".toAlternatingCase(), "hEllO wOrld");
//     Test.assertEquals("12345".toAlternatingCase(), "12345");
//     Test.assertEquals("1a2b3c4d5e".toAlternatingCase(), "1A2B3C4D5E");
//     Test.assertEquals("String.prototype.toAlternatingCase".toAlternatingCase(), "sTRING.PROTOTYPE.TOaLTERNATINGcASE");
//     Test.assertEquals("Hello World".toAlternatingCase().toAlternatingCase(), "Hello World");
//   });
// });