function betterThanAverage(classPoints, yourPoints) {
  var sum =0;
  for (var i=0; i<classPoints.length;i++){
    sum+= classPoints[i]
  }
  
var average = sum/classPoints.length;
  
  if (average<yourPoints){
    return true;
  } else {
    return false;
  }
}