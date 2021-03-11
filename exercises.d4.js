/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- The solution must be available for the tutors by the end of the day (5PM CET)
- You can Google / use StackOverflow BUT we suggest you to use just the material provided
*/

/* EXERCISE 1
Write a function "area" which receives 2 parameters (l1,l2) and calculates the area of the associated rectangle.
*/

let rectangleSide1 = 20;
let rectangleSide2 = 30;

const area = function(l1,l2) {
  return l1 * l2;
};

const areaResult = area(rectangleSide1, rectangleSide2)
console.log(areaResult)

/* EXERCISE 2
Write a function "crazySum" which receives two integers. It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/

const crazysum = function(int1, int2) {
  if (int1 === int2) {
    let sum = int1+int2
    return sum
  } else {
    let sumX3 = (int1+int2)*3
    return sumX3
  }
}

console.log(crazysum(2,3))

/* EXERCISE 3
Write a function "crazyDiff" that computes the absolute difference between a given number and 19. 
It should return triple their absolute difference if the given number is greater than 19.
*/

const crazyDiff = function(firstNumber) {
  if (firstNumber <= 19) {
    let absoluteDifference = (firstNumber - 19) 
    return absoluteDifference
  } else {
    let absoluteDifferenceX3 = (firstNumber - 19)*3
    return absoluteDifferenceX3
  }
}

console.log(crazyDiff(4))

/* EXERCISE 4
Write a function "boundary" which accept an integer n and returns true if n is within 20 and 100 (included) or if it's equal to 400.
*/

const boundary = function(n) {
  if (n >= 20 && n <= 100 || n === 400) {
    return true
  } else {
    return false
  }
}

console.log(boundary(19))

/* EXERCISE 5
Write a function "strivify" which accepts a string.
It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/

const strivify = function(string) {
  if (string === "Strive") {
    return string
  }
  else {
    let newString = ("Strive " + string)
    return newString
  }
}

console.log(strivify("School"))

/* EXERCISE 6
Write a function "check3and7" which accepts a positive number and check if it is a multiple of 3 or a multiple of 7.
HINT: Module Operator
*/

const check3and7 = function (positiveNumber) {
  let numberDividedBy3 = positiveNumber / 3
  let numberDividedBy7 = positiveNumber / 7
  if (Number.isInteger(numberDividedBy3)) {
    console.log("Your number is a multiple of 3")
  } 
  else if (Number.isInteger(numberDividedBy7)) {
    console.log("Your number is a multiple of 7")
  } 
  else {
    console.log("Your number is not a multiple of 3 or 7")
  } 
}

console.log(check3and7(9))


/* EXERCISE 7
Write a function "reverseString" to programmatically reverse a given string (es.: Strive => evirtS).
*/

const reverseString = function(stringToReverse) {
  // Step 1. Use the split() method to return a new array
  let splitString = stringToReverse.split("");

  // Step 2. Use the reverse() method to reverse the new created array
  let reverseArray = splitString.reverse(); 

  // Step 3. Use the join() method to join all elements of the array into a string
  let joinArray = reverseArray.join(""); 

  //Step 4. Return the reversed string
  return joinArray; // "olleh"
}

console.log(reverseString("Ciao"))


/* EXERCISE 8
Write a function "upperFirst" to capitalize the first letter of each word of a given string passed as a parameter.
*/

const upperFirst = function(sentenceToCapitalize) {
  let splitSentence = sentenceToCapitalize.split(" ")
  //return splitSentence
  for(let i = 0; i < splitSentence.length; i++){
    splitSentence[i] = splitSentence[i].charAt(0).toUpperCase() + splitSentence[i].slice(1);
  }
  let joinSentence = splitSentence.join(" ")
  return joinSentence
}

console.log(upperFirst("ciao mamma guarda come mi diverto"))

/* EXERCISE 9
Write a function "cutString" to create a new string without the first and last character of a given string.
*/

const cutString = function(stringToCut) {
  let splitStringToCut = stringToCut.split("")
  splitStringToCut.pop()
  splitStringToCut.shift()
  let joinCuttedString = splitStringToCut.join("")
  return joinCuttedString
}

console.log(cutString("Ciao"))

/* EXERCISE 10
Write a function "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/

/*const giveMeRandom = function(randomNumber){
  let splitGiveMeRandom = randomNumber.split("")
  return splitGiveMeRandom
}

console.log(giveMeRandom(123455656))*/

/* WHEN YOU ARE FINISHED
Commit and push the code to your personal GitHub repository and share the link to your commit in Eduflow.
*/