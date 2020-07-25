# Largest pair in an array
# 7kyu
# https://www.codewars.com/kata/556196a6091a7e7f58000018/train/python

# Given a sequence of numbers, find the largest pair sum in the sequence.

# For example

# [10, 14, 2, 23, 19] -->  42 (= 23 + 19)
# [99, 2, 2, 23, 19]  --> 122 (= 99 + 23)
# Input sequence contains minimum two elements and every element is an integer.

def largest_pair_sum(numbers): 
    # set the sum really low
    largestSum = -1000
    # loop through twice
    for i in range(len(numbers)):
        for j in range(len(numbers)):
            # if i is not the same number as j and num[i] plus num[j] is larger than the previous largestSum value
            if i != j and numbers[i] + numbers[j] > largestSum:
                # update largest sum
                largestSum = numbers[i] + numbers[j]
    return largestSum


# @test.describe('Example Tests')
# def example_tests():
#     test.assert_equals(largest_pair_sum([10,14,2,23,19]), 42)
#     test.assert_equals(largest_pair_sum([-100,-29,-24,-19,19]), 0)
#     test.assert_equals(largest_pair_sum([1,2,3,4,6,-1,2]), 10)
#     test.assert_equals(largest_pair_sum([-10, -8, -16, -18, -19]), -18)