// Beginner Series #1 School Paperwork
//Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.

// Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

// Example:
// n= 5, m=5: 25
// n=-5, m=5:  0

// Answer:
function paperwork(n, m) {
    if (n < 0 || m < 0){
      return 0
      }
     return n * m
  }
// Opposite number
  function opposite(number) {
    return -number
  }
//Even or Odd
function even_or_odd(number) {
  if (number % 2 === 0){
    return "Even"
  }else{
    return "Odd"
  }
}
//Fundamentals: Return
function add(a,b){
  return a + b
}

function divide(a,b){
  return a / b
}

function multiply(a,b){
  return a * b
}

function mod(a,b){
  return a % b
}
 
function exponent(a,b){
  return Math.pow(a,b)
}
  
function subt(a,b){
  return a - b
}

//Multiply
function multiply(a, b){
  let answer = a * b;
  return answer
}
// Power
function numberToPower(number, power){ 
  let result = 1;
  for (let count = 0; count < power; count++) {
  result *= number;
  }       
  return result;
}
// remove space
function noSpace(x){
  return x.split(" ").join("")
     
  }
  // reverse reverse
  function solution(str){
    return str.split("").reverse().join("");
  }
  // make negativo
  function makeNegative(num) {
    // Code?
    return -Math.abs(num)
  }
  // return reversed string
  function solution(str){
    return str.split("").reverse().join("");
  }
//remove string spaces
function noSpace(x){
  return x.split(" ").join("")
  }
  // simple multiplication 
  function simpleMultiplication(number) {
    // your code........
 if (number % 2 == 0){
   return number * 8
  
 }else { 
   return number * 9
 }
  
  
}  

// Count Vowels.
function getCount(str) {
  var vowelsCount = 0;
  var vowels = ["a","e","i","o","u"];
  for(var i = 0;i < str.length;i++){
    for(var j=0;j<vowels.length;j++){
      if(str[i] === vowels[j]){
        vowelsCount++;
      }
    }
  }
  
  return vowelsCount;
}
 

