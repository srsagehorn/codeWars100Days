# My Languages
# 7kyu
# https://www.codewars.com/kata/5b16490986b6d336c900007d/train/python


# You are given a dictionary/hash/object containing some languages and your test results in the given languages. Return the list of languages where your test score is at least 60, in descending order of the results.

# Note: the scores will always be unique (so no duplicate values)

# Examples

# {"Java": 10, "Ruby": 80, "Python": 65}    -->  ["Ruby", "Python"]
# {"Hindi": 60, "Dutch" : 93, "Greek": 71}  -->  ["Dutch", "Greek", "Hindi"]
# {"C++": 50, "ASM": 10, "Haskell": 20}     -->  []


def my_languages(results):
    # declare two arrays
    lang = []
    final = []
    for key in results:
        # throw out values less than 60
        # if the value is 100 set it to 99
        # need only 2 digit numbers later
        # append the value and key to the first array as one string
        if results[key] > 59:
            if results[key] == 100:
                results[key] = 99
            lang.append(str(results[key]) + key)
    # sort the array backwards
    # the remove the number at the beginning
    lang.sort(reverse=True)
    for word in lang:
        final.append(word[2:len(word)])
    return final

# Test.assert_equals(my_languages({"Java": 10, "Ruby": 80, "Python": 65}), ["Ruby", "Python"])
# Test.assert_equals(my_languages({"Hindi": 60, "Dutch": 93, "Greek": 71}), ["Dutch", "Greek", "Hindi"])
# Test.assert_equals(my_languages({"C++": 50, "ASM": 10, "Haskell": 20}), [])