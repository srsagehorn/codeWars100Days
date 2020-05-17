// Array Plus Array
// 8kyu
// Java

// I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.

public class Sum {

    public static int arrayPlusArray(int[] arr1, int[] arr2) {
        // arr1 + arr2 is not working...
        int sum1 = 0, sum2 = 0, totalSums = 0;

        for (int i = 0; i < arr1.length; i++)
            sum1 += arr1[i];
        for (int i = 0; i < arr2.length; i++)
            sum2 += arr2[i];

        totalSums = sum1 + sum2;

        return totalSums;
    }

}