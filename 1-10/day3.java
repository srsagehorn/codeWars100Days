// Array Plus Array
// 8kyu
// https://www.codewars.com/kata/5a2be17aee1aaefe2a000151/train/java

// I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.

public class Sum {

    public static int arrayPlusArray(int[] arr1, int[] arr2) {
        // create a varibale
        int sum = 0;

        // iterate through each array and edd i to sum
        for (int i = 0; i < arr1.length; i++)
            sum += arr1[i];
        for (int i = 0; i < arr2.length; i++)
            sum += arr2[i];

        return sum;
    }

}

// import org.junit.Test;
// import static org.junit.Assert.assertEquals;
// import org.junit.runners.JUnit4;

// // TODO: Replace examples and use TDD development by writing your own tests

// public class SolutionTest {
// @Test
// public void sampleTests() {
// assertEquals(21, Sum.arrayPlusArray(new int[]{1,2,3}, new int[]{4,5,6}));
// assertEquals(-21, Sum.arrayPlusArray(new int[]{-1,-2,-3}, new
// int[]{-4,-5,-6}));
// assertEquals(15, Sum.arrayPlusArray(new int[]{0,0,0}, new int[]{4,5,6}));
// assertEquals(2100, Sum.arrayPlusArray(new int[]{100,200,300}, new
// int[]{400,500,600}));
// }
// }