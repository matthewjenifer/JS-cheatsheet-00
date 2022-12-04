const numArray = [ 2, 5, 9, 12, 208, 333, 18, 11, 0]; //Write a function called evenNumbers that takes an array of numbers as a parameter and returns only an array of even numbers.Do the same for odd numbers.

function evenNumbers() {
    for(let value of numArray){
        if(value % 2 == 0) {
            console.log(value + ' is even')
        }
    }
};

function oddNumbers() {
    for(let value of numArray){
        if(!(value % 2 == 0)) {
            console.log(value + ' is odd')
        }
    }
};

evenNumbers(numArray); // ..i thought this counted 
oddNumbers(); // ...until I realized I could still call without an argument 