// Date Formatter
// 7kyu
// https://www.codewars.com/kata/5846aaffdbb1b19d300001fb/train/javascript

// You are to implement a getDate function, which takes a unix timestamp and a locale as input and returns the formatted date based on the locale.

// the locale formats to use are stored in the preloaded structure formats. For example,

// Example:

// getDate(1481020142, 'en-GB') -> '06/12/2016' (format->'dd/mm/yyyy')
// getDate(1481020142, 'de-DE') -> '06.12.2016' (format->'dd.mm.yyyy')
// getDate(1481020142, 'hu-HU') -> '2016. 12. 06.' (format->'yyyy. mm. dd.')
// little hint: don't choose the hard way

function getDate(uts, loc) {
  return new Date(uts * 1000).toLocaleDateString(loc);
}

// Test.describe('Basic tests',_=>{

//     it ("en-GB: dd/mm/yyyy", function(){
//     Test.assertEquals(getDate(1481020142, 'en-GB'), '06/12/2016');
//     });
//     it ("en-US: m/d/yyyy", function(){
//     Test.assertEquals(getDate(1481020142, 'en-US'), '12/6/2016');
//     });
//     it ("de-DE: dd.mm.yyyy", function(){
//     Test.assertEquals(getDate(1481020142, 'de-DE'), '06.12.2016');
//     });

//     });
