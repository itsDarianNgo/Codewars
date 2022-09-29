function pipeFix(numbers){
  const first = numbers[0]
  const last = numbers[numbers.length-1]
  
  const arr = []
  for (var i = first; i<= last; i++){
    arr.push(i)
  }
  return arr

}