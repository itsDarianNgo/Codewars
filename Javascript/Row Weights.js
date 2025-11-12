function rowWeights(array){
  let odd = 0
  let even = 0
    for (let i = 0; i < array.length; i++) {
      if ((i -1) % 2 == 0) 
        even += array[i]
      else 
        odd += array[i]
    } 
      return [odd, even]
  }
