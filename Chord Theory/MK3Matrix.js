class Chord {
    constructor(smartkey,set,pad,name,type,numeral,mode) {
        this.smartkey = smartkey;
        this.set = set;
        this.pad = pad;
        this.name = name;
        this.type = type;
        this.numeral = numeral;
        this.mode = mode;
    }
    smartkey() {
        console.log("Smart Key:", this.smartkey);
    }
    set() {
        console.log("Chord Set:", this.set);
    }
    pad() {
        console.log("Pad Location:", this.pad);
    }
    name() {
        console.log("Chord Name:", this.name);
    }
    type() {
        console.log("Maj/Min:", this.type);
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

let set1a = new Chord('C','Maj1',1,'C','major', 'I','Ionioan');
let set2a = new Chord('C#','Maj1',2,'Emi','minor', 'iii', 'Phrygian');
let set3a = new Chord('D','Maj1',3,'F','major', 'IV', 'Lydian');
let set4a = new Chord('Eb','Maj1',4,'G','major', 'V', 'Mixolydian');
let set5a = new Chord('E','Maj1',5,'Ami','minor', 'vi', 'Aeolian');
let set6a = new Chord('F','Maj1',6,'Esus4','major');
let set7a = new Chord('F#','Maj1',7,'Gadd9','major');
let set8a = new Chord('G','Maj1',8,'Dmi','minor','ii', 'Dorian');
let set9a = new Chord('G#','Maj1',9,'Fadd9','major');
let set10a = new Chord('A','Maj1',10,'F6','major');
let set11a = new Chord('Bb','Maj1',11,'Gsus4','major');
let set12a = new Chord('B','Maj1',12,'G','major');

let set1b = new Chord('Maj2',1,'C','major');
let set2b = new Chord('Maj2',2,'C/B','major');
let set3b = new Chord('Maj2',3,'C/A','major');
let set4b = new Chord('Maj2',4,'C/G','major');
let set5b = new Chord('Maj2',5,'Fadd9','major');
let set6b = new Chord('Maj2',6,'Fmi','minor');
let set7b = new Chord('Maj2',7,'Csus9','major');
let set8b = new Chord('Maj2',8,'Ami7','minor');
let set9b = new Chord('Maj2',9,'Emi','minor');
let set10b = new Chord('Maj2',10,'F','major');
let set11b = new Chord('Maj2',11,'Gsus4','major');
let set12b = new Chord('Maj2',12,'G6','major');

let set1c = new Chord('Maj3',1,'C','major');
let set2c = new Chord('Maj3',2,'Ami','minor');
let set3c = new Chord('Maj3',3,'Fmaj7','major');
let set4c = new Chord('Maj3',4,'Gsus4','major');
let set5c = new Chord('Maj3',5,'Amiadd9','minor');
let set6c = new Chord('Maj3',6,'F6','major');
let set7c = new Chord('Maj3',7,'Csus2','minor');
let set8c = new Chord('Maj3',8,'G','major');
let set9c = new Chord('Maj3',9,'Dsus2','minor');
let set10c = new Chord('Maj3',10,'Bbadd9','major');
let set11c = new Chord('Maj3',11,'Gsus4','major');
let set12c = new Chord('Maj3',12,'Fadd9','major');

let set1d = new Chord('Maj4',1,'C','major');
let set2d = new Chord('Maj4',2,'G','major');
let set3d = new Chord('Maj4',3,'Ami','minor');
let set4d = new Chord('Maj4',4,'F6','major');
let set5d = new Chord('Maj4',5,'F','major');
let set6d = new Chord('Maj4',6,'Ami/E','minor');
let set7d = new Chord('Maj4',7,'Dmi7','minor');
let set8d = new Chord('Maj4',8,'Ami/C','minor');
let set9d = new Chord('Maj4',9,'Gadd9','major');
let set10d = new Chord('Maj4',10,'Ami7','minor');
let set11d = new Chord('Maj4',11,'G/B','major');
let set12d = new Chord('Maj4',12,'Dmi/G','minor');

let set1e = new Chord('Maj5',1,'C','major');
let set2e = new Chord('Maj5',2,'D','major');
let set3e = new Chord('Maj5',3,'F','major');
let set4e = new Chord('Maj5',4,'C','major');
let set5e = new Chord('Maj5',5,'Ab','major');
let set6e = new Chord('Maj5',6,'Eb','major');
let set7e = new Chord('Maj5',7,'Bb','major');
let set8e = new Chord('Maj5',8,'F','major');
let set9e = new Chord('Maj5',9,'G7sus4','major');
let set10e = new Chord('Maj5',10,'Bbadd9','minor');
let set11e = new Chord('Maj5',11,'F6','major');
let set12e = new Chord('Maj5',12,'Cadd9','major');

let set1f = new Chord('Maj6',1,'C','major');
let set2f = new Chord('Maj6',2,'G','major');
let set3f = new Chord('Maj6',3,'Dmi','minor');
let set4f = new Chord('Maj6',4,'Ami','minor');
let set5f = new Chord('Maj6',5,'F','major');
let set6f = new Chord('Maj6',6,'G/F','major');
let set7f = new Chord('Maj6',7,'C/E','major');
let set8f = new Chord('Maj6',8,'Ami7','minor');
let set9f = new Chord('Maj6',9,'Dmi7','minor');
let set10f = new Chord('Maj6',10,'Emi7','minor');
let set11f = new Chord('Maj6',11,'C/F','major');
let set12f = new Chord('Maj6',12,'Gsus4','major');

let set1g = new Chord('Maj7',1,'C','major');
let set2g = new Chord('Maj7',2,'G','major');
let set3g = new Chord('Maj7',3,'Ami','minor');
let set4g = new Chord('Maj7',4,'Emi','minor');
let set5g = new Chord('Maj7',5,'F','major');
let set6g = new Chord('Maj7',6,'C/E','major');
let set7g = new Chord('Maj7',7,'Dmi','minor');
let set8g = new Chord('Maj7',8,'Dmi/C','minor');
let set9g = new Chord('Maj7',9,'G7/B','major');
let set10g = new Chord('Maj7',10,'G','major');
let set11g = new Chord('Maj7',11,'F/A','major');
let set12g = new Chord('Maj7',12,'G7/B','major');

let set1h = new Chord('Maj8',1,'Cmaj9','major');
let set2h = new Chord('Maj8',2,'C#dim','minor');
let set3h = new Chord('Maj8',3,'Dmi9','minor');
let set4h = new Chord('Maj8',4,'D#dim7','minor');
let set5h = new Chord('Maj8',5,'Emi9','minor');
let set6h = new Chord('Maj8',6,'C9#5','augmented');
let set7h = new Chord('Maj8',7,'Fmaj7add13','major');
let set8h = new Chord('Maj8',8,'Bb9','major');
let set9h = new Chord('Maj8',9,'Emi7','minor');
let set10h = new Chord('Maj8',10,'A9','major');
let set11h = new Chord('Maj8',11,'Dmi11','minor');
let set12h = new Chord('Maj8',12,'G7(b9,b13)','major');

let set1i = new Chord('Min1',1,'Cmi','minor');
let set2i = new Chord('Min1',2,'Cmi/Eb','minor');
let set3i = new Chord('Min1',3,'Fmi','minor');
let set4i = new Chord('Min1',4,'G','major');
let set5i = new Chord('Min1',5,'Ab ma7','major');
let set6i = new Chord('Min1',6,'Eb','major');
let set7i = new Chord('Min1',7,'Gmi','minor');
let set8i = new Chord('Min1',8,'Bb','major');
let set9i = new Chord('Min1',9,'F','major');
let set10i = new Chord('Min1',10,'Fmi/Ab','minor');
let set11i = new Chord('Min1',11,'Cmi/G','minor');
let set12i = new Chord('Min1',12,'G','major');

let set1j = new Chord('Min2',1,'Cmi','minor');
let set2j = new Chord('Min2',2,'G+/B','major');
let set3j = new Chord('Min2',3,'Cmi/Bb','minor');
let set4j = new Chord('Min2',4,'Cmi/A','minor');
let set5j = new Chord('Min2',5,'Ab ma7','major');
let set6j = new Chord('Min2',6,'Eb ma7','major');
let set7j = new Chord('Min2',7,'Fmi','minor');
let set8j = new Chord('Min2',8,'Bb7','major');
let set9j = new Chord('Min2',9,'Cmi','minor');
let set10j = new Chord('Min2',10,'Bb add9','major');
let set11j = new Chord('Min2',11,'Ab add9','major');
let set12j = new Chord('Min2',12,'G7 sus4','major');

let set1k = new Chord('Min3',1,'Cmi','minor');
let set2k = new Chord('Min3',2,'Ab','major');
let set3k = new Chord('Min3',3,'Eb','major');
let set4k = new Chord('Min3',4,'Bb','major');
let set5k = new Chord('Min3',5,'F','major');
let set6k = new Chord('Min3',6,'Fmi','minor');
let set7k = new Chord('Min3',7,'Cmi/G','minor');
let set8k = new Chord('Min3',8,'Gsus4','major');
let set9k = new Chord('Min3',9,'Cmi','minor');
let set10k = new Chord('Min3',10,'Cmi#5','augmented');
let set11k = new Chord('Min3',11,'Cmi6','minor');
let set12k = new Chord('Min3',12,'Cmi7','minor');

let set1l = new Chord('Min4',1,'Cmi','minor');
let set2l = new Chord('Min4',2,'Eb','major');
let set3l = new Chord('Min4',3,'Bb','major');
let set4l = new Chord('Min4',4,'F','major');
let set5l = new Chord('Min4',5,'Ab','major');
let set6l = new Chord('Min4',6,'Ab ma7','major');
let set7l = new Chord('Min4',7,'Ab mi7','minor');
let set8l = new Chord('Min4',8,'Eb ma7','major');
let set9l = new Chord('Min4',9,'Dsus4','major');
let set10l = new Chord('Min4',10,'D','major');
let set11l = new Chord('Min4',11,'Fmi/G','minor');
let set12l = new Chord('Min4',12,'G+','major');

let set1m = new Chord('Min5',1,'Cmi','minor');
let set2m = new Chord('Min5',2,'Bb','major');
let set3m = new Chord('Min5',3,'Ab6','major');
let set4m = new Chord('Min5',4,'Bb add9','major');
let set5m = new Chord('Min5',5,'Cmi','minor');
let set6m = new Chord('Min5',6,'Dmi7','minor');
let set7m = new Chord('Min5',7,'Cmi/Eb','minor');
let set8m = new Chord('Min5',8,'Fmi','minor');
let set9m = new Chord('Min5',9,'G','major');
let set10m = new Chord('Min5',10,'Ab ma7','major');
let set11m = new Chord('Min5',11,'B6/9','major');
let set12m = new Chord('Min5',12,'Csus4','major');

let set1n = new Chord('Min6',1,'Cmi','minor');
let set2n = new Chord('Min6',2,'Fmi','minor');
let set3n = new Chord('Min6',3,'Bb','major');
let set4n = new Chord('Min6',4,'Eb','major');
let set5n = new Chord('Min6',5,'Ab','major');
let set6n = new Chord('Min6',6,'Dmi7b5','minor');
let set7n = new Chord('Min6',7,'Gaddb9','major');
let set8n = new Chord('Min6',8,'G','major');
let set9n = new Chord('Min6',9,'Ab/G','major');
let set10n = new Chord('Min6',10,'G7','major');
let set11n = new Chord('Min6',11,'Cmi/G','minor');
let set12n = new Chord('Min6',12,'G7b9','major');

let set1o = new Chord('Min7',1,'Cmi9','minor');
let set2o = new Chord('Min7',2,'Ab9','major');
let set3o = new Chord('Min7',3,'Cmi11','minor');
let set4o = new Chord('Min7',4,'C7(#9,b13)','major');
let set5o = new Chord('Min7',5,'Fmi9','minor');
let set6o = new Chord('Min7',6,'Eb ma7/F','major');
let set7o = new Chord('Min7',7,'C11','major');
let set8o = new Chord('Min7',8,'Ami11','minor');
let set9o = new Chord('Min7',9,'Ab7#11','major');
let set10o = new Chord('Min7',10,'G7#9','major');
let set11o = new Chord('Min7',11,'Cmi add9','minor');
let set12o = new Chord('Min7',12,'G7(b9,b13)','major');

let set1p = new Chord('Min8',1,'Cmin6/9','minor');
let set2p = new Chord('Min8',2,'Dmi7b5','minor');
let set3p = new Chord('Min8',3,'Cmi11/G','minor');
let set4p = new Chord('Min8',4,'Cmi9','minor');
let set5p = new Chord('Min8',5,'Fmi9','minor');
let set6p = new Chord('Min8',6,'Ab mi7','minor');
let set7p = new Chord('Min8',7,'Eb mi7','minor');
let set8p = new Chord('Min8',8,'Bb mi7 b5','minor');
let set9p = new Chord('Min8',9,'Ami11','minor');
let set10p = new Chord('Min8',10,'Abma7#5','augmented');
let set11p = new Chord('Min8',11,'G7(b9,b13)','major');
let set12p = new Chord('Min8',12,'Cmi9 ma7','minor');

console.log("--------------")
console.log(set1a.padData())
// console.log(set2a.padData())
// console.log(set3a.padData())
// console.log(set4a.padData())
// console.log(set5a.padData())
// console.log(set6a.padData())
// console.log(set7a.padData())
// console.log(set8a.padData())
// console.log(set9a.padData())
// console.log(set10a.padData())
// console.log(set11a.padData())
// console.log(set12a.padData())
console.log("--------------")
// console.log(set1b.padData())
// console.log(set2b.padData())
// console.log(set3b.padData())
// console.log(set4b.padData())
// console.log(set5b.padData())
// console.log(set6b.padData())
// console.log(set7b.padData())
// console.log(set8b.padData())
// console.log(set9b.padData())
// console.log(set10b.padData())
// console.log(set11b.padData())
// console.log(set12b.padData())
// console.log("--------------")
// console.log(set1c.padData())
// console.log(set2c.padData())
// console.log(set3c.padData())
// console.log(set4c.padData())
// console.log(set5c.padData())
// console.log(set6c.padData())
// console.log(set7c.padData())
// console.log(set8c.padData())
// console.log(set9c.padData())
// console.log(set10c.padData())
// console.log(set11c.padData())
// console.log(set12c.padData())
// console.log("--------------")
// console.log(set1d.padData())
// console.log(set2d.padData())
// console.log(set3d.padData())
// console.log(set4d.padData())
// console.log(set5d.padData())
// console.log(set6d.padData())
// console.log(set7d.padData())
// console.log(set8d.padData())
// console.log(set9d.padData())
// console.log(set10d.padData())
// console.log(set11d.padData())
// console.log(set12d.padData())
// console.log("--------------")
// console.log(set1e.padData())
// console.log(set2e.padData())
// console.log(set3e.padData())
// console.log(set4e.padData())
// console.log(set5e.padData())
// console.log(set6e.padData())
// console.log(set7e.padData())
// console.log(set8e.padData())
// console.log(set9e.padData())
// console.log(set10e.padData())
// console.log(set11e.padData())
// console.log(set12e.padData())
// console.log("--------------")
// console.log(set1f.padData())
// console.log(set2f.padData())
// console.log(set3f.padData())
// console.log(set4f.padData())
// console.log(set5f.padData())
// console.log(set6f.padData())
// console.log(set7f.padData())
// console.log(set8f.padData())
// console.log(set9f.padData())
// console.log(set10f.padData())
// console.log(set11f.padData())
// console.log(set12f.padData())
// console.log("--------------")
// console.log(set1g.padData())
// console.log(set2g.padData())
// console.log(set3g.padData())
// console.log(set4g.padData())
// console.log(set5g.padData())
// console.log(set6g.padData())
// console.log(set7g.padData())
// console.log(set8g.padData())
// console.log(set9g.padData())
// console.log(set10g.padData())
// console.log(set11g.padData())
// console.log(set12g.padData())
// console.log("--------------")
// console.log(set1h.padData())
// console.log(set2h.padData())
// console.log(set3h.padData())
// console.log(set4h.padData())
// console.log(set5h.padData())
// console.log(set6h.padData())
// console.log(set7h.padData())
// console.log(set8h.padData())
// console.log(set9h.padData())
// console.log(set10h.padData())
// console.log(set11h.padData())
// console.log(set12h.padData())
// console.log("--------------")
// console.log(set1i.padData())
// console.log(set2i.padData())
// console.log(set3i.padData())
// console.log(set4i.padData())
// console.log(set5i.padData())
// console.log(set6i.padData())
// console.log(set7i.padData())
// console.log(set8i.padData())
// console.log(set9i.padData())
// console.log(set10i.padData())
// console.log(set11i.padData())
// console.log(set12i.padData())
// console.log("--------------")
// console.log(set1j.padData())
// console.log(set2j.padData())
// console.log(set3j.padData())
// console.log(set4j.padData())
// console.log(set5j.padData())
// console.log(set6j.padData())
// console.log(set7j.padData())
// console.log(set8j.padData())
// console.log(set9j.padData())
// console.log(set10j.padData())
// console.log(set11j.padData())
// console.log(set12j.padData())
// console.log("--------------")
// console.log(set1k.padData())
// console.log(set2k.padData())
// console.log(set3k.padData())
// console.log(set4k.padData())
// console.log(set5k.padData())
// console.log(set6k.padData())
// console.log(set7k.padData())
// console.log(set8k.padData())
// console.log(set9k.padData())
// console.log(set10k.padData())
// console.log(set11k.padData())
// console.log(set12k.padData())
// console.log("--------------")
// console.log(set1l.padData())
// console.log(set2l.padData())
// console.log(set3l.padData())
// console.log(set4l.padData())
// console.log(set5l.padData())
// console.log(set6l.padData())
// console.log(set7l.padData())
// console.log(set8l.padData())
// console.log(set9l.padData())
// console.log(set10l.padData())
// console.log(set11l.padData())
// console.log(set12l.padData())
// console.log("--------------")
// console.log(set1m.padData())
// console.log(set2m.padData())
// console.log(set3m.padData())
// console.log(set4m.padData())
// console.log(set5m.padData())
// console.log(set6m.padData())
// console.log(set7m.padData())
// console.log(set8m.padData())
// console.log(set9m.padData())
// console.log(set10m.padData())
// console.log(set11m.padData())
// console.log(set12m.padData())
// console.log("--------------")
// console.log(set1n.padData())
// console.log(set2n.padData())
// console.log(set3n.padData())
// console.log(set4n.padData())
// console.log(set5n.padData())
// console.log(set6n.padData())
// console.log(set7n.padData())
// console.log(set8n.padData())
// console.log(set9n.padData())
// console.log(set10n.padData())
// console.log(set11n.padData())
// console.log(set12n.padData())
// console.log("--------------")
// console.log(set1o.padData())
// console.log(set2o.padData())
// console.log(set3o.padData())
// console.log(set4o.padData())
// console.log(set5o.padData())
// console.log(set6o.padData())
// console.log(set7o.padData())
// console.log(set8o.padData())
// console.log(set9o.padData())
// console.log(set10o.padData())
// console.log(set11o.padData())
// console.log(set12o.padData())
// console.log("--------------")
// console.log(set1p.padData())
// console.log(set2p.padData())
// console.log(set3p.padData())
// console.log(set4p.padData())
// console.log(set5p.padData())
// console.log(set6p.padData())
// console.log(set7p.padData())
// console.log(set8p.padData())
// console.log(set9p.padData())
// console.log(set10p.padData())
// console.log(set11p.padData())
// console.log(set12p.padData())
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
