#  Removing Elements
#  8kyu
# https://www.codewars.com/kata/5769b3802ae6f8e4890009d2/train/python

# Take an array and remove every second element out of that array. Always keep the first element and start removing with the next element.

# Example:

# my_list = ['Keep', 'Remove', 'Keep', 'Remove', 'Keep', ...]
# None of the arrays will be empty, so you don't have to worry about that!


def remove_every_other(arr):
    newArr = [] #new array
    for i in range(len(arr)):
        if i % 2 == 0: #if it is an even number element
            newArr.append(arr[i]) #push to array
    return newArr #return new array



# test.assert_equals(remove_every_other(['Hello', 'Goodbye', 'Hello Again']),
#                    ['Hello', 'Hello Again'])
# test.assert_equals(remove_every_other([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
#                    [1, 3, 5, 7, 9])
# test.assert_equals(remove_every_other([[1, 2]]), [[1, 2]])
# test.assert_equals(remove_every_other([['Goodbye'], {'Great': 'Job'}]),
#                    [['Goodbye']])

