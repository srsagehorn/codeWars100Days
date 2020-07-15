# Squash the bugs
# 8kyu
# https://www.codewars.com/kata/56f173a35b91399a05000cb7/train/python

# Simple challenge - eliminate all bugs from the supplied code so that the code runs and outputs the expected value. Output should be the length of the longest word, as a number.

# There will only be one 'longest' word.

def find_longest(string):
    spl = string.split(" ") #split the string on spaces to create an array of words
    longest = 0
    for i in spl: #go through the words
        if len(i) > longest: #if the length of this word is higher than the value in longest
            longest = len(i) #longest is equal to the length of this word
    return longest

# Test.describe("Basic tests")
# Test.assert_equals(find_longest("The quick white fox jumped around the massive dog"), 7)
# Test.assert_equals(find_longest("Take me to tinseltown with you"), 10)
# Test.assert_equals(find_longest("Sausage chops"), 7)
# Test.assert_equals(find_longest("Wind your body and wiggle your belly"), 6)
# Test.assert_equals(find_longest("Lets all go on holiday"), 7)