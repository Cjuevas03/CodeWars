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
 
// build a square
function generateShape(integer){
  let str = ""
  for(let i = 0; i < integer; i++){
    for(let j = 0; j < integer; j++){
      str += '+'
    }
    if (i < integer-1) str += '\n'
  }
    console.log(str)
    return str
  }

  // Multiples of 3 or 5
  function solution(number){
    let sum = 0;
    
    for (let i = 1; i < number; i++){
      if (i % 3 === 0) sum += i;
      else if (i % 5 === 0) sum += i;
    }
    return sum;
  }

  // remove first and last character

  function removeChar(str){
    //You got this!
     return str.slice(1, str.length - 1);
   
   };

   // word mixer.
   function findOdd(A) {
    const map = new Map();
    
    for (let i = 0; i <A.length; i++){
      if (!map.has(A[i])) map.set(A[i], 1);
      else {
        map.set(A[i], map.get(A[i]) + 1);
      }
    }
      for (let [key, value] of map){
        if (value % 2 !== 0) return key;
      }
    return 0;
  }


// Create Phone Number
function createPhoneNumber(numbers){
  return "(" + numbers[0] + numbers[1] + numbers[2] + ") " +
      numbers[3] + numbers[4] + numbers[5] + "-" +
      numbers[6] + numbers[7] + numbers[8] + numbers[9];
    
}

// Sum of two lowest positive integers
function sumTwoSmallestNumbers(numbers) {  
  //Code here
  numbers = numbers.sort(function(a,b){return a - b;});
  return numbers[0] + numbers[1];
};

//Shortest Word
function findShort(s){
  
  let words = s.split(" ")
  let shortest = words[0].length
  let word
  
  for(let i = 1; i < words.length; i++){
    word = words[i].length
    if(shortest > word) shortest = word
  }
  
  return shortest
}
//Highest and Lowest
function highAndLow(numbers){
  num=numbers.split(' ');
  var max = parseInt(num[0]);
  var min = parseInt(num[0]);
  for (var i = 0; i <= num.length; i++) {
    if(parseInt(num[i]) > max){
      max = parseInt(num[i]);
    }
  }
  for (var i = 0; i <= num.length; i++) {
    if(parseInt(num[i]) < min){
      min = parseInt(num[i]);
    } 
 }
 return (max + " " + min);
}

// Persistent Bugger.
function persistence(num) {
  //code me
 let counter = 0;
 
 let digits = num.toString().split("");
 
 while (digits.length > 1){
   let results = 1;
   
   for(let i = 0; i < digits.length; i++){
     results = results * digits[i];
   }
   
   digits = results.toString().split("");
   counter = counter + 1;
 }
 return counter;
}

//IQ Test
function iqTest(numbers){
  // ...
  numbers = numbers.split(' ');
  
  const even = {
    count:0,
    lastIndex: -1
  };
  const odd = {
    count:0,
    lastIndex: -1
  };
  
  for (let i = 0; i < numbers.length; i++) {
    const currentNumber = numbers[i];
    
    if (currentNumber % 2 == 0) {
      even.count++;
      even.lastIndex = i + 1;
    } else {
      odd.count++;
      odd.lastIndex = i + 1;
    }
  }
  if (even.count == 1){
    
    return even.lastIndex;
    }
  else{
    return odd.lastIndex
  }
}

// Convert string to camel case
function toCamelCase(str){
  return str.split(/[,_-]+/).map( (s, i) => i !== 0 ? s.charAt(0).toUpperCase() + s.slice(1) : s).join('');
}



///longest word
function longestWord(text){
  var word = 0;
  let splitStr = text.split(' ');
  for(var i = 0; i < splitStr.length; i++){
    if(splitStr[i].length > word){
      word = splitStr[i].length;
    }
    return word;
}}

//// get Average.

function getAverage(marks){
  //TODO : No neg numbers no modifiying ; sum > int math.floor int reduce(), accumulator, currentvalue acc - current , / by arr.length

}

Test.assertEquals(getAverage([2,2,2,2]),2);
Test.assertEquals(getAverage([1,2,3,4,5,]),3);
Test.assertEquals(getAverage([1,1,1,1,1,1,1,2]),1);


/// strtoCamelCase
function toCamelCase(str){
  return str.split(/[,_-]+/).map( (s, i) => i !== 0 ? s.charAt(0).toUpperCase() + s.slice(1) : s).join('');
}

/// Convert to Binary
function toBinary(n){
  return +n.toString(2);
}

/// find multiples of a number
function findMultiples(integer, limit) {
  let arr = [];
  for(let i = integer; i <= limit; i++){
    arr.push(i)
  }
  return arr.filter(x => x % integer === 0)
}

/// Parse float
function parseF(s) {
  if (Number.isNaN(parseFloat(s))){
    return null
  }
  else {
    return parseFloat(s)
  }
}
