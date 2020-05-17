// Isograms
// 7kyu
// https://www.codewars.com/kata/54ba84be607a92aa900000f1

// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// isIsogram "Dermatoglyphics" == true
// isIsogram "aba" == false
// isIsogram "moOse" == false -- ignore letter case

import java.util.*;
import java.io.*;

public class isogram {
    public static boolean isIsogram(String str) {
        // ...
        str = str.toLowerCase(); // change all to lower case
        char arr[] = str.toCharArray(); // seperates it into an array by charracters
        Arrays.sort(arr); // sorts array in ascending order

        for (int i = 0; i < str.length() - 1; i++) // runs through characters
        {
            if (arr[i] == arr[i + 1]) // if one one letter is the same as another
                return false;
        } // if it passed there are no repeating letters
        return true;
    }
}

// import org.junit.Test;
// import static org.junit.Assert.assertEquals;
// import org.junit.runners.JUnit4;
// public class Tests {
// @Test
// public void FixedTests() {
// assertEquals(true, isogram.isIsogram("Dermatoglyphics"));
// assertEquals(true, isogram.isIsogram("isogram"));
// assertEquals(false, isogram.isIsogram("moose"));
// assertEquals(false, isogram.isIsogram("isIsogram"));
// assertEquals(false, isogram.isIsogram("aba"));
// assertEquals(false, isogram.isIsogram("moOse"));
// assertEquals(true, isogram.isIsogram("thumbscrewjapingly"));
// assertEquals(true, isogram.isIsogram(""));
// }
// }