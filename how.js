var sum = 0;
for (i = 4; i < 8; i++) {
    if (i == 6) {
        continue; //The CONTINUE statement skips the iteration when i is equal to 6, so the value of 6 is **not** added to sum.
    }
    sum += i;
}
console.log(sum); // GPT explanation: The for loop above iterates over the values 4, 5, 7. The loop adds the values 4, 5, and 7 - skipping 6 (see: above) - to sum, which results in a value of: 16.

//================

// You need to plan a road trip. You are traveling at an average speed of 40 miles an hour. Given a distance in miles as input (the code to take input is already present), output to the console the time it will take you to cover it in minutes.

function main() {
    var distance = parseInt(readLine(), 10);
    var milesPerHr = 40;
    var distanceInHours = distance / milesPerHr;
    var distanceInMinutes = distanceInHours * 60;
    console.log(distanceInMinutes);
}

/* GPT: This function calculates the time it will take to travel a certain distance at an average speed of 40 miles per hour. It does this by first reading in a distance as input, which is expected to be a string representation of an integer. It then converts this string to an integer using the parseInt function, which takes two arguments: the string to be parsed, and the base of the number being parsed (in this case, 10 for base 10).

Next, the function defines a variable milesPerHr and assigns it the value 40. It then calculates the time it will take to travel the distance by dividing the distance by the speed (in miles per hour) and storing the result in a variable called distanceInHours.

Finally, the function converts the distance in hours to minutes by multiplying it by 60 and storing the result in a variable called distanceInMinutes. It then logs this value to the console using console.log.

So, for example, if the input distance is 120 miles, the function will calculate the time it will take to travel this distance as follows:

1. Convert the input string "120" to the integer 120 using parseInt.

2. Calculate the time it will take to travel the distance by dividing the distance by the speed: 120 / 40 = 3.

3. Calculate the distance in minutes by multiplying the distance in hours by 60: 3 * 60 = 180.

4. Log the value 180 to the console.

Therefore, if the input distance is 120 miles, the function will output 180 to the console.

*/


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
    let R = []; // Initialize an empty array to store the encrypted characters
    let L = str.length; // Get the length of the input string
    for (let i = 0; i < L; i++) { // Iterate over each character in the string
        const char = str.charCodeAt(i); // Get the character code for the current character
        if (char > 109 && char <= 122) // Check if the character code is between 109 and 122 (inclusive)
            R.push(String.fromCharCode(char - 13)); // If it is, shift the character code 13 places to the left and push the resulting character to the array
        else if (char >= 97 && char <= 109) // Check if the character code is between 97 and 109 (inclusive)
            R.push(String.fromCharCode(char + 13)); // If it is, shift the character code 13 places to the right and push the resulting character to the array

    } // If the character code is outside of the range 97-122, do nothing

    return R.join(''); // Join the array of encrypted characters into a single string and return it
}

let E = encrypt("hello");

console.log(E); //uryyb


/* In summary: The encrypt function takes a string as input and returns a new string with the characters rotated 13 places in the alphabet. For example, the letter "h" becomes "u" and the letter "z" becomes "m". Non-letter characters are not modified.

The function first initializes an empty array R to store the encrypted characters. It then iterates over each character in the input string and gets the character code for each character using the charCodeAt method.

If the character code is between 109 and 122 (inclusive), the function shifts the character code 13 places to the left and pushes the resulting character to the array. If the character code is between 97 and 109 (inclusive), the function shifts the character code 13 places to the right and pushes the resulting character to the array. If the character code is outside of the range 97-122, the function does nothing.

After the loop completes, the function joins the array of encrypted characters into a single string using the join method and returns the result. */