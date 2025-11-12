function positiveSum(arr) {
  let sum = 0 //set sum to 0
  arr.forEach(num => num > 0 && (sum += num)) // For each array element, if num is greater than 0, add sum + num together
  return sum
}