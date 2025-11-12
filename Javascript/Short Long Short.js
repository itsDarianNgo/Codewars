function solution(a, b){
    let short = a.length < b.length ? a : b;
    let long = a.length > b.length ? a : b;
    
    return short + long + short;
  }