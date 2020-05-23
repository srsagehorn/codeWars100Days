# Find the odd int
# 6kyu
# https://www.codewars.com/kata/54da5a58ea159efa38000836/train/python

# Given an array, find the integer that appears an odd number of times.

# There will always be only one integer that appears an odd number of times.

def find_it(seq):
    
  result = 0 #create a varibale
  
  for i in seq: #iterate over seq
  
    result = result ^ i #bitwise xor result and i, finds which value that shows up an odd number of times
  
  return result

# test.assert_equals(find_it([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]), 5)
# test.assert_equals(find_it([1,1,2,-2,5,2,4,4,-1,-2,5]), -1); 
# test.assert_equals(find_it([20,1,1,2,2,3,3,5,5,4,20,4,5]), 5);
# test.assert_equals(find_it([10]), 10);
# test.assert_equals(find_it([1,1,1,1,1,1,10,1,1,1,1]), 10);
# test.assert_equals(find_it([5,4,3,2,1,5,4,3,2,10,10]), 1);