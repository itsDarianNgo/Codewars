function findShort(s){
  let sort = s.split(' ').sort((a,b)=>a.length-b.length)
  return sort[0].length
}