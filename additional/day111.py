# Find the first non-consecutive number

# 8kyu
# Python

# Your task is to find the first element of an array that is not consecutive.

# By not consecutive we mean not exactly 1 larger than the previous element of the array.

# E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the first non-consecutive number.

# If the whole array is consecutive then return null2.

# The array will always have at least 2 elements1 and all elements will be numbers. The numbers will also all be unique and in ascending order. The numbers could be positive or negative and the first non-consecutive could be either too!

# If you like this Kata, maybe try this one next: https://www.codewars.com/kata/represent-array-of-numbers-as-ranges

# 1 Can you write a solution that will return null2 for both [] and [ x ] though? (This is an empty array and one with a single number and is not tested for, but you can write your own example test. )

def first_non_consecutive(arr):
    for i in arr:
        if i < len(arr) and arr[i] != arr[i-1] + 1:
            return arr[i]
    return None

# or
# def first_non_consecutive(arr):
#     firstNum = arr[0]
#     for i in arr:
#         if arr[i] - 1 != firstNum * i:
#             return arr[i]
#     return "None"

#     Test.describe("Basic tests")
# Test.assert_equals(first_non_consecutive([1,2,3,4,6,7,8]), 6)
# Test.assert_equals(first_non_consecutive([1,2,3,4,5,6,7,8]), None)
# Test.assert_equals(first_non_consecutive([4,6,7,8,9,11]), 6)
# Test.assert_equals(first_non_consecutive([4,5,6,7,8,9,11]), 11)
# Test.assert_equals(first_non_consecutive([31,32]), None)
# Test.assert_equals(first_non_consecutive([-3,-2,0,1]), 0)
# Test.assert_equals(first_non_consecutive([-5,-4,-3,-1]), -1)
