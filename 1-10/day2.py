#  If you cant sleep, just count sheep
#  8kyu
#  https://www.codewars.com/kata/5b077ebdaf15be5c7f000077/train/python


# Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

def count_sheep(n):
    shp = ""
    x = 1
    
    while x <= n:
        shp += str(x) + " sheep..."
        x += 1
    return shp

# Test.assert_equals(count_sheep(1), "1 sheep...");
# Test.assert_equals(count_sheep(2), "1 sheep...2 sheep...")
# Test.assert_equals(count_sheep(3), "1 sheep...2 sheep...3 sheep...")