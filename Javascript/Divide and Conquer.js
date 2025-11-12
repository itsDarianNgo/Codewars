function divCon(x){
  let sumNum = 0
  
  for (let i = 0; i < x.length; i++){
    if (typeof x[i] ==  "number")
      sumNum += x[i]
    else
      sumNum -= x[i]
} 
  return sumNum
}