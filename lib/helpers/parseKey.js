var parseKey = function(str){
  var infos = str.split(" ");
  return {name:infos[1],arch:infos[0].slice(1),version:infos[2],key:str};
}
export default parseKey;
