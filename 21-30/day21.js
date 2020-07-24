// Calculate BMI
// 8kyu
// https://www.codewars.com/kata/57a429e253ba3381850000fb/train/javascript

// Write function bmi that calculates body mass index (bmi = weight / height ^ 2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

function bmi(weight, height) {
  var bmi = weight / (height * height);
  // calculate bmi, replaced power of 2 with multiplying itself
  //   return appropriate category
  if (bmi <= 18.5) {
    return "Underweight";
  }

  if (bmi <= 25.0) {
    return "Normal";
  }

  if (bmi <= 30.0) {
    return "Overweight";
  }

  if (bmi > 30) {
    return "Obese";
  }
}

// Test.assertEquals(bmi(80, 1.80), "Normal");
