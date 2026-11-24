function cockroachSpeed(s) {
  var newSpeed = s*100000/3600;
  newSpeed = Math.floor(newSpeed);
  
return newSpeed;
}

console.log(cockroachSpeed(300));