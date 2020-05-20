def array_plus_array(arr1,arr2):
    finalArr = arr1 + arr2
    sum = 0
    
    for i in range(len(finalArr)):
      sum += finalArr[i]
    return sum