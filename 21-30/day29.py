# Halving Sum
# 7kyu
# https://www.codewars.com/kata/5a58d46cfd56cb4e8600009d/train/python

# Given a positive integer n, calculate the following sum:

# n + n/2 + n/4 + n/8 + ...
# All elements of the sum are the results of integer division.

# Example

# 25  =>  25 + 12 + 6 + 3 + 1 = 47


import math 
def halving_sum(n): 
    sum, i = 0, 1
    while math.floor(n/i) > 0:
        # while n over i rounded down is greater than 0
        sum += math.floor(n/i)
        i = i*2
        # add n over i rounded down to sum and multiple i by 2
    return sum

# @test.describe('Example Tests')
# def example_tests():
#     test.assert_equals(halving_sum(25),47)
#     test.assert_equals(halving_sum(127),247)