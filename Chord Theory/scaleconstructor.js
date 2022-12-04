// https://www.onlinepianist.com/virtual-piano
// random aside: keys are only major and minor.. https://youtu.be/E3vYVGMgZYY

class Scale { 
    constructor(I, II, III, IV, V, VI, VII, octave) {
        this.I = I;
        this.II = II;
        this.III = III;
        this.IV = IV;
        this.V = V;
        this.VI = VI;
        this.VII = VII;
        this.octave = octave;
    }
    I() {
        console.log("Root Note:", this.I);
    }
    II() {
        console.log("Third Degree:", this.II);
    }
    III() {
        console.log("Fifth Degree:", this.III);
    }
    IV() {
        console.log("Sixth Degree:", this.IV);
    }
    V() {
        console.log("Eighth Degree:", this.V);
    }
    VI() {
        console.log("Tenth Degree:", this.VI);
    }
    VII() {
        console.log("Twelfth Degree:", this.VII);
    }
    octave() {
        console.log("Octave:", this.octave);
    }
    scaleData() {
        return this;
    }
};

let cIonian = new Scale('C', 'D', 'E', 'F', 'G', 'A', 'B', 'C'); // C Major
let dDorian = new Scale('D', 'E', 'F', 'G', 'A', 'B', 'C', 'D');
let ePhrygian = new Scale('E', 'F', 'G', 'A', 'B', 'C', 'D', 'E');
let fLydian = new Scale('F', 'G', 'A', 'B', 'C', 'D', 'E', 'F');
let gMixolydian = new Scale('G', 'A', 'B', 'C', 'D', 'E', 'F', 'G');
let aAeolian = new Scale('A', 'B', 'C', 'D', 'E', 'F', 'G', 'A'); //  A is C Major(Ionian)'s Natural Minor(Cmi). This means the 6th note on C Major's scale degree, is A Aeolian (or A Nat**)'s ROOT[0] note. In other words, these scales(modes) share the same notes - but with different centers of gravity (or "feeling") 
let bLocrian = new Scale('B', 'C', 'D', 'E', 'F', 'G', 'A', 'B');

let aNatMinor = aAeolian; //**

console.log("----")
console.log(cIonian.I + " Ionian Mode:")
console.log("----")
console.log(cIonian.scaleData())
console.log("----")
console.log(aNatMinor.I + " Aeolian Mode:")
console.log("----")
console.log(aNatMinor.scaleData())
console.log("----")

//let cIonian = new Scale('C', 'D', 'E','F', 'G', 'A', 'B','C'); | C Major
let cDorian = new Scale('C', 'D','Eb', 'F', 'G', 'A','Bb', 'C');
let cPhrygian = new Scale('C','C#', 'Eb', 'F', 'G','G#', 'Bb', 'C');
let cLydian = new Scale('C', 'D', 'E', 'F#','G', 'A', 'B','C');
let cMixolydian = new Scale('C', 'D', 'E','F', 'G', 'A','Bb', 'C');
let cAeolian = new Scale('C', 'D','Eb', 'F', 'G','G#', 'Bb', 'C');
let cLocrian = new Scale('C','C#', 'Eb', 'F','F#','G','G#', 'Bb', 'C'); // https://www.solfej.io/scales/c-locrian
let cSharpIonian = new Scale('C#', 'Eb', 'F','F#',  'A','Bb', 'C','C#');


//yasiine suggestion: ===================================================================

// const values = ['C','C#','D','Eb','E','F','F#','G','G#(Ab)','A','Bb','B','C',];
// const keys = ['I','rootSharp','II','thirdFlat','III','IV','fourthSharp','V','fifthSharp','VI','seventhFlat','VII','octave',];

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