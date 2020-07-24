# Alternate Capitalization
# 7kyu
# https://www.codewars.com/kata/59cfc000aeb2844d16000075/train/python

# Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

# For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

# The input will be a lowercase string with no spaces.

# Good luck!

# If you like this Kata, please try:

# Indexed capitalization

# Even-odd disparity

def capitalize(s):
    # two empty strings
    firstUpper = ""
    firstLower = ""
    for i in range(len(s)):
        # loop through letters in s
        # if it is 0 or even add a lower case to firstLower and an upper case to firstUpper
        if i % 2 == 0 or i == 0:
            firstUpper += (s[i].upper())
            firstLower += (s[i])
# if it is odd, add an upper case to firstLower and a lower case to firstLower
        else:
            firstLower += (s[i].upper())
            firstUpper += (s[i])
            # return them in an array
    return [firstUpper, firstLower]


# Test.it("Basic tests")
# Test.assert_equals(capitalize("abcdef"),['AbCdEf', 'aBcDeF'])
# Test.assert_equals(capitalize("codewars"),['CoDeWaRs', 'cOdEwArS'])
# Test.assert_equals(capitalize("abracadabra"),['AbRaCaDaBrA', 'aBrAcAdAbRa'])
# Test.assert_equals(capitalize("codewarriors"),['CoDeWaRrIoRs', 'cOdEwArRiOrS'])