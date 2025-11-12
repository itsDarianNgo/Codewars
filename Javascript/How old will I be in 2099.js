function  calculateAge(born,current) {
  let age = Math.abs(current-born)
  
  if (current-born === 1) {
    return `You are 1 year old.`
  } else if (current-born === -1){
      return `You will be born in ${age} year.`
  } else if (born > current){
      return `You will be born in ${age} years.`
  } else if (born < current) {
    return `You are ${age} years old.`
  } else {
    return `You were born this very year!`
  }
} 

