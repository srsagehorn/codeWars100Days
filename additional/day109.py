# 6kyu
# Python

# Given an array, find the integer that appears an odd number of times.

# There will always be only one integer that appears an odd number of times.

def find_it(seq):
    
  result = 0
  
  for i in seq:
  
    result = result ^ i
  
  return result