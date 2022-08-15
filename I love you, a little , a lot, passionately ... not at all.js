function howMuchILoveYou(nbPetals) {
  let petals = ['I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all'];
  return petals[(nbPetals-1) % 6];
}