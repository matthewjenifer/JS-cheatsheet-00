//Here are some METHODS that may come in handy..

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