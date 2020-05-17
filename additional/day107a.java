// Java

public class TotalPoints {

    public static int points(String[] games) {
        // implement me
        int totalPoints = 0;

        for (String i : games) {
            char x = i.charAt(0), y = i.charAt(2);
            {
                if (x > y) {
                    totalPoints += 3;
                }
                if (x == y) {
                    totalPoints += 1;
                }
            }
        }

        return totalPoints;
    }
}