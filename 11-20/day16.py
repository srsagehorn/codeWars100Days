#  Convert number to reversed array of digits
#  8kyu
#  https://www.codewars.com/kata/5583090cbe83f4fd8c000051/train/python

#  Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

#  Example:

#  348597 => [7,9,5,8,4,3]

def digitize(n):
    reversed = []
    for i in str(n): #loop through  it as a string and make each number an arr element
        i = int(i) #turn it back into a number
        reversed.insert(0, i) #insert it as the first element
    return reversed


# Test.assert_equals(digitize(35231),[1,3,2,5,3])