var sum = 0;
for (i = 4; i < 8; i++) {
    if (i == 6) {
        continue;
    }
    //console.log(sum);
    sum += i;
}
console.log(sum); // prints: 16?

//================

// You need to plan a road trip. You are traveling at an average speed of 40 miles an hour. Given a distance in miles as input (the code to take input is already present), output to the console the time it will take you to cover it in minutes.

function main() {
    var distance = parseInt(readLine(), 10);
    var milesPerHr = 40;
    var distanceInHours = distance / milesPerHr;
    var distanceInMinutes = distanceInHours * 60;
    console.log(distanceInMinutes);
}


//================

// The snail climbs up 7 feet each day and slips back 2 feet each night. How many days will it take the snail to get out of a well with the given depth?

function main() {
    var depth = parseInt(readLine(), 10);
    i = 0;
    for (; depth > 0;) {
        i++;
        depth -= 7
        if (depth > 0) {
            depth += 2
        }
    }
    console.log(i);
}

// Create a function called convert, which takes two parameters: the amount to convert, and the rate, and returns the resulting amount. The code to take the parameters as input and call the function is already present in the Playground.

function main() {
    var amount = parseFloat(readLine(), 10);
    var rate = parseFloat(readLine(), 10);

    console.log(convert(amount, rate));
}

// Create the function to make the code work.

function convert(amount, rate) {
    let cvt = amount * rate;
    return cvt;

}

// You are working on a Store Manager program, which stores the prices in an array.You need to add functionality to increase the prices by the given amount. The increase variable is taken from user input. You need to increase all the prices in the given array by that amount and output to the console the resulting array.

function main() {
    var increase = parseInt(readLine(), 10);
    var prices = [98.99, 15.2, 20, 1026];
    //your code goes here
    for (var i = 0; i <= prices.length - 1; i++) {
        prices[i] = prices[i] + increase;
    }
    console.log(prices);
}

//================

function encrypt(str) {
    let R = [];
    let L = str.length;

    for (let i = 0; i < L; i++) {
        const char = str.charCodeAt(i);
        if (char > 109 && char <= 122)
            R.push(String.fromCharCode(char - 13));
        else if (char >= 97 && char <= 109)
            R.push(String.fromCharCode(char + 13));
    }
    return R.join('');
}

let E = encrypt("hello");

console.log(E); //uryyb


