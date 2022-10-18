function isVow(a){
  for (let i = 0, l=a.length; i < l; ++i) {
    let char = String.fromCharCode(a[i])
    if ('aeiou'.indexOf(char) !== -1)
      a[i] = char
  }
  return a
}