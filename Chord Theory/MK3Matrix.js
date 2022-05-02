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
let minor6 = 'mi6';
let minor7 = 'mi7';
let minor9 = 'mi9';
let minor9ma7 = 'mi9 ma7';
let miAdd9 = 'mi add9';
let minorSharp5 = 'mi#5';
let major9 = 'ma9';
let minor11 = 'mi11';
let major7 = 'ma7';
let sevSus4 ='7sus4';
let sus2 = 'sus2';
let sus4 = 'sus4';
let sus9 = 'sus9';
let add9 = '-add9';
let addFlat9 = 'add-b9';
let dash6 = '6';
let sixSlashNine = '6/9';
let minorSixSlashNine = 'min6/9';
let dash7 = '7';
let dash9 = '9';
let eleven = '11';
let dim = 'dim';
let dim7 = 'dim7';
let nineSharp5 = '9#5';
let maj7add13 = 'ma7-add13';
let major7Sharp5 = 'ma7#5';
let minor7Flat5 = ' min7-b5';
let sevenFlat9Flat13 = '7(b9,b13)';
let seven9SharpThirteen = '7(#9,b13)';
let sevenFlat9 = '7 b9';
let sevenSharp9 = '7#9';
let sevenSharpEleven = '7#11';

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

let majSevOver = `${fourth}${major7}${slash}${sixth}`;  
let minElevOver = `${root}${minor11}${slash}${eighth}`; 

let slashSeven = `${seventh}${seven}${slash}${eleventh}`;
let slashEight = `${ninth}${slash}${eighth}`;
let plusSlash = `${eighth}${plus}${slash}${twelve}`;
let eighthPlus = `${eighth}${plus}`;

let rootEleven = `${root}${eleven}`;
let rootMinor = `${root}${minor}`;
let rootMin6 = `${root}${minor6}`;
let rootMin7 = `${root}${minor7}`;
let rootMin9 = `${root}${minor9}`;
let rootMinor11 = `${root}${minor11}`;
let rootMinorSharp5 = `${root}${minorSharp5}`;
let rootSus2 = `${root}${sus2}`;
let rootAdd9 = `${root}${add9}`;
let rootSus9 = `${root}${sus9}`;
let rootMa9 = `${root}${major9}`;
let rootSus4 = `${root}${sus4}`;
let root9Sharp5 = `${root}${nineSharp5}`
let rootMiAdd9 = `${root}${miAdd9}`
let rootMinor69 = `${root}${minorSixSlashNine}`
let rootMin9Ma7 = `${root}${minor9ma7}`
let rootSevNineThirteen = `${root}${seven9SharpThirteen}`

let secondDim = `${second}${dim}`

let thirdMinor = `${third}${minor}`;
let thirdMinor7 = `${third}${minor7}`;
let thirdMi9 = `${third}${minor}${add9}`;
let thirdSus2 = `${third}${sus2}`;
let thirdSus4 = `${third}${sus4}`;
let thirdMinor11 = `${third}${minor11}`
let thirdMi7Flat5 = `${third}${minor7Flat5}`

let fourthMinor7 = `${fourth}${minor7}`;
let fourthMajor7 = `${fourth}${major7}`;
let fourthDim7 = `${fourth}${dim7}`

let fifthMinor = `${fifth}${minor}`;
let fifthMinor7 = `${fifth}${minor7}`;
let fifthMinor9 = `${fifth}${minor9}`;
let fifthSus4 = `${fifth}${sus4}`;

let sixthAdd9 = `${sixth}${add9}`;
let sixthDash6 = `${sixth}${dash6}`;
let sixthMinor = `${sixth}${minor}`;
let sixthMajor7 = `${sixth}${major7}`;
let sixthMinor9 = `${sixth}${minor9}`;
let sixthMa7Add13 = `${sixth}${maj7add13}`

let eighthMinor = `${eighth}${minor}`;
let eighthSus4 = `${eighth}${sus4}`;
let eighthSevSus4 = `${eighth}${sevSus4}`;
let eighthAdd9 = `${eighth}${add9}`;
let eighthDash6 = `${eighth}${dash6}`;
let eighthDash7 = `${eighth}${dash7}`;
let eighthDash7Sus4 = `${eighth}${dash7}${sus4}`;
let eighth7Flat9 = `${eighth}${sevenFlat9}`
let eighthSevSharp9 = `${eighth}${sevenSharp9}`
let eighthSevFlat9Flat13 = `${eighth}${sevenFlat9Flat13}`
let eighthAddFlat9 = `${eighth}${addFlat9}`

let ninthMajor7 = `${ninth}${major7}`;
let ninthMinor7 = `${ninth}${minor7}`;
let ninthAdd9 = `${ninth}${add9}`;
let ninthDash6 = `${ninth}${dash6}`;
let ninthDash9 = `${ninth}${dash9}`;
let ninthSevSharp11 = `${ninth}${sevenSharpEleven}`
let ninthMaj7Sharp5 = `${ninth}${major7Sharp5}`

let tenthMinor = `${tenth}${minor}`;
let tenthMinor7 = `${tenth}${minor7}`;
let tenthMinor11 = `${tenth}${minor11}`;
let tenthMi9 = `${tenth}${minor}${add9}`;
let tenthDash9 = `${tenth}${dash9}`;

let eleventhMi7Flat5 = `${eleventh}${minor7Flat5}`
let eleventhAdd9 = `${eleventh}${add9}`;
let eleventhDash6 = `${eleventh}${dash6}`;
let eleventhDash7 = `${eleventh}${dash7}`;
let eleventhDash9 = `${eleventh}${dash9}`;

let twelveSixNine = `${twelve}${sixSlashNine}`


let chord1maj1 = new Chord(1,root ,"-",'major', '(I)','Ionian', 'Maj1','C'); 
let chord2maj1 = new Chord(2,fifthMinor ,'-','minor', '(iii)', 'Phrygian','Maj1','C#'); 
let chord3maj1 = new Chord(3,sixth ,'-','major', '(IV)', 'Lydian', 'Maj1','D');
let chord4maj1 = new Chord(4,eighth ,'-','major', '(V)', 'Mixolydian','Maj1','Eb'); // how about the chord position? independent variable
let chord5maj1 = new Chord(5,tenthMinor ,'-','minor', '(vi)', 'Aeolian','Maj1','E');
let chord6maj1 = new Chord(6,fifthSus4 ,'-','major','-','-','Maj1','F'); 
let chord7maj1 = new Chord(7,eighthAdd9 ,'-','major','-','-','Maj1','F#');
let chord8maj1 = new Chord(8,thirdMinor ,'-','minor','(ii)', 'Dorian','Maj1','G');
let chord9maj1 = new Chord(9,sixthAdd9 ,'-','major','-','-','Maj1','Ab');
let chord10maj1 = new Chord(10,sixthDash6 ,'-','major','-','-','Maj1','A');
let chord11maj1 = new Chord(11,eighthSus4 ,'-','major','-','-','Maj1','Bb');
let chord12maj1 = new Chord(12,eighth ,'-','major','-','-','Maj1','B');

let chord1maj2 = new Chord(1,root,'-','major','-','-','Maj2','C');
let chord2maj2 = new Chord(2,overOne,'-','major','-','-','Maj2','C#');
let chord3maj2 = new Chord(3,overTwo,'-','major','-','-','Maj2','D');
let chord4maj2 = new Chord(4,overThree,'-','major','-','-','Maj2','Eb');
let chord5maj2 = new Chord(5,sixthAdd9,'-','major','-','-','Maj2','E');
let chord6maj2 = new Chord(6,sixthMinor,'-','minor','-','-','Maj2','F');
let chord7maj2 = new Chord(7,rootSus9,'-','major','-','-','Maj2','F#');
let chord8maj2 = new Chord(8,tenthMinor7,'-','minor','-','-','Maj2','G');
let chord9maj2 = new Chord(9,fifthMinor,'-','minor','-','-','Maj2','Ab');
let chord10maj2 = new Chord(10,sixth,'-','major','-','-','Maj2','A');
let chord11maj2 = new Chord(11,eighthSus4,'-','major','-','-','Maj2','Bb');
let chord12maj2 = new Chord(12,eighthDash6,'-','major','-','-','Maj2','B');

let chord1maj3 = new Chord(1,root,'-','major','-','-','Maj3','C');
let chord2maj3 = new Chord(2,tenthMinor,'-','minor','-','-','Maj3','C#');
let chord3maj3 = new Chord(3,sixthMajor7,'-','major','-','-','Maj3','D');
let chord4maj3 = new Chord(4,eighthSus4,'-','major','-','-','Maj3','Eb');
let chord5maj3 = new Chord(5,tenthMi9,'-','minor','-','-','Maj3','E');
let chord6maj3 = new Chord(6,sixthDash6,'-','major','-','-','Maj3','F');
let chord7maj3 = new Chord(7,rootSus2,'-','minor','-','-','Maj3','F#');
let chord8maj3 = new Chord(8,eighth,'-','major','-','-','Maj3','G');
let chord9maj3 = new Chord(9,thirdSus2,'-','minor','-','-','Maj3','Ab');
let chord10maj3 = new Chord(10,eleventhAdd9,'-','major','-','-','Maj3','A');
let chord11maj3 = new Chord(11,eighthSus4,'-','major','-','-','Maj3','Bb');
let chord12maj3 = new Chord(12,sixthAdd9,'-','major','-','-','Maj3','B');

let chord1maj4 = new Chord(1, root,'-','major','-','-','Maj4','C');
let chord2maj4 = new Chord(2,eighth,'-','major','-','-','Maj4','C#');
let chord3maj4 = new Chord(3,tenthMinor,'-','minor','-','-','Maj4','D');
let chord4maj4 = new Chord(4,sixthDash6,'-','major','-','-','Maj4','Eb');
let chord5maj4 = new Chord(5,sixth,'-','major','-','-','Maj4','E');
let chord6maj4 = new Chord(6,overMinor,'-','minor','-','-','Maj4','F');
let chord7maj4 = new Chord(7,thirdMinor7,'-','minor','-','-','Maj4','F#');
let chord8maj4 = new Chord(8,overMinorTwo,'-','minor','-','-','Maj4','G');
let chord9maj4 = new Chord(9,eighthAdd9,'-','major','-','-','Maj4','Ab');
let chord10maj4 = new Chord(10,tenthMinor7,'-','minor','-','-','Maj4','A'); 
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
let chord9maj5 = new Chord(9,eighthSevSus4,'-','major','-','-','Maj5','Ab');
let chord10maj5 = new Chord(10,eleventhAdd9,'-','minor','-','-','Maj5','A');
let chord11maj5 = new Chord(11,sixthDash6,'-','major','-','-','Maj5','Bb');
let chord12maj5 = new Chord(12,rootAdd9,'-','major','-','-','Maj5','B');

let chord1maj6 = new Chord(1, root ,'major','-','-','Maj6','C');
let chord2maj6 = new Chord(2,eighth,'-','major','-','-','Maj6','C#');
let chord3maj6 = new Chord(3,thirdMinor,'-','minor','-','-','Maj6','D');
let chord4maj6 = new Chord(4,tenthMinor,'-','minor','-','-','Maj6','Eb');
let chord5maj6 = new Chord(5,sixth,'-','major','-','-','Maj6','E');
let chord6maj6 = new Chord(6,overFive,'-','major','-','-','Maj6','F');
let chord7maj6 = new Chord(7,overSix,'-','major','-','-','Maj6','F#');
let chord8maj6 = new Chord(8,tenthMinor7,'-','minor','-','-','Maj6','G');
let chord9maj6 = new Chord(9,thirdMinor7,'-','minor','-','-','Maj6','Ab');
let chord10maj6 = new Chord(10,fifthMinor7,'-','minor','-','-','Maj6','A');
let chord11maj6 = new Chord(11,overSeven,'-','major','-','-','Maj6','Bb');
let chord12maj6 = new Chord(12,eighthSus4,'-','major','-','-','Maj6','B');

let chord1maj7 = new Chord(1, root ,'major','-','-','Maj7','C');
let chord2maj7 = new Chord(2,eighth,'-','major','-','-','Maj7','C#');
let chord3maj7 = new Chord(3,tenth,'-','minor','-','-','Maj7','D');
let chord4maj7 = new Chord(4,fifth,'-','minor','-','-','Maj7','Eb');
let chord5maj7 = new Chord(5,sixth,'-','major','-','-','Maj7','E');
let chord6maj7 = new Chord(6,overSix,'-','major','-','-','Maj7','F');
let chord7maj7 = new Chord(7,third,'-','minor','-','-','Maj7','F#');
let chord8maj7 = new Chord(8,overMinorFour,'-','minor','-','-','Maj7','G');
let chord9maj7 = new Chord(9,slashSeven,'-','major','-','-','Maj7','Ab');
let chord10maj7 = new Chord(10,eighth,'-','major','-','-','Maj7','A');
let chord11maj7 = new Chord(11,overEight,'-','major','-','-','Maj7','Bb');
let chord12maj7 = new Chord(12,slashSeven,'-','major','-','-','Maj7','B');

let chord1maj8 = new Chord(1,rootMa9,'-','major','-','-','Maj8','C');
let chord2maj8 = new Chord(2,secondDim,'-','minor','-','-','Maj8','C#');
let chord3maj8 = new Chord(3,thirdMi9,'-','minor','-','-','Maj8','D');
let chord4maj8 = new Chord(4,fourthDim7,'-','minor','-','-','Maj8','Eb');
let chord5maj8 = new Chord(5,fifthMinor9,'-','minor','-','-','Maj8','E');
let chord6maj8 = new Chord(6,root9Sharp5,'-','augmented','-','-','Maj8','F');
let chord7maj8 = new Chord(7,sixthMa7Add13,'-','major','-','-','Maj8','F#');
let chord8maj8 = new Chord(8,eleventhDash6,'-','major','-','-','Maj8','G');
let chord9maj8 = new Chord(9,fifthMinor7,'-','minor','-','-','Maj8','Ab');
let chord10maj8 = new Chord(10,tenthDash9,'-','major','-','-','Maj8','A');
let chord11maj8 = new Chord(11,thirdMinor11,'-','minor','-','-','Maj8','Bb');
let chord12maj8 = new Chord(12,eighth7Flat9,'-','major','-','-','Maj8','B');

//===========================================

let chord1min1 = new Chord(1,rootMinor,'-','minor','-','-','Min1','C');
let chord2min1 = new Chord(2,overMinorFive,'-','minor','-','-','Min1','C#');
let chord3min1 = new Chord(3,sixthMinor,'-','minor','-','-','Min1','D');
let chord4min1 = new Chord(4,eighth,'-','major','-','-','Min1','Eb');
let chord5min1 = new Chord(5,ninthMajor7,'-','major','-','-','Min1','E');
let chord6min1 = new Chord(6,fourth,'-','major','-','-','Min1','F');
let chord7min1 = new Chord(7,eighthMinor,'-','minor','-','-','Min1','F#');
let chord8min1 = new Chord(8,eleventh,'-','major','-','-','Min1','G');
let chord9min1 = new Chord(9,sixth,'-','major','-','-','Min1','Ab');
let chord10min1 = new Chord(10,overMinorSix,'-','minor','-','-','Min1','A');
let chord11min1 = new Chord(11,overMinorSeven,'-','minor','-','-','Min1','Bb');
let chord12min1 = new Chord(12,eighth,'-','major','-','-','Min1','B');

let chord1min2 = new Chord(1,rootMinor,'-','minor','-','-','Min2','C');
let chord2min2 = new Chord(2,plusSlash,'-','major','-','-','Min2','C#');
let chord3min2 = new Chord(3,overMinorEighth,'-','minor','-','-','Min2','D');
let chord4min2 = new Chord(4,overMinorNinth,'-','minor','-','-','Min2','Eb');
let chord5min2 = new Chord(5,ninthMajor7,'-','major','-','-','Min2','E');
let chord6min2 = new Chord(6,fourthMajor7,'-','major','-','-','Min2','F');
let chord7min2 = new Chord(7,sixthMinor,'-','minor','-','-','Min2','F#');
let chord8min2 = new Chord(8,eleventhDash7,'-','major','-','-','Min2','G');
let chord9min2 = new Chord(9,rootMinor,'-','minor','-','-','Min2','Ab');
let chord10min2 = new Chord(10,eleventhAdd9,'-','major','-','-','Min2','A');
let chord11min2 = new Chord(11,ninthAdd9,'-','major','-','-','Min2','Bb');
let chord12min2 = new Chord(12,eighthDash7Sus4,'-','major','-','-','Min2','B');

let chord1min3 = new Chord(1,rootMinor,'-','minor','-','-','Min3','C');
let chord2min3 = new Chord(2,ninth,'-','major','-','-','Min3','C#');
let chord3min3 = new Chord(3,fourth,'-','major','-','-','Min3','D');
let chord4min3 = new Chord(4,eleventh,'-','major','-','-','Min3','Eb');
let chord5min3 = new Chord(5,sixth,'-','major','-','-','Min3','E');
let chord6min3 = new Chord(6,sixthMinor,'-','minor','-','-','Min3','F');
let chord7min3 = new Chord(7,overMinorSeven,'-','minor','-','-','Min3','F#');
let chord8min3 = new Chord(8,eighthSus4,'-','major','-','-','Min3','G');
let chord9min3 = new Chord(9,rootMinor,'-','minor','-','-','Min3','Ab');
let chord10min3 = new Chord(10,rootMinorSharp5,'-','augmented','-','-','Min3','A')
let chord11min3 = new Chord(11,rootMin6,'-','minor','-','-','Min3','Bb');
let chord12min3 = new Chord(12,rootMin7,'-','minor','-','-','Min3','B');

let chord1min4 = new Chord(1,rootMinor,'-','minor','-','-','Min4','C');
let chord2min4 = new Chord(2,fourth,'-','major','-','-','Min4','C#');
let chord3min4 = new Chord(3,eleventh,'-','major','-','-','Min4','D');
let chord4min4 = new Chord(4,sixth,'-','major','-','-','Min4','Eb');
let chord5min4 = new Chord(5,ninth,'-','major','-','-','Min4','E');
let chord6min4 = new Chord(6,ninthMajor7,'-','major','-','-','Min4','F');
let chord7min4 = new Chord(7,ninthMinor7,'-','minor','-','-','Min4','F#');
let chord8min4 = new Chord(8,fourthMajor7,'-','major','-','-','Min4','G');
let chord9min4 = new Chord(9,thirdSus4,'-','major','-','-','Min4','Ab');
let chord10min4 = new Chord(10,third,'-','major','-','-','Min4','A');
let chord11min4 = new Chord(11,overMinorTenth,'-','minor','-','-','Min4','Bb');
let chord12min4 = new Chord(12,eighthPlus,'-','major','-','-','Min4','B');

let chord1min5 = new Chord(1,rootMinor,'-','minor','-','-','Min5','C');
let chord2min5 = new Chord(2,eleventh,'-','major','-','-','Min5','C#');
let chord3min5 = new Chord(3,ninthDash6,'-','major','-','-','Min5','D');
let chord4min5 = new Chord(4,eleventh,'-','major','-','-','Min5','Eb');
let chord5min5 = new Chord(5,rootMinor,'-','minor','-','-','Min5','E');
let chord6min5 = new Chord(6,thirdMinor7,'-','minor','-','-','Min5','F');
let chord7min5 = new Chord(7,overMinorEleventh,'-','minor','-','-','Min5','F#');
let chord8min5 = new Chord(8,sixthMinor,'-','minor','-','-','Min5','G');
let chord9min5 = new Chord(9,eighth,'-','major','-','-','Min5','Ab');
let chord10min5 = new Chord(10,ninthMajor7,'-','major','-','-','Min5','A');
let chord11min5 = new Chord(11,twelveSixNine,'-','major','-','-','Min5','Bb');
let chord12min5 = new Chord(12,rootSus4,'-','major','-','-','Min5','B');

let chord1min6 = new Chord(1,rootMinor,'-','minor','-','-','Min6','C');
let chord2min6 = new Chord(2,sixthMinor,'-','minor','-','-','Min6','C#');
let chord3min6 = new Chord(3,eleventh,'-','major','-','-','Min6','D');
let chord4min6 = new Chord(4,fourth,'-','major','-','-','Min6','Eb');
let chord5min6 = new Chord(5,ninth,'-','major','-','-','Min6','E');
let chord6min6 = new Chord(6,thirdMi7Flat5,'-','minor','-','-','Min6','F');
let chord7min6 = new Chord(7,eighthAddFlat9,'-','major','-','-','Min6','F#');
let chord8min6 = new Chord(8,eighth,'-','major','-','-','Min6','G');
let chord9min6 = new Chord(9,slashEight,'-','major','-','-','Min6','Ab');
let chord10min6 = new Chord(10,eighthDash7,'-','major','-','-','Min6','A');
let chord11min6 = new Chord(11,overMinorSeven,'-','minor','-','-','Min6','Bb');
let chord12min6 = new Chord(12,eighth7Flat9,'-','major','-','-','Min6','B');

let chord1min7 = new Chord(1,rootMin9,'-','minor','-','-','Min7','C');
let chord2min7 = new Chord(2,ninthDash9,'-','major','-','-','Min7','C#');
let chord3min7 = new Chord(3,rootMinor11,'-','minor','-','-','Min7','D');
let chord4min7 = new Chord(4,rootSevNineThirteen,'-','major','-','-','Min7','Eb');
let chord5min7 = new Chord(5,sixthMinor9,'-','minor','-','-','Min7','E');
let chord6min7 = new Chord(6,majSevOver,'-','major','-','-','Min7','F');
let chord7min7 = new Chord(7,rootEleven,'-','major','-','-','Min7','F#');
let chord8min7 = new Chord(8,tenthMinor11,'-','minor','-','-','Min7','G');
let chord9min7 = new Chord(9,ninthSevSharp11,'-','major','-','-','Min7','Ab');
let chord10min7 = new Chord(10,eighthSevSharp9,'-','major','-','-','Min7','A');
let chord11min7 = new Chord(11,rootMiAdd9,'-','minor','-','-','Min7','Bb');
let chord12min7 = new Chord(12,eighthSevFlat9Flat13,'-','major','-','-','Min7','B');

let chord1min8 = new Chord(1,rootMinor69,'-','minor','-','-','Min8','C');
let chord2min8 = new Chord(2,thirdMi7Flat5,'-','minor','-','-','Min8','C#');
let chord3min8 = new Chord(3,minElevOver,'-','minor','-','-','Min8','D');
let chord4min8 = new Chord(4,rootMin9,'-','minor','-','-','Min8','Eb');
let chord5min8 = new Chord(5,sixthMinor9,'-','minor','-','-','Min8','E');
let chord6min8 = new Chord(6,ninthMinor7,'-','minor','-','-','Min8','F');
let chord7min8 = new Chord(7,fourthMinor7,'-','minor','-','-','Min8','F#');
let chord8min8 = new Chord(8,eleventhMi7Flat5,'-','minor','-','-','Min8','G');
let chord9min8 = new Chord(9,tenthMinor11,'-','minor','-','-','Min8','Ab');
let chord10min8 = new Chord(10,ninthMaj7Sharp5,'-','augmented','-','-','Min8','A');
let chord11min8 = new Chord(11,eighthSevFlat9Flat13,'-','major','-','-','Min8','Bb');
let chord12min8 = new Chord(12,rootMin9Ma7,'-','minor','-','-','Min8','B');

console.log("--------------");
// console.log(chord1maj1.type);
// console.log(chord1maj1.name);
// console.log(chord1maj1.numeral);
// console.log("----");
// console.log(chord1maj1.mode);
// console.log("----");
// console.log(chord1maj1.padData());
// console.log(chord2maj1.padData())
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