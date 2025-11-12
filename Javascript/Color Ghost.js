var Ghost = function() {
  let colors = ['white','yellow','red','purple'];
  let colorIndex = Math.floor(Math.random() * (colors.length))
  this.color = colors[colorIndex]
};