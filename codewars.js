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

/// Generate range of intergers

function generateRange(min, max, step){
  const array = [];
  for (let x = min;x <= max; x+=step) {
    array.push(x)
    }
  return array;
}

/// mean of array
function getAverage(marks){
  //TODO : calculate the downwar rounded average of the marks array
  let average = marks.reduce(function(a,b){return a + b})
  return Math.floor(average / marks.length)
}

/// invert values
function invert(array) {
  return array.map(item => item * -1);
}

/// sum the strings
let sumStr = (a,b) => (Number(a) + Number(b)).toString()

/// Super Duper Easy
function problem(x){
  return typeof x === "string" ? "Error" : 50 * x + 6;
}

/// Twice as old.

function twiceAsOld(dadAge, sonAge) {
  let beginnerAge = dadAge - sonAge
  let beginnerSonAge = 0
  while(beginnerSonAge * 2 !== beginnerAge){
    beginnerAge++ 
    beginnerSonAge++
  }
  return Math.abs(sonAge - beginnerSonAge)
}

function twiceAsOld(dadYearsOld, sonYearsOld) {
  return Math.abs(sonYearsOld * 2 - dadYearsOld)
}

/// Syntaxdebug
function main(a, b){ ['verb', 'noun']
  return a + b;
}

/// what is between
function between(a, b) {
  let arr = []
  for(let i = a; i <= b; i++){
    arr.push(i) 
  }
  return arr
}

function between(a, b) {
  return Array.from({length: b - a + 1}, (v, i) => i + a)
}

/// string repeat
let repeatStr = (n, s) => s.repeat(n)

/// Reversed sequence
const reverseSeq = n => {
  return [...Array(n + 1).keys()].sort((a,b) => b - a).slice(0, -1)
};

/// find smallest integer in array
class SmallestIntegerFinder {
  findSmallestInt(args) {
  let smallest = args.sort((a,b)=> a-b);
  return smallest[0];
  }
}

/// set alarm
function setAlarm(a, b){
  if(a === true && b === true){
    return false;
  }
  else if (a === true && b === false){
    return true;
  }
  else if(a === false && b === true){
    return false;
  }
  else {
      return false;
  }
}

/// is it even?

function testEven(n) {
  //Your awesome code here!
if (n % 2 === 0){
  return true;
}
else {
  return false;
  }
}

/// NBA avg per 48mins

function pointsPer48(ppg, mpg) {
  if(mpg === 0) return 0
  let result = (48 / mpg) * ppg
  return +result.toFixed(1)
}

/// Code Under Pressure
let doubleInteger = (i) => i*2

// USD > CNY https://www.codewars.com/kata/5977618080ef220766000022/train/javascript
function usdcny(usd) {
  let yuan = (usd * 6.75).toFixed(2)
  return `${yuan} Chinese Yuan`
}

// reak floor https://www.codewars.com/kata/574b3b1599d8f897470018f6/javascript
function getRealFloor(n) {
  console.log(n)
if (n >= 13) {
return n - 2
} else if (n > 0){
return n - 1
} else {
return n
}
}

//sumWithoutHighestAndLowestNumber

function sumArray(array) {
  if (array === null || array.length <= 2){
    return 0
  } else if (array.length === 3){
    array.sort((a,b) => a -b)
    return array[1]
  }else {
    return array.sort((a,b) => a - b).slice(1, array.length - 1).reduce( (a,b) => a + b)
  }
}


// Nameonbillboard https://www.codewars.com/kata/570e8ec4127ad143660001fd/solutions/javascript
function billboard(name, price = 30){
  let cost = 0
  for (let i = 1; i <= name.length; i++){cost += price}
  return cost
} 

// BMI https://www.codewars.com/kata/57a429e253ba3381850000fb
function bmi(weight, height) {
  let bmi = weight / (height * height)
  if (bmi <= 18.5) {
    return 'Underweight'
  }else if (bmi <= 25) {
    return 'Normal'
  }else if (bmi <= 30) {
    return 'Overweight'
  }else {
    return 'Obese'
  }
}

// iloveualotalttle https://www.codewars.com/kata/57f24e6a18e9fad8eb000296/train/javascript
const phrases = [
  'I love you',
  'a little',
  'a lot',
  'passionately',
  'madly',
  'not at all',
]

function howMuchILoveYou(n) {
   return phrases[(n - 1) % phrases.length] 
}

// willumakeit https://www.codewars.com/kata/5861d28f124b35723e00005e/solutions/javascript
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  return distanceToPump <= mpg * fuelLeft ? true : false
};

// urasquare https://www.codewars.com/kata/54c27a33fb7da0db0100040e

var isSquare = function(n){
  let squareRoot = Math.sqrt(n)
  return squareRoot * squareRoot === n && Number.isInteger(squareRoot) ? true : false
}

// theaveragelength https://www.codewars.com/kata/5a430359e1ce0e35540000b1/solutions/javascript/me/best_practice
function averageLength(arr) { 
  let sum = 0
  let avg = 0
  for ( let i = 0; i < arr.length; i++){
    sum += arr[i].length
  }
  avg = Math.round(sum /arr.length)
  return arr.map(x => x[0].repeat(avg))
}

// mostdigits  https://www.codewars.com/kata/58daa7617332e59593000006/train/javascript

function findLongest(array){
  let digitCount = 0
  let longestNum 
  console.log(array)
  array.forEach( x => {
    if(x.toString().length > digitCount){
      digitCount = x.toString().length
      longestNum = x
    }
  })
  return longestNum
}

// xsandos https://www.codewars.com/kata/55908aad6620c066bc00002a/solutions/javascript
function XO(str) {
  let xCount = 0
  let oCount = 0
  const strLowerCase = str.toLowerCase()
  for (let i = 0; i < str.length; i++) {
    if (strLowerCase.charAt(i) === 'x') {
      xCount += 1
    }
    if (strLowerCase.charAt(i) === 'o') {
      oCount += 1
    }
  } 
    if (xCount === oCount){
      return true
    } else {return false}
}

// anagram detection https://www.codewars.com/kata/529eef7a9194e0cbc1000255/solutions/javascript

var isAnagram = function(test, original) {
  const sanitizeString = function (str) {
    return str.toLowerCase().split('').sort().join('');
  }
  return sanitizeString(test) == sanitizeString(original)
};

// categorizenewmembers https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa/solutions/javascript
function openOrSenior(data){
  let arr = []
  data.forEach(element => element[0] >= 55 && element[1] > 7 ? arr.push('Senior') : arr.push('Open'))
  return arr
}

// integersbetweentwonumbers https://www.codewars.com/kata/598057c8d95a04f33f00004e/train/javascript
function range(startNum, endNum){
  let result = []
  for (let i = startNum + 1; i < endNum; i++){
    result.push(i)
  }
  return result
}
// descendningorder https://www.codewars.com/kata/5467e4d82edf8bbf40000155/solutions/javascript
function descendingOrder(n){
  return  Number(n.toString().split('').sort(function(a, b){return b-a}).join(''))
}

// filterthenum https://www.codewars.com/kata/55b051fac50a3292a9000025/train/javascript
var FilterString = function(value) {
  let numbers = value.split('').filter(x => Number.isInteger(Number(x)))
  return Number(numbers.join(''))
}

// friendorfoe https://www.codewars.com/kata/55b42574ff091733d900002f/solutions/javascript
function friend(friends){
  return friends.filter(x => (x.length === 4) && isNaN(x))
}


// middlecharacters https://www.codewars.com/kata/56747fd5cb988479af000028/train/javascript
function getMiddle(s) {
  let middle = Math.floor(s.length / 2)
  if (s.length % 2 === 0) {
    return s.charAt(middle -1) + s.charAt(middle)
  } else {
    return s.charAt(middle)
  }
}

//identifycase https://www.codewars.com/kata/5819a6fdc929bae4f5000a33/train/javascript
function id(c_str) {
  if(c_str.includes('-') && 
      !c_str.includes('_') && 
      c_str.split('').every(x => x === x.toLowerCase()) && 
      !c_str.includes('__') && 
      !c_str.includes('--')){
    return 'kebab'
  } else if(c_str.includes('_') && 
          !c_str.includes('-') && 
          c_str.split().every(x => x === x.toLowerCase() && 
          !c_str.includes('__'))){
    return 'snake'
  } else if(c_str.split('').some(x => x === x.toUpperCase() &&
          !c_str.includes('_') &&
          !c_str.includes('-') &&
          !c_str.includes('__'))){
    return 'camel'
  } else {
    return 'none'
  }
}

// listfiltering https://www.codewars.com/kata/53dbd5315a3c69eed20002dd/solutions/javascript
function filter_list(l) {
  return l.filter(x => typeof x === 'number')
}

// noonerize https://www.codewars.com/kata/56dbed3a13c2f61ae3000bcd/train/javascript
function noonerize(numbers) {
  let first = numbers[0].toString()
  let second = numbers[1].toString()
  if (numbers.some(x => typeof x !== 'number')){
    return 'invalid array'
  }
  return Math.abs(Number(second[0] + first.substring(1)) - Number(first[0] + second.substring(1)))
}

// numberofpeopleinbus https://www.codewars.com/kata/5648b12ce68d9daa6b000099/train/javascript

let number = function(busStops){
  let result = 0
  for(let i = 0; i < busStops.length; i++){
    result += busStops[i][0]
    result -= busStops[i][1]
  }
  return result
}

let number = function(busStops){
  return busStops.reduce((passengers, [getOn, getOff]) => passengers + getOn - getOff,0 )
}

// removeconsecutiveduplicatewords https://www.codewars.com/kata/5b39e91ee7a2c103300018b3/solutions/javascript

function removeDuplicateWord (str) {
  //str --> filter word is not the next word -> join
  return str.split(' ').filter((w, i, a) => w != a[i + 1]).join(' ')
}

// returnthemissingelement https://www.codewars.com/kata/5299413901337c637e000004/train/javascript

function getMissingElement(superImportantArray){
  return [1, 2, 3, 4, 5, 6, 7, 8, 9].reduce((a,b) => a + b) - superImportantArray.reduce((a,b) => a + b)
}

// sayHello https://www.codewars.com/kata/55955a48a4e9c1a77500005a/solutions/javascript

function greet(name) {
  if (name === ''){
    return null
  } else if (name === null){
    return null
  } else {
    return `hello ${name}!`
  }
}

// creditcardMask https://www.codewars.com/kata/5412509bd436bd33920011bc/train/javascript

function maskify(cc) {
  return cc.length > 4 ? cc.slice(-4).padStart(cc.length, "#") : cc
}

// twooldestagess  https://www.codewars.com/kata/511f11d355fe575d2c000001/train/javascript

function twoOldestAges(ages){
  return ages.sort((a,b) => a - b).slice(-2)
}

// javascriptarrayfilter https://www.codewars.com/kata/514a6336889283a3d2000001/solutions/javascript

function getEvenNumbers(numbersArray){
  return numbersArray.filter(x => x % 2 === 0)
}

//mumbling https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/solutions/javascript

function accum(s) {
  let mumble = []
  let arr = s.split('')
  for (let i = 0; i < arr.length; i++){
    mumble.push(arr[i].toUpperCase() + arr[i].toLowerCase().repeat(i))
  }
  return mumble.join('-')
}

// jadencasingstrings https://www.codewars.com/kata/5390bac347d09b7da40006f6
String.prototype.toJadenCase = function () {
  let wordsArray = this.toLowerCase().split(' ')
  let capsArray = []
  wordsArray.forEach(word =>  capsArray.push(word[0].toUpperCase() + word.slice(1)))
  return capsArray.join(' ')
};

String.prototype.toJadenCase = function () {
  return this.split(' ').map( word => word[0].toUpperCase() + word.slice(1)).join(' ')
};

// disemvoweltrolls https://www.codewars.com/kata/52fba66badcd10859f00097e/solutions/javascript

function disemvowel(str) {
  return str.replace(/a|e|i|o|u/ig, '')
}

// characterFreq https://www.codewars.com/kata/548ef5b7f33a646ea50000b2/train/javascript

function charFreq(message) {
  let charMap = {}
  for (let char of message){
    if (charMap.hasOwnProperty(char)){
      charMap[char]++
    }else {
      charMap[char] = 1
    }
  }
  return charMap
}

// acrosticreader https://www.codewars.com/kata/59b843b58bcb7766660000f6/solutions/javascript

function readOut(acrostic) {
  let arr = acrostic.map(word => word.charAt())
  return arr.join('')
}


//www.codewars.com/kata/570e8ec4127ad143660001fd/solutions/javascript


function billboard(name, price = 30){
  let cost = 0
  for (let i = 1; i <= name.length; i++){cost += price}
  return cost
} 


//www.codewars.com/kata/56b8903933dbe5831e000c76/train/javascript 
function spoonerize(words) {
  let arr = words.split(' ')
  return [arr[1][0] + arr[0].slice(1), arr[0][0] + arr[1].slice(1)].join(' ')
}


//www.codewars.com/kata/5819a6fdc929bae4f5000a33/train/javascript
function id(c_str) {
  if(c_str.includes('-') && 
      !c_str.includes('_') && 
      c_str.split('').every(x => x === x.toLowerCase()) && 
      !c_str.includes('__') && 
      !c_str.includes('--')){
    return 'kebab'
  } else if(c_str.includes('_') && 
          !c_str.includes('-') && 
          c_str.split().every(x => x === x.toLowerCase() && 
          !c_str.includes('__'))){
    return 'snake'
  } else if(c_str.split('').some(x => x === x.toUpperCase() &&
          !c_str.includes('_') &&
          !c_str.includes('-') &&
          !c_str.includes('__'))){
    return 'camel'
  } else {
    return 'none'
  }
}


//www.codewars.com/kata/5266876b8f4bf2da9b000362/train/javascript
function likes(names) {
  //find the length of the given names array -> output to differ depending on length
  if (names.length === 0){
    return 'no one' + ' likes this'
  }else if (names.length === 1){
    return names[0] + ' likes this'
  }else if (names.length === 2){
    return names[0] + ' and ' + names[1] + ' like this'
  }else if (names.length === 3){
    return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this'
  }else{
    return names[0] + ', ' + names[1] + ' and ' + `${names.length - 2} others` + ' like this'
  }
}

//www.codewars.com/kata/550554fd08b86f84fe000a58/train/javascript
function inArray(array1,array2){
  return array1.filter(sub => array2.some(x => x.includes(sub))
    ).sort()
}

//Alternative Solutions:
function inArray(a1, a2) {
  let str = a2.join(' ');
  return a1.filter(s => str.indexOf(s) !== -1).sort();
}

function inArray(array1,array2){
  return array1
    .filter(a1 => array2.find(a2 => a2.match(a1)))
    .sort()
}

