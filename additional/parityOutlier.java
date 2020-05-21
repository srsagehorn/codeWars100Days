// Find the Parity oddOutlier
// 6kyu
// https://www.codewars.com/kata/5526fc09a1bbd946250002dc/train/java

// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

// Examples

// [2, 4, 0, 100, 4, 11, 2602, 36]
// Should return: 11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21]
// Should return: 160 (the only even number)

public class FindOutlier {
    static int find(int[] integers) {

        int countEvens = 0, countOdds = 0; // set variables

        int oddOutlier = 0, evenOutlier = 0; // set variables

        for (int i = 0; i < integers.length; i++) { // iterate over integers
            if (Math.abs(integers[i]) % 2 == 0) { // if the absolute value of integers modulo 2 equals 0, add it to the
                                                  // evenOutlier
                countEvens++;
                evenOutlier += integers[i];
            }

            else { // else add it to the oddOutlier
                countOdds++;
                oddOutlier += integers[i];
            }
        }

        if (countEvens == 1) // if evenOutlier only has 1 element
            return evenOutlier;

        else
            return oddOutlier;
    }
}

// Test.assertEquals(findOutlier([0, 1, 2]), 1)
// Test.assertEquals(findOutlier([1, 2, 3]), 2)
// Test.assertEquals(findOutlier([2,6,8,10,3]), 3)
// Test.assertEquals(findOutlier([0,0,3,0,0]), 3)
// Test.assertEquals(findOutlier([1,1,0,1,1]), 0)