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

let chord1a = new Chord('C','Maj1',1,'C','major', 'I','Ionioan');
let chord2a = new Chord('C#','Maj1',2,'Emi','minor', 'iii', 'Phrygian');
let chord3a = new Chord('D','Maj1',3,'F','major', 'IV', 'Lydian');
let chord4a = new Chord('Eb','Maj1',4,'G','major', 'V', 'Mixolydian');
let chord5a = new Chord('E','Maj1',5,'Ami','minor', 'vi', 'Aeolian');
let chord6a = new Chord('F','Maj1',6,'Esus4','major');
let chord7a = new Chord('F#','Maj1',7,'Gadd9','major');
let chord8a = new Chord('G','Maj1',8,'Dmi','minor','ii', 'Dorian');
let chord9a = new Chord('G#','Maj1',9,'Fadd9','major');
let chord10a = new Chord('A','Maj1',10,'F6','major');
let chord11a = new Chord('Bb','Maj1',11,'Gsus4','major');
let chord12a = new Chord('B','Maj1',12,'G','major');

let chord1b = new Chord('Maj2',1,'C','major');
let chord2b = new Chord('Maj2',2,'C/B','major');
let chord3b = new Chord('Maj2',3,'C/A','major');
let chord4b = new Chord('Maj2',4,'C/G','major');
let chord5b = new Chord('Maj2',5,'Fadd9','major');
let chord6b = new Chord('Maj2',6,'Fmi','minor');
let chord7b = new Chord('Maj2',7,'Csus9','major');
let chord8b = new Chord('Maj2',8,'Ami7','minor');
let chord9b = new Chord('Maj2',9,'Emi','minor');
let chord10b = new Chord('Maj2',10,'F','major');
let chord11b = new Chord('Maj2',11,'Gsus4','major');
let chord12b = new Chord('Maj2',12,'G6','major');

let chord1c = new Chord('Maj3',1,'C','major');
let chord2c = new Chord('Maj3',2,'Ami','minor');
let chord3c = new Chord('Maj3',3,'Fmaj7','major');
let chord4c = new Chord('Maj3',4,'Gsus4','major');
let chord5c = new Chord('Maj3',5,'Amiadd9','minor');
let chord6c = new Chord('Maj3',6,'F6','major');
let chord7c = new Chord('Maj3',7,'Csus2','minor');
let chord8c = new Chord('Maj3',8,'G','major');
let chord9c = new Chord('Maj3',9,'Dsus2','minor');
let chord10c = new Chord('Maj3',10,'Bbadd9','major');
let chord11c = new Chord('Maj3',11,'Gsus4','major');
let chord12c = new Chord('Maj3',12,'Fadd9','major');

let chord1d = new Chord('Maj4',1,'C','major');
let chord2d = new Chord('Maj4',2,'G','major');
let chord3d = new Chord('Maj4',3,'Ami','minor');
let chord4d = new Chord('Maj4',4,'F6','major');
let chord5d = new Chord('Maj4',5,'F','major');
let chord6d = new Chord('Maj4',6,'Ami/E','minor');
let chord7d = new Chord('Maj4',7,'Dmi7','minor');
let chord8d = new Chord('Maj4',8,'Ami/C','minor');
let chord9d = new Chord('Maj4',9,'Gadd9','major');
let chord10d = new Chord('Maj4',10,'Ami7','minor');
let chord11d = new Chord('Maj4',11,'G/B','major');
let chord12d = new Chord('Maj4',12,'Dmi/G','minor');

let chord1e = new Chord('Maj5',1,'C','major');
let chord2e = new Chord('Maj5',2,'D','major');
let chord3e = new Chord('Maj5',3,'F','major');
let chord4e = new Chord('Maj5',4,'C','major');
let chord5e = new Chord('Maj5',5,'Ab','major');
let chord6e = new Chord('Maj5',6,'Eb','major');
let chord7e = new Chord('Maj5',7,'Bb','major');
let chord8e = new Chord('Maj5',8,'F','major');
let chord9e = new Chord('Maj5',9,'G7sus4','major');
let chord10e = new Chord('Maj5',10,'Bbadd9','minor');
let chord11e = new Chord('Maj5',11,'F6','major');
let chord12e = new Chord('Maj5',12,'Cadd9','major');

let chord1f = new Chord('Maj6',1,'C','major');
let chord2f = new Chord('Maj6',2,'G','major');
let chord3f = new Chord('Maj6',3,'Dmi','minor');
let chord4f = new Chord('Maj6',4,'Ami','minor');
let chord5f = new Chord('Maj6',5,'F','major');
let chord6f = new Chord('Maj6',6,'G/F','major');
let chord7f = new Chord('Maj6',7,'C/E','major');
let chord8f = new Chord('Maj6',8,'Ami7','minor');
let chord9f = new Chord('Maj6',9,'Dmi7','minor');
let chord10f = new Chord('Maj6',10,'Emi7','minor');
let chord11f = new Chord('Maj6',11,'C/F','major');
let chord12f = new Chord('Maj6',12,'Gsus4','major');

let chord1g = new Chord('Maj7',1,'C','major');
let chord2g = new Chord('Maj7',2,'G','major');
let chord3g = new Chord('Maj7',3,'Ami','minor');
let chord4g = new Chord('Maj7',4,'Emi','minor');
let chord5g = new Chord('Maj7',5,'F','major');
let chord6g = new Chord('Maj7',6,'C/E','major');
let chord7g = new Chord('Maj7',7,'Dmi','minor');
let chord8g = new Chord('Maj7',8,'Dmi/C','minor');
let chord9g = new Chord('Maj7',9,'G7/B','major');
let chord10g = new Chord('Maj7',10,'G','major');
let chord11g = new Chord('Maj7',11,'F/A','major');
let chord12g = new Chord('Maj7',12,'G7/B','major');

let chord1h = new Chord('Maj8',1,'Cmaj9','major');
let chord2h = new Chord('Maj8',2,'C#dim','minor');
let chord3h = new Chord('Maj8',3,'Dmi9','minor');
let chord4h = new Chord('Maj8',4,'D#dim7','minor');
let chord5h = new Chord('Maj8',5,'Emi9','minor');
let chord6h = new Chord('Maj8',6,'C9#5','augmented');
let chord7h = new Chord('Maj8',7,'Fmaj7add13','major');
let chord8h = new Chord('Maj8',8,'Bb9','major');
let chord9h = new Chord('Maj8',9,'Emi7','minor');
let chord10h = new Chord('Maj8',10,'A9','major');
let chord11h = new Chord('Maj8',11,'Dmi11','minor');
let chord12h = new Chord('Maj8',12,'G7(b9,b13)','major');

let chord1i = new Chord('Min1',1,'Cmi','minor');
let chord2i = new Chord('Min1',2,'Cmi/Eb','minor');
let chord3i = new Chord('Min1',3,'Fmi','minor');
let chord4i = new Chord('Min1',4,'G','major');
let chord5i = new Chord('Min1',5,'Ab ma7','major');
let chord6i = new Chord('Min1',6,'Eb','major');
let chord7i = new Chord('Min1',7,'Gmi','minor');
let chord8i = new Chord('Min1',8,'Bb','major');
let chord9i = new Chord('Min1',9,'F','major');
let chord10i = new Chord('Min1',10,'Fmi/Ab','minor');
let chord11i = new Chord('Min1',11,'Cmi/G','minor');
let chord12i = new Chord('Min1',12,'G','major');

let chord1j = new Chord('Min2',1,'Cmi','minor');
let chord2j = new Chord('Min2',2,'G+/B','major');
let chord3j = new Chord('Min2',3,'Cmi/Bb','minor');
let chord4j = new Chord('Min2',4,'Cmi/A','minor');
let chord5j = new Chord('Min2',5,'Ab ma7','major');
let chord6j = new Chord('Min2',6,'Eb ma7','major');
let chord7j = new Chord('Min2',7,'Fmi','minor');
let chord8j = new Chord('Min2',8,'Bb7','major');
let chord9j = new Chord('Min2',9,'Cmi','minor');
let chord10j = new Chord('Min2',10,'Bb add9','major');
let chord11j = new Chord('Min2',11,'Ab add9','major');
let chord12j = new Chord('Min2',12,'G7 sus4','major');

let chord1k = new Chord('Min3',1,'Cmi','minor');
let chord2k = new Chord('Min3',2,'Ab','major');
let chord3k = new Chord('Min3',3,'Eb','major');
let chord4k = new Chord('Min3',4,'Bb','major');
let chord5k = new Chord('Min3',5,'F','major');
let chord6k = new Chord('Min3',6,'Fmi','minor');
let chord7k = new Chord('Min3',7,'Cmi/G','minor');
let chord8k = new Chord('Min3',8,'Gsus4','major');
let chord9k = new Chord('Min3',9,'Cmi','minor');
let chord10k = new Chord('Min3',10,'Cmi#5','augmented');
let chord11k = new Chord('Min3',11,'Cmi6','minor');
let chord12k = new Chord('Min3',12,'Cmi7','minor');

let chord1l = new Chord('Min4',1,'Cmi','minor');
let chord2l = new Chord('Min4',2,'Eb','major');
let chord3l = new Chord('Min4',3,'Bb','major');
let chord4l = new Chord('Min4',4,'F','major');
let chord5l = new Chord('Min4',5,'Ab','major');
let chord6l = new Chord('Min4',6,'Ab ma7','major');
let chord7l = new Chord('Min4',7,'Ab mi7','minor');
let chord8l = new Chord('Min4',8,'Eb ma7','major');
let chord9l = new Chord('Min4',9,'Dsus4','major');
let chord10l = new Chord('Min4',10,'D','major');
let chord11l = new Chord('Min4',11,'Fmi/G','minor');
let chord12l = new Chord('Min4',12,'G+','major');

let chord1m = new Chord('Min5',1,'Cmi','minor');
let chord2m = new Chord('Min5',2,'Bb','major');
let chord3m = new Chord('Min5',3,'Ab6','major');
let chord4m = new Chord('Min5',4,'Bb add9','major');
let chord5m = new Chord('Min5',5,'Cmi','minor');
let chord6m = new Chord('Min5',6,'Dmi7','minor');
let chord7m = new Chord('Min5',7,'Cmi/Eb','minor');
let chord8m = new Chord('Min5',8,'Fmi','minor');
let chord9m = new Chord('Min5',9,'G','major');
let chord10m = new Chord('Min5',10,'Ab ma7','major');
let chord11m = new Chord('Min5',11,'B6/9','major');
let chord12m = new Chord('Min5',12,'Csus4','major');

let chord1n = new Chord('Min6',1,'Cmi','minor');
let chord2n = new Chord('Min6',2,'Fmi','minor');
let chord3n = new Chord('Min6',3,'Bb','major');
let chord4n = new Chord('Min6',4,'Eb','major');
let chord5n = new Chord('Min6',5,'Ab','major');
let chord6n = new Chord('Min6',6,'Dmi7b5','minor');
let chord7n = new Chord('Min6',7,'Gaddb9','major');
let chord8n = new Chord('Min6',8,'G','major');
let chord9n = new Chord('Min6',9,'Ab/G','major');
let chord10n = new Chord('Min6',10,'G7','major');
let chord11n = new Chord('Min6',11,'Cmi/G','minor');
let chord12n = new Chord('Min6',12,'G7b9','major');

let chord1o = new Chord('Min7',1,'Cmi9','minor');
let chord2o = new Chord('Min7',2,'Ab9','major');
let chord3o = new Chord('Min7',3,'Cmi11','minor');
let chord4o = new Chord('Min7',4,'C7(#9,b13)','major');
let chord5o = new Chord('Min7',5,'Fmi9','minor');
let chord6o = new Chord('Min7',6,'Eb ma7/F','major');
let chord7o = new Chord('Min7',7,'C11','major');
let chord8o = new Chord('Min7',8,'Ami11','minor');
let chord9o = new Chord('Min7',9,'Ab7#11','major');
let chord10o = new Chord('Min7',10,'G7#9','major');
let chord11o = new Chord('Min7',11,'Cmi add9','minor');
let chord12o = new Chord('Min7',12,'G7(b9,b13)','major');

let chord1p = new Chord('Min8',1,'Cmin6/9','minor');
let chord2p = new Chord('Min8',2,'Dmi7b5','minor');
let chord3p = new Chord('Min8',3,'Cmi11/G','minor');
let chord4p = new Chord('Min8',4,'Cmi9','minor');
let chord5p = new Chord('Min8',5,'Fmi9','minor');
let chord6p = new Chord('Min8',6,'Ab mi7','minor');
let chord7p = new Chord('Min8',7,'Eb mi7','minor');
let chord8p = new Chord('Min8',8,'Bb mi7 b5','minor');
let chord9p = new Chord('Min8',9,'Ami11','minor');
let chord10p = new Chord('Min8',10,'Abma7#5','augmented');
let chord11p = new Chord('Min8',11,'G7(b9,b13)','major');
let chord12p = new Chord('Min8',12,'Cmi9 ma7','minor');

console.log("--------------")
console.log(chord1a.padData())
// console.log(chord2a.padData())
// console.log(chord3a.padData())
// console.log(chord4a.padData())
// console.log(chord5a.padData())
// console.log(chord6a.padData())
// console.log(chord7a.padData())
// console.log(chord8a.padData())
// console.log(chord9a.padData())
// console.log(chord10a.padData())
// console.log(chord11a.padData())
// console.log(chord12a.padData())
console.log("--------------")
// console.log(chord1b.padData())
// console.log(chord2b.padData())
// console.log(chord3b.padData())
// console.log(chord4b.padData())
// console.log(chord5b.padData())
// console.log(chord6b.padData())
// console.log(chord7b.padData())
// console.log(chord8b.padData())
// console.log(chord9b.padData())
// console.log(chord10b.padData())
// console.log(chord11b.padData())
// console.log(chord12b.padData())
// console.log("--------------")
// console.log(chord1c.padData())
// console.log(chord2c.padData())
// console.log(chord3c.padData())
// console.log(chord4c.padData())
// console.log(chord5c.padData())
// console.log(chord6c.padData())
// console.log(chord7c.padData())
// console.log(chord8c.padData())
// console.log(chord9c.padData())
// console.log(chord10c.padData())
// console.log(chord11c.padData())
// console.log(chord12c.padData())
// console.log("--------------")
// console.log(chord1d.padData())
// console.log(chord2d.padData())
// console.log(chord3d.padData())
// console.log(chord4d.padData())
// console.log(chord5d.padData())
// console.log(chord6d.padData())
// console.log(chord7d.padData())
// console.log(chord8d.padData())
// console.log(chord9d.padData())
// console.log(chord10d.padData())
// console.log(chord11d.padData())
// console.log(chord12d.padData())
// console.log("--------------")
// console.log(chord1e.padData())
// console.log(chord2e.padData())
// console.log(chord3e.padData())
// console.log(chord4e.padData())
// console.log(chord5e.padData())
// console.log(chord6e.padData())
// console.log(chord7e.padData())
// console.log(chord8e.padData())
// console.log(chord9e.padData())
// console.log(chord10e.padData())
// console.log(chord11e.padData())
// console.log(chord12e.padData())
// console.log("--------------")
// console.log(chord1f.padData())
// console.log(chord2f.padData())
// console.log(chord3f.padData())
// console.log(chord4f.padData())
// console.log(chord5f.padData())
// console.log(chord6f.padData())
// console.log(chord7f.padData())
// console.log(chord8f.padData())
// console.log(chord9f.padData())
// console.log(chord10f.padData())
// console.log(chord11f.padData())
// console.log(chord12f.padData())
// console.log("--------------")
// console.log(chord1g.padData())
// console.log(chord2g.padData())
// console.log(chord3g.padData())
// console.log(chord4g.padData())
// console.log(chord5g.padData())
// console.log(chord6g.padData())
// console.log(chord7g.padData())
// console.log(chord8g.padData())
// console.log(chord9g.padData())
// console.log(chord10g.padData())
// console.log(chord11g.padData())
// console.log(chord12g.padData())
// console.log("--------------")
// console.log(chord1h.padData())
// console.log(chord2h.padData())
// console.log(chord3h.padData())
// console.log(chord4h.padData())
// console.log(chord5h.padData())
// console.log(chord6h.padData())
// console.log(chord7h.padData())
// console.log(chord8h.padData())
// console.log(chord9h.padData())
// console.log(chord10h.padData())
// console.log(chord11h.padData())
// console.log(chord12h.padData())
// console.log("--------------")
// console.log(chord1i.padData())
// console.log(chord2i.padData())
// console.log(chord3i.padData())
// console.log(chord4i.padData())
// console.log(chord5i.padData())
// console.log(chord6i.padData())
// console.log(chord7i.padData())
// console.log(chord8i.padData())
// console.log(chord9i.padData())
// console.log(chord10i.padData())
// console.log(chord11i.padData())
// console.log(chord12i.padData())
// console.log("--------------")
// console.log(chord1j.padData())
// console.log(chord2j.padData())
// console.log(chord3j.padData())
// console.log(chord4j.padData())
// console.log(chord5j.padData())
// console.log(chord6j.padData())
// console.log(chord7j.padData())
// console.log(chord8j.padData())
// console.log(chord9j.padData())
// console.log(chord10j.padData())
// console.log(chord11j.padData())
// console.log(chord12j.padData())
// console.log("--------------")
// console.log(chord1k.padData())
// console.log(chord2k.padData())
// console.log(chord3k.padData())
// console.log(chord4k.padData())
// console.log(chord5k.padData())
// console.log(chord6k.padData())
// console.log(chord7k.padData())
// console.log(chord8k.padData())
// console.log(chord9k.padData())
// console.log(chord10k.padData())
// console.log(chord11k.padData())
// console.log(chord12k.padData())
// console.log("--------------")
// console.log(chord1l.padData())
// console.log(chord2l.padData())
// console.log(chord3l.padData())
// console.log(chord4l.padData())
// console.log(chord5l.padData())
// console.log(chord6l.padData())
// console.log(chord7l.padData())
// console.log(chord8l.padData())
// console.log(chord9l.padData())
// console.log(chord10l.padData())
// console.log(chord11l.padData())
// console.log(chord12l.padData())
// console.log("--------------")
// console.log(chord1m.padData())
// console.log(chord2m.padData())
// console.log(chord3m.padData())
// console.log(chord4m.padData())
// console.log(chord5m.padData())
// console.log(chord6m.padData())
// console.log(chord7m.padData())
// console.log(chord8m.padData())
// console.log(chord9m.padData())
// console.log(chord10m.padData())
// console.log(chord11m.padData())
// console.log(chord12m.padData())
// console.log("--------------")
// console.log(chord1n.padData())
// console.log(chord2n.padData())
// console.log(chord3n.padData())
// console.log(chord4n.padData())
// console.log(chord5n.padData())
// console.log(chord6n.padData())
// console.log(chord7n.padData())
// console.log(chord8n.padData())
// console.log(chord9n.padData())
// console.log(chord10n.padData())
// console.log(chord11n.padData())
// console.log(chord12n.padData())
// console.log("--------------")
// console.log(chord1o.padData())
// console.log(chord2o.padData())
// console.log(chord3o.padData())
// console.log(chord4o.padData())
// console.log(chord5o.padData())
// console.log(chord6o.padData())
// console.log(chord7o.padData())
// console.log(chord8o.padData())
// console.log(chord9o.padData())
// console.log(chord10o.padData())
// console.log(chord11o.padData())
// console.log(chord12o.padData())
// console.log("--------------")
// console.log(chord1p.padData())
// console.log(chord2p.padData())
// console.log(chord3p.padData())
// console.log(chord4p.padData())
// console.log(chord5p.padData())
// console.log(chord6p.padData())
// console.log(chord7p.padData())
// console.log(chord8p.padData())
// console.log(chord9p.padData())
// console.log(chord10p.padData())
// console.log(chord11p.padData())
// console.log(chord12p.padData())
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
