const numArray = [ 2, 5, 9, 12, 208, 333, 18, 11, 0]; //Write a function called evenNumbers that takes an array of numbers as a parameter and returns only an array of even numbers.Do the same for odd numbers.

function evenNumbers(arr) {
    for(let val of arr){
        if(val % 2 == 0) {
            console.log(val + ' is even')
        } else {
            console.log(val + ' is odd')
        }
    }
};

evenNumbers(numArray);

// GPT simplified. 

function evenNumbers(nums) {
    return nums.filter(num => num % 2 === 0);
}

function oddNumbers(nums) {
    return nums.filter(num => num % 2 !== 0);
}


const evenNums = evenNumbers(numArray);
console.log(evenNums);  // [2, 12, 208, 18, 0]

const oddNums = oddNumbers(numArray);
console.log(oddNums);  // [5, 9, 333, 11]