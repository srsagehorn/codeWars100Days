# Get Planet Name by ID
# 8kyu
# https://www.codewars.com/kata/515e188a311df01cba000003/train/python


# The function is not returning the correct values. Can you figure out why?

# get_planet_name(3) # should return 'Earth'


def get_planet_name(id):

    return { ##refactored
        1 : "Mercury",
        2 : "Venus",
        3 : "Earth",
        4 : "Mars",
        5 : "Jupiter",
        6 : "Saturn",
        7 : "Uranus",
        8 : "Neptune"
        }.get(id) ##

# Test.assert_equals(get_planet_name(2), 'Venus')
# Test.assert_equals(get_planet_name(5), 'Jupiter')
# Test.assert_equals(get_planet_name(3), 'Earth')
# Test.assert_equals(get_planet_name(4), 'Mars')
# Test.assert_equals(get_planet_name(8), 'Neptune')
# Test.assert_equals(get_planet_name(1), 'Mercury')