// Is he gonna survive
// 8kyu
// https://www.codewars.com/kata/59ca8246d751df55cc00014c/train/javascript

// A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

// Return True if yes, False otherwise :)

function hero(bullets, dragons) {
  return bullets / 2 >= dragons;
  //   return weather or not bullets divided by 2 greater than or equal to dragons
}

// Test.assertEquals(hero(10, 5), true);
// Test.assertEquals(hero(7, 4), false);
// Test.assertEquals(hero(4, 5), false);
// Test.assertEquals(hero(100, 40), true);
// Test.assertEquals(hero(1500, 751), false);
// Test.assertEquals(hero(0, 1), false);
