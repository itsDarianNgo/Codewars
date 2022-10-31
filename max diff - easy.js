function maxDiff(list) {
   let sorted = list.sort((a,b)=a-b)
   if(list.length === 0  list.length === 1)
        return 0
      else
        return sorted[sorted.length -1] - sorted[0]
};