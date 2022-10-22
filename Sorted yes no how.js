function isSortedAndHow(array) {
  let sorted = array.slice().sort((a,b)=>a-b)
  
  if (JSON.stringify(array) == JSON.stringify(sorted)) 
    return 'yes, ascending'
  else if (JSON.stringify(array) == JSON.stringify(sorted.reverse()))
    return 'yes, descending'
  else 
    return 'no'
  
}