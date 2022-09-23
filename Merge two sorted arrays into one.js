function mergeArrays(arr1, arr2) {
  const result = [...new Set([...arr1, ...arr2])]
  result.sort((a, b) => a - b);
    return result
}