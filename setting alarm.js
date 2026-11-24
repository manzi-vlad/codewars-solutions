function setAlarm(employed, vacation){
  if(employed &&vacation){
    return false;
  
  } else if (employed && vacation===false){
    return true;
    
  } else if (employed=== false && vacation){
    return false;
    
  } else if(employed===false && vacation===false){
    return false;
  }

}