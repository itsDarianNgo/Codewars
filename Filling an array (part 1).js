function arr(N) {
  let filledArr = [];
  if (typeof N === 'number') {
    filledArr.push(0);
    for ( i = 1; i < N; i++){
      filledArr.push(filledArr[i-1] + 1);
    }
  }
  return filledArr;
}