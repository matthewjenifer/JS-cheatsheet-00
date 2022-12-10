const numArray = [ 2, 5, 9, 12, 208, 333, 18, 11, 0] //Create a function that returns the sum of only the odd numbers.

const sumOdds = (arr) => { 
    oddsOnly = []
        for(i=0;i<arr.length;i++){arr[i]%2!==0?oddsOnly.push(arr[i]):0}
        sum = oddsOnly.reduce((acc,val) => {return acc+val},0) //refresher: https://youtu.be/3mGbzELRBkM 
    console.log("odds of the given array are: ", oddsOnly," returning a sum of: ", sum)
}

sumOdds(numArray)
console.log(numArray[4])//prints: 208

//==================

/* the 0 at the end of line 6 represents the initial value for the acc (i.e., accumulator) parameter in the reduce() method.

The reduce() method is a built-in JavaScript method that is used to reduce an array of values to a single value. It does this by applying a function to each element in the array, and the function takes two arguments: the acc parameter, which represents the accumulated value, and the val parameter, which represents the current element in the array.

In the given line of code, the reduce() method is used to sum the elements in the oddsOnly array. The acc parameter is used to keep track of the current sum, and the val parameter is used to represent the current element in the array. The function adds the current element val to the accumulated value acc, and it returns the result as the new value of acc. This process is repeated for each element in the array, and the final value of acc is the sum of all the elements in the array.

The 0 at the end of the line of code represents the initial value for the acc parameter. When the reduce() method is called, it will start with an acc value of 0, and it will use this value as the starting point for the accumulation. Then, as the function iterates over the elements in the array, it will add each element to the acc value, and the final result will be the sum of all the elements in the array.

Overall, the 0 in the given line of code is an important part of the reduce() method, as it sets the initial value for the accumulation process. Without this initial value, the reduce() method would not be able to sum the elements in the array correctly. */

