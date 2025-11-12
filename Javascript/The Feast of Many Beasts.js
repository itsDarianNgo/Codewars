function feast(beast, dish) {
    return beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1] ? true : false;
  }
  feast("brown bear", "bear claw");      // false
  feast("chickadee", "chocolate cake");  // true