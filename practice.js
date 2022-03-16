/* 
                     __ 
                  | /   
                  |(___ 
                  )    )
                _/  __/ 
                        
        __                       
       /  |           /          
      (___| ___         ___      
      |\   |___) \  )| |___)|   )
      | \  |__    \/ | |__  |/\/ 

*/

// Instructions: Follow the prompts and make sure to check your answer in the console. If you need assistance, look back  in lessons, and of course Google. :) 

// =================================================
//                     VARIABLES
// =================================================

// 1.) Declare a variable
var jazz = 65;  

// 2.) Change the value of this variable
jazz = 66;

// 3.) Change the data type of this variable
jazz = 'Newport Jazz';

// 4.) Use any of the variables above to concatenate
let bop = 67;
let festival = jazz.concat(" " + bop)
console.log(festival)

// 5.) Use any of the variables above to interpolate
console.log(` Bop debuted around ${bop}`)

// ================ Variable Names =================
/* 
    • Case-sentive! Try it out! :O
    • Can contain letters, digits, or the symbols $ and _
    • Can't start with 0-9
    • Can't use reserved keywords in JS such as var, function, return, etc. 
*/

// =================================================
//                      STRINGS
// =================================================

// Look up the following string methods!

// Using charAt(), print the letter i in Malik

const pupil = 'Malik';
const index = 3;

console.log(`HAL:I believe the letter you're looking for is: ${pupil.charAt(index)}!`);

// Define Unicode in a comment, and get the Unicode using charCodeAt() of the third character in Orella

      /* Unicode Definition: The agreement between the two computers about the correspondence between letters and numbers.  */
const student = 'Orella'

console.log(`HAL: The third character in Orella is ${student.charCodeAt(2)}!`);

// Using fromCharCode() - make it readable for us :). You'll see!
console.log(`HAL: ${student.charCodeAt(2)} is Unicode for: ${String.fromCharCode(student.charCodeAt(2))}`);

// Take your first and last name and concat()
const fName = 'Matthew '
const lName = 'Jenifer'

console.log(fName.concat('',lName))
// Create a string and make it return true using startsWith()
let string = 'St. Louis Blues by Art Tatum' 
console.log(string.startsWith('St.'));
        
// Now use any variable with endsWith() and return false
console.log(string.endsWith('000'));

// Finish the following sentence. Use includes() and return true.
let mae = 'Once upon a time Mae looked up at the Moon, and saw Stanley Kubrick '
console.log(mae.includes('upon'))

// Help! I'm looking for my cow! Using indexOf() help Josh find his cow. What's the index of cow?
let joshHadALittleLambOopsCow = "Josh lives in a farm. Josh was overwhelmed with coding. Josh is stressed out. Josh fed the chickens this morning. He watered his plants. He took his cow Betsy on a walk. Josh went home without Betsy. Josh went to bed that night, and realized he went home alone."

const searchTerm = 'cow';
const fetchTerm = joshHadALittleLambOopsCow.indexOf(searchTerm);

console.log(`HAL: The animal you're looking for has an index of ${fetchTerm} : ${searchTerm}`)

// Oh no! The alien doppelgangers are here. Let's use our laserbeam lastIndexOf() to shoot down the last alien Fabio in the String Universe.

let fabio = "I am the Alpha Fabio. I am the Omega Fabio. We do not come in peace."
const targeting = 'Fabio';
const targetLocked = fabio.lastIndexOf(targeting); 

console.log(`HAL: Omega located: ${targetLocked} from the end..Fire the goddamn laser!!!`)

// Can we use length for strings? I don't know, you tell me.
let noWeCantTeo = "but did you try it out though?"
const yesWeCan = noWeCantTeo.length;

console.log(`HAL: The length of your string is ${yesWeCan}`)

// If only it was this easy to replace() my ex. Totally not joking, LOL. JK
let replaceGokuWithVegeta = "For my DBZ fans, we all know Goku is the best!"

console.log(replaceGokuWithVegeta.replace('Goku', 'Vegeta'))

// Greg has been forgetful lately. Let's help Greg by using search(), and find their right wifey. 

let gregIsLookingForWifey = "WIFEY 1, wifey 2, WiFeY 3, Wifey 4"
let hitch = gregIsLookingForWifey.search('Wifey 4')

console.log(`HAL: found her, Greg: ${hitch}`)

// I guess we can share this pizza sentence. Use slice() to return the other half of pizza.
let pizzaSentence = "pizza, other half of pizza"

console.log(`Just make sure that ${pizzaSentence.slice(7)} has double pepperoni on it.`)

// Now using the pizza sentence, return only pizza (before the comma, I'm looking at you Elon LOL. I know  you're going to get at me for not being specific haha.)

console.log(`If any of the ${pizzaSentence.slice(0,5)} is plain, Elon can have it lol`)

// Okay, but who decided to go to this expensive restaurant? Christina, Carmen, and Chris decided to split() the bill. Return an array separating Cristina, Carmen, and Chris.
let splitTheBill = "Christina Carmen Chris"
const lazyWaitress = splitTheBill.split(" ");

console.log(`[${lazyWaitress}]`)

// OH NO! The alien invaders from earlier were so against bill splitting so they decided to split() Christina, Carmen, and Chris into pieces. Using splitTheBill, return an array separating all three by charactes.
const alienBoss = splitTheBill.split("");
console.log(`[${alienBoss}]`)

// Use this toLowerCase()
let angry = "LOWER YOUR VOICE DOWN IF YOU AIN'T PAYING MY BILLS." 
console.log(`Ayo. ${angry.toLowerCase()}..`)

// Evan was angry today. Create a string with words that Evan would yell out. Now lowercase it, to tell Evan to chill out. 
let evanScream = "LOUD NOISES!"
console.log(`Bruh..chill will all those ${evanScream.toLowerCase()}`)

// toUpperCase()
let patSaidToPutSomeRespectToHisName = "patrick tan"
console.log(`There once was a man named ${patSaidToPutSomeRespectToHisName.toUpperCase()}!`)

// substring()
// on the chopping block...
console.log(`HAL: Now ${patSaidToPutSomeRespectToHisName.substring(0,7)}'s the one yelling..`)

// Returns "ell"
let basicGreeting = "Hello World"
console.log(`${basicGreeting.substring(1,4)}`)

// Returns "JavaScript"
let ohReally = "JavaScript Substring"
console.log(`${ohReally.substring(0,10)}`)

// Returns aol.com
let aslDays = "xXteoWuzHereXx@aol.com"
console.log(`${aslDays.substring(15,22)}`)

// trim()
// If only I can use this for my love handles...
// Create a variable with a string value with some extra loving on both sides.
const fatFat = '  some-extra-loving    '
console.log(`${fatFat.trim()}`)

// =================================================
//                     BOOLEAN
// =================================================

// I just want my dreams to come true. 
// With the powers of logical and comparison operators, PRINT TRUE please!
// Replace the underscores.

const a = 5;
const b = 10;
const c = 15;
const d = "Oussama"

console.log(a < b)
console.log(c > b)
console.log(d === d)
console.log(d != a)
console.log(a < 15)
console.log(a < b < c)
console.log(c > b > a != d)

// =================================================
//                     LOOPS
// =================================================

// Paulette has a headache today and she said the room has been spinning like crazy. Make Paulette's room spin 10 times using FOR LOOP.
for (let i = 0; i < 6; i++) {
  console.log('Paulette: "Ahhhhh the room is spinning!!!"')
}

// Omar said that was so mean of Teo to do Paulette dirty like that. Make Teo's vision spin 20 times FOR LOOP.
for (let i = 0; i < 20; i++) {
  console.log('Teo: "omg my vision!!"')
}

// But wait! Thiago said, while Teo is spinning 20 times. Let's make him say "I'm sorry". Print I'm sorry 20 times using a WHILE loop.
let i = 0
while(i < 20) {
  if(i === 20) {
    console.log('Thiago: "Im sorry!"')
    break 
  }
  console.log('Thiago: "Im sorry"')
  i++
}
// To The Left! To The Left! Everything I want in the console to the left. Print thing1, thing2, thing 3 using (FOR IN LOOP)
let whateverQueenBeySaid = {
  thing1: 'shoes',
  thing2: 'clothes',
  thing3: 'gaming console'
}

for (const property in whateverQueenBeySaid) {
  console.log(`${whateverQueenBeySaid[property]}`)
}

// Using (FOR IN LOOP), print the indexes of the array.
const yassine = ['y', 'a', 's', 's', 'i', 'n', 'e']

for (const arr in yassine) {
  console.log(`${yassine[arr]}`)
}

// USE (FOR OF LOOP)!
const revathy = ['teo', 'the', 'syntax', 'of', 'this', 'is', 'cleaner']

for (const arr in revathy) {
  console.log(`${revathy[arr]}`)
}

// Shirelle said don't forget each person. No person left behind! Use forEach() to iterate over the array. Inside the function, create a variable with the string "PS". Print their name in the console concatenated with the variable. 
const perscholas = ['Michael', 'Matthew', 'Manara']

perscholas.forEach(element => console.log(`PS:${element}`))

// =================================================
//                     ARRAYS
// =================================================

const fruits = ['apple', 'banana', 'orange']

// Print banana
console.log(fruits[1])

// Join all the elements of the array into a string separated by a space.
console.log(fruits.join('_'))

// Remove orange
console.log(fruits.splice(2))

// Add strawberry, kiwi, and grapes at the end
fruits.push('strawberry', 'kiwi', 'grapes');
console.log(fruits)
// Remove apple
console.log(fruits.shift(0))

// Add mango at the beginning of the array
fruits.unshift('mango')
console.log(fruits)
// Add lemon, and grapefruit between mango and banana
fruits.splice(1, 0, 'lemon', 'grapefruit')
console.log(fruits)

// Remove banana and strawberry
console.log(fruits.splice(3,2))
console.log(fruits)
// Create a new array called exoticFruits. Add 3 exotic fruits inside of this array. Create a new variable and assign it with the value of concatinating fruits array and exoticFruits array.
var exoticFruits = ['passion fruit', 'dragon fruit', 'papaya'];
var fruitSalad = fruits.concat(exoticFruits);
console.log(fruitSalad)

// Return the last two exotic fruits without altering the newly concatenated array.
console.log(fruitSalad.splice(6,2))
// Lane said she needs help re-organizing her items in alphabetical order.
const laneIsMessy = ["pencil", "paper", "notebook", "computer"]
console.log(laneIsMessy.sort())

// Brandon accidentally stepped into the mirror world and needs help reversing his words.
const mirrorMirrorOnTheWall = ["all", "them", "of", "greatest", "the", "is", "who"]
console.log(mirrorMirrorOnTheWall.reverse())

// David said he''s trying to stop cursing so much, and he wants to start with his text messages. Help him write code to eliminate the bad word in his sentences. Must return a string sentence. Must use filter(). :) 
const davidNoBadWords = "I am so tired of this badword food. I do not want this badword badword food.".replace('badword','').replace('badword','').replace('badword','')
console.log(davidNoBadWords)

// Man math is hard. Let's make our computer do it for us. Use reduce() to find the total of the numbers in numbersToAddUp
const numbersToAddUp = [99, 5677, 232, 84, 2, 231]
const initialValue = 0;
const addedNumbers = numbersToAddUp.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  initialValue);
console.log(addedNumbers)

// Create a variable and assign a value of a copied array using the spread operator

// Create two arrays with any elements and connect both of them using the spread operator. Save the connected arrays into a new variable.

// Using the variable with the newly connected arrays, use spread operator to add something at the end.

// Using the variable with the newly connected arrays, use spread operator to add something at the beginning.

// Donut Shopping
const donutShop =[
  [
    'firecracker',
    'chocolate',
    'blueberry'
  ],
  [
    ['orange', 'applecrumble'],
    ['cream', 'peanutbutter', 'coconut']
  ],
  [
    [
      [
        [
          ['flavor of the week']
        ], ['ihatethis']
      ]
    ]
  ]
]

// Kayah wants applecrumble. Print please!
// Devin wants ihatethis. :) Print!

// =================================================
//                     IF/ELSE
// =================================================

// Teo is a person. I would hope so...
// Check if Teo is a person. If true, print 'Teo is a person!' if not then print 'Teo is not a person!'
// If Teo is a person, check to see if he is a male or a female. If male, print 'You got it right!' if not then print 'Wrong. Teo is going to remove you from the class.'.
// If male, check to see if Teo is hungry. If Teo is 'hungry' then print 'Let's buy Teo some tacos!'. If Teo is 'not hungry' then print 'He doesn't need to eat.'. Anything else, print 'If Teo is not hungry, am I hungry?'

// Create a ternary to check if Liv is the coolest. If coolest, print 'You got that right!', else print 'Teo will deduct 100 points off your homework!'

// =================================================
//                     FUNCTIONS
// =================================================

// Don't forget to call your functions :)

// Create a function called sayGreeting and PRINT 'Hello, ma'amsir!'

// Create a function that takes a string as a parameter. PRINT 'This is my (STRING)'. Please replace the (STRING) with the parameter. Don't play with me haha.

// Create a function called add that takes in three number parameters. Create 3 variables and assign numerical values to them. Invoke your add() and pass in those three variables as arguments.

// Create a function called fightClub() that accepts a name parameter.  If the name:
// 'Teo' RETURN '1st rule: You do not talk about Fight Club.'
// 'Manara' RETURN '2nd rule: YOU DO NOT TALK ABOUT FIGHT CLUB.'
// 'Liv' RETURN '3rd rule: If someone yells "Stop!", goes limp, taps out, the fight is over.'
// 'Devin' RETURN '4th rule: Only two guys to a fight.'
// Anything else, RETURN 'No shirts

// Create a function called hello() that prints 'Hello'. Return an anonymous function inside hello() and have it print 'Goodbye'. Invoke your hello function in some way to see Hello and Goodbye in the console.

// Create a function expression with your first name as the variable and then print your first and last name

// Create an arrow function that accepts a number and have it return that number doubled

// =================================================
//                     OBJECTS
// =================================================

// Create an object and call it human. Add a name, age, and location property. Give the properties values.

// Access the name using dot notation

// Access the age using square brackets

// Use object destructuring to access location

// ACCESS Granted
const bulbasaur = {
  name: 'Bulbasaur',
  abilities: [
    {
      ability: 'overgrow'
    },
    {
      ability: 'chlorophyll'
    }
  ],
  moves: ['razor-wind', 'swords-dance', 'cut'],
  sound: () => {
    console.log('Bulbahhhh!!!!!')
  }
}

// Print overgrow

// Print cut

// Print Bulbahhhh!!!!!

// Add a height of 7 to bulbasaur using the dot notation. (Don't change bulbasaur object manually)

// Add a property caled order and assign it a value of 1 using the square brackets. (Don't change bulbasaur object manually)

// Print an array that contains every single properties in bulbasaur

// Print every single properties one by one in the console

// Print an array that contains every single values in bulbasaur

// =================================================
//                 HUNGRY FOR MORE
// =================================================

// Create a basic calculator using DOM manipulation. Build out your calculator in your html. Make it do simple math operations.

// =================================================
//                STARVING FOR MORE
// =================================================

// Create the calculator without hardcoding any html elements in you html. Create all your tags in JS. Go on Google and type in 'calc' or 'calculator'. Re-create that calculator.

// =================================================
//             YOU'RE FAMISHED AND DYING
// =================================================

// Google search: Texas Instruments TI-30XIIS Scientific Calculator - Black
// Do that and go eat!