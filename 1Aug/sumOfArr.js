let nums = [1,4,6,8,5,6,84,687,2];
let sum = 0;
for(let i = 0; i < nums.length; i++) {
    sum += nums[i];
}
alert(`sum of Array is : ${sum}`);
let numsArray = [1,2,34,5,76,778,43,22,421,3,45,13];
let largestNum = numsArray[0];
for(let i of nums) {
    largestNum = Math.max(i,largestNum);
}
alert(`The largest num of Array is : ${largestNum}`);