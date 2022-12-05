const numArray = [ 2, 5, 9, 12, 208, 333, 18, 11, 0] //Create a function that returns the sum of only the odd numbers.

const sumOdds = (arr) => { 
    oddsOnly = []
        for(var i=0; i<arr.length; i++){if(arr[i] % 2 !== 0) {oddsOnly.push(arr[i])}}
        sum = oddsOnly.reduce((acc, val) => {return acc + val},0) //reduce refresher: https://youtu.be/3mGbzELRBkM 
    console.log("odds of the given array are: ", oddsOnly," returning a sum of: ", sum)
}

sumOdds(numArray)


//ARROW FUNCTION PRACTICE..

function bob(a) {
    return a + 100;
}

//..is the same as

const bob2 = (a) => a + 100;