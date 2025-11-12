function smallEnough(a, limit){
const isBelowThreshold = (currentValue) => currentValue <= limit
return a.every(isBelowThreshold)
}