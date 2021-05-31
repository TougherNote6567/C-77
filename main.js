var W1 = "Percy";
var W2 = "Jackson";
var WW = W1.concat(W2);
console.log (WW);
document.getElementById("Ex0").innerHTML=WW;
var ArrayFruit = ["Mango" , "Jamun" , "Apple" , "Banana" , "Orange" , "Guava", "Cherry"];
ArrayFruit.reverse();
var RanFruit= ArrayFruit[2];
ArrayFruit.push("Pineapple");
ArrayFruit.pop("Pineapple")
console.log(RanFruit);
console.log (ArrayFruit);
document.getElementById("Ex1").innerHTML=ArrayFruit;
var ArrayLength = ArrayFruit.length;
var ArrayValue = "";
for(var i=0; i<ArrayLength; i++){
   ArrayValue=ArrayValue+ArrayFruit[i]+"<br>";
}
document.getElementById("Ex2").innerHTML=ArrayValue;
console.log (ArrayLength);
var ArrayNumbers = ["1947" , "1851" , "1912" , "1716" , "1776" , "07082014", "08232010"];
var maxnumber=Math.max.apply(Math,ArrayNumbers);
console.log (maxnumber);
document.getElementById("Ex1").innerHTML=ArrayFruit;