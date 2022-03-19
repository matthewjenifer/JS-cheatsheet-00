
// Hold "alt" while clicking multiple places to delete/re-write several instances
// You can select one and  use ctrl + D to select the next ones

//what is eval? https://www.youtube.com/watch?v=M7VVxOEhi8E


// -----------------------------------------------------------------------------------

console.log("sanity check") // this - console.log() - is your friend. use him to check your code. and sanity. 

//DATA TYPES: The term data type refers to the types of values a program can work with. The sky's the limit with JavaScript variables, which can hold a bunch of different data types–numbers, strings, arrays, you name it.

//number: 0 //this can be whole or decimal. positive or negative.
//boolean: "true" || "false";
var booleansAre = true;
var trueOrFalse = false;
//null: // no value
//undefined:
//string: 'zero' // letters, words, sentences..anything inside quotations is a string

// the backslash (\) escape character comes to the rescue when you need to put quotes within strings (and a bunch of other situations) by transforming special characters into string characters: (\').
var howToQuoteMidString = 'Backslashes help you \'\'code\'\' quotation marks';
//document.write(howToQuoteMidString) // will print on screen
console.log(howToQuoteMidString) // will print in console

//other examples: (\n) = new line (think C++)..(\t) = tab.. https://www.tutorialspoint.com/escape-sequences-in-java

var modulusOperator = 26 % 6; // The Modulus (%) operator returns the division remainder (what’s left over). In JavaScript, we can use the modulus operator on integers AND on floating point numbers.
console.log(modulusOperator) // prints: 2

// Increment ++: The increment operator increases the numeric value of its operand by 1. When placed before the operand, it’ll return the incremented value. When placed after it, it’ll return the original value and then increments the operand. | Decrement --: The decrement operator decreases the numeric value of its operand by 1. When placed before the operand, it’ll return the decremented value. When placed after the operand, it’ll return the original value and then decrements the operand.

var g = 0;
var f = 9;
var g = f++; // note: at this line of code, the value of both g and f are redefined (see output)
console.log(g); //prints: 9
console.log(f); //prints: 10

//VARIABLES: Variables are containers for storing data values. The value of a variable can change throughout the program. Declaring a variable is as simple as using the keyword var.JavaScript is sensitive, case sensitive that is. So variables like lastName and lastname are not the same.

//A variable allows you to reference the same piece of information multiple times. 
//In JS, variables can be defined using var, const, and let - then giving the variable a unique name. | JavaScript is sensitive, case sensitive that is. So variables like lastName and lastname are not the same.
// For example:

const vibes = 'oh its lit den'
var goodMusic = 'issa vibe' //The first character of a variable name must be a letter, underscore (_), or a dollar sign ($) (Subsequent characters can be letters, digits, underscores, or dollar signs). The first character of a variable name can’t be a number. Variable names can’t include a mathematical or logical operator in their name. For instance, 2*something or this+that. Variable names can’t contain spaces. You’re not allowed to use any special symbols, like my#num, num%, etc. JavaScript is a hyphen free zone.
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
if (aNickel === 5) { // "===": is a COMPARISON OPERATOR, not to be confused with "="... essentially it asks the computer if these two elements are equal each other. You get either true or false. Here a string is being compared to a number  | https://github.com/matthewjenifer/explaining-equals-to-me/blob/main/equalsVsStrictEquals.js
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
        // alert('Lets make lemonade!') // alert() will generate a popup alert box that contains the information inside the parentheses.
    }
};

//ELSE-IF: The else if statement is useful because it lets us specify a new condition if the first condition is false.

var funkIsOnThe = 3;
if (funkIsOnThe == 1) {
    console.log("<h1>YabaDabaDoozieBaBa</h1>");
   //document.write("<h1>YabaDabaDoozieBaBa</h1>");
} else if (funkIsOnThe == 2) {
    console.log("<h2>Gadda Goo Gah</h2>");
    //document.write("<h2>Gadda Goo Gah</h2>");
} else { // The final else statement "ends" the else if statement and should be always written after the if and else if statements.
    console.log("<h2>Oh Word</h2>");
    //document.write("<h2>Oh Word</h2>");
}

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
    console.log("access granted: age " + age) // Concatenation: We can use concatenation (represented by the + sign) to build strings made up of multiple smaller strings, or by joining strings with other types.
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
    //(i < 10;) The second part is the condition for running the loop- a test that determines if the loop should keep repeating: is i(1) less than ten? then continue..again, is i(2) less than 10? then continue..and so on...
    console.log(i);
    // (i = i + 1) And the third part updates the looping variable each time the loop repeats. *NOTE* (i = i++) === (i = i + 1)
};

var j = 0; // since j is declared here, you wont need the first statement in the loop below. Statement 2 is optional, but only if you put a break inside the loop. Otherwise, the loop will never end!
for(;j<10;) { // Statement 3 is also optional, but only if you increment your values inside the loop. See below:
    console.log(j);
    j++;
}

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

for(i=0;i<5;i++){
    if(i==5) {
        break;
    } console.log(i+ "broke here")
}

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

//DO WHILE LOOPS
var j = 11;
do {
    console.log(j);
    j++;
} while(j<=17); // This loop will execute the code block once, before checking if the condition is true, and then it will repeat the loop as long as the condition is true. | The loop will always be executed at least once, even if the condition is false, because the code block is executed before the condition is tested.


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

var martin = 2;
switch(martin) { // we can use the switch statement to perform different actions based on different conditions. The switch expression is evaluated once. The value of the expression is compared with the values of each case, and if there’s a match, that block of code is executed. You can have as many case statements as you need.
        case 1:
        console.log("...n'if I tell you a duck could pull a truck, thenshutupnhookthasuckaup");
        break; // The break keyword essentially switches the switch statement off. Breaking out of the switch block stops the execution of more code and case testing inside the block. Usually, a break should be put in each case statement.
        case 2:
        console.log("Jerome we aint tryna be hangin wit you either man..");
        break;
        default: // Often there will be no match, but we still need the program to output something...for this we use the default keyword, which specifies the code to run if there’s no case match. The default block can be omitted, if there is no need to handle the case when no match is found.
        console.log("Yeah come on Jerome we aint got all night, now look you gonna help us or what? ...");
}

var x = 3;
switch (x) {
    case 1:
    console.log(x);
    break;
    case 2:
    console.log(x+2);
    break;
    default:
    console.log(x+5); // prints: 8
}

for(l =0; l <= 10; l++) {
    if(l == 5) {
        continue; // Unlike the break statement, the continue statement breaks only one iteration in the loop, and continues with the next iteration.
    } console.log(l + " skipping 5") // The value 5 is not printed in your console, because continue skips that iteration of the loop.
}