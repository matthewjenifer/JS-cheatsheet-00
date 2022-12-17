// The relationship between scales and keys in music theory.


const SCALE_TYPES = [  // Define an array of scale types, where each scale type is an array of intervals relative to the tonic
[0, 2, 4, 5, 7, 9, 11], // Major scale  
[0, 2, 3, 5, 7, 8, 10], // Natural minor scale
[0, 2, 3, 5, 7, 8, 11], // Harmonic minor scale
[0, 2, 3, 5, 7, 9, 11], // Melodic minor scale (ascending)
[0, 2, 3, 5, 7, 8, 10]  // Melodic minor scale (descending)
];

const KEY_NAMES = [  "C", "C#/Db", "D", "D#/Eb", "E", "F", "F#/Gb", "G", "G#/Ab", "A", "A#/Bb", "B"]; // Define an array of key names, where each key name is a string

function getScale(scaleType, tonic) { // Define a function that takes in a scale type and tonic, and returns an array of pitch classes for the corresponding scale
const tonicPitchClass = KEY_NAMES.indexOf(tonic); // Convert the tonic to a pitch class number (i.e. 0 for C, 1 for C#/Db, etc.)

const scale = []; // Initialize an empty array to store the pitch classes for the scale

for (const interval of scaleType) {  // Iterate over the intervals in the scale type
    const pitchClass = (tonicPitchClass + interval) % 12; // Add the interval to the tonic pitch class and modulo 12 to get the pitch class for the current scale degree
    scale.push(pitchClass); // Push the pitch class to the scale array
}

const pitchNames = []; // Initialize an empty array to store the names of the pitches in the scale

for (const pitchClass of scale) { // Iterate over the pitch classes in the scale
    
    pitchNames.push(KEY_NAMES[pitchClass]); // Look up the name of the pitch class using the KEY_NAMES array, and push it to the pitchNames array
}

return pitchNames; // Return the pitch names array
}

const cMajorScale = getScale(SCALE_TYPES[0], "C"); // Example usage: get the C major scale

const aSharpMelodicMinorScale = getScale(SCALE_TYPES[3], "A#/Bb"); // Example usage: get the A#/Bb melodic minor scale (ascending)

console.table(cMajorScale);
// console.table(aSharpMelodicMinorScale);

