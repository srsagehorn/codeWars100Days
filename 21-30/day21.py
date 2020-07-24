# Calculate BMI
# 8kyu
# https://www.codewars.com/kata/57a429e253ba3381850000fb/train/python

# Write function bmi that calculates body mass index (bmi = weight / height ^ 2).

# if bmi <= 18.5 return "Underweight"

# if bmi <= 25.0 return "Normal"

# if bmi <= 30.0 return "Overweight"

# if bmi > 30 return "Obese"

def bmi(weight, height):
    # calculate bmi
    bmi = weight / (height ** 2)
    # return appropriate category
    if bmi <= 18.5: return "Underweight"
    if bmi <= 25.0: return "Normal"
    if bmi <= 30.0: return "Overweight"
    if bmi > 30.0: return "Obese"


# Test.describe("Basic tests")
# Test.assert_equals(bmi(50, 1.80), "Underweight")
# Test.assert_equals(bmi(80, 1.80), "Normal")
# Test.assert_equals(bmi(90, 1.80), "Overweight")
# Test.assert_equals(bmi(110, 1.80), "Obese")
# Test.assert_equals(bmi(50, 1.50), "Normal")

