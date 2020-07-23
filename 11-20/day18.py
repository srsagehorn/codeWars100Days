# reversed sequence
# 8kyu
# https://www.codewars.com/kata/5a00e05cc374cb34d100000d/train/python

# Get the number n (n>0) to return the reversed sequence from n to 1.

# Example : n=5 >> [5,4,3,2,1]

def reverse_seq(n):
    sequence = [] #empty array
    while (n>0): #as long as n is positive
        sequence.append(n)#append n to the array
        n -= 1 #subtract one on each loop
    return sequence

# test.assert_equals(reverse_seq(5),[5,4,3,2,1])