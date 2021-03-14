module.exports = function reverse (n) {
if(n>=0){
    let new_string = String(n);
    let s = Number(new_string.split("").reverse().join(""));
  return s;
}
else{
  let new_string=(-1)*n;
    new_string = String(new_string);
    let s= Number(new_string.split("").reverse().join(""));
  return s;
}
}
