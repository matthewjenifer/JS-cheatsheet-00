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
        console.log("twelfth Degree:", this.twelfth);
    }
    octave() {
        console.log("Ocatve:", this.octave);
    }
    scaleData() {
        return this;
    }
};

let cMajor = new Scale('C', 'C#', 'D', 'Eb', 'E', 'F', 'F#', 'G', 'G#(Ab)', 'A', 'Bb', 'B', 'C', );

console.log("----")
console.log("----")

console.log("Root Note: " + cMajor.root)
console.log("----")
console.log(cMajor.scaleData())
console.log("----")


//yasiine suggestion: ======================================================================================

// const values = ['C','C#','D','Eb','E','F','F#','G','G#(Ab)','A','Bb','B','C',];
// const keys = ['root','second','third','fourth','fifth','sixth','sevnth','eighth','ninth','tenth','eleventh','twelfth','octave',];

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