function tripleTrouble(one, two, three){
  let combined = ''
  for (let i = 0; i < one.length; i++) {
    combined += one[i]
    combined += two[i]
    combined += three[i]
  }
  return combined
 }