const numArray = [ 2, 5, 9, 12, 208, 333, 18, 11, 0]; //Write a function called evenNumbers that takes an array of numbers as a parameter and returns only an array of even numbers.Do the same for odd numbers.

function evenNumbers(arr) {
    for(let val of arr){
        if(val % 2 == 0) {
            console.log(val + ' is even')
        }
    }
};

function oddNumbers(arr) {
    for(let val of arr){
        if(!(val % 2 == 0)) {
            console.log(val + ' is odd')
        }
    }
};

evenNumbers(numArray);
oddNumbers();