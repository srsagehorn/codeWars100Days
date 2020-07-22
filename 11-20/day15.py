# Holiday VI - Shark Pontoon
# 8kyu
# https://www.codewars.com/kata/57e921d8b36340f1fd000059/train/python

# Your friend invites you out to a cool floating pontoon around 1km off the beach. Among other things, the pontoon has a huge slide that drops you out right into the ocean, a small way from a set of stairs used to climb out.

# As you plunge out of the slide into the water, you see a shark hovering in the darkness under the pontoon... Crap!

# You need to work out if the shark will get to you before you can get to the pontoon. To make it easier... as you do the mental calculations in the water you either freeze when you realise you are dead, or swim when you realise you can make it!

# You are given 5 variables: sharkDistance = distance the shark needs to cover to eat you in metres, sharkSpeed = how fast it can move in metres/second, pontoonDistance = how far you need to swim to safety in metres, youSpeed = how fast you can swim in metres/second, dolphin = a boolean, if true, you can half the swimming speed of the shark as the dolphin will attack it.

# If you make it, return "Alive!", if not, return "Shark Bait!".

def shark(pontoon_distance, shark_distance, you_speed, shark_speed, dolphin):
    
    if dolphin:
        # if there is a dolphin and you swim faster than the shark at half speed
        if pontoon_distance / you_speed < shark_distance / (shark_speed / 2):
            return ("Alive!")
        else:
            return ("Shark Bait!")
            # if there is no dolphin and you swim faster than the shark
    if pontoon_distance / you_speed < shark_distance / shark_speed:
        return ("Alive!")
    else:
        return ("Shark Bait!")


# Test.assert_equals(shark(12, 50, 4, 8, True), "Alive!");
# Test.assert_equals(shark(7, 55, 4, 16, True), "Alive!");
# Test.assert_equals(shark(24, 0, 4, 8, True), "Shark Bait!");