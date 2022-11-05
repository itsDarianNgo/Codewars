function getMiddle(s){
let x = s.split('')
let length = s.length
if(x.length % 2 === 0 ) {
  return `${x[x.length/2 -1]}${x[x.length/2]}`
} else
  return x[(x.length -1)/2]
  
}