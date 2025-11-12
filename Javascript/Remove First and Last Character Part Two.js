function array(arr){
  arr = arr.split(',')
  arr.pop()
  arr.shift()
  return arr.join(' ') || null
}
