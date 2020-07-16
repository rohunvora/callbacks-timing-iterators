
function greeting(name, callback) {
  let sentence = 'Hello, my name is ' + name + ".";

  let otherSentence = callback();

  return sentence + otherSentence
}



function anotherGreeting() {
  let sentence = " I forgot, my last name";

  return sentence;
}

let myName = 'Rohun';
console.log(greeting(myName, anotherGreeting));

// Exercise
function printArray(array, callback) {
  for (let i = 0; i < array.length; i++) {
    let number = array[i]; // 1 , 2 , 3 ....

    console.log(number);
  }

  callback(array);
}

function printArrayAgain(array) {
  for (let i = 0; i< array.length; i++) {
    let number = array[i]; // 1, 2, 3, 4

    console.log(number); //1, 2, 3, 4
  }
}

const numbersArray = [1,2,3,4,5,6,7,8,9]

printArray(numbersArray, printArrayAgain);

// Exercise

function calculator(num1, num2, callbackOne, callbackTwo) {
  let result = callbackOne(num1, num2) + callbackTwo(num1, num2);
  // 82 - 72 = 10

  return result;

}

function addNumbers(num1, num2) {
  let result = num1 + num2;

  return result;
}

function subtractNumbers(num1, num2) {
  let result = num1 - num2;

  return result;
}

console.log(calculator(5,77, addNumbers, subtractNumbers));


// make a superHero function

// take in two callbacks

// return a string in each callback describing the superpower


function superHero(superPowerOne, superPowerTwo) {
  let allSuperPowers = superPowerOne() + ' and ' + superPowerTwo();
  return allSuperPowers;
}

function superPower1() {
  let result = 'flying';

  return result;
}

function superPower2() {
  let result = "super strength";
  return result;
}

console.log(superHero(superPower1, superPower2));

function blastOff() {
  let num = 0;

  for (let i =10; i >= num; i--) {
    console.log(i);
  }
  console.log('BLASTOFF!!!!');
}

setTimeout(blastOff, 3000);

// make a function that prints your name
// setTimeout and pass in function and a time

function printName() {
  let name = 'Rohun';
  console.log(name)
}

setTimeout(printName, 5000);

const collectables = ['Bomag', 'CMI Corp', 'Wirtgen', 'Catepillar']

collectables.forEach(function(element){
  if (element.length > 6) {
    console.log(element);
  }
});

//map

const someNumbers = [23, 65, 347, 34];

const addFive = someNumbers.map(function(element){
  return element + 5
});

console.log(addFive);

// filter

const filteredNumbers = someNumbers.filter(function(element){
  if (element > 50) {
    return element;
  }
});

console.log(filteredNumbers)
