const numArray = [ 2, 5, 9, 12, 208, 333, 18, 11, 0] //Create a function that returns the sum of only the odd numbers.

const sumOdds = (arr) => { 
    oddsOnly = []
        for(i=0;i<arr.length;i++){arr[i]%2!==0?oddsOnly.push(arr[i]):0}
        sum = oddsOnly.reduce((acc,val) => {return acc+val},0) //refresher: https://youtu.be/3mGbzELRBkM 
    console.log("odds of the given array are: ", oddsOnly," returning a sum of: ", sum)
}

sumOdds(numArray)

//==================

// function main() {
//     var hour = parseInt(readLine(), 10);
//     // Your code goes here

//     time = hour >= 0 && hour <= 12 ? "am" : "pm";

//     console.log(time)
// }

