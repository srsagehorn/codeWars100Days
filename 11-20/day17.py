# Is he gonna survive?
#  8kyu
# https://www.codewars.com/kata/59ca8246d751df55cc00014c/train/python

# A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

# Return True if yes, False otherwise :)

def hero(bullets, dragons):
    return bullets/2 >= dragons
    # return weather or not bullets divided by 2 greater than or equal to dragons

# Test.assert_equals(hero(10, 5), True)
# Test.assert_equals(hero(7, 4), False)
# Test.assert_equals(hero(4, 5), False)
# Test.assert_equals(hero(100, 40), True)
# Test.assert_equals(hero(1500, 751), False)
# Test.assert_equals(hero(0, 1), False)