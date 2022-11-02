function disemvowel(str) {
  return str.split('').map(word => ["a","e","i","o","u"].includes(word.toLowerCase()) ? "" : word).join("")
  }
  