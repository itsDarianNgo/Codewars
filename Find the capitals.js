var capitals = function (word) {
	let result = []
  
  for (i = 0; i < word.length; i++){
    if (word[i] == word[i].toUpperCase()){
      result.push(i)
    }
  }
    return result  
};