# Find the Capitals
# 7kyu
# https://www.codewars.com/kata/53573877d5493b4d6e00050c/train/python

# Complete the method that takes a sequence of objects with two keys each: country or state, and capital. Keys may be symbols or strings.

# The method should return an array of sentences declaring the state or country and its capital.

# Examples

# [{'state': 'Maine', 'capital': 'Augusta'}] --> ["The capital of Maine is Augusta"]
# [{'country' : 'Spain', 'capital' : 'Madrid'}] --> ["The capital of Spain is Madrid"]
# [{"state" : 'Maine', 'capital': 'Augusta'}, {'country': 'Spain', "capital" : "Madrid"}] --> ["The capital of Maine is Augusta", "The capital of Spain is Madrid"]


def capital(capitals): 
    array = []
    for x in range(len(capitals)):
        # loop through, is there is a state key the append the state
        if "state" in capitals[x]:
            array.append("The capital of " + capitals[x]["state"] + " is " + capitals[x]["capital"])
            # if not append the country
        else: 
            array.append("The capital of " + capitals[x]["country"] + " is " + capitals[x]["capital"])
    return array

# @test.describe('Example Tests')
# def example_tests():
#     state_capitals = [{'state': 'Maine', 'capital': 'Augusta'}]
#     test.assert_equals(capital(state_capitals), ["The capital of Maine is Augusta"]);
    
#     country_capitals = [{'country' : 'Spain', 'capital' : 'Madrid'}]
#     test.assert_equals(capital(country_capitals), ["The capital of Spain is Madrid"])
    
#     mixed_capitals = [{"state" : 'Maine', 'capital': 'Augusta'}, {'country': 'Spain', "capital" : "Madrid"}]
#     test.assert_equals(capital(mixed_capitals), ["The capital of Maine is Augusta", "The capital of Spain is Madrid"])