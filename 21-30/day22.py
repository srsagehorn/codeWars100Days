# Draw Stairs
# 8kyu
# https://www.codewars.com/kata/5b4e779c578c6a898e0005c5/train/python

# Given a number n, draw stairs using the letter "I", n tall and n wide, with the tallest in the top left.

# For example n = 3 result in "I\n I\n I", or printed:

# I
#  I
#   I
# Another example, a 7-step stairs should be drawn like this:

# I
#  I
#   I
#    I
#     I
#      I
#       I

def draw_stairs(n):
    stairs = "" #empty string
    for i in range(n-1): #count up from 1 to n
        stairs += "I\n" + " " * (i + 1) #add I\n and i+1 number of spaces
    
    return stairs + "I" #return stairs + I

# stairs = '''I\n I\n  I'''
# test.assert_equals(draw_stairs(3), stairs)