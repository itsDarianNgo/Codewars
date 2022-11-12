let maskify = cc => {
  let split = cc.split('')
  let slice = cc.slice(0,-4).split('')

  return slice.map(x => '#').join('') + split.slice(-4).join('')
}