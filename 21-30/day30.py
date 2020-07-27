# Unique String Characters
# 7kyu
# https://www.codewars.com/kata/5a262cfb8f27f217f700000b/train/python

# In this Kata, you will be given two strings a and b and your task will be to return the characters that are not common in the two strings.

# For example:

# solve("xyab","xzca") = "ybzc" 
# --The first string has 'yb' which is not in the second string. 
# --The second string has 'zc' which is not in the first string. 
# Notice also that you return the characters from the first string concatenated with those from the second string.

# More examples in the tests cases.

# Good luck!

def solve(a,b):
    letters = ""
    for j in range(len(a)):
        # if char at j in a is not in b, add it to letters
        if a[j] not in b : letters += a[j]
    for i in range(len(b)):
        # if char at i in b is not in a, add it to letters
        if b[i] not in a : letters += b[i]
    return letters


# Test.it("Basic tests")
# Test.assert_equals(solve("xyab","xzca"),"ybzc")
# Test.assert_equals(solve("xyabb","xzca"),"ybbzc")
# Test.assert_equals(solve("abcd","xyz"),"abcdxyz")
# Test.assert_equals(solve("xxx","xzca"),"zca")