function addLength(str) {
  return str.split(' ').map(word => `${word} ${word.length}`)
  
// I initially tried to use for loop, when I should have used map. Leaving code here to see how I messed up.
  // was janky and weird. I could get it to print the correct values, but not in the same array.
  
  
//   for (let i = 0; i < strSplit.length; i ++) {
//     let newString = `${strSplit[i]} ${strSplit[i].length}`
//     let concatString = [newString]
//     console.log(concatString)

// Could have done something like this with push
// function addLength(str) {
//   var split = str.split(" ");
//   var result = [];
   
//   for (i = 0; i < split.length; ++i) {
//     result.push(split[i] + " " + split[i].length);
//   } 
//   return result;  
// }
// }
