// Squash the bugs
// 8 kyu
// https://www.codewars.com/kata/56f173a35b91399a05000cb7/train/java

// Simple challenge - eliminate all bugs from the supplied code so that the code runs and outputs the expected value. Output should be the length of the longest word, as a number.

// There will only be one 'longest' word.

import java.util.*;

public class Kata {

    public static int findLongest(final String str) {
        String[] spl = str.split(" "); // split on spaces
        int longest = 0;
        for (int i = 0; i < spl.length; i++) { // go through the array of words
            if (spl[i].length() > longest) { // if this word is longer than the value in longest
                longest = spl[i].length(); // longest equals the length of this word
            }
        }
        return longest;
    }

}

// import org.junit.Test;
// import static org.junit.Assert.assertEquals;

// public class ExampleTests {

// @Test
// public void basicTests() {
// // assertEquals("expected", "actual");
// assertEquals(7, Kata.findLongest("The quick white fox jumped around the
// massive dog"));
// assertEquals(10, Kata.findLongest("Take me to tinseltown with you"));
// assertEquals(7, Kata.findLongest("Sausage chops"));
// assertEquals(6, Kata.findLongest("Wind your body and wiggle your belly"));
// assertEquals(7, Kata.findLongest("Lets all go on holiday"));
// }
// }