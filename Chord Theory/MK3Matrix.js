// https://www.figma.com/file/cSKRnG5LTuPCbYysuOPPww/ChordTheoryApp?node-id=0%3A1
// https://www.reddit.com/r/maschine/comments/u3043j/chord_mode_cheatsheet_inspired_by_7_super_common/

class Chord {
    constructor(pad,name,accent, quality,numeral,mode,type,smartkey) {
        this.pad = pad;
        this.name = name;
        this.accent = accent;
        this.quality = quality;
        this.numeral = numeral;
        this.mode = mode;
        this.type = type;
        this.smartkey = smartkey;
    }
    pad() {
        console.log("Pad Location:", this.pad);
    }
    name() {
        console.log("Chord Name:", this.name);
    }
    accent() {
        console.log("Chord Accent:", this.accent);
    }
    quality() {
        console.log("Maj/Min:", this.quality);
    }
    numeral() {
        console.log("Pos:", this.numeral);
    }
    mode() {
        console.log("Mode:", this.mode);
    }
    type() {
        console.log("Type:", this.type);
    }
    smartkey() {
        console.log("Smart Key:", this.smartkey);
    }
    padData() {
        return this;
    }
};

let root = 'C';
let second = 'C#';
let third = 'D';
let fourth = 'Eb';
let fifth = 'E';
let sixth = 'F';
let seventh = 'F#';
let eighth = 'G';
let ninth = 'G#(Ab)';
let tenth = 'A';
let eleventh = 'Bb';
let twelve = 'B';

let minor = 'mi';
let minorSev = 'mi7';
let minorEleven = 'mi11';
let majorSev = 'ma7';

let slash = "/";
let seven = "7";
let plus = "+";

let overOne = `${root}${slash}${twelve}`;
let overTwo = `${root}${slash}${tenth}`;
let overThree = `${root}${slash}${eighth}`;
let overFour = `${eighth}${slash}${twelve}`;
let overFive = `${eighth}${slash}${sixth}`;
let overSix = `${root}${slash}${fifth}`;
let overSeven = `${root}${slash}${sixth}`;
let overEight = `${sixth}${slash}${tenth}`;
let overNine = `${eighth}${slash}${twelve}`;

let overMinor = `${tenth}${minor}${slash}${fifth}`;
let overMinorTwo = `${tenth}${minor}${slash}${root}`;
let overMinorThree = `${third}${minor}${slash}${eighth}`;
let overMinorFour = `${third}${minor}${slash}${root}`;
let overMinorFive = `${root}${minor}${slash}${fourth}`;
let overMinorSix = `${sixth}${minor}${slash}${ninth}`;
let overMinorSeven = `${root}${minor}${slash}${eighth}`;
let overMinorEighth = `${root}${minor}${slash}${eleventh}`;
let overMinorNinth = `${root}${minor}${slash}${tenth}`;
let overMinorTenth = `${sixth}${minor}${slash}${eighth}`;
let overMinorEleventh = `${root}${minor}${slash}${fourth}`;

let majSevOver = `${fourth}${majorSev}${slash}${sixth}`;  
let minElevOver = `${root}${minorEleven}${slash}${eighth}`; 

let slashSeven = `${seventh}${seven}${slash}${eleventh}`
let slashEight = `${ninth}${slash}${eighth}`;
let plusSlash = `${eighth}${plus}${slash}${twelve}`


let chord1maj1 = new Chord(1,root ,"-",'major', '(I)','Ionian', 'Maj1','C'); 
let chord2maj1 = new Chord(2,fifth ,'-mi','minor', '(iii)', 'Phrygian','Maj1','C#'); 
let chord3maj1 = new Chord(3,sixth ,'-','major', '(IV)', 'Lydian', 'Maj1','D');
let chord4maj1 = new Chord(4,eighth ,'-','major', '(V)', 'Mixolydian','Maj1','Eb'); // how about the chord position? independent variable
let chord5maj1 = new Chord(5,tenth ,'-mi','minor', '(vi)', 'Aeolian','Maj1','E');
let chord6maj1 = new Chord(6,fifth ,'-sus4','major','-','-','Maj1','F'); 
let chord7maj1 = new Chord(7,eighth ,'-add9','major','-','-','Maj1','F#');
let chord8maj1 = new Chord(8,third ,'-mi','minor','(ii)', 'Dorian','Maj1','G');
let chord9maj1 = new Chord(9,sixth ,'-add9','major','-','-','Maj1','Ab');
let chord10maj1 = new Chord(10,sixth ,'-6','major','-','-','Maj1','A');
let chord11maj1 = new Chord(11,eighth ,'-sus4','major','-','-','Maj1','Bb');
let chord12maj1 = new Chord(12,eighth ,'-','major','-','-','Maj1','B');

let chord1maj2 = new Chord(1, root,'-','major','-','-','Maj2','C');
let chord2maj2 = new Chord(2,overOne,'-','major','-','-','Maj2','C#');
let chord3maj2 = new Chord(3,overTwo,'-','major','-','-','Maj2','D');
let chord4maj2 = new Chord(4,overThree,'-','major','-','-','Maj2','Eb');
let chord5maj2 = new Chord(5,sixth,'add9','major','-','-','Maj2','E');
let chord6maj2 = new Chord(6,sixth,'mi','minor','-','-','Maj2','F');
let chord7maj2 = new Chord(7,root,'sus9','major','-','-','Maj2','F#');
let chord8maj2 = new Chord(8,tenth,'mi7','minor','-','-','Maj2','G');
let chord9maj2 = new Chord(9,fifth,'mi','minor','-','-','Maj2','Ab');
let chord10maj2 = new Chord(10,sixth,'-','major','-','-','Maj2','A');
let chord11maj2 = new Chord(11,eighth,'sus4','major','-','-','Maj2','Bb');
let chord12maj2 = new Chord(12,eighth,'6','major','-','-','Maj2','B');

let chord1maj3 = new Chord(1,root,'major','-','-','Maj3','C');
let chord2maj3 = new Chord(2,tenth,'mi','minor','-','-','Maj3','C#');
let chord3maj3 = new Chord(3,sixth,'ma7','major','-','-','Maj3','D');
let chord4maj3 = new Chord(4,eighth,'sus4','major','-','-','Maj3','Eb');
let chord5maj3 = new Chord(5,tenth,'mi-add9','minor','-','-','Maj3','E');
let chord6maj3 = new Chord(6,sixth,'6','major','-','-','Maj3','F');
let chord7maj3 = new Chord(7,root,'sus2','minor','-','-','Maj3','F#');
let chord8maj3 = new Chord(8,eighth,'-','major','-','-','Maj3','G');
let chord9maj3 = new Chord(9,third,'sus2','minor','-','-','Maj3','Ab');
let chord10maj3 = new Chord(10,eleventh,'-add9','major','-','-','Maj3','A');
let chord11maj3 = new Chord(11,eighth,'sus4','major','-','-','Maj3','Bb');
let chord12maj3 = new Chord(12,sixth,'add9','major','-','-','Maj3','B');

let chord1maj4 = new Chord(1, root,'-','major','-','-','Maj4','C');
let chord2maj4 = new Chord(2,eighth,'-','major','-','-','Maj4','C#');
let chord3maj4 = new Chord(3,tenth,'mi','minor','-','-','Maj4','D');
let chord4maj4 = new Chord(4,sixth,'6','major','-','-','Maj4','Eb');
let chord5maj4 = new Chord(5,sixth,'-','major','-','-','Maj4','E');
let chord6maj4 = new Chord(6,overMinor,'-','minor','-','-','Maj4','F');
let chord7maj4 = new Chord(7,third,'mi7','minor','-','-','Maj4','F#');
let chord8maj4 = new Chord(8,overMinorTwo,'-','minor','-','-','Maj4','G');
let chord9maj4 = new Chord(9,eighth,'add9','major','-','-','Maj4','Ab');
let chord10maj4 = new Chord(10,tenth,'mi7','minor','-','-','Maj4','A'); 
let chord11maj4 = new Chord(11,overNine,'-','major','-','-','Maj4','Bb');
let chord12maj4 = new Chord(12,overMinorThree,'-','minor','-','-','Maj4','B');

let chord1maj5 = new Chord(1, root ,'-','major','-','-','Maj5','C');
let chord2maj5 = new Chord(2,third,'-','major','-','-','Maj5','C#');
let chord3maj5 = new Chord(3,sixth,'-','major','-','-','Maj5','D');
let chord4maj5 = new Chord(4, root ,'-','major','-','-','Maj5','Eb');
let chord5maj5 = new Chord(5,ninth,'-','major','-','-','Maj5','E');
let chord6maj5 = new Chord(6,fourth,'-','major','-','-','Maj5','F');
let chord7maj5 = new Chord(7,eleventh,'-','major','-','-','Maj5','F#');
let chord8maj5 = new Chord(8,sixth,'-','major','-','-','Maj5','G');
let chord9maj5 = new Chord(9,eighth,'7sus4','major','-','-','Maj5','Ab');
let chord10maj5 = new Chord(10,eleventh,'add9','minor','-','-','Maj5','A');
let chord11maj5 = new Chord(11,sixth,'6','major','-','-','Maj5','Bb');
let chord12maj5 = new Chord(12,root,'add9','major','-','-','Maj5','B');

let chord1maj6 = new Chord(1, root ,'major','-','-','Maj6','C');
let chord2maj6 = new Chord(2,eighth,'-','major','-','-','Maj6','C#');
let chord3maj6 = new Chord(3,third,'mi','minor','-','-','Maj6','D');
let chord4maj6 = new Chord(4,tenth,'mi','minor','-','-','Maj6','Eb');
let chord5maj6 = new Chord(5,sixth,'-','major','-','-','Maj6','E');
let chord6maj6 = new Chord(6,overFive,'-','major','-','-','Maj6','F');
let chord7maj6 = new Chord(7,overSix,'-','major','-','-','Maj6','F#');
let chord8maj6 = new Chord(8,tenth,'mi7','minor','-','-','Maj6','G');
let chord9maj6 = new Chord(9,third,'mi7','minor','-','-','Maj6','Ab');
let chord10maj6 = new Chord(10,fifth,'mi7','minor','-','-','Maj6','A');
let chord11maj6 = new Chord(11,overSeven,'-','major','-','-','Maj6','Bb');
let chord12maj6 = new Chord(12,eighth,'sus4','major','-','-','Maj6','B');

let chord1maj7 = new Chord(1, root ,'major','-','-','Maj7','C');
let chord2maj7 = new Chord(2,eighth,'-','major','-','-','Maj7','C#');
let chord3maj7 = new Chord(3,tenth,'mi','minor','-','-','Maj7','D');
let chord4maj7 = new Chord(4,fifth,'mi','minor','-','-','Maj7','Eb');
let chord5maj7 = new Chord(5,sixth,'-','major','-','-','Maj7','E');
let chord6maj7 = new Chord(6,overSix,'-','major','-','-','Maj7','F');
let chord7maj7 = new Chord(7,third,'mi','minor','-','-','Maj7','F#');
let chord8maj7 = new Chord(8,overMinorFour,'-','minor','-','-','Maj7','G');
let chord9maj7 = new Chord(9,slashSeven,'-','major','-','-','Maj7','Ab');
let chord10maj7 = new Chord(10,eighth,'-','major','-','-','Maj7','A');
let chord11maj7 = new Chord(11,overEight,'-','major','-','-','Maj7','Bb');
let chord12maj7 = new Chord(12,slashSeven,'-','major','-','-','Maj7','B');

let chord1maj8 = new Chord(1,root,'ma9','major','-','-','Maj8','C');
let chord2maj8 = new Chord(2,second,'dim','minor','-','-','Maj8','C#');
let chord3maj8 = new Chord(3,third,'mi9','minor','-','-','Maj8','D');
let chord4maj8 = new Chord(4,fourth,'dim7','minor','-','-','Maj8','Eb');
let chord5maj8 = new Chord(5,fifth,'mi9','minor','-','-','Maj8','E');
let chord6maj8 = new Chord(6,root,'9#5','augmented','-','-','Maj8','F');
let chord7maj8 = new Chord(7,sixth,'ma7add13','major','-','-','Maj8','F#');
let chord8maj8 = new Chord(8,eleventh,'9','major','-','-','Maj8','G');
let chord9maj8 = new Chord(9,fifth,'mi7','minor','-','-','Maj8','Ab');
let chord10maj8 = new Chord(10,tenth,'9','major','-','-','Maj8','A');
let chord11maj8 = new Chord(11,third,'mi11','minor','-','-','Maj8','Bb');
let chord12maj8 = new Chord(12,eighth,'7(b9,b13)','major','-','-','Maj8','B');

let chord1min1 = new Chord(1,root,'mi','minor','-','-','Min1','C');
let chord2min1 = new Chord(2,overMinorFive,'-','minor','-','-','Min1','C#');
let chord3min1 = new Chord(3,sixth,'mi','minor','-','-','Min1','D');
let chord4min1 = new Chord(4,eighth,'-','major','-','-','Min1','Eb');
let chord5min1 = new Chord(5,ninth,'ma7','major','-','-','Min1','E');
let chord6min1 = new Chord(6,fourth,'-','major','-','-','Min1','F');
let chord7min1 = new Chord(7,eighth,'mi','minor','-','-','Min1','F#');
let chord8min1 = new Chord(8,eleventh,'-','major','-','-','Min1','G');
let chord9min1 = new Chord(9,sixth,'-','major','-','-','Min1','Ab');
let chord10min1 = new Chord(10,overMinorSix,'-','minor','-','-','Min1','A');
let chord11min1 = new Chord(11,overMinorSeven,'-','minor','-','-','Min1','Bb');
let chord12min1 = new Chord(12,eighth,'-','major','-','-','Min1','B');

let chord1min2 = new Chord(1,root,'mi','minor','-','-','Min2','C');
let chord2min2 = new Chord(2,plusSlash,'-','major','-','-','Min2','C#');
let chord3min2 = new Chord(3,overMinorEighth,'-','minor','-','-','Min2','D');
let chord4min2 = new Chord(4,overMinorNinth,'-','minor','-','-','Min2','Eb');
let chord5min2 = new Chord(5,ninth,'ma7','major','-','-','Min2','E');
let chord6min2 = new Chord(6,fourth,'ma7','major','-','-','Min2','F');
let chord7min2 = new Chord(7,sixth,'mi','minor','-','-','Min2','F#');
let chord8min2 = new Chord(8,eleventh,'7','major','-','-','Min2','G');
let chord9min2 = new Chord(9,root,'mi','minor','-','-','Min2','Ab');
let chord10min2 = new Chord(10,eleventh,'add9','major','-','-','Min2','A');
let chord11min2 = new Chord(11,ninth,'add9','major','-','-','Min2','Bb');
let chord12min2 = new Chord(12,eighth,'7 sus4','major','-','-','Min2','B');

let chord1min3 = new Chord(1,root,'mi','minor','-','-','Min3','C');
let chord2min3 = new Chord(2,ninth,'major','-','-','Min3','C#');
let chord3min3 = new Chord(3,fourth,'major','-','-','Min3','D');
let chord4min3 = new Chord(4,eleventh,'major','-','-','Min3','Eb');
let chord5min3 = new Chord(5,sixth,'major','-','-','Min3','E');
let chord6min3 = new Chord(6,sixth,'mi','minor','-','-','Min3','F');
let chord7min3 = new Chord(7,overMinorSeven,'-','minor','-','-','Min3','F#');
let chord8min3 = new Chord(8,eighth,'sus4','major','-','-','Min3','G');
let chord9min3 = new Chord(9,root,'mi','minor','-','-','Min3','Ab');
let chord10min3 = new Chord(10,root,'mi#5','augmented','-','-','Min3','A')
let chord11min3 = new Chord(11,root,'mi6','minor','-','-','Min3','Bb');
let chord12min3 = new Chord(12,root,'mi7','minor','-','-','Min3','B');

let chord1min4 = new Chord(1,root,'mi','minor','-','-','Min4','C');
let chord2min4 = new Chord(2,fourth,'major','-','-','Min4','C#');
let chord3min4 = new Chord(3,eleventh,'major','-','-','Min4','D');
let chord4min4 = new Chord(4,sixth,'major','-','-','Min4','Eb');
let chord5min4 = new Chord(5,ninth,'major','-','-','Min4','E');
let chord6min4 = new Chord(6,ninth,'ma7','major','-','-','Min4','F');
let chord7min4 = new Chord(7,ninth,'mi7','minor','-','-','Min4','F#');
let chord8min4 = new Chord(8,fourth,'ma7','major','-','-','Min4','G');
let chord9min4 = new Chord(9,third,'sus4','major','-','-','Min4','Ab');
let chord10min4 = new Chord(10,third,'major','-','-','Min4','A');
let chord11min4 = new Chord(11,overMinorTenth,'-','minor','-','-','Min4','Bb');
let chord12min4 = new Chord(12,eighth,'+','major','-','-','Min4','B');

let chord1min5 = new Chord(1,root,'mi','minor','-','-','Min5','C');
let chord2min5 = new Chord(2,eleventh,'major','-','-','Min5','C#');
let chord3min5 = new Chord(3,ninth,'6','major','-','-','Min5','D');
let chord4min5 = new Chord(4,eleventh,'add9','major','-','-','Min5','Eb');
let chord5min5 = new Chord(5,root,'mi','minor','-','-','Min5','E');
let chord6min5 = new Chord(6,third,'mi7','minor','-','-','Min5','F');
let chord7min5 = new Chord(7,overMinorEleventh,'-','minor','-','-','Min5','F#');
let chord8min5 = new Chord(8,sixth,'mi','minor','-','-','Min5','G');
let chord9min5 = new Chord(9,eighth,'major','-','-','Min5','Ab');
let chord10min5 = new Chord(10,ninth,'ma7','major','-','-','Min5','A');
let chord11min5 = new Chord(11,twelve,'6/9','major','-','-','Min5','Bb');
let chord12min5 = new Chord(12,root,'sus4','major','-','-','Min5','B');

let chord1min6 = new Chord(1,root,'mi','minor','-','-','Min6','C');
let chord2min6 = new Chord(2,sixth,'mi','minor','-','-','Min6','C#');
let chord3min6 = new Chord(3,eleventh,'major','-','-','Min6','D');
let chord4min6 = new Chord(4,fourth,'major','-','-','Min6','Eb');
let chord5min6 = new Chord(5,ninth,'major','-','-','Min6','E');
let chord6min6 = new Chord(6,third,'mi7 b5','minor','-','-','Min6','F');
let chord7min6 = new Chord(7,eighth,'add-b9','major','-','-','Min6','F#');
let chord8min6 = new Chord(8,eighth,'major','-','-','Min6','G');
let chord9min6 = new Chord(9,slashEight,'-','major','-','-','Min6','Ab');
let chord10min6 = new Chord(10,eighth,'7','major','-','-','Min6','A');
let chord11min6 = new Chord(11,overMinorSeven,'-','minor','-','-','Min6','Bb');
let chord12min6 = new Chord(12,eighth,'7b9','major','-','-','Min6','B');

let chord1min7 = new Chord(1,root,'mi9','minor','-','-','Min7','C');
let chord2min7 = new Chord(2,ninth,'9','major','-','-','Min7','C#');
let chord3min7 = new Chord(3,root,'mi11','minor','-','-','Min7','D');
let chord4min7 = new Chord(4,root,'7(#9,b13)','major','-','-','Min7','Eb');
let chord5min7 = new Chord(5,sixth,'mi9','minor','-','-','Min7','E');
let chord6min7 = new Chord(6,majSevOver,'-','major','-','-','Min7','F');
let chord7min7 = new Chord(7,root,'11','major','-','-','Min7','F#');
let chord8min7 = new Chord(8,tenth,'mi11','minor','-','-','Min7','G');
let chord9min7 = new Chord(9,ninth,'7#11','major','-','-','Min7','Ab');
let chord10min7 = new Chord(10,eighth,'7#9','major','-','-','Min7','A');
let chord11min7 = new Chord(11,root,'mi.add9','minor','-','-','Min7','Bb');
let chord12min7 = new Chord(12,eighth,'7(b9,b13)','major','-','-','Min7','B');

let chord1min8 = new Chord(1,root,'min6/9','minor','-','-','Min8','C');
let chord2min8 = new Chord(2,third,'mi7 b5','minor','-','-','Min8','C#');
let chord3min8 = new Chord(3,minElevOver,'-','minor','-','-','Min8','D');
let chord4min8 = new Chord(4,root,'mi9','minor','-','-','Min8','Eb');
let chord5min8 = new Chord(5,sixth,'mi9','minor','-','-','Min8','E');
let chord6min8 = new Chord(6,ninth,'mi7','minor','-','-','Min8','F');
let chord7min8 = new Chord(7,fourth,'mi7','minor','-','-','Min8','F#');
let chord8min8 = new Chord(8,eleventh,'mi7 b5','minor','-','-','Min8','G');
let chord9min8 = new Chord(9,tenth,'mi11','minor','-','-','Min8','Ab');
let chord10min8 = new Chord(10,ninth,'ma7#5','augmented','-','-','Min8','A');
let chord11min8 = new Chord(11,eighth,'7(b9,b13)','major','-','-','Min8','Bb');
let chord12min8 = new Chord(12,root,'mi9 ma7','minor','-','-','Min8','B');

console.log("--------------");
// console.log(chord1maj1.type);
// console.log(chord1maj1.name);
// console.log(chord1maj1.numeral);
// console.log("----");
// console.log(chord1maj1.mode);
// console.log("----");
console.log(chord1maj1.padData());
console.log(chord2maj1.padData())
console.log(chord3maj1.padData())
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
// console.log("--------------");