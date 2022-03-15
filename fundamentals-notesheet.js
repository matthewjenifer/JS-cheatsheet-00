//THIS SHEET COVERS A FEW TOPICS: Use "Ctrl-F" to jump ahead by topic..feel free to suggest simpler code/ways-to ..correct logical blind-spots..I intend to update this
//----------------------------------------------------------------------------------

//DATA TYPES
//VARIABLES
//CODE BLOCKS
//FUNCTIONS
//ARRAYS
//INDEXING
//IF-STATEMENTS 
//TERNARY OPERATORS
//LOGICAL OPERATORS
//CONDITIONALS 
//FOR-OR LOOPS 
//CLASSIC FOR LOOPS
//NESTED ARRAYS
//WHILE-LOOPS
//OBJECTS
//CLASS CONSTRUCTORS

//(VSCODE HACKS):
// Hold "alt" while clicking multiple places to delete/re-write several instances
// You can select one and  use ctrl + D to select the next ones


// -----------------------------------------------------------------------------------

console.log("sanity check") // this - console.log() - is your friend. use him to check your code. and sanity. 

//DATA TYPES ===========================================================
//number: 0 //this can be whole or decimal. positive or negative.
//string: 'zero' // letters, words, sentences..anything inside quotations is a string
//boolean: "true" || "false";
//null: // no value
//undefined:



//VARIABLES

//A variable allows you to reference the same piece of information multiple times. 
//In JS, variables can be defined using var, const, and let - then giving the variable a unique name. | JavaScript is sensitive, case sensitive that is. So variables like lastName and lastname are not the same.
// For example:

const vibes = 'oh its lit den'
var goodMusic = 'issa vibe'
var goodMusic = 'good shit' //because we used var(global scope), the variable can later receive a new value. 
//NOTE: this is also true for let(local scope), but NOT const
var goodmusic = 'dope' 
console.log(vibes) //PRINTS: 'its lit'
console.log(goodMusic) //PRINTS: 'good shit'
console.log(goodmusic) //PRINTS: 'dope'

//--or--

var y = 9; // Every written "instruction" is called a statement. JavaScript statements are separated by semicolons.
var x = y;
console.log(x) //PRINTS: 9

//SCOPE: In coding, scope determines where a variable can be used. Variables can have either global or local scope. A global variable can be used throughout the code. Local variables can only be used inside the block where it's declared. - For Ex:

var x = 17;
if (x > 10) {
    let x = 10;
}
console.log(x); //PRINTS: 17. The original value is printed, due to the scope of x when it is declared "10"



//...OH BTW: WHAT ARE CODE BLOCKS?

const forRealTho = {
    everything: 'inside these curly brackets is a block of code.' // a CODE BLOCK is a sequence of commands grouped inside curly brackets "{}"
};


//FUNCTIONS ============================================================

//A function tells a computer to do a certain thing. 
//All functions end with "()". Functions can take ARGUMENTS* to give the computer extra information. 
//For example:

function fightClub(shh) {
    console.log('..the first rule of fight club..')
} ///Here I am calling a function "fightClub", with an argument called: "shh". 

function insideTheseParenthesesIsAn(Argument) {} //ARGUMENTS
//An argument is extra information given to a function that tell it how to run. 
//Arguments are placed inside the parentheses of a function call. 
//NOTE: NOT ALL functions will require an argument, and some functions take multiple arguments. NOT TO BE CONFUSED WITH PARAMETERS


//LETS USE MATH
function multiplyMe(a, b, c) {
    return a * b * c; // When a return statement is used in a function body, the execution of the function is stopped. If specified, a given value is returned to the function caller. 
};
console.log(multiplyMe(3, 6, 9))

function purchase(itemName, quantity) {
    console.log(`here are my arguments: ${itemName} & ${quantity}`); // "arguments[0], arguments[1]" could replace "${itemName} & ${quantity}" and it would PRINT exactly the same. Parameters are the names. arguments are the values.
    console.log(arguments);
}

purchase('bag of chips', 2) // argument[0]: 'bag of chips', argument[1]: 2

function nowAddThisShitUp() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    console.log(sum)
}


nowAddThisShitUp(15, 30, 37, 38, 45, 47)

//Here's  an example using an arrow function..
//a coin toss game (heads or tails)
// node more than once and see if it changes..

YeVsDrake = () => {
    //if this ^^^ wasn't an arrow function, you would've wrote: function YeOrDrake() { }
    return (Math.floor(Math.random() * 2) == 0 ? 'YE' : 'DRAKE'); //This uses a TERNARY OPERATOR..

    //NOTE: The Math.floor() function returns the largest integer less than or equal to a given number.

    //NOTE: The Math.random() function returns a floating-point, pseudo-random number in the range 0 to less than 1 (inclusive of 0, but not 1) with approximately uniform distribution over that range — which you can then scale to your desired range. The implementation selects the initial seed to the random number generation algorithm; it cannot be chosen or reset by the user.
};

console.log(YeVsDrake())


//ARRAYS =============================================================

var thisIsAnArray = ['one', 'two', 'three']; //In JS an array is a list of items. Array can be found inside of regular brackets "[]". The items can be different data types: numbers, strings, and even other arrays. 
var fourFiveSixIsNestedHere = [1, 2, 3[4, 5, 6]]; //An array inside another array is called a NESTED array.

//INDEXING ============================================================

//In most programing languages(JS included), arrays are indexed starting at 0. - For Ex:

var happyMeal = [
    'drink', // index of 0
    'nuggets', // index of 1
    'fries', // index of 2
    'toy', // index of 3
    'hamburger' // index of 4
];
var iWantTheToyFirst = happyMeal[3]
console.log(iWantTheToyFirst) //PRINTS: toy

var J5 = 'ABC'; // STRINGS are indexed similarly.
var oneTwoThree = J5[3] // NOTE: J5(3) will print "undefined".. 
var soSimpleAs = J5[2] //..but an index of 2 will pluck "c" from a string of 3 characters: 'abc'
console.log(oneTwoThree)
console.log(soSimpleAs)


//IF-STATEMENTS ============================================================

//If statements allow you to run a specific section of code when a test is true. 
//The code inside the parentheses "()"" is the test. If the test is true then the code inside the block "{}"" will run. 
//If the test is not true, then the code inside the block doesn't run. 
//For Ex:

var aNickel = 'found a penny.';
if (aNickel === 5) { // "===": is an OPERATOR, not to be confused with "="... essentially it asks the computer if these two elements are equal each other
    console.log('Hey look, a nickel!')
}
if (aNickel !== 5) { // "!==": is the same as saying "doesn't equal"..more on that later..
    console.log('Bruh, Im looking for a nickel..')
};

//-- or --

var lemons = 'ripe';
var numOfLemons = 6;
if (lemons !== 'rotten') {
    if (numOfLemons > 5) {
        console.log('Lets make lemonade!')
    }
};

//TERNARY OPERATORS ======================================
//Ternary operators are a way to write IF/ELSE statements with less code ("?" = "if" , ":" = "else"). It begins with the test, then after the "?" symbol, is the code that runs if the test is true. The last part, after the ":" symbol, is the code that runs if the test is false. -  For Ex:

1 === 1 ? console.log('all is right in the world') : console.log('something is horribly wrong');

//THIS ^^^^^ is another way of writing the code seen below:

if (1 === 1) {
    console.log('all is right in the world');
} else {
    console.log('something is horribly wrong');
}

//LOGICAL OPERATORS: =================================== IF/ ELSE =============================


// "||" is the "or" operator: the or operator combines two statements into a true OR false value. 
//This means the total value will become true as long as one side of the operator registers as true. 
//another way or saying that: the cumulative statement can only become false if both sides of || are false.
//For Ex:

if (2 === 4 || 1 + 1 === 2) {
    console.log('one of these is true..')
} else {
    console.log('both are false.')
};

// "===", "!==", ">", "<"

// ANOTHER OPERATOR is "&&": "&&" combines two statements into a true or false value. 
//In other words, both sides of && must be true in order for the code to run. 
//If both the left and right side are NOT true, the combined statement will register as false. 
//For Ex:

if (1 < 2 && 5 > 0) { // both sides are true, so console will PRINT Facts.
    console.log('Facts!')
} else {
    console.log('Nah B')
};

//THESE TYPES OF CODE ARE ALSO CALLED CONDITIONALS
// Conditionals are blocks of code that only runs IF conditions are met. - For Ex:

let age = 17

if (age >= 18) {
    console.log("access granted: age" + age)
} else {
    console.log("access denied: age " + age)
};


//FOR-OF LOOPS ===================================================================

// A loop repeats any section of code within curly brackets "{}"". 
//In JS, a for loop goes through each element in an array or string, repeating the code for each element 
//For Ex:

var deck = [
    'AoS',
    'KoH',
    'QoC',
    'AoD',
    'JoH'
];
for (var deal of deck) {
    console.log(shuffle(deck)) //PRINTS: each element [within array: deck], one after the other
};

// This is how the dealer works..
function shuffle(array) {
    let currentIndex = array.length,
        randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--; //NOTE: The decrement operator (--) subtracts one from its operand and returns a value.

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]
        ];
    }

    return array;
};

//CLASSIC FOR-LOOP
//In JS, a classic loop repeats the same code inside the block "{}" a specified number of times. 
//It is defined in three parts: 

console.log('Its the 10 Crack Commandments:');
//(for var i = 1;) is the first part. This happens before the loop starts and defines a looping variable. Like saying: i (at the beginning of this loop) starts with: 1 
for (var i = 1; i < 10; i = i + 1) {
    //(i < 10;) The second part is a test that determines if the loop should keep repeating: is i(1) less than ten? then continue..again, is i(2) less than 10? then continue..and so on...
    console.log(i);
    // (i = i + 1) And the third part updates the looping variable each time the loop repeats. *NOTE* (i = i++) === (i = i + 1)
};


// ANOTHER LOOP EXAMPLE WITH NESTED ARRAYS...

for (var firstNumber of [
        1,
        2
    ]) {
    for (var nestedNumber of [
            4,
            5
        ]) {
        console.log(firstNumber, nestedNumber); //PRINTS: 1 4, 1 5, 2 4, and then 2 5
    }
};


//WHILE-LOOPS
// As long as the condition is true, code is executed..
i = 0;
while (i < 20) {
    // stopping at 10
    if (i === 10) {
        console.log('WAKE UP!')
        break // We can break the loop with the keyword break, meeting a certain condition, or we no longer meet our while loop condition
    }
    console.log('Wake me when we get to 10')
    i++
};


//OBJECTS =============================================================
//An object stores multiple values that have property (or key) names. 
//This allows them to be easily accessed later in the code.

var horror = {
    psycho: 'oh God mother..blood!',
    nightmareOnElm: '1,2 freddy coming for you',
}; // "psycho" and "nightmareOnElm" are both PROPERTIES of the OBJECT named horror. both have strings as values.

console.log(horror.psycho) // DOT NOTATION is used to access a property of an object. see: objectName.propertyName 
console.log(typeof horror)//PRINTS element type (object)

//CLASS OBJECTS
class Person {

    greet(otherPerson) { //methods are (basically) functions when they exist within a CLass. (methods and functions are two sides of the same coin)
        console.log(`Hi ${otherPerson}`)
    }
    walk() {
        console.log('The weather is nice!')
    }
}

//we are instantiating - meaning we are creating a new unique object based on the parameters assigned
const ann = new Person()

ann.greet('Pat') //PRINT: Hi Pat
//the greet method will access the NEW Person() ann and return 'Hi ____" from within {} 
ann.walk() //PRINT: The weather is nice! 

//------------------------------------------------------------------------------------------

//CONSTRUCTORS ==============================================================
//A constructor is a special method for assigning properties to any object. These are automatically called when creating an object.
class Car {

    constructor(make, model, year, color) { //inside the parentheses we pass the properties of the parent object as parameters. 
        this.make = make; // The "this" keyword is used to attach the class with each constructor parameter.
        this.model = model;
        this.year = year;
        this.color = color;
    }

    drive() {
        console.log("You drive the", this.model);
    }
    brake() {
        console.log("You step on the", this.model + "'s brakes");
    }
    whatIsThis() {
        return this; // "this." references the parent object. ie: THIS<constructor<CAR(class)
    }

}

//------------------------------------------------------------------------------------------

let car1 = new Car("Ford", "Mustang", 2022, "Red");
let car2 = new Car("Chevy", "Corvette", 2021, "Blue");
console.log(car1.whatIsThis())

console.log(car2.make);
console.log(car2.model);
console.log(car2.year);
console.log(car2.color);

car1.drive();
car2.brake();
//------------------------------------------------------------------------------------------

let person = {
    firstName: 'Igor',
    intro: function () {
        console.log(`Hello I'm ${this.firstName}! I am ${this.age}`)
    },
    age: 999
}
person.intro()