var gToL = function(gallon){
  return gallon*3.785411784;
}

var lToG = function(liter){
  return liter/3.785411784;
}

// var gallon = parseInt(prompt("Enter gallon"));
var liter = parseInt(prompt("Enter liter"));

// alert(gToL(gallon));

alert(lToG(liter));
