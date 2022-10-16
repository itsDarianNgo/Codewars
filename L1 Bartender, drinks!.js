function getDrinkByProfession(param){
  let paramLower = param.toLowerCase()
  if (paramLower === "jabroni") {
    return "Patron Tequila"
  } else if (paramLower === "school counselor") {
    return "Anything with Alcohol"
  }else if (paramLower === "programmer") {
    return "Hipster Craft Beer"
  }else if (paramLower === "bike gang member") {
    return "Moonshine"
  }else if (paramLower === "politician") {
    return "Your tax dollars"
  }else if (paramLower === "rapper") {
    return "Cristal"
  }else {
    return "Beer"
  }
}