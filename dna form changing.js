function dnaStrand(dna){
  var dnaArray= dna.split("");
  var newForm ="";
  
  for (var i=0;i < dna.length; i++){
    if(dna[i]==="A"){
      newForm+="T";
    } else if(dna[i]==="T"){
      newForm+="A";
    } else if(dna[i]==="C"){
      newForm+="G";
    } else if(dna[i]==="G"){
      newForm+="C";
    }
  }
  return newForm;
}