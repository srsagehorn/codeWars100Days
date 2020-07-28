# Split In parts
# 7kyu
# https://www.codewars.com/kata/5650ab06d11d675371000003/train/python

# The aim of this kata is to split a given string into different strings of equal size (note size of strings is passed to the method)

# Example:

# Split the below string into other strings of size #3

# 'supercalifragilisticexpialidocious'

# Will return a new string
# 'sup erc ali fra gil ist ice xpi ali doc iou s'
# Assumptions:

# String length is always greater than 0
# String has no spaces
# Size is always positive


def split_in_parts(s, part_length): 
    newStr, i, count = "", 0, part_length
    while i < len(s):
        # add each set of length part_length to newStr
        newStr += s[slice(i, count)] + " "
        count += part_length
        i += part_length
        # return the string without the last space
    return newStr[slice(0, len(newStr)-1)]


#     @test.describe('Example Tests')
# def example_tests():
#     test.assert_equals(split_in_parts("supercalifragilisticexpialidocious", 3), "sup erc ali fra gil ist ice xpi ali doc iou s")
#     test.assert_equals(split_in_parts("HelloKata", 1), "H e l l o K a t a")
#     test.assert_equals(split_in_parts("HelloKata", 9), "HelloKata")