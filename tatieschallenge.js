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

console.log("==== GPT simplified ==="); 

function evenNumbers2(nums) {
    return nums.filter(num => num % 2 === 0);
}

function oddNumbers(nums) {
    return nums.filter(num => num % 2 !== 0);
}


const evenNums = evenNumbers2(numArray);
console.log(evenNums);  // [2, 12, 208, 18, 0]

const oddNums = oddNumbers(numArray);
console.log(oddNums);  // [5, 9, 333, 11]

console.log("===== LINKED-IN: one liner ======") 

const isOddOrEven = (numArray, isOdd) => numArray.filter(value => isOdd ? value && value % 2 > 0 : value && value % 2 === 0); // Touqeer Shakeel from Linkedin

console.log(isOddOrEven(numArray, true)); // (GPT NOTES): Note that the second parameter of the isOddOrEven function is a boolean value that specifies whether to return the odd or even numbers from the array. When isOdd is true, the function returns the odd numbers. When isOdd is false, the function returns the even numbers.
console.log("===== OR STRINGIFIED... ======") 

console.log(`Even numbers: ${isOddOrEven(numArray, false)}\nOdd numbers: ${isOddOrEven(numArray, true)}`); // You can also print the results of both calls to isOddOrEven in a single line like this:
