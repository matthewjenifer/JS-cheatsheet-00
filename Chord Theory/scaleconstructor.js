class Scale {
    constructor(root, second, third, fourth, fifth, sixth, seventh, eighth, ninth, tenth, eleventh, twelfth, octave) {
        this.root = root;
        this.second = second;
        this.third = third;
        this.fourth = fourth;
        this.fifth = fifth;
        this.sixth = sixth;
        this.seventh = seventh;
        this.eighth = eighth;
        this.ninth = ninth;
        this.tenth = tenth;
        this.eleventh = eleventh;
        this.twelfth = twelfth;
        this.octave = octave;
    }
    root() {
        console.log("Root Note:", this.root);
    }
    second() {
        console.log("Second Degree:", this.second);
    }
    third() {
        console.log("Third Degree:", this.third);
    }
    fourth() {
        console.log("Fourth Degree:", this.fourth);
    }
    fifth() {
        console.log("Fifth Degree:", this.fifth);
    }
    sixth() {
        console.log("Sixth Degree:", this.second);
    }
    seventh() {
        console.log("Sixth Degree:", this.seventh);
    }
    eighth() {
        console.log("Eighth Degree:", this.eighth);
    }
    ninth() {
        console.log("Ninth Degree:", this.ninth);
    }
    tenth() {
        console.log("Tenth Degree:", this.tenth);
    }
    eleventh() {
        console.log("Eleventh Degree:", this.eleventh);
    }
    twelfth() {
        console.log("Twelfth Degree:", this.twelfth);
    }
    octave() {
        console.log("Octave:", this.octave);
    }
    scaleData() {
        return this;
    }
};

let cIonian = new Scale('C', '-', 'D', '-', 'E', 'F', '-', 'G', '-', 'A', '-', 'B', 'C');
let dDorian = new Scale('D', '-', 'E', 'F', '-', 'G', '-', 'A', '-', 'B', 'C', '-', 'D');
let ePhrygian = new Scale('E', 'F', '-', 'G', '-', 'A', '-', 'B', 'C', '-', 'D', '-', 'E');
let fLydian = new Scale('F', '-', 'G', '-', 'A', '-', 'B', 'C', '-', 'D', '-', 'E', 'F');
let gMixolydian = new Scale('G', '-', 'A', '-', 'B', 'C', '-', 'D', '-', 'E', 'F', '-', 'G');
let aAeolian = new Scale('A', '-', 'B', 'C', '-', 'D', '-', 'E', 'F', '-', 'G', '-', 'A'); //  A is C Major(Ionian)'s Natural Minor. This means the 6th note on C Major's scale degree, is A Aeolian (or A Nat**)'s ROOT[0] note. In other words, these scales(modes) share the same notes - but with different centers of gravity (or "feeling") 
let bLocrian = new Scale('B', 'C', '-', 'D', '-', 'E', 'F', '-', 'G', '-', 'A', '-', 'B');

let aNatMinor = aAeolian; //**

console.log("----")
console.log(cIonian.root + " Ionian Mode:")
console.log("----")
console.log(cIonian.scaleData())
console.log("----")
console.log(aNatMinor.root + " Aeolian Mode:")
console.log("----")
console.log(aNatMinor.scaleData())
console.log("----")

//let cIonian = new Scale('C','-','D','-','E','F','-','G','-','A','-','B','C');
let cDorian = new Scale('C','-','D','Eb','-','F','-','G','-','A','Bb','-','C');
let cPhrygian = new Scale('C','C#','-','Eb','-','F','-','G','G#','-','Bb','-','C');
let cLydian = new Scale('C','-','D','-','E','-','F#','G','-','A','-','B','C');
let cMixolydian = new Scale('C','-','D','-','E','F','-','G','-','A','Bb','-','C');
let cAeolian = new Scale('C','-','D','Eb','-','F','-','G','G#','-','Bb','-','C');
let cLocrian = new Scale('C','C#','-','Eb','-','F','F#','G','G#','-','Bb','-','C');

let cSharpIonian = new Scale('C#','-','Eb','-','F','F#','-','-','A','Bb','-','C','C#');


//yasiine suggestion: ===================================================================

// const values = ['C','C#','D','Eb','E','F','F#','G','G#(Ab)','A','Bb','B','C',];
// const keys = ['root','second','third','fourth','fifth','sixth','seventh','eighth','ninth','tenth','eleventh','twelfth','octave',];

// let obj = {}
// for(let i = 0; i < keys.length; i++) {
//   obj[keys[i]]=values[i];
// }
// console.log(obj);

// function shifter(j) {
//   subValues = values.slice(0,j);
//   let k = j;
//   for(let i = 0; i < keys.length; i++) {
//   obj[keys[i]]=values[j];
//     ++j;
//   }
//   for(let m=(keys.length-k), i = 0; m < keys.length; m++, i++) {
//   obj[keys[i]]=values[j];
//   }

// }

// shifter(0);
// console.log(subValues);
// console.log(obj);
// shifter(1);
// console.log(subValues);
// console.log(obj);