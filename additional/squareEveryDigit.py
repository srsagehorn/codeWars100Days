# 7kyu
# Square Every Digit
# https://www.codewars.com/kata/546e2562b03326a88e000020/train/python

# Welcome. In this kata, you are asked to square every digit of a number.

# For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

# Note: The function accepts an integer and returns an integer


def square_digits(num):
    # create a variable
    res = ''
    # iterate over the num by converting it to a string
    for i in str(num):
        # add the square of each integer in num to res
        res += str(int(i)**2)
        # convert answer back to an int
    return int(ans)

# test.assert_equals(square_digits(9119), 811181)