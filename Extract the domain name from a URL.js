function domainName(url){
 	let sourceString = url.replace('http://','').replace('https://','').replace('www.','')
  let domain = sourceString.split(".")[0]
  return domain
}