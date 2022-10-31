function tidyNumber(n){
  let split = n.toString().split('')
  let sorted = [...split].sort((a,b)=>a-b)
  
  if (JSON.stringify(split) == JSON.stringify(sorted))
    return true
  else
    return false
}