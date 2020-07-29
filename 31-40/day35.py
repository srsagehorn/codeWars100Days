# Basic Calculator
# 7kyu
# https://www.codewars.com/kata/5296455e4fe0cdf2e000059f/train/python

# Write a function called calculate that takes 3 values. The first and third values are numbers. The second value is a character. If the character is "+" , "-", "*", or "/", the function will return the result of the corresponding mathematical function on the two numbers. If the string is not one of the specified characters, the function should return null (throw an ArgumentException in C#).

# calculate(2,"+", 4); //Should return 6
# calculate(6,"-", 1.5); //Should return 4.5
# calculate(-4,"*", 8); //Should return -32
# calculate(49,"/", -7); //Should return -7
# calculate(8,"m", 2); //Should return null
# calculate(4,"/",0) //should return null
# Keep in mind, you cannot divide by zero. If an attempt to divide by zero is made, return null (throw an ArgumentException in C#)/(None in Python).

def calculate(num1, operation, num2): 
  # if + return them added
  # if - return them subtracted
  # if / and the second number is 0 return none
  # if / return them divided
  # if * return them multiplied
  # else return none
    if operation == "+": return num1 + num2
    if operation == "-": return num1 - num2
    if operation == "/" and num2 == 0: return None
    if operation == "/": return num1 / num2
    if operation == "*": return num1 * num2
    else : return None


# @test.describe('Example Tests')
# def example_tests():
#     @test.it('Example Test Case')
#     def example_test_case():
#         test.assert_equals(calculate(3.2,"+", 8), 11.2, "3.2 + 8 = 11.2")
#         test.assert_equals(calculate(3.2,"-", 8), -4.8, "3.2 - 8 = -4.8")
#         test.assert_equals(calculate(3.2,"/", 8), 0.4, "3.2 / 8 = .4")
#         test.assert_equals(calculate(3.2,"*", 8), 25.6, "3.2 * 8 = 25.6")
#         test.assert_equals(calculate(-3,"+", 0), -3, "-3 + 0 = -3")
#         test.assert_equals(calculate(-3,"-", 0), -3, "-3 - 0 = -3")
#         test.assert_equals(calculate(-2, "/", -2), 1, "-2 / -2 = 1")
#         test.assert_equals(calculate(-3,"*", 0), 0, "-3 * 0 = 0")
#     @test.it('Edge Cases')
#     def edge_case_tests():
#         test.assert_equals(calculate(-3,"/", 0), None, "-3 / 0 = None")
#         test.assert_equals(calculate(-3,"w", 0), None, "-3 w 0 = None")
#         test.assert_equals(calculate(-3,"w", 1), None, "-3 w 1 = None")

