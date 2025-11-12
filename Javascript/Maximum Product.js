function adjacentElementsProduct(array) {
  let maxProduct = array[0] * array[1]
  for (let i = 0; i < array.length; i++){
    let product = array[i] * array[i +1]
      if (product > maxProduct)
        maxProduct = product
  }
  return maxProduct
}