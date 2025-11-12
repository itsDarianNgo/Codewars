function squareDigits(num){
  num = num.toString().split('')
  let square = num.map(x=> x * x)
  
  return Number(square.join(''))
}