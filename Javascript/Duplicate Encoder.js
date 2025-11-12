function duplicateEncode(word){
  let wordLower =word.toLowerCase()
  let arr = Array.from(wordLower)
  
  let result = arr.map((el) => {
    if (arr.indexOf(el) == arr.lastIndexOf(el)) 
      return "("
    else
      return ")"
})
    return result.join('')
}
