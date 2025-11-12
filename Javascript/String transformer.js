function stringTransformer(str) {
  let result = str.split('')
  result = result.map(function(x) {
    if(x === x.toLowerCase()){
      return x.toUpperCase() 
    }
    else {
      return x.toLowerCase()
    }
  })
  result = result.join('')
  result = result.split(' ').reverse().join(' ')
  return result
}