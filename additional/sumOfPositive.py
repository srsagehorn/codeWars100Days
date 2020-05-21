# Sum of Positive
# 8kyu
# https://www.codewars.com/kata/5715eaedb436cf5606000381/train/python

# You get an array of numbers, return the sum of all of the positives ones.

# Example [1,-4,7,12] => 1 + 7 + 12 = 20

# Note: if there is nothing to sum, the sum is default to 0.


def positive_sum(arr):
    sum = 0 #create a varible
    
    for num in arr: #iterate over arr
        if num > 0: #if the number is positive, add it to sum
            sum += num

    return sum

# Test.describe("positive_sum")

# Test.it("works for some examples")
# Test.assert_equals(positive_sum([1,2,3,4,5]),15)
# Test.assert_equals(positive_sum([1,-2,3,4,5]),13)
# Test.assert_equals(positive_sum([-1,2,3,4,-5]),9)

# Test.it("returns 0 when array is empty")
# Test.assert_equals(positive_sum([]),0)

# Test.it("returns 0 when all elements are negative")
# Test.assert_equals(positive_sum([-1,-2,-3,-4,-5]),0)