function minSum(arr) {
   let sum = 0
   let multiply = 0
   let sorted = arr.sort((a,b)=>a-b)
  for (let i=0; i < arr.length; i+=2){
    multiply = arr[i] * arr[arr.length-1-i]
    sum += multiply
  }
  return sum
}