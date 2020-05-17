// Find the Parity oddOutlier
// 6kyu
// Java

// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

public class FindOutlier {
    static int find(int[] integers) {

        int countEvens = 0, countOdds = 0;

        int oddOutlier = 0, evenOutlier = 0;

        for (int i = 0; i < integers.length; i++) {
            if (Math.abs(integers[i]) % 2 == 0) {
                countEvens++;
                evenOutlier += integers[i];
            }

            else {
                countOdds++;
                oddOutlier += integers[i];
            }
        }
        if (countEvens == 1)
            return evenOutlier;

        else
            return oddOutlier;
    }
}