const numArray = [ 2, 5, 9, 12, 208, 333, 18, 11, 0] //Create a function that returns the sum of only the odd numbers.

function sumOdds(arr) { //the long way
    oddsOnly = []
    for(var i=0; i<arr.length; i++) {
        if(arr[i]%2!== 0){oddsOnly.push(arr[i])} //i feel like i can semi sight read arrow functions but i don't know where to begin off top..
    }
    sum = oddsOnly.reduce((acc, val) => {return acc + val},0) //..found this syntax on google tho
    console.log("odds: ", oddsOnly," sum: ", sum)
}
sumOdds(numArray)
