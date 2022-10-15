function getSize(width, height, depth) {
  let area = (2 * width * height ) + (2 * depth * height) + (2 * depth * width)
  let volume = width * height * depth
  let array = [area, volume]
  return array
}