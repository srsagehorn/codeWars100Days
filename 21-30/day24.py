# Tip Calculator
# 8kyu
# https://www.codewars.com/kata/56598d8076ee7a0759000087/train/python

# Complete the function, which calculates how much you need to tip based on the total amount of the bill and the service.

# You need to consider the following ratings:

# Terrible: tip 0%
# Poor: tip 5%
# Good: tip 10%
# Great: tip 15%
# Excellent: tip 20%
# The rating is case insensitive (so "great" = "GREAT"). If an unrecognised rating is received, then you need to return:

# "Rating not recognised" in Javascript, Python and Ruby...
# ...or null in Java
# ...or -1 in C#
# Because you're a nice person, you always round up the tip, regardless of the service.

import math #import math
def calculate_tip(amount, rating):
    rating = rating.lower() #convert the rating to lower case
    #use the correct rating t round up the appropriate tip
    if rating == "excellent": return math.ceil(amount * .20 )
    if rating == "great": return math.ceil(amount * .15)
    if rating == "good": return math.ceil(amount * .10)
    if rating == "poor": return math.ceil(amount * .05)
    if rating == "terrible": return 0 
    return "Rating not recognised"#if not a rating

# Test.assert_equals(calculate_tip(30, "poor"), 2)
# Test.assert_equals(calculate_tip(20, "Excellent"), 4)
# Test.assert_equals(calculate_tip(20, "hi"), 'Rating not recognised')
# Test.assert_equals(calculate_tip(107.65, "GReat"), 17)
# Test.assert_equals(calculate_tip(20, "great!"), 'Rating not recognised')