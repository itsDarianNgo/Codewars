function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
 return sharkDistance / (dolphin ? sharkSpeed / 2 : sharkSpeed) > pontoonDistance/ youSpeed ? 'Alive!' : 'Shark Bait!'
}