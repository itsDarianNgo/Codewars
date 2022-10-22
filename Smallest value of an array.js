function min(arr, toReturn) {
  let min = Math.min(...arr)
  if (toReturn === 'value')
    return min
  else
    return arr.findIndex((element) => element == min)
}