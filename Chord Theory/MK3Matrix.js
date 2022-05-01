// https://www.figma.com/file/cSKRnG5LTuPCbYysuOPPww/ChordTheoryApp?node-id=0%3A1
// https://www.reddit.com/r/maschine/comments/u3043j/chord_mode_cheatsheet_inspired_by_7_super_common/

class Chord {
    constructor(pad,type,name,tone,numeral,mode,smartkey) {
        this.pad = pad;
        this.type = type;
        this.name = name;
        this.tone = tone;
        this.numeral = numeral;
        this.mode = mode;
        this.smartkey = smartkey;
    }
    pad() {
        console.log("Pad Location:", this.pad);
    }
    type() {
        console.log("Type:", this.type);
    }
    name() {
        console.log("Chord Name:", this.name);
    }
    tone() {
        console.log("Maj/Min:", this.tone);
    }
    numeral() {
        console.log("Pos:", this.numeral);
    }
    mode() {
        console.log("Mode:", this.mode);
    }
    smartkey() {
        console.log("Smart Key:", this.smartkey);
    }
    padData() {
        return this;
    }
};

let chord1maj1 = new Chord(1,'Maj1','C','major', '(I)','Ionioan', 'C'); 
let chord2maj1 = new Chord(2,'Maj1','Emi','minor', '(iii)', 'Phrygian','C#'); // how can we separate the root note from the chord descriptor? Can we insert each scale degree as an independent variable? | ex: , Chord(2,'Maj1', e, 'mi','minor', '(iii)', 'Phrygian','C#'); | cont. below
let chord3maj1 = new Chord(3,'Maj1','F','major', '(IV)', 'Lydian', 'D');
let chord4maj1 = new Chord(4,'Maj1','G','major', '(V)', 'Mixolydian','Eb'); // how about the chord position?
let chord5maj1 = new Chord(5,'Maj1','Ami','minor', '(vi)', 'Aeolian','E');
let chord6maj1 = new Chord(6,'Maj1','Esus4','major','n/a','F'); // ex: Chord(6,'Maj1', e, 'sus4','major','n/a','F');
let chord7maj1 = new Chord(7,'Maj1','Gadd9','major','n/a','F#');
let chord8maj1 = new Chord(8,'Maj1','Dmi','minor','(ii)', 'Dorian','G');
let chord9maj1 = new Chord(9,'Maj1','Fadd9','major','n/a','Ab');
let chord10maj1 = new Chord(10,'Maj1','F6','major','n/a','A');
let chord11maj1 = new Chord(11,'Maj1','Gsus4','major','n/a','Bb');
let chord12maj1 = new Chord(12,'Maj1','G','major','n/a','B');

let chord1maj2 = new Chord(1,'Maj2','C','major');
let chord2maj2 = new Chord(2,'Maj2','C/B','major');
let chord3maj2 = new Chord(3,'Maj2','C/A','major');
let chord4maj2 = new Chord(4,'Maj2','C/G','major');
let chord5maj2 = new Chord(5,'Maj2','Fadd9','major');
let chord6maj2 = new Chord(6,'Maj2','Fmi','minor');
let chord7maj2 = new Chord(7,'Maj2','Csus9','major');
let chord8maj2 = new Chord(8,'Maj2','Ami7','minor');
let chord9maj2 = new Chord(9,'Maj2','Emi','minor');
let chord10maj2 = new Chord(10,'Maj2','F','major');
let chord11maj2 = new Chord(11,'Maj2','Gsus4','major');
let chord12maj2 = new Chord(12,'Maj2','G6','major');

let chord1maj3 = new Chord(1,'Maj3','C','major');
let chord2maj3 = new Chord(2,'Maj3','Ami','minor');
let chord3maj3 = new Chord(3,'Maj3','Fmaj7','major');
let chord4maj3 = new Chord(4,'Maj3','Gsus4','major');
let chord5maj3 = new Chord(5,'Maj3','Amiadd9','minor');
let chord6maj3 = new Chord(6,'Maj3','F6','major');
let chord7maj3 = new Chord(7,'Maj3','Csus2','minor');
let chord8maj3 = new Chord(8,'Maj3','G','major');
let chord9maj3 = new Chord(9,'Maj3','Dsus2','minor');
let chord10maj3 = new Chord(10,'Maj3','Bbadd9','major');
let chord11maj3 = new Chord(11,'Maj3','Gsus4','major');
let chord12maj3 = new Chord(12,'Maj3','Fadd9','major');

let chord1maj4 = new Chord(1,'Maj4','C','major');
let chord2maj4 = new Chord(2,'Maj4','G','major');
let chord3maj4 = new Chord(3,'Maj4','Ami','minor');
let chord4maj4 = new Chord(4,'Maj4','F6','major');
let chord5maj4 = new Chord(5,'Maj4','F','major');
let chord6maj4 = new Chord(6,'Maj4','Ami/E','minor');
let chord7maj4 = new Chord(7,'Maj4','Dmi7','minor');
let chord8maj4 = new Chord(8,'Maj4','Ami/C','minor');
let chord9maj4 = new Chord(9,'Maj4','Gadd9','major');
let chord10maj4 = new Chord(10,'Maj4','Ami7','minor');
let chord11maj4 = new Chord(11,'Maj4','G/B','major');
let chord12maj4 = new Chord(12,'Maj4','Dmi/G','minor');

let chord1maj5 = new Chord(1,'Maj5','C','major');
let chord2maj5 = new Chord(2,'Maj5','D','major');
let chord3maj5 = new Chord(3,'Maj5','F','major');
let chord4maj5 = new Chord(4,'Maj5','C','major');
let chord5maj5 = new Chord(5,'Maj5','Ab','major');
let chord6maj5 = new Chord(6,'Maj5','Eb','major');
let chord7maj5 = new Chord(7,'Maj5','Bb','major');
let chord8maj5 = new Chord(8,'Maj5','F','major');
let chord9maj5 = new Chord(9,'Maj5','G7sus4','major');
let chord10maj5 = new Chord(10,'Maj5','Bbadd9','minor');
let chord11maj5 = new Chord(11,'Maj5','F6','major');
let chord12maj5 = new Chord(12,'Maj5','Cadd9','major');

let chord1maj6 = new Chord(1,'Maj6','C','major');
let chord2maj6 = new Chord(2,'Maj6','G','major');
let chord3maj6 = new Chord(3,'Maj6','Dmi','minor');
let chord4maj6 = new Chord(4,'Maj6','Ami','minor');
let chord5maj6 = new Chord(5,'Maj6','F','major');
let chord6maj6 = new Chord(6,'Maj6','G/F','major');
let chord7maj6 = new Chord(7,'Maj6','C/E','major');
let chord8maj6 = new Chord(8,'Maj6','Ami7','minor');
let chord9maj6 = new Chord(9,'Maj6','Dmi7','minor');
let chord10maj6 = new Chord(10,'Maj6','Emi7','minor');
let chord11maj6 = new Chord(11,'Maj6','C/F','major');
let chord12maj6 = new Chord(12,'Maj6','Gsus4','major');

let chord1maj7 = new Chord(1,'Maj7','C','major');
let chord2maj7 = new Chord(2,'Maj7','G','major');
let chord3maj7 = new Chord(3,'Maj7','Ami','minor');
let chord4maj7 = new Chord(4,'Maj7','Emi','minor');
let chord5maj7 = new Chord(5,'Maj7','F','major');
let chord6maj7 = new Chord(6,'Maj7','C/E','major');
let chord7maj7 = new Chord(7,'Maj7','Dmi','minor');
let chord8maj7 = new Chord(8,'Maj7','Dmi/C','minor');
let chord9maj7 = new Chord(9,'Maj7','G7/B','major');
let chord10maj7 = new Chord(10,'Maj7','G','major');
let chord11maj7 = new Chord(11,'Maj7','F/A','major');
let chord12maj7 = new Chord(12,'Maj7','G7/B','major');

let chord1maj8 = new Chord(1,'Maj8','Cma9','major');
let chord2maj8 = new Chord(2,'Maj8','C#dim','minor');
let chord3maj8 = new Chord(3,'Maj8','Dmi9','minor');
let chord4maj8 = new Chord(4,'Maj8','D#dim7','minor');
let chord5maj8 = new Chord(5,'Maj8','Emi9','minor');
let chord6maj8 = new Chord(6,'Maj8','C9#5','augmented');
let chord7maj8 = new Chord(7,'Maj8','Fma7add13','major');
let chord8maj8 = new Chord(8,'Maj8','Bb9','major');
let chord9maj8 = new Chord(9,'Maj8','Emi7','minor');
let chord10maj8 = new Chord(10,'Maj8','A9','major');
let chord11maj8 = new Chord(11,'Maj8','Dmi11','minor');
let chord12maj8 = new Chord(12,'Maj8','G7(b9,b13)','major');

let chord1min1 = new Chord(1,'Min1','Cmi','minor');
let chord2min1 = new Chord(2,'Min1','Cmi/Eb','minor');
let chord3min1 = new Chord(3,'Min1','Fmi','minor');
let chord4min1 = new Chord(4,'Min1','G','major');
let chord5min1 = new Chord(5,'Min1','Ab ma7','major');
let chord6min1 = new Chord(6,'Min1','Eb','major');
let chord7min1 = new Chord(7,'Min1','Gmi','minor');
let chord8min1 = new Chord(8,'Min1','Bb','major');
let chord9min1 = new Chord(9,'Min1','F','major');
let chord10min1 = new Chord(10,'Min1','Fmi/Ab','minor');
let chord11min1 = new Chord(11,'Min1','Cmi/G','minor');
let chord12min1 = new Chord(12,'Min1','G','major');

let chord1min2 = new Chord(1,'Min2','Cmi','minor');
let chord2min2 = new Chord(2,'Min2','G+/B','major');
let chord3min2 = new Chord(3,'Min2','Cmi/Bb','minor');
let chord4min2 = new Chord(4,'Min2','Cmi/A','minor');
let chord5min2 = new Chord(5,'Min2','Ab ma7','major');
let chord6min2 = new Chord(6,'Min2','Eb ma7','major');
let chord7min2 = new Chord(7,'Min2','Fmi','minor');
let chord8min2 = new Chord(8,'Min2','Bb7','major');
let chord9min2 = new Chord(9,'Min2','Cmi','minor');
let chord10min2 = new Chord(10,'Min2','Bb add9','major');
let chord11min2 = new Chord(11,'Min2','Ab add9','major');
let chord12min2 = new Chord(12,'Min2','G7 sus4','major');

let chord1min3 = new Chord(1,'Min3','Cmi','minor');
let chord2min3 = new Chord(2,'Min3','Ab','major');
let chord3min3 = new Chord(3,'Min3','Eb','major');
let chord4min3 = new Chord(4,'Min3','Bb','major');
let chord5min3 = new Chord(5,'Min3','F','major');
let chord6min3 = new Chord(6,'Min3','Fmi','minor');
let chord7min3 = new Chord(7,'Min3','Cmi/G','minor');
let chord8min3 = new Chord(8,'Min3','Gsus4','major');
let chord9min3 = new Chord(9,'Min3','Cmi','minor');
let chord10min3 = new Chord(10,'Min3','Cmi#5','augmented');
let chord11min3 = new Chord(11,'Min3','Cmi6','minor');
let chord12min3 = new Chord(12,'Min3','Cmi7','minor');

let chord1min4 = new Chord(1,'Min4','Cmi','minor');
let chord2min4 = new Chord(2,'Min4','Eb','major');
let chord3min4 = new Chord(3,'Min4','Bb','major');
let chord4min4 = new Chord(4,'Min4','F','major');
let chord5min4 = new Chord(5,'Min4','Ab','major');
let chord6min4 = new Chord(6,'Min4','Abma7','major');
let chord7min4 = new Chord(7,'Min4','Abmi7','minor');
let chord8min4 = new Chord(8,'Min4','Ebma7','major');
let chord9min4 = new Chord(9,'Min4','Dsus4','major');
let chord10min4 = new Chord(10,'Min4','D','major');
let chord11min4 = new Chord(11,'Min4','Fmi/G','minor');
let chord12min4 = new Chord(12,'Min4','G+','major');

let chord1min5 = new Chord(1,'Min5','Cmi','minor');
let chord2min5 = new Chord(2,'Min5','Bb','major');
let chord3min5 = new Chord(3,'Min5','Ab6','major');
let chord4min5 = new Chord(4,'Min5','Bbadd9','major');
let chord5min5 = new Chord(5,'Min5','Cmi','minor');
let chord6min5 = new Chord(6,'Min5','Dmi7','minor');
let chord7min5 = new Chord(7,'Min5','Cmi/Eb','minor');
let chord8min5 = new Chord(8,'Min5','Fmi','minor');
let chord9min5 = new Chord(9,'Min5','G','major');
let chord10min5 = new Chord(10,'Min5','Abma7','major');
let chord11min5 = new Chord(11,'Min5','B6/9','major');
let chord12min5 = new Chord(12,'Min5','Csus4','major');

let chord1min6 = new Chord(1,'Min6','Cmi','minor');
let chord2min6 = new Chord(2,'Min6','Fmi','minor');
let chord3min6 = new Chord(3,'Min6','Bb','major');
let chord4min6 = new Chord(4,'Min6','Eb','major');
let chord5min6 = new Chord(5,'Min6','Ab','major');
let chord6min6 = new Chord(6,'Min6','Dmi7b5','minor');
let chord7min6 = new Chord(7,'Min6','Gaddb9','major');
let chord8min6 = new Chord(8,'Min6','G','major');
let chord9min6 = new Chord(9,'Min6','Ab/G','major');
let chord10min6 = new Chord(10,'Min6','G7','major');
let chord11min6 = new Chord(11,'Min6','Cmi/G','minor');
let chord12min6 = new Chord(12,'Min6','G7b9','major');

let chord1min7 = new Chord(1,'Min7','Cmi9','minor');
let chord2min7 = new Chord(2,'Min7','Ab9','major');
let chord3min7 = new Chord(3,'Min7','Cmi11','minor');
let chord4min7 = new Chord(4,'Min7','C7(#9,b13)','major');
let chord5min7 = new Chord(5,'Min7','Fmi9','minor');
let chord6min7 = new Chord(6,'Min7','Ebma7/F','major');
let chord7min7 = new Chord(7,'Min7','C11','major');
let chord8min7 = new Chord(8,'Min7','Ami11','minor');
let chord9min7 = new Chord(9,'Min7','Ab7#11','major');
let chord10min7 = new Chord(10,'Min7','G7#9','major');
let chord11min7 = new Chord(11,'Min7','Cmi.add9','minor');
let chord12min7 = new Chord(12,'Min7','G7(b9,b13)','major');

let chord1min8 = new Chord(1,'Min8','Cmin6/9','minor');
let chord2min8 = new Chord(2,'Min8','Dmi7b5','minor');
let chord3min8 = new Chord(3,'Min8','Cmi11/G','minor');
let chord4min8 = new Chord(4,'Min8','Cmi9','minor');
let chord5min8 = new Chord(5,'Min8','Fmi9','minor');
let chord6min8 = new Chord(6,'Min8','Abmi7','minor');
let chord7min8 = new Chord(7,'Min8','Ebmi7','minor');
let chord8min8 = new Chord(8,'Min8','Bbmi7 b5','minor');
let chord9min8 = new Chord(9,'Min8','Ami11','minor');
let chord10min8 = new Chord(10,'Min8','Abma7#5','augmented');
let chord11min8 = new Chord(11,'Min8','G7(b9,b13)','major');
let chord12min8 = new Chord(12,'Min8','Cmi9ma7','minor');

console.log("--------------")
console.log(chord1maj1.padData())
console.log("--------------")
console.log(chord1maj1.type)
console.log(chord1maj1.name)
// console.log(chord2maj1.name())
console.log(chord1maj1.numeral)
console.log("----")
console.log(chord1maj1.mode)
console.log("----")
// console.log(chord2maj1.padData())
// console.log(chord3maj1.padData())
// console.log(chord4maj1.padData())
// console.log(chord5maj1.padData())
// console.log(chord6maj1.padData())
// console.log(chord7maj1.padData())
// console.log(chord8maj1.padData())
// console.log(chord9maj1.padData())
// console.log(chord10maj1.padData())
// console.log(chord11maj1.padData())
// console.log(chord12maj1.padData())
// console.log("--------------")
// console.log(chord1maj2.padData())
// console.log(chord2maj2.padData())
// console.log(chord3maj2.padData())
// console.log(chord4maj2.padData())
// console.log(chord5maj2.padData())
// console.log(chord6maj2.padData())
// console.log(chord7maj2.padData())
// console.log(chord8maj2.padData())
// console.log(chord9maj2.padData())
// console.log(chord10maj2.padData())
// console.log(chord11maj2.padData())
// console.log(chord12maj2.padData())
// console.log("--------------")
// console.log(chord1maj3.padData())
// console.log(chord2maj3.padData())
// console.log(chord3maj3.padData())
// console.log(chord4maj3.padData())
// console.log(chord5maj3.padData())
// console.log(chord6maj3.padData())
// console.log(chord7maj3.padData())
// console.log(chord8maj3.padData())
// console.log(chord9maj3.padData())
// console.log(chord10maj3.padData())
// console.log(chord11maj3.padData())
// console.log(chord12maj3.padData())
// console.log("--------------")
// console.log(chord1maj4.padData())
// console.log(chord2maj4.padData())
// console.log(chord3maj4.padData())
// console.log(chord4maj4.padData())
// console.log(chord5maj4.padData())
// console.log(chord6maj4.padData())
// console.log(chord7maj4.padData())
// console.log(chord8maj4.padData())
// console.log(chord9maj4.padData())
// console.log(chord10maj4.padData())
// console.log(chord11maj4.padData())
// console.log(chord12maj4.padData())
// console.log("--------------")
// console.log(chord1maj5.padData())
// console.log(chord2maj5.padData())
// console.log(chord3maj5.padData())
// console.log(chord4maj5.padData())
// console.log(chord5maj5.padData())
// console.log(chord6maj5.padData())
// console.log(chord7maj5.padData())
// console.log(chord8maj5.padData())
// console.log(chord9maj5.padData())
// console.log(chord10maj5.padData())
// console.log(chord11maj5.padData())
// console.log(chord12maj5.padData())
// console.log("--------------")
// console.log(chord1maj6.padData())
// console.log(chord2maj6.padData())
// console.log(chord3maj6.padData())
// console.log(chord4maj6.padData())
// console.log(chord5maj6.padData())
// console.log(chord6maj6.padData())
// console.log(chord7maj6.padData())
// console.log(chord8maj6.padData())
// console.log(chord9maj6.padData())
// console.log(chord10maj6.padData())
// console.log(chord11maj6.padData())
// console.log(chord12maj6.padData())
// console.log("--------------")
// console.log(chord1maj7.padData())
// console.log(chord2maj7.padData())
// console.log(chord3maj7.padData())
// console.log(chord4maj7.padData())
// console.log(chord5maj7.padData())
// console.log(chord6maj7.padData())
// console.log(chord7maj7.padData())
// console.log(chord8maj7.padData())
// console.log(chord9maj7.padData())
// console.log(chord10maj7.padData())
// console.log(chord11maj7.padData())
// console.log(chord12maj7.padData())
// console.log("--------------")
// console.log(chord1maj8.padData())
// console.log(chord2maj8.padData())
// console.log(chord3maj8.padData())
// console.log(chord4maj8.padData())
// console.log(chord5maj8.padData())
// console.log(chord6maj8.padData())
// console.log(chord7maj8.padData())
// console.log(chord8maj8.padData())
// console.log(chord9maj8.padData())
// console.log(chord10maj8.padData())
// console.log(chord11maj8.padData())
// console.log(chord12maj8.padData())
// console.log("--------------")
// console.log(chord1min1.padData())
// console.log(chord2min1.padData())
// console.log(chord3min1.padData())
// console.log(chord4min1.padData())
// console.log(chord5min1.padData())
// console.log(chord6min1.padData())
// console.log(chord7min1.padData())
// console.log(chord8min1.padData())
// console.log(chord9min1.padData())
// console.log(chord10min1.padData())
// console.log(chord11min1.padData())
// console.log(chord12min1.padData())
// console.log("--------------")
// console.log(chord1min2.padData())
// console.log(chord2min2.padData())
// console.log(chord3min2.padData())
// console.log(chord4min2.padData())
// console.log(chord5min2.padData())
// console.log(chord6min2.padData())
// console.log(chord7min2.padData())
// console.log(chord8min2.padData())
// console.log(chord9min2.padData())
// console.log(chord10min2.padData())
// console.log(chord11min2.padData())
// console.log(chord12min2.padData())
// console.log("--------------")
// console.log(chord1min3.padData())
// console.log(chord2min3.padData())
// console.log(chord3min3.padData())
// console.log(chord4min3.padData())
// console.log(chord5min3.padData())
// console.log(chord6min3.padData())
// console.log(chord7min3.padData())
// console.log(chord8min3.padData())
// console.log(chord9min3.padData())
// console.log(chord10min3.padData())
// console.log(chord11min3.padData())
// console.log(chord12min3.padData())
// console.log("--------------")
// console.log(chord1min4.padData())
// console.log(chord2min4.padData())
// console.log(chord3min4.padData())
// console.log(chord4min4.padData())
// console.log(chord5min4.padData())
// console.log(chord6min4.padData())
// console.log(chord7min4.padData())
// console.log(chord8min4.padData())
// console.log(chord9min4.padData())
// console.log(chord10min4.padData())
// console.log(chord11min4.padData())
// console.log(chord12min4.padData())
// console.log("--------------")
// console.log(chord1min5.padData())
// console.log(chord2min5.padData())
// console.log(chord3min5.padData())
// console.log(chord4min5.padData())
// console.log(chord5min5.padData())
// console.log(chord6min5.padData())
// console.log(chord7min5.padData())
// console.log(chord8min5.padData())
// console.log(chord9min5.padData())
// console.log(chord10min5.padData())
// console.log(chord11min5.padData())
// console.log(chord12min5.padData())
// console.log("--------------")
// console.log(chord1min6.padData())
// console.log(chord2min6.padData())
// console.log(chord3min6.padData())
// console.log(chord4min6.padData())
// console.log(chord5min6.padData())
// console.log(chord6min6.padData())
// console.log(chord7min6.padData())
// console.log(chord8min6.padData())
// console.log(chord9min6.padData())
// console.log(chord10min6.padData())
// console.log(chord11min6.padData())
// console.log(chord12min6.padData())
// console.log("--------------")
// console.log(chord1min7.padData())
// console.log(chord2min7.padData())
// console.log(chord3min7.padData())
// console.log(chord4min7.padData())
// console.log(chord5min7.padData())
// console.log(chord6min7.padData())
// console.log(chord7min7.padData())
// console.log(chord8min7.padData())
// console.log(chord9min7.padData())
// console.log(chord10min7.padData())
// console.log(chord11min7.padData())
// console.log(chord12min7.padData())
// console.log("--------------")
// console.log(chord1min8.padData())
// console.log(chord2min8.padData())
// console.log(chord3min8.padData())
// console.log(chord4min8.padData())
// console.log(chord5min8.padData())
// console.log(chord6min8.padData())
// console.log(chord7min8.padData())
// console.log(chord8min8.padData())
// console.log(chord9min8.padData())
// console.log(chord10min8.padData())
// console.log(chord11min8.padData())
// console.log(chord12min8.padData())
// console.log("--------------")


let rootNote = 1;
let secondDeg = 2;
let thirdDeg = 3;
let fourthDeg = 4;
let fifthDeg = 5;
let sixthDeg = 6;
let seventhDeg = 7;
let eighthDeg = 8;
let ninthDeg = 9;
let tenthDeg = 10;
let eleventhDeg = 11;
let twelveDeg = 12;