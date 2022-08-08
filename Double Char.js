function doubleChar(str) {
    let tmp = '';
    for(var i = 0; i < str.length; i++){
      console.log(tmp += str[i].concat(str[i]));
    }
    return tmp;
  }
  doubleChar('string')