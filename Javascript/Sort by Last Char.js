function last(x){
  let result = x.split(' ')
      result = result.sort((a,b)=> a.charCodeAt(a.length - 1) - b.charCodeAt(b.length -1))
    return result
      
}