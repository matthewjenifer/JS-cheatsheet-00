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

/* 

It's difficult to say exactly how many more methods are available in JavaScript, as the language is constantly evolving and new methods are being added all the time. Additionally, different libraries and frameworks may add their own methods, so the number of available methods can vary depending on which libraries and frameworks you are using.

In general, it's best not to try to memorize a specific list of methods, but rather to familiarize yourself with the types of methods available and know how to look up specific methods when you need them. This will help you to write more efficient and effective code, and ensure that you are always using the most up-to-date and appropriate methods for your needs.

Here's a BRIEF list:

.forEach() - allows you to iterate over an array and perform a specific function on each element
.map() - also allows you to iterate over an array, but it returns a new array with the results of the function applied to each element
.filter() - allows you to create a new array with only elements that meet certain criteria
.find() - returns the first element in an array that meets certain criteria
.reduce() - allows you to combine all elements in an array to create a single value or object
.sort() - allows you to sort the elements in an array
.splice() - allows you to add, remove, or replace elements in an array

.push() - adds one or more elements to the end of an array
.pop() - removes the last element from an array and returns it
.shift() - removes the first element from an array and returns it
.unshift() - adds one or more elements to the beginning of an array
.concat() - combines two or more arrays and returns a new array
.join() - creates and returns a new string by concatenating all elements in an array
.slice() - returns a new array that includes a subset of elements from an original array
.toString() - converts an array to a string and returns the result
.toLocaleString() - converts an array to a string and returns the result, using the local language for formatting

.indexOf() - returns the index of the first element in an array that matches a specified value
.lastIndexOf() - returns the index of the last element in an array that matches a specified value
.every() - returns a boolean value indicating whether all elements in an array meet certain criteria
.some() - returns a boolean value indicating whether any element in an array meets certain criteria
.keys() - returns an iterator that contains the keys for each element in an array
.values() - returns an iterator that contains the values for each element in an array
.entries() - returns an iterator that contains the keys and values for each element in an array
.copyWithin() - copies a sequence of elements within an array to a different position in the same array
.fill() - fills all elements of an array with a specified value

.reverse() - reverses the order of elements in an array
.toLowerCase() - converts a string to lowercase and returns the result
.toUpperCase() - converts a string to uppercase and returns the result
.trim() - removes whitespace from the beginning and end of a string and returns the result
.padStart() - adds padding to the beginning of a string and returns the result
.padEnd() - adds padding to the end of a string and returns the result
.trimLeft() - removes whitespace from the beginning of a string and returns the result
.trimRight() - removes whitespace from the end of a string and returns the result
.startsWith() - returns a boolean value indicating whether a string starts with a specified substring
.endsWith() - returns a boolean value indicating whether a string ends with a specified substring

*/