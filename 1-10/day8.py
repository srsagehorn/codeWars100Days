# Abbreviate a Two Word Name
# 8kyu
# https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3/train/python

# Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

# The output should be two capital letters with a dot separating them.

# It should look like this:

# Sam Harris => S.H

# Patrick Feeney => P.F

def abbrevName(name):
    initials = "" #create empty string
    nameArr = name.split() #split name into an array
    for i in nameArr:  #iterate through name
            initials += i[0] + "." #add the first character and a period to initials
    initials = initials[:-1] # delete the last period
    return initials.upper()


# Test.assert_equals(abbrevName("Sam Harris"), "S.H");
# Test.assert_equals(abbrevName("Patrick Feenan"), "P.F");
# Test.assert_equals(abbrevName("Evan Cole"), "E.C");
# Test.assert_equals(abbrevName("P Favuzzi"), "P.F");
# Test.assert_equals(abbrevName("David Mendieta"), "D.M");