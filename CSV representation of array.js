function toCsvText(array) {
  const addCommas = array.map(x=> x.join(','))
  return addCommas.join('\n')
}