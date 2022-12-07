function sum(a,b){
    return a + b
}

//or

let sum2 = (a,b) => a + b //when we remove the function keyword the variable needs to be declared using let. no need for {}. anything after the arrow is automatically returned. 


//=========================================

function isPositive(number){
    return number >= 0
}

//or

let isPositive2 = number => number >= 0 //like above "function" keyword not needed. use let to declare. remove {}. since you only have one parameter, you don't need () around your argument "number".

//=========================================
function randomNumber(){
    return Math.random
}

//or

let randomNumber2 = () => Math.random


//=========================================
document.addEventListener('click', function(){
    console.log('Click')
})

//or

document.addEventListener('click', () => console.log('Click'))

//refresher: https://youtu.be/h33Srr5J9nY