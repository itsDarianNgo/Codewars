function warnTheSheep(queue) {
  const arrayIndexReverse = queue.reverse(queue).indexOf('wolf')
  if (arrayIndexReverse === 0) {
    return 'Pls go away and stop eating my sheep'
  } else{
  return `Oi! Sheep number ${arrayIndexReverse}! You are about to be eaten by a wolf!`
  }
}

