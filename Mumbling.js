function accum(s) {
  let split = s.split('')
	return split.map((x,i) => x.toUpperCase() + x.toLowerCase().repeat(i)).join('-')
}