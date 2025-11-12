function arrayMadness(a, b) {
  let map = a.map(x => Math.pow(x, 2))
  let reduce = map.reduce((previousValue, currentValue) => previousValue + currentValue, 0)
  let map2 = b.map(x => Math.pow(x, 3))
  let reduce2 = map2.reduce((previousValue, currentValue) => previousValue + currentValue, 0)
  
  if (reduce >= reduce2) {
    return true 
  }else {
        return false
}
}

