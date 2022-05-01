class Chord {
    constructor(smartkey,type,pad,name,tone,numeral,mode) {
        this.smartkey = smartkey;
        this.type = type;
        this.pad = pad;
        this.name = name;
        this.tone = tone;
        this.numeral = numeral;
        this.mode = mode;
    }
    smartkey() {
        console.log("Smart Key:", this.smartkey);
    }
    type() {
        console.log("Type:", this.type);
    }
    pad() {
        console.log("Pad Location:", this.pad);
    }
    name() {
        console.log("Chord Name:", this.name);
    }
    tone() {
        console.log("Maj/Min:", this.tone);
    }
    numeral() {
        console.log("Position:", this.numeral);
    }
    mode() {
        console.log("Associated-Mode:", this.mode);
    }
    padData() {
        return this;
    }
};

let chord1maj1 = new Chord('C','Maj1',1,'C','major', '(I)','Ionioan');
let chord2maj1 = new Chord('C#','Maj1',2,'Emi','minor', '(iii)', 'Phrygian');
let chord3maj1 = new Chord('D','Maj1',3,'F','major', '(IV)', 'Lydian');
let chord4maj1 = new Chord('Eb','Maj1',4,'G','major', '(V)', 'Mixolydian');
let chord5maj1 = new Chord('E','Maj1',5,'Ami','minor', '(vi)', 'Aeolian');
let chord6maj1 = new Chord('F','Maj1',6,'Esus4','major');
let chord7maj1 = new Chord('F#','Maj1',7,'Gadd9','major');
let chord8maj1 = new Chord('G','Maj1',8,'Dmi','minor','(ii)', 'Dorian');
let chord9maj1 = new Chord('G#','Maj1',9,'Fadd9','major');
let chord10maj1 = new Chord('A','Maj1',10,'F6','major');
let chord11maj1 = new Chord('Bb','Maj1',11,'Gsus4','major');
let chord12maj1 = new Chord('B','Maj1',12,'G','major');

let chord1maj2 = new Chord('Maj2',1,'C','major');
let chord2maj2 = new Chord('Maj2',2,'C/B','major');
let chord3maj2 = new Chord('Maj2',3,'C/A','major');
let chord4maj2 = new Chord('Maj2',4,'C/G','major');
let chord5maj2 = new Chord('Maj2',5,'Fadd9','major');
let chord6maj2 = new Chord('Maj2',6,'Fmi','minor');
let chord7maj2 = new Chord('Maj2',7,'Csus9','major');
let chord8maj2 = new Chord('Maj2',8,'Ami7','minor');
let chord9maj2 = new Chord('Maj2',9,'Emi','minor');
let chord10maj2 = new Chord('Maj2',10,'F','major');
let chord11maj2 = new Chord('Maj2',11,'Gsus4','major');
let chord12maj2 = new Chord('Maj2',12,'G6','major');

let chord1maj3 = new Chord('Maj3',1,'C','major');
let chord2maj3 = new Chord('Maj3',2,'Ami','minor');
let chord3maj3 = new Chord('Maj3',3,'Fmaj7','major');
let chord4maj3 = new Chord('Maj3',4,'Gsus4','major');
let chord5maj3 = new Chord('Maj3',5,'Amiadd9','minor');
let chord6maj3 = new Chord('Maj3',6,'F6','major');
let chord7maj3 = new Chord('Maj3',7,'Csus2','minor');
let chord8maj3 = new Chord('Maj3',8,'G','major');
let chord9maj3 = new Chord('Maj3',9,'Dsus2','minor');
let chord10maj3 = new Chord('Maj3',10,'Bbadd9','major');
let chord11maj3 = new Chord('Maj3',11,'Gsus4','major');
let chord12maj3 = new Chord('Maj3',12,'Fadd9','major');

let chord1maj4 = new Chord('Maj4',1,'C','major');
let chord2maj4 = new Chord('Maj4',2,'G','major');
let chord3maj4 = new Chord('Maj4',3,'Ami','minor');
let chord4maj4 = new Chord('Maj4',4,'F6','major');
let chord5maj4 = new Chord('Maj4',5,'F','major');
let chord6maj4 = new Chord('Maj4',6,'Ami/E','minor');
let chord7maj4 = new Chord('Maj4',7,'Dmi7','minor');
let chord8maj4 = new Chord('Maj4',8,'Ami/C','minor');
let chord9maj4 = new Chord('Maj4',9,'Gadd9','major');
let chord10maj4 = new Chord('Maj4',10,'Ami7','minor');
let chord11maj4 = new Chord('Maj4',11,'G/B','major');
let chord12maj4 = new Chord('Maj4',12,'Dmi/G','minor');

let chord1maj5 = new Chord('Maj5',1,'C','major');
let chord2maj5 = new Chord('Maj5',2,'D','major');
let chord3maj5 = new Chord('Maj5',3,'F','major');
let chord4maj5 = new Chord('Maj5',4,'C','major');
let chord5maj5 = new Chord('Maj5',5,'Ab','major');
let chord6maj5 = new Chord('Maj5',6,'Eb','major');
let chord7maj5 = new Chord('Maj5',7,'Bb','major');
let chord8maj5 = new Chord('Maj5',8,'F','major');
let chord9maj5 = new Chord('Maj5',9,'G7sus4','major');
let chord10maj5 = new Chord('Maj5',10,'Bbadd9','minor');
let chord11maj5 = new Chord('Maj5',11,'F6','major');
let chord12maj5 = new Chord('Maj5',12,'Cadd9','major');

let chord1maj6 = new Chord('Maj6',1,'C','major');
let chord2maj6 = new Chord('Maj6',2,'G','major');
let chord3maj6 = new Chord('Maj6',3,'Dmi','minor');
let chord4maj6 = new Chord('Maj6',4,'Ami','minor');
let chord5maj6 = new Chord('Maj6',5,'F','major');
let chord6maj6 = new Chord('Maj6',6,'G/F','major');
let chord7maj6 = new Chord('Maj6',7,'C/E','major');
let chord8maj6 = new Chord('Maj6',8,'Ami7','minor');
let chord9maj6 = new Chord('Maj6',9,'Dmi7','minor');
let chord10maj6 = new Chord('Maj6',10,'Emi7','minor');
let chord11maj6 = new Chord('Maj6',11,'C/F','major');
let chord12maj6 = new Chord('Maj6',12,'Gsus4','major');

let chord1maj7 = new Chord('Maj7',1,'C','major');
let chord2maj7 = new Chord('Maj7',2,'G','major');
let chord3maj7 = new Chord('Maj7',3,'Ami','minor');
let chord4maj7 = new Chord('Maj7',4,'Emi','minor');
let chord5maj7 = new Chord('Maj7',5,'F','major');
let chord6maj7 = new Chord('Maj7',6,'C/E','major');
let chord7maj7 = new Chord('Maj7',7,'Dmi','minor');
let chord8maj7 = new Chord('Maj7',8,'Dmi/C','minor');
let chord9maj7 = new Chord('Maj7',9,'G7/B','major');
let chord10maj7 = new Chord('Maj7',10,'G','major');
let chord11maj7 = new Chord('Maj7',11,'F/A','major');
let chord12maj7 = new Chord('Maj7',12,'G7/B','major');

let chord1maj8 = new Chord('Maj8',1,'Cma9','major');
let chord2maj8 = new Chord('Maj8',2,'C#dim','minor');
let chord3maj8 = new Chord('Maj8',3,'Dmi9','minor');
let chord4maj8 = new Chord('Maj8',4,'D#dim7','minor');
let chord5maj8 = new Chord('Maj8',5,'Emi9','minor');
let chord6maj8 = new Chord('Maj8',6,'C9#5','augmented');
let chord7maj8 = new Chord('Maj8',7,'Fma7add13','major');
let chord8maj8 = new Chord('Maj8',8,'Bb9','major');
let chord9maj8 = new Chord('Maj8',9,'Emi7','minor');
let chord10maj8 = new Chord('Maj8',10,'A9','major');
let chord11maj8 = new Chord('Maj8',11,'Dmi11','minor');
let chord12maj8 = new Chord('Maj8',12,'G7(b9,b13)','major');

let chord1min1 = new Chord('Min1',1,'Cmi','minor');
let chord2min1 = new Chord('Min1',2,'Cmi/Eb','minor');
let chord3min1 = new Chord('Min1',3,'Fmi','minor');
let chord4min1 = new Chord('Min1',4,'G','major');
let chord5min1 = new Chord('Min1',5,'Ab ma7','major');
let chord6min1 = new Chord('Min1',6,'Eb','major');
let chord7min1 = new Chord('Min1',7,'Gmi','minor');
let chord8min1 = new Chord('Min1',8,'Bb','major');
let chord9min1 = new Chord('Min1',9,'F','major');
let chord10min1 = new Chord('Min1',10,'Fmi/Ab','minor');
let chord11min1 = new Chord('Min1',11,'Cmi/G','minor');
let chord12min1 = new Chord('Min1',12,'G','major');

let chord1min2 = new Chord('Min2',1,'Cmi','minor');
let chord2min2 = new Chord('Min2',2,'G+/B','major');
let chord3min2 = new Chord('Min2',3,'Cmi/Bb','minor');
let chord4min2 = new Chord('Min2',4,'Cmi/A','minor');
let chord5min2 = new Chord('Min2',5,'Ab ma7','major');
let chord6min2 = new Chord('Min2',6,'Eb ma7','major');
let chord7min2 = new Chord('Min2',7,'Fmi','minor');
let chord8min2 = new Chord('Min2',8,'Bb7','major');
let chord9min2 = new Chord('Min2',9,'Cmi','minor');
let chord10min2 = new Chord('Min2',10,'Bb add9','major');
let chord11min2 = new Chord('Min2',11,'Ab add9','major');
let chord12min2 = new Chord('Min2',12,'G7 sus4','major');

let chord1min3 = new Chord('Min3',1,'Cmi','minor');
let chord2min3 = new Chord('Min3',2,'Ab','major');
let chord3min3 = new Chord('Min3',3,'Eb','major');
let chord4min3 = new Chord('Min3',4,'Bb','major');
let chord5min3 = new Chord('Min3',5,'F','major');
let chord6min3 = new Chord('Min3',6,'Fmi','minor');
let chord7min3 = new Chord('Min3',7,'Cmi/G','minor');
let chord8min3 = new Chord('Min3',8,'Gsus4','major');
let chord9min3 = new Chord('Min3',9,'Cmi','minor');
let chord10min3 = new Chord('Min3',10,'Cmi#5','augmented');
let chord11min3 = new Chord('Min3',11,'Cmi6','minor');
let chord12min3 = new Chord('Min3',12,'Cmi7','minor');

let chord1min4 = new Chord('Min4',1,'Cmi','minor');
let chord2min4 = new Chord('Min4',2,'Eb','major');
let chord3min4 = new Chord('Min4',3,'Bb','major');
let chord4min4 = new Chord('Min4',4,'F','major');
let chord5min4 = new Chord('Min4',5,'Ab','major');
let chord6min4 = new Chord('Min4',6,'Abma7','major');
let chord7min4 = new Chord('Min4',7,'Abmi7','minor');
let chord8min4 = new Chord('Min4',8,'Ebma7','major');
let chord9min4 = new Chord('Min4',9,'Dsus4','major');
let chord10min4 = new Chord('Min4',10,'D','major');
let chord11min4 = new Chord('Min4',11,'Fmi/G','minor');
let chord12min4 = new Chord('Min4',12,'G+','major');

let chord1min5 = new Chord('Min5',1,'Cmi','minor');
let chord2min5 = new Chord('Min5',2,'Bb','major');
let chord3min5 = new Chord('Min5',3,'Ab6','major');
let chord4min5 = new Chord('Min5',4,'Bbadd9','major');
let chord5min5 = new Chord('Min5',5,'Cmi','minor');
let chord6min5 = new Chord('Min5',6,'Dmi7','minor');
let chord7min5 = new Chord('Min5',7,'Cmi/Eb','minor');
let chord8min5 = new Chord('Min5',8,'Fmi','minor');
let chord9min5 = new Chord('Min5',9,'G','major');
let chord10min5 = new Chord('Min5',10,'Abma7','major');
let chord11min5 = new Chord('Min5',11,'B6/9','major');
let chord12min5 = new Chord('Min5',12,'Csus4','major');

let chord1min6 = new Chord('Min6',1,'Cmi','minor');
let chord2min6 = new Chord('Min6',2,'Fmi','minor');
let chord3min6 = new Chord('Min6',3,'Bb','major');
let chord4min6 = new Chord('Min6',4,'Eb','major');
let chord5min6 = new Chord('Min6',5,'Ab','major');
let chord6min6 = new Chord('Min6',6,'Dmi7b5','minor');
let chord7min6 = new Chord('Min6',7,'Gaddb9','major');
let chord8min6 = new Chord('Min6',8,'G','major');
let chord9min6 = new Chord('Min6',9,'Ab/G','major');
let chord10min6 = new Chord('Min6',10,'G7','major');
let chord11min6 = new Chord('Min6',11,'Cmi/G','minor');
let chord12min6 = new Chord('Min6',12,'G7b9','major');

let chord1min7 = new Chord('Min7',1,'Cmi9','minor');
let chord2min7 = new Chord('Min7',2,'Ab9','major');
let chord3min7 = new Chord('Min7',3,'Cmi11','minor');
let chord4min7 = new Chord('Min7',4,'C7(#9,b13)','major');
let chord5min7 = new Chord('Min7',5,'Fmi9','minor');
let chord6min7 = new Chord('Min7',6,'Ebma7/F','major');
let chord7min7 = new Chord('Min7',7,'C11','major');
let chord8min7 = new Chord('Min7',8,'Ami11','minor');
let chord9min7 = new Chord('Min7',9,'Ab7#11','major');
let chord10min7 = new Chord('Min7',10,'G7#9','major');
let chord11min7 = new Chord('Min7',11,'Cmi.add9','minor');
let chord12min7 = new Chord('Min7',12,'G7(b9,b13)','major');

let chord1min8 = new Chord('Min8',1,'Cmin6/9','minor');
let chord2min8 = new Chord('Min8',2,'Dmi7b5','minor');
let chord3min8 = new Chord('Min8',3,'Cmi11/G','minor');
let chord4min8 = new Chord('Min8',4,'Cmi9','minor');
let chord5min8 = new Chord('Min8',5,'Fmi9','minor');
let chord6min8 = new Chord('Min8',6,'Abmi7','minor');
let chord7min8 = new Chord('Min8',7,'Ebmi7','minor');
let chord8min8 = new Chord('Min8',8,'Bbmi7 b5','minor');
let chord9min8 = new Chord('Min8',9,'Ami11','minor');
let chord10min8 = new Chord('Min8',10,'Abma7#5','augmented');
let chord11min8 = new Chord('Min8',11,'G7(b9,b13)','major');
let chord12min8 = new Chord('Min8',12,'Cmi9ma7','minor');

console.log("--------------")
console.log(chord1maj1.padData())
console.log("--------------")
console.log(chord2maj1.type)
console.log(chord2maj1.pad)
console.log(chord2maj1.name)
console.log(chord2maj1.numeral)
console.log("----")
console.log(chord2maj1.mode)
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
console.log("--------------")
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

let a = 1;
let bFlat = 2;
let b = 3;
let cSharp = 4;
let c = 5;
let dSharp = 6;
let d = 7;
let eFlat = 8;
let e = 9;
let fSharp = 10;
let f = 11;
let gSharp = 12;
