
console.log("Assignment 1st swap two number without creating 3rd variables")
var num1 = 44;
var num2 = 33;
console.log("Before Swapping num1 is : "+num1+" and num2 is : "+ num2);
var num2 = (num1 + num2) - (num1 = num2);
console.log("After Swapping num1 is  : "+num1+" and num2 is : "+ num2);

console.log("Assignment 2nd Write a function to generate random string from a - z")

const generateRandomStr = function(length) {
      let randomStr = "";
      const characters = ["a", "b", "c", "d", "e", "f", "g","h","i","j", "k", "l", "m", "n", "o", "p","q","r","s", "t", "u", "v", "w", "x", "y","z"]; //Set of characters to chose from
      while(randomStr.length < length) {
        let random = Math.random();
        //Math.random returns between 0 and 1. 0 is possible 1 not included.
        random = random * characters.length;
        const random_index = Math.floor(random);
    
        const singleCharacter = characters[random_index];
        randomStr = randomStr + singleCharacter;
        //Pick a random character.
      }
    
      return randomStr;
    }
    
    console.log(generateRandomStr(5));