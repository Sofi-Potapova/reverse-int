module.exports = function reverse (n) {
if(n>=0){
    let new_string = String(n);
    new_string=new_string.split("").reverse().join("");
    new_string = Number(new_string);
  return new_string;
}
else{
  let new_string=(-1)*n;
    new_string = String(n);
    new_string=new_string.split("").reverse().join("");
    new_string = Number(new_string);
  return (-1)*new_string;
}
}
