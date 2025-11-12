function XO(str) {
let oCount = 0
let xCount = 0
for(let i = 0; i < str.length; i++){
  if (str[i].toLowerCase() === "x")
    xCount ++
  else if (str[i].toLowerCase() === "o")
    oCount ++
}
  if (xCount === oCount)
    return true
  else
    return false
}