//Here are some METHODS that may come in handy..

// .length() returns the number of its elements. The length property is always one more than the highest array index. If the array is empty, the length property returns 0.

var outkast = new Array('big boi', 'stacks');
console.log(outkast.length); // prints: 2 

//.includes() : when applied to a string (or array), it checks whether the value in its parentheses can be found inside the string (or array). It returns true if it finds the value and false if it doesn't

var bars = 'rollintwophilliestogetherinthehoodwecallemoowops';
console.log(bars.includes('hood')); //PRINTS: true
var list = ['n','w','a','n',4,'l'];
console.log(list.includes('z')); //PRINTS: false

//.replace() : this method searches for a value, and if found, will replace the 1st value with a new string.

var message = 'I love pickles!';
message = message.replace('love', 'HATE');
console.log(message)

//Combining methods to manipulate strings

var word = 'inspiration';
var sentence = 'its hard to create without X';
if(sentence.includes('X')){
    console.log(sentence.replace('X', word))
}

//concat(): JavaScript's concat() method allows you to join arrays and create an entirely new array.

var lang1 = ["HTML", "CSS"];
var lang2 = ["JAVA", "C++", "JavaScript"];
var languages = lang1.concat(lang2);
console.log(languages);

// The setInterval() method calls a function or evaluates an expression at specified intervals (in milliseconds). It will continue calling the function until clearInterval() is called or the window is closed. Write the name of the function without parentheses when passing it into the setInterval method. | ? https://www.youtube.com/watch?v=CqDqHiamRHA