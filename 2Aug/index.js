const fizBuzLimit = 200;
for(let i = 1; i < fizBuzLimit; i++) {
    if(i % 3 == 0 && i % 5 == 0) console.log("FizzBuzz");
    else if(i % 3 == 0) console.log("Fizz");
    else if(i % 5 == 0) console.log("Buzz");
}
const input = prompt();
const checkPrime = parseInt(input);
if(isNaN(checkPrime)){
    alert("not a number");
}
else{
   let  flag = true;
   if(checkPrime <= 1) flag = false;
    for(let i = 2; i <= checkPrime / 2; i ++) {
        if(checkPrime % i == 0) flag = false;
    }
    if(flag) alert("Prime Number");
    else alert("Not a Prime Number")
}