function calc(x){
  let split = x.split('')
  let result = []
  let reg = /,/g
  
  for (let i = 0; i < split.length; i++){
    result.push(split.toString().replace(reg, "").charCodeAt(i))
    }
  
  let total1 = result.join("")
  let total2 = total1.replace(/7/g,1)
    total1 = total1.split("").map(Number)
    total2 = total2.split("").map(Number)
  return total1.reduce((a, b) => a + b) - total2.reduce((a, b) => a + b)
  
}
