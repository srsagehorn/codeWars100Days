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