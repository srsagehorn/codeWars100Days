//  Is the string uppercase?
//  8kyu
//  https://www.codewars.com/kata/56cd44e1aa4ac7879200010b/train/javascript

//  Create a method is_uppercase() to see whether the string is ALL CAPS. For example:
//  is_uppercase("c") == False
//  is_uppercase("C") == True
//  is_uppercase("hello I AM DONALD") == False
//  is_uppercase("HELLO I AM DONALD") == True
//  is_uppercase("ACSKLDFJSgSKLDFJSKLDFJ") == False
//  is_uppercase("ACSKLDFJSGSKLDFJSKLDFJ") == True

//  In this Kata, a string is said to be in ALL CAPS whenever it does not contain any lowercase letter so any string containing no letters at all is trivially considered to be in ALL CAPS.

// String.prototype.isUpperCase = function () {
//   // boolean distinguishing if the element is upper case or not
//   return this == this.toUpperCase();
// };


// edited faster
def is_uppercase(inp):
// boolean distinguishing if the element is upper case or not
return True if inp.isupper() else False

is_uppercase("c") == False;
//  is_uppercase("C") == True
//  is_uppercase("hello I AM DONALD") == False
//  is_uppercase("HELLO I AM DONALD") == True
//  is_uppercase("ACSKLDFJSgSKLDFJSKLDFJ") == False
//  is_uppercase("ACSKLDFJSGSKLDFJSKLDFJ") == True
