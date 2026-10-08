console.log("Yello Tonny!") // in line comment 
/* this is a 
multi line comment 
method */
// var == 4l;
/* data types :
undefined, null, boolean, string, symbol, number, and object, variables
*/

var myname = "Moti";
myname = 8 ;
// var can be used anywhere 
let ourName = "Free chat";
// let can be used within the scope of where we declare 
const pi = 3.14;
// cannot be changed 
// storing values with assignement operator
var a; // declaring 
var b = 2; // declaring and assigning 
console.log(a)
a = 7;
b = a;
console.log(a) // to see things in console
// initializing variables w/ assignment operator
// initialize these three variables 
var a = 5;
var b = 3;
var c = "I am a";
// Do not change code below this line
a = a+1;
b = b+5;
c = c + " String!";
console.log(a)
console.log(b)
console.log(c)
// case sensitiviy in variables
// Declaration
var studlyCapVar;
var properCamelCase;
var mostMeanGuy;
// Assignments
studlyCapVar = 10;
properCamelCase = "A string";
mostMeanGuy = 8888;
// adding numbers
var sum = 9 + 9;
console.log(sum)
// subtracting numbers 
var difference = 1111 - 0 ;
console.log(difference)
// product and divide in similar fashion 
// incrementing 
var myVar = 99;
myVar = myVar +1; // myVar++;
console.log(myVar)
// decrementing 
var myVar = 100;
myVar = myVar -1; // myVar--;
console.log(myVar)
// decimal addition, product, divide(/), remainder
var remainder;
remainder = 11%3;
console.log(remainder)
// compound assignment with argumented addition
var a = 5;
var b = 3;
var c = 7;
// Do not change code below this line
a+= 8; //a = a+8;
b+= 10; //b = b+9;
c+= 12; //c = c +7;
console.log(a)
console.log(b)
console.log(c)

var a = 55;
var b = 63;
var c = 777;
// Do not change code below this line
a-= 8; //a = a+8;
b-= 10; //b = b+9;
c-= 12; //c = c +7;
console.log(a)
console.log(b)
console.log(c)
// multipication 
// Division
// escaping quotes 
var myStr = "My name is \"most mean guy\" with attitude";
console.log(myStr) // "\" is an escape character

var myStr = 'My name is "mmg" with att.';
console.log(myStr)

var myStr = `'My name is "mmg" with att.'`;
console.log(myStr) // backticks``
// escape sequences in strings 
/***
code output 
\'  single quote
\" double quote
\\ backslash
\n newline 
\r carriage return 
\t tab 
\b backspace 
\f from feed
***/
var mystr = "Firstline\n\t\\secondline\nThirdline";
console.log(mystr)
// example 
// var ourName = "Most Mean Guy";
// var ourStr = "Hello, my name is " + ourName + "How are you?";
// modify code below this line
var myName = "Mean";
var myStr = "My name is most " + myName + " guy and I am good!";
console.log(myStr)
// length 
var lastNameLength = 0;
var lastname = "MostMeanGuy";
lastNameLength = lastname.length;
console.log(lastNameLength)

var firstletteroflastname = "";
var lastname = "MostMeanGuy";
firstletteroflastname = lastname[0];
console.log(firstletteroflastname)
// strings are immuatble means letter cannot be changed 
// bracket notation to find nth element 
var lastname = "MostMeanGuy";
fouthletteroflastname = lastname[3];
console.log(fouthletteroflastname)
// bracket notation to find last element 
var lastname = "MostMeanGuy";
lastletteroflastname = lastname[lastname.length-1];
console.log(lastletteroflastname)

// bracket notation to find second last element 
var lastname = "MostMeanGuy";
secondlastletteroflastname = lastname[lastname.length-2];
console.log(secondlastletteroflastname) 
// function 
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
var result = ""
result += "The " + myAdjective + " " + myNoun + " " + myVerb + " to the store " + myAdverb 
return result;
}

console.log(wordBlanks("dog", "big", "ran", "quickly"));
console.log(wordBlanks("bike", "fast", "flew", "rapidly"));
var ourArray = ["John", 23];
var myArray = ["Quincy", 1];
console.log(myArray)
// nested array 
var myArray = [["most people are", 100], ["only few people are", 5], ["But there is only one", 1]]
console.log(myArray)

// modify array
var myArray = [12, 13, 14];
myArray[1] = 15;
console.log(myArray)
var myArray = [[1,2], [5,6,7],[9,8,0]];
var myData = myArray[1][2];
console.log(myData);
// manipulate Arrays with push() function 
var myArray = [["john", 23],["cat", 2]];
myArray.push(["dog",13]);
console.log(myArray)

// remove an item with pop function 
var myArray = [["john", 23],["cat", 2]];
var removedfrommyarray = myArray.pop()
console.log(removedfrommyarray) 
// shift() to get the remaining 
var myArray = [["john", 23],["cat", 2]];
var removedfrommyarray = myArray.shift()
console.log(removedfrommyarray) 
// unshift 
var myArray = [["john", 23],["dog", 2]];
myArray.shift()
myArray.unshift(["Siddharth", 77]);
console.log(myArray) 

// use function to use a feature a multiple time 
function ourReusableFunction() {
 console.log("Heyya, MMG!")
};
ourReusableFunction();
ourReusableFunction();
ourReusableFunction();

// use function to use a feature a multiple time 
function functionwithargs(a,b) {
 console.log(a+b)
};
functionwithargs(33,44);
// Global scope and function 
var myGlobal = 10;
function fun1() {
  oopsGlobal = 5;
  
}
function fun2() {
  var output = "";
  if(typeof myGlobal != "undefined"){
    output+= "myGlobal: " + myGlobal;
  }
  if(typeof oopsGlobal != "undefined"){
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}
fun1();
fun2();
// local scope 
function myLocalscope() {
  var myVar = 5;
  console.log(myVar);
}

myLocalscope() 
// we can't access myvar out of function 
var outerwear = "T - Shirt";
function myOutfit() {
  var outerwear = "sweater";
  return outerwear;
}
console.log(myOutfit());
console.log(outerwear);
//Return a value from return statement 
function returnvalue(num){
  return num - 7;
}
console.log(returnvalue(1118));
// understanding undefined value returned from a function
sum = 0; // global variable
function addfive(){
  sum+=5
}
console.log(addfive())  
// assignment with a return value 
var changed  = 0;
function change(num){
 return (num + 5)/3;
}
changed = change(10);
console.log(changed)
// stand in line 
function nextInLine(arr, item){
  arr.push(item);
  return arr.shift();
}

var testArr = [1,2,3,4,5];
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

// Boolean

function welcomeToBoolean() {
  return true;
}
console.log(welcomeToBoolean())
//use conditional logic with if statements
function trueorfalse(isittrue){
  if(isittrue) {
    return "Yes, it is true"
  }
  return "No, it is not true"
}
console.log(trueorfalse(true));

// comparison with equal operator 
function testEqual1(val){
  if(val==32){
    return "Equal";
  }
  return "Not Equal";
}
console.log(testEqual1(10));

// == equal operator and = assignemnt 
// comparison with strict equal operator 

function testEqual(val){
  if(val===10){
    return "Equal";
  }
  return "Not Equal";
}
console.log(testEqual(10));
// practice different values
function compareEquality(a,b) {
  if (a==b){
    return "Equal";
  }
  return "Not Equal";
}
console.log(compareEquality(5,"5"))
function compareEquality1(a,b) {
  if (a===b){
    return "Equal";
  }
  return "Not Equal";
}
console.log(compareEquality1(5,"5"))
// comparison notequal 
function testnotequal(val){
  if(val != 99){
    
    return "Not Equal";
  }
  return "Equal"
}
console.log(testnotequal(99))

// comaprison with logical operator 
function greaterthan(val){
  if(val > 100) {
    return "Over 100"
  }
  if (val >10 ){
    return "Over 10"
  }
  return "10 or Under";
}
console.log(greaterthan(10))
console.log(greaterthan(101))
console.log(greaterthan(11))
// two things check
function testLogicalAnd(val) {

  if (val>=10){
    if (val<=15){
      return "Yes"
    }
  }
  return "No"
}
console.log(testLogicalAnd(12))
console.log(testLogicalAnd(16))
function testLogicalAnd1(val) {

  if (val>=10 && val<=15){
    return "Yes"
  }
  return "No"
}
console.log(testLogicalAnd1(19))


function testLogicalor(val) {

  if (val >= 10 || val <=15){
    return "Inside"
  }
  return "Outside"
}
console.log(testLogicalor(13))
console.log(testLogicalor(9))

function testelse(val){
  var result = "";
if (val > 5) {
  result = "Bigger than 5"
} else {
 result = "Less than 5 or 5 "
}
return result; 
}
console.log(testelse(4))

// else ifs 
function testelse1(val){
  var result = "";
if (val > 10) {
  result = "Bigger than 10"
} else if( val < 5) {
 result = "Less than 5"
} else {
  result = " Between 5 and 10"
}
return result; 
}
console.log(testelse1(8))
// logical order with if 
function testelse2(val){
  var result = "";
if (val < 5 ) {
  result = "less than 5"
} else if( val < 10) {
 result = "Less than 10"
} else {
  result = "Greater than 10"
}
return result; 
}
console.log(testelse2(4))
console.log(testelse2(11))

// chanied If 
function testsize(num){

  if(num < 5){
    return "Tiny"
  } else if (num < 10){
    return "Small"
  } else if (num < 15 ){
    return "Medium"
  } else if (num < 20){
    return "Large"
  } else {
  return " Huge "
  }
}
console.log(testsize(25))
// golf code 
var names = ["Hole-in-one!","Eagle","Birdie","Par", "Bogey", "Double Bogey", "Change Me"]

function golfScore(par, strokes){
  if (strokes== 1){
    return names[0];
  } else if (strokes <= par -2){
    return names[1];
  } else if ( strokes == par -1){
    return names[2]
  } else if (strokes == par ){
     return names[3]
  } else if (strokes == par +1){
    return names[4]
  } else if (strokes == par +2){
    return names[5]
  } 
  return " Change me";
}

console.log(golfScore(4,4))
console.log(golfScore(4,5))
console.log(golfScore(4,6))
console.log(golfScore(4,3))
console.log(golfScore(4,2))
// Switch statements
function caseInSwitch(val){
  var answer = "";
  switch(val){
    case 1:
      answer = "Alpha";
      break;
    case 2:
      answer = "Beta";
      break ;
    case 3:
      answer = "Gamma";
      break ;
    case 4:
      answer = "Delta";
      break;
  }
  return answer;
}
console.log(caseInSwitch(1))
console.log(caseInSwitch(4))

function switchOfStuff(val){
  var answer = "";
  switch(val){
    case "a":
      answer = "Apple";
      break;
    case "b":
      answer = "Boy";
      break ;
    case "c":
      answer = "Con Artist";
      break ;
    case "d":
      answer = "Don's time has started";
      break;
    default :
      answer = "Stuff"
  }
  return answer;
}
console.log(switchOfStuff("d"))
console.log(switchOfStuff("c"))
console.log(switchOfStuff("a"))
console.log(switchOfStuff(1))


function sequentialSizes(val){
  var answer = "";
  switch(val){
    case 1:
    case 2:
    case 3:
      answer = "Low";
      break;
    case 4:
    case 5:
    case 6:
      answer = "Mid";
      break ;
    case 7:
    case 8:
    case 9:
      answer = "High";
      break ;
    default :
      answer = "Contact Branch"
  }
  return answer;
}
console.log(sequentialSizes("d"))
console.log(sequentialSizes(4))
console.log(sequentialSizes())
console.log(sequentialSizes(7))
console.log(sequentialSizes(3))

function isLess(a,b){
  return a<b; 
}
console.log(isLess(4,5))

// returning early pattern from functions 
function abtest(a,b) {
 if(a<0 || b<0){
   return undefined;
 }   

return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}
console.log(abtest(2,2));
console.log(abtest(-2,2));
//counting cards 
var count = 0;
function cc(card){
switch(card){
  case 2:
  case 3:
  case 4:
  case 5:
  case 6:
    count++;
    break;
  case 10:
  case "J":
  case "Q":
  case "K":
  case "A":
    count--;
    break;
}
var holdbet = "Hold"
  if (count > 0){
    holdbet = "Bet"
  }
  return count + " " + holdbet;
}
console.log(cc(0))
console.log(cc(4))
console.log(cc("K"))
console.log(cc("J"))
console.log(cc("A"))
console.log(cc("Q"))
// objects
var myPac = {
  "name" :"Silver mosquito",
  "Legs" :8,
  "tails" :4,
  "Friends" : ["Effect"]
}
console.log(myPac)
// accessing object properties with dot notation
var testObj = {
  "hat" : "ballcap",
  "shirt" : "jersey",
  "shoes" : "cleats"
};

var hatValue = testObj.hat;
var shirtValue = testObj.shirt;

console.log(hatValue);
console.log(shirtValue);
console.log(testObj);

// accessing object properties with bracket notation
// requirement needs to have space within properties name

var testTObj = {
  "The hat" : "ballcap",
  "The shirt" : "jersey",
  "The shoes" : "cleats"
};

var hatValue = testTObj["The hat"];
var shirtValue = testTObj["The shirt"];

console.log(hatValue);
console.log(shirtValue);
console.log(testTObj);

//Accessing object properties with variables 


var testNObj = {
  12 : "ballcap",
  16 : "jersey",
  19 : "cleats"
};

var playerNumber = 19;
var NValue = testNObj[playerNumber];
console.log(NValue);

//Updating Object Properties 
var myPac = {
  "name" : "coder",
  "legs" : 4,
  "tails" : 1,
  "friends" : ["good russians"]
  }

myPac.name = "Happy Coder"
console.log(myPac);
// Add new properties to an object 
var myPac1 = {
  "name" : "coder",
  "legs" : 4,
  "tails" : 1,
  "friends" : ["good russians"]
  }
myPac1.name = "Happy Coder"
myPac1.drink = "Whiskey"
console.log(myPac1);
console.log(myPac1.name);
console.log(myPac1.drink);
//delete properties from object 
var myPac2 = {
  "name" : "coder",
  "legs" : 4,
  "tails" : 1,
  "friends" : ["good russians"]
  }
myPac2.name = "Happy Coder"
myPac2.drink = "Whiskey"
delete myPac2.tails; 
console.log(myPac2);
console.log(myPac2.name);
console.log(myPac2.drink);

// using objects for lookup
// instead of using 
function phoneticLookup(val){
  var result = "";
  // switch(val){
  //   case 1:
  //     answer = "Alpha";
  //     break;
  //   case 2:
  //     answer = "Beta";
  //     break ;
  //   case 3:
  //     answer = "Gamma";
  //     break ;
  //   case 4:
  //     answer = "Delta";
  //     break;
  // }

  var lookup = {
    "alpha" : "Adams",
    "bravo" : "Boston",
  "Charlie": "Chicago"
  };
  result = lookup[val];
  return result;
}

console.log(phoneticLookup("Charlie"))

// hasOwnProperty

var lookup = {
    "alpha" : "Adams",
    "bravo" : "Boston",
  "Charlie": "Chicago"
  };
function checkobjprop(prop) {
  if(lookup.hasOwnProperty(prop)){
    return lookup[prop];
  } else {
    return "Not Found"
  }
}
console.log(checkobjprop("Charlie"))
console.log(checkobjprop("Mike"))
// Manipulate complex objects

var myMusic = [
  {
    "artist" : "kayne west",
    "format" : [
      "CD",
      "8T"
    ],
    "gold" : true
  },
  {
    "artist" : "MMG",
    "format" : [
      "CD",
      "8T"
    ]
  }
];
console.log(myMusic)
//accessing nested objects
var mystore = {
  "car" : {
    "inside" : {
      "glove box" : "maps"
    }
  }
};
var gloveBoxContents = mystore.car.inside["glove box"];
console.log(gloveBoxContents);
// Accessing nested arrays 
var myMusic1 = [
  {
    "artist" : "kayne west",
    "format" : [
      "CD",
      "8T"
    ],
    "gold" : true
  },
  {
    "artist" : "MMG",
    "format" : [
      "CD",
      "8T"
    ]
  }
]; 
var secondartist = myMusic1[1].format[1]
console.log(secondartist);
// 
var collection = {
  "1234" : {
    "album" : "All of the lights",
    "artist" : "Kayne West",
    "tracks" : [
      "On God",
      "Life of the party"
    ]
  },
    "1256" : {
    "album" : "Gradution",
    "artist" : "Kayne West",
    "tracks" : [
      "Runaway",
      "stupid T"
    ]
  },
    "1567" : {
    "album" : "Sun Light",
    "artist" : "Kayne West",
    "tracks" : [
      "no truth",
      "Monster"
    ]
  },
      "1999" : {
    "album" : "prime minister",
    "artist" : "MMG",
    "tracks" : [
      "Illusions",
      "Mirrors"
    ]
  },
        "1991" : {
    "album" : "Calling god"
  }
};

var collectioncopy = JSON.parse(JSON.stringify(collection));
function updateRecords(id, prop, value) {
  if(value ==="") {
    delete collection[id][prop]
  } else if (prop === "tracks") {
    collection[id][prop] = collection[id][prop] || [];
    collection[id][prop].push(value);
  } else {
    collection[id][prop] = value;
  }
  
  return collection;
}
console.log(updateRecords(1991,"album","power"))
console.log(updateRecords(1999, "artist", "Calling god"))
console.log(updateRecords(1999, "tracks", "Black magic"))
console.log(updateRecords(1999, "tracks", "Om shanti Ram ji")) 
console.log(updateRecords(1999, "tracks", "Om shanti radhe ji")) 
console.log(updateRecords(1999, "tracks", "History needs an example")) 
console.log(updateRecords(1999, "tracks", "Only Ravana lives")) 
console.log(updateRecords(1999, "tracks", "Wake up Siddhartha")) 
console.log(updateRecords(1999, "tracks", "It's your time MMG")) 
console.log(updateRecords(1999, "artist", "MMG")) 

//iterate while loop 


var myArray = [];
var i = 0 ;
while(i < 5){
  myArray.push(i)
  i++;
}
console.log(myArray)

var myArray = [];
var i = 5 ;
while(i < 10){
  myArray.push(i)
  i++;
}
console.log(myArray)

// for loop 

var newArray = [];

// for (initilization, condition, expression)
for(var i =13; i<23 ; i++){
  newArray.push(i)
}
console.log(newArray)

var hyArray = []
for(var i=1;i<10;i+=2){
  hyArray.push(i)  
}
console.log(hyArray)

var hyArray1 = []
for(var i=9; i>0; i -= 2){
  hyArray1.push(i)  
}
console.log(hyArray1)

// iterate through an array by using foor loop 
var finArray = [4,7,9,10]
fintotal = 0
for (var i =0; i< finArray.length; i++){
  fintotal += finArray[i];
}
console.log(fintotal)

// nested array with nested for loop 
function multiplyArr(arr) {
  var product =1;
  for(var i=0; i<arr.length;i++){
    for (var j=0; j<arr[i].length; j++){
      product *= arr[i][j]
    }
  }
  return product;
}

var product = multiplyArr([[1,2],[3,4],[5,6,7]]);
console.log(product)
// iterate through do and while loop  
var gyArray = [];
var i =10 ;
while(i<5){
  gyArray.push(i);
  i++;
}

console.log(i, gyArray)

var dyArray = [];
var i =10 ;
do {
  dyArray.push(i);
  i++;
}while(i<5)

console.log(i, dyArray)

// Profile lookup 
var contacts = [{ 
  "firstname" : "Akira",
  "lastname" : "Laine",
  "number"   : "0987363",
  "likes"    :["Pizza", "Cookies", "AI engineering"]
},
{ 
  "firstname" : "Harry",
  "lastname" : "Potter",
  "number"   : "09903723",
  "likes"    :["Ice cream", "Brownie", "Automobile engineering"]
},
{ 
  "firstname" : "James",
  "lastname" : "Scott",
  "number"   : "895673",
  "likes"    :["Wrap", "Shake", "Bomb manufacturing"]
},             
{ 
  "firstname" : "Robert",
  "lastname" : "froast",
  "number"   : "unknown",
  "likes"    :["Poem", "milk", "Flying Cars"]
} ]

function lookupvalue(name, prop){
  for(var i =0; i < contacts.length ; i++){
    if(contacts[i].firstname===name){
      return contacts[i][prop] || "No such property"
      
    }
  }
return "No Such Contact";
}

var data = lookupvalue("Harry","Choices")
console.log(data)
var data = lookupvalue("Harry","likes")
console.log(data)
var data1 = lookupvalue("Robert","likes")
console.log(data1)
var data1 = lookupvalue("James","likes")
console.log(data1)


function randomFraction(){


  return Math.random();
} 

console.log(randomFraction());
console.log(randomFraction());
console.log(randomFraction());

var randomNumbtw0and19 = Math.floor(Math.random()*20);
function randomWholenum(){

  return Math.floor(Math.random()*10);
}
console.log(randomWholenum())
console.log(randomWholenum())
console.log(randomWholenum())
console.log(randomWholenum())
// generate random whole numbers within a range
function randomRange(myMin, myMax){
  return Math.floor(Math.random()*(myMax - myMin +1)) +myMin;
}
var myRandom = randomRange(5,7);
console.log(myRandom)
console.log(myRandom)

//parseIn function - takes string and convert into integer
function convertToint(str){
  return parseInt(str);
}

var mytype = convertToint("677");
console.log(mytype)

//use parseInt function with a radix
function converttoint(str){
  return parseInt(str,2);
}

var myType = converttoint("10011");
console.log(myType)
//ternary operator - one line if else operation 
// condition ? statement -if-true : statement-if-false;

function checkTEqual(a,b){
return a===b ? true : false;
}

console.log(checkTEqual(8,8))


function checkEqual(a,b){
  if(a===b){
    return true;
  }
  else {
    return false;
  }
}

console.log(checkEqual(8,9))


//multiple ternary operator
function checkSign(num){
  return num>0 ? "psotive" : num<0 ? "negative" : "zero"  
}

console.log(checkSign(10))
console.log(checkSign(-10))

//difference btw var and let 

// let catName = "Quincy";
// let quote;

// let catName = "Gigi"
// function cattalk() {
//   "use strict";

//   catName = "Oliver";
//   quote = catName + "Says Meow!";
// }

// console.log(cattalk())
// we don't want to define a var name twice 
let catName = "Quincy";
let quote;

catName = "Gigi" ;
// we use strict to avoid error in code 
function caTtalk() {
  "use strict";

  catName = "Oliver";
  quote = catName + "Says Meow!";
}

console.log(caTtalk())


// compare scopes of var and let keywords

function checkScope() {
  "use strict";
var i = "function scope";
  if(true){
    i="block scope";
    console.log("Block scope i is:", i)
    
  }
  console.log("Function scope i is:", i)
  return i
}

console.log(checkScope())


function checkScope2() {
  "use strict";
let i = "function scope";
  if(true){
    let i="block scope";
    console.log("Block scope i is:", i)
    
  }
  console.log("Function scope i is:", i)
  return i
}

console.log(checkScope2())


function checkScope3() {
  "use strict";
  if(true){
    var i="block scope";
    console.log("Block scope i is:", i)
    
  }
  console.log("Function scope i is:", i)
  return i
}

console.log(checkScope3())


function checkScope3() {
  "use strict";
  if(true){
    let u="block scope";
    console.log("Block scope u is:", u)
    
  }
  // console.log("Function scope u is:", u)
  // return u
}

console.log(checkScope3())

// const - is useful in case we need only  a read variable

function printManytimes(str){
  "use Strict";
  var sentence = str + " is cool!";
  sentence = str + " is amazing!"

  for(var i = 0; i<str.length; i+2){
    console.log(sentence);
  }
}
printManytimes("freeCodeCamp")


console.log("Yello Tonny!")

console.log("Yello Tonny monatana!")

console.log("Hello Tonny monatana!")

// call it a day 










