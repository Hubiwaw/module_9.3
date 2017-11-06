var text = "Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.";
var dinosaur = "triceratops";
var dinosaurUpperCased = dinosaur.toUpperCase();
console.log(dinosaurUpperCased); 
var texAfterChanged = text.replace('Velociraptor', dinosaurUpperCased);
var textFirstHalf = (texAfterChanged.length / 2);
console.log(textFirstHalf);
var textFinalVer = texAfterChanged.slice(0, textFirstHalf);
console.log(textFinalVer);