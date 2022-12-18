
const SCALE_TYPES = [  
[0, 2, 4, 5, 7, 9, 11], // Major scale
[0, 2, 4, 7, 9], // Major pentatonic scale
[0, 2, 3, 5, 7, 8, 10], // Natural minor scale
[0, 2, 3, 5, 7, 8, 11], // Harmonic minor scale
[0, 2, 3, 5, 7, 9, 11], // Melodic minor scale (ascending)
[0, 2, 3, 5, 7, 8, 10], // Melodic minor scale (descending)
[0, 2, 4, 7, 9], // Minor pentatonic scale
];

const KEY_NAMES = [  "C", "C#/Db", "D", "D#/Eb", "E", "F", "F#/Gb", "G", "G#/Ab", "A", "A#/Bb", "B"]; 
function getScale(scaleType, tonic) { 
const tonicPitchClass = KEY_NAMES.indexOf(tonic); 
const scale = []; 
for (const interval of scaleType) {  
    const pitchClass = (tonicPitchClass + interval) % 12; 
    scale.push(pitchClass); 
}
const pitchNames = []; 
for (const pitchClass of scale) {
    pitchNames.push(KEY_NAMES[pitchClass]);
}
return pitchNames; 
}
const cMajorScale = getScale(SCALE_TYPES[0], "C"); 
const aSharpMelodicMinorScale = getScale(SCALE_TYPES[3], "A#/Bb"); 

function getChords(scale) {
    const chords = [];
    const chordNames = ["major", "minor", "minor", "major", "major", "minor", "diminished"];
    for (let i = 0; i < scale.length; i++) {
      // create a chord starting on each note of the scale
    const chord = [scale[i], scale[(i + 2) % scale.length], scale[(i + 4) % scale.length]];
    const chordName = scale[i] + " " + chordNames[i];
    chords.push({ name: chordName, notes: chord });
    }
    return chords;
}

const cMajorChords = getChords(cMajorScale);
for (const chord of cMajorChords) {
    console.log(chord.name + ":", chord.notes);
}
// console.log(cMajorChords);
