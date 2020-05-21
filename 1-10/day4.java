// Total amount of points
// 8kyu
// https://www.codewars.com/kata/5bb904724c47249b10000131/train/java

// Our football team finished the championship. The result of each match look like "x:y". Results of all matches are recorded in the collection.

// For example: ["3:1", "2:2", "0:1", ...]

// Write a function that takes such collection and counts the points of our team in the championship. Rules for counting points for each match:

// if x>y - 3 points
// if x<y - 0 point
// if x=y - 1 point
// Notes:

// there are 10 matches in the championship
// 0 <= x <= 4
// 0 <= y <= 4

public class TotalPoints {

    public static int points(String[] games) {
        // set variable for total points
        int totalPoints = 0;
        // iterate over games
        for (String i : games) {
            // set a varibale for the first and second character to make for easy
            // referencing later
            char x = i.charAt(0), y = i.charAt(2);
            {
                // if first char is > second char add 3 points to total points
                if (x > y) {
                    totalPoints += 3;
                }
                // if first char is equal to second char add 1 point to total points
                if (x == y) {
                    totalPoints += 1;
                }
            }
        }

        return totalPoints;
    }
}

// import org.junit.Test;
// import static org.junit.Assert.assertEquals;
// import org.junit.runners.JUnit4;

// public class SolutionTest {
// @Test
// public void basicTests() {
// assertEquals(30, TotalPoints.points(new String[]
// {"1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"}));

// assertEquals(10, TotalPoints.points(new String[]
// {"1:1","2:2","3:3","4:4","2:2","3:3","4:4","3:3","4:4","4:4"}));

// assertEquals(0, TotalPoints.points(new String[]
// {"0:1","0:2","0:3","0:4","1:2","1:3","1:4","2:3","2:4","3:4"}));

// assertEquals(15, TotalPoints.points(new String[]
// {"1:0","2:0","3:0","4:0","2:1","1:3","1:4","2:3","2:4","3:4"}));

// assertEquals(12, TotalPoints.points(new String[]
// {"1:0","2:0","3:0","4:4","2:2","3:3","1:4","2:3","2:4","3:4"}));
// }
// }