// The relationship between scales and keys in music theory.

const SCALE_TYPES = [  // Define an array of scale types, where each scale type is an array of intervals relative to the tonic | https://www.musictheory.net/lessons/23

[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Chromatic scale

// Major scales
[0, 2, 4, 5, 7, 9, 11], // Major scale
[0, 2, 4, 7, 9], // Major pentatonic scale

// Minor scales
[0, 2, 3, 5, 7, 8, 10], // Natural minor scale
[0, 2, 3, 5, 7, 8, 11], // Harmonic minor scale
[0, 2, 3, 5, 7, 9, 11], // Melodic minor scale (ascending)
[0, 2, 3, 5, 7, 8, 10], // Melodic minor scale (descending)
[0, 2, 4, 7, 9], // Minor pentatonic scale

// Other scales
[0, 2, 4, 6, 8, 10], // Whole tone scale
[0, 2, 3, 4, 7, 9], // Blues scale
[0, 2, 4, 5, 7, 8, 9, 11], // Bebop scale
[0, 2, 3, 6, 7, 8, 11], // Gypsy scale
[0, 1, 4, 5, 7, 8, 11], // Arabic scale
[0, 1, 4, 5, 7, 8, 11], // Byzantine scale
[0, 2, 3, 6, 7, 8, 11], // Hungarian minor scale
[0, 1, 4, 5, 7, 8, 11], // Double harmonic scale
[0, 1, 4, 6, 8, 10, 11], // Enigmatic scale
[0, 1, 3, 4, 6, 7, 8, 10], // Freygish scale
[0, 1, 5, 7, 8], // Japanese scale

// Modes
[0, 2, 4, 5, 7, 9, 11], // Ionian
[0, 2, 3, 5, 7, 9, 10], // Dorian
[0, 1, 3, 5, 7, 8, 10], // Phrygian
[0, 2, 4, 6, 7, 9, 11], // Lydian
[0, 2, 4, 5, 7, 9, 10], // Mixolydian
[0, 2, 3, 5, 7, 8, 10], // Aeolian
[0, 1, 3, 5, 6, 8, 10], // Locrian
[0, 1, 2, 4, 5, 7, 8, 9, 11], // Ionian b2
[0, 1, 2, 3, 5, 7, 8, 9, 10], // Dorian b5
[0, 1, 3, 4, 5, 7, 8, 10], // Harm Phrygian
[0, 1, 3, 4, 5, 8, 10], // Phrygian Major
[0, 1, 2, 4, 6, 7, 9, 11], // Lydian b3
[0, 1, 3, 4, 5, 6, 8, 10], // Major Locrian
[0, 1, 2, 3, 5, 6, 8, 10], // Minor Locrian
[0, 1, 3, 4, 6, 8, 10], // Super Locrian

];

/* 

Here are the scale degrees represented by each numeric value in the SCALE_TYPES array:

0 - represents the tonic, or the first degree of the scale.
2 - represents the supertonic, or the second degree of the scale.
3 - represents the mediant, or the third degree of the scale.
4 - represents the subdominant, or the fourth degree of the scale.
5 - represents the dominant, or the fifth degree of the scale.
7 - represents the submediant, or the sixth degree of the scale.
8 - represents the leading tone, or the seventh degree of the scale (in a Natural minor scale)  

    (The - 8th note - also known as the dominant, is called the leading tone because it has a strong tendency to resolve to the tonic, or first note, of the scale. This resolution creates a sense of musical tension and resolution, which is an important aspect of tonal music. The term "leading tone" is also sometimes used to refer to the - 7th scale degree - in MAJOR scales, which has a similar function and is also a half step below the tonic. However, the 8th scale degree is more commonly referred to as the leading tone.)

9 - represents the subtonic, or the seventh degree of the scale (in a Melodic minor scale).
10 - represents the octave, or the eighth degree of the scale (in a Natural minor scale or a Melodic minor scale (descending)).
11 - represents the octave, or the eighth degree of the scale (in a Major scale, a Harmonic minor scale, or a Melodic minor scale (ascending)).

    **NOTE** - the distance between the values in your given array - [0, 2, 4, 5, 7, 9, 11] - represent the whole-half step pattern for the given scale (W-W-H-W-W-W-H)

It's important to note that the names of the degrees of a scale (such as tonic, supertonic, mediant, etc.) are based on the specific interval patterns of that scale and the relationships between the notes of the scale. The names of the degrees of a scale can be different in different types of scales. 

*/

//declaring keys
const KEY_NAMES = [  "C", "C#", "D", "Eb", "E", "F", "F#", "G", "G#", "A", "Bb", "B"]; // Define an array of key names, where each key name is a string

//making scales
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


//declaring new scales by name
const givenScale = getScale(SCALE_TYPES[1], "D"); // Example usage: get the C major (SCALE_TYPES[1]) scale

// function nameScale(scaleVariable) {
//     if (scaleVariable === SCALE_TYPES[1]) {
//     return "Major";
//     } else {
//     return "error";
//     }
// }


// console.log(`Notes in ${nameScale(givenScale)} scale: `);

    console.table(givenScale);
/* 

console.table -  is a method in JavaScript that displays data as a table in the console. It is useful for formatting and displaying data in a structured way, especially when working with large datasets or objects.

To use - console.table - you pass it an array or an object as an argument. The table will then be displayed in the console, with each property or element displayed as a row in the table. You can also specify the properties or elements that you want to include in the table by passing an array of strings as the second argument.

console.table - is a useful tool for debugging and inspecting data in your JavaScript code. It can help you quickly and easily see the structure and content of your data, making it easier to understand and work with. 

*/
console.log("==============");

    console.log("Chords in given Scale: ");

console.log("==============");

//making chords
function getChords(scale) {
    const chords = [];
    const chordNames = ["major", "minor", "minor", "major", "major", "minor", "diminished"];
    for (let i = 0; i < scale.length; i++) {
        const chord = [scale[i], scale[(i + 2) % scale.length], scale[(i + 4) % scale.length]]; // create a chord starting on each note of the scale

        const chordName = scale[i] + " " + chordNames[i];
            chords.push({ name: chordName, notes: chord });
    }
        return chords;
}
    //declaring chords by name
    const chordInScale = getChords(givenScale);

    // const aSharpMelodicMinorChords = getChords(aSharpMelodicMinorScale);
    
    //printing chords
    for (const chord of chordInScale) {
        console.log(chord.name + ":", chord.notes);
    }
    
    // for (const chord of aSharpMelodicMinorChords) {
    //     console.log(chord.name + ":", chord.notes);
    // }
    
    
    console.log("==============");

    //making modes
    function getModes(scale) {
        const modes = [];
        for (let i = 0; i < scale.length; i++) {
            const mode = [scale[i], scale[(i + 1) % scale.length], scale[(i + 2) % scale.length], scale[(i + 3) % scale.length], scale[(i + 4) % scale.length], scale[(i + 5) % scale.length], scale[(i + 6) % scale.length]]; // create a mode starting on each note of the scale
                modes.push(mode);
        }
        return modes;
    }

    //declaring modes by name
    const givenModes = getModes(givenScale);

        console.log("Modes in given Scale: ");

        console.log("==============");
    
    //printing modes
    const modeNames = ["Ionian", "Dorian", "Phrygian", "Lydian", "Mixolydian", "Aeolian", "Locrian"];
    for (let i = 0; i < givenModes.length; i++) {
        console.log(modeNames[i] + ":", givenModes[i]);
    }