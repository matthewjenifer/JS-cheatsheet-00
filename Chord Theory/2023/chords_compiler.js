const SCALE_TYPES = [ 

[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], //[0] Chromatic scale

// Major scales
[0, 2, 4, 5, 7, 9, 11], //[1] Major scale
[0, 2, 4, 7, 9], //[2] Major pentatonic scale

// Minor scales
[0, 2, 3, 5, 7, 8, 10], //[3] Natural minor scale
[0, 2, 3, 5, 7, 8, 11], //[4] Harmonic minor scale
[0, 2, 3, 5, 7, 9, 11], //[5] Melodic minor scale (ascending)
[0, 2, 3, 5, 7, 8, 10], //[6] Melodic minor scale (descending)
[0, 2, 4, 7, 9], //[7] Minor pentatonic scale

];

const KEY_NAMES = [  "C", "C#", "D", "Eb", "E", "F", "F#", "G", "G#", "A", "Bb", "B"]; 

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

const givenScale = getScale(SCALE_TYPES[3], "G"); 

    console.table(givenScale);

console.log("==============");

    console.log("Chords in given Scale: ");

console.log("==============");

function getChords(scale) {
    const chords = [];
    const chordNames = ["major", "minor", "minor", "major", "major", "minor", "diminished"];
    for (let i = 0; i < scale.length; i++) {
        const chord = [scale[i], scale[(i + 2) % scale.length], scale[(i + 4) % scale.length]]; 
        const chordName = scale[i] + " " + chordNames[i];
            chords.push({ name: chordName, notes: chord });
    }
        return chords;
}

    const chordInScale = getChords(givenScale);

    
    for (const chord of chordInScale) {
        console.log(chord.name + ":", chord.notes);
    }
    
    console.log("==============");

    function getModes(scale) {
        const modes = [];
        for (let i = 0; i < scale.length; i++) {
            const mode = [scale[i], scale[(i + 1) % scale.length], scale[(i + 2) % scale.length], scale[(i + 3) % scale.length], scale[(i + 4) % scale.length], scale[(i + 5) % scale.length], scale[(i + 6) % scale.length]]; 
                modes.push(mode);
        }
        return modes;
    }

    const givenModes = getModes(givenScale);

        console.log("Modes in given Scale: ");

        console.log("==============");
    
    const modeNames = ["Ionian", "Dorian", "Phrygian", "Lydian", "Mixolydian", "Aeolian", "Locrian"];
    for (let i = 0; i < givenModes.length; i++) {
        console.log(modeNames[i] + ":", givenModes[i]);
    }