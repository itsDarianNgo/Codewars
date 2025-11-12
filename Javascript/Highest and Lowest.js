function highAndLow(numbers){
  let x = numbers.split(' ')
  return `${Math.max(...x)} ${Math.min(...x)}`
}