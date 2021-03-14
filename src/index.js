module.exports = function reverse (n) {
if(n>=0){
    let new_string = n.toFixed(3);
    new_string=new_string.split("").reverse().join("");
    new_string = new_string.parseFloat()
  return new_string;
}
else{
    let new_string = n.toFixed(3);
    new_string=new_string.split("").reverse().join("");
    new_string = new_string.parseFloat()
  return -new_string;
}
}
