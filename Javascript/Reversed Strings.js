function solution(str){
  
    let result = '' // '' // w // ow // row // lrow // dlrow
    
    for (let i of str) {
      result = i + result // w + result // o + w // r+ ow // l + row // d + lrow //  for loop done, end of result
    }
    return result
  }