# ATM
# 7kyu
# https://www.codewars.com/kata/5635e7cb49adc7b54500001c/train/python

# There is enough money available on ATM in nominal value 10, 20, 50, 100, 200 and 500 dollars.

# You are given money in nominal value of n with 1<=n<=1500.

# Try to find minimal number of notes that must be used to repay in dollars, or output -1 if it is impossible.


# Test.describe("solve")

# Test.it("should work when chosing notes is possible")
# Test.assert_equals(solve(770), 4, "Wrong result for 770")
# Test.assert_equals(solve(550), 2, "Wrong result for 550")
# Test.assert_equals(solve(10), 1, "Wrong result for 10")
# Test.assert_equals(solve(1250), 4, "Wrong result for 1250")
# Test.assert_equals(solve(1500), 3,  "Wrong result for 1500")

def solve(n):
    amount = [500, 200, 100, 50, 20, 10]
    count = 0
    # if n is not divisable by 10, return -1
    if n % 10 != 0:
        return -1
    # while n is greater than or equal to the amount
    # subtract the amount from n and add one to count
    for i in amount:
        while n >= i:
            n -= i
            count += 1
    return count
  
# Test.it("should return -1 if chosing notes is not possible")
# Test.assert_equals(solve(125), -1, "Wrong result for 125")
# Test.assert_equals(solve(666), -1, "Wrong result for 666")
# Test.assert_equals(solve(42), -1, "Wrong result for 42")

