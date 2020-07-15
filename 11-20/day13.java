// Grasshopper - Grade book
// 8kyu
// https://www.codewars.com/kata/55cbd4ba903825f7970000f5/train/java

// Complete the function so that it finds the mean of the three scores passed to it and returns the letter value associated with that grade.

// Numerical Score	Letter Grade
// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'
// Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.

public class GrassHopper {

    public static char getGrade(int s1, int s2, int s3) {
        int mean = (s1 + s2 + s3) / 3; // find mean
        if (mean >= 90) { // asign letter value
            return 'A';
        }
        if (mean >= 80) {
            return 'B';
        }
        if (mean >= 70) {
            return 'C';
        }
        if (mean >= 60) {
            return 'D';
        }
        return 'F';
    }
}

// import java.util.Random;
// import static org.junit.Assert.assertEquals;
// import org.junit.Test;

// public class GrassHopperTest {
// @Test
// public void test1() {
// assertEquals('A', GrassHopper.getGrade(95,90,93));
// assertEquals('A', GrassHopper.getGrade(100,85,96));
// assertEquals('A', GrassHopper.getGrade(92,93,94));
// assertEquals('A', GrassHopper.getGrade(100,100,100));
// }
// @Test
// public void test2() {
// assertEquals('B', GrassHopper.getGrade(70,70,100));
// assertEquals('B', GrassHopper.getGrade(82,85,87));
// assertEquals('B', GrassHopper.getGrade(84,79,85));
// }
// @Test
// public void test3() {
// assertEquals('C', GrassHopper.getGrade(70,70,70));
// assertEquals('C', GrassHopper.getGrade(75,70,79));
// assertEquals('C', GrassHopper.getGrade(60,82,76));
// }
// @Test
// public void test4() {
// assertEquals('D', GrassHopper.getGrade(65,70,59));
// assertEquals('D', GrassHopper.getGrade(66,62,68));
// assertEquals('D', GrassHopper.getGrade(58,62,70));
// }
// @Test
// public void test5() {
// assertEquals('F', GrassHopper.getGrade(44,55,52));
// assertEquals('F', GrassHopper.getGrade(48,55,52));
// assertEquals('F', GrassHopper.getGrade(58,59,60));
// assertEquals('F', GrassHopper.getGrade(0,0,0));
// }
// }