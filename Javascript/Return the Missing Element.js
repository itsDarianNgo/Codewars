function getMissingElement(array){
  let count = 0
  array.sort((a,b)=>a-b)
  for (let i = 0; i <= array.length; i++) {
    if(i==array[i])count++
  }
    return count
}