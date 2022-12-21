document.getElementById("myButton").onclick = function () {

    let selection = document.getElementById('rootSelect'), selection2 = document.getElementById('modeSelect'), r = selection.selectedIndex, m = selection2.selectedIndex;

    if (r == 1 && m == 1) {
        console.log('Ionian');
        let tonic = 'C', supertonic = 'D', mediant = 'E', subdominant = 'F', dominant = 'G', submediant = 'A', leadingtone= 'B';


        console.log("----");
        console.log("Root is now " + tonic);
        console.log("----");


        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(` ${tonic}${supertonic}${mediant}${subdominant}${dominant}${submediant}${leadingtone}`);

        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/ionian-mode-on-piano-keyboard.png";

    } else if (r == 1 && m == 2) {
        console.log('Aeolian');
        let tonic = 'C', supertonic = 'D', mediant = 'Eb', subdominant = 'F', dominant = 'G', submediant = 'Ab', leadingtone = 'Bb';


        console.log("----");
        console.log("Root is now " + tonic);
        console.log("----");


        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(`${tonic}${supertonic}${mediant}${subdominant}${dominant}${submediant}${leadingtone}`);

        const image = document.querySelector("img");

        image.src = "https://m.basicmusictheory.com/img/c-aeolian-mode-on-piano-keyboard.png";

    } else if (r == 1 && m == 3) {
        console.log('Mixolydian');
        let tonic = 'C', supertonic = 'D', mediant = 'E', subdominant = 'F', dominant = 'G', submediant = 'A', leadingtone = 'Bb';

        

        let collected = ` ${tonic}${supertonic}${mediant}${subdominant}${dominant}${submediant}${leadingtone}`;

        console.log("----");
        console.log("Root is now " + tonic);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/c-mixolydian-mode-on-piano-keyboard.png";
    } else if (r == 1 && m == 4) {
        console.log('Lydian');
        let tonic = 'C', supertonic = 'D', mediant = 'E', augmented4th = 'F#(Gb)', dominant = 'G', submediant = 'A', leadingtone= 'B';

        

        let collected = ` ${tonic}${supertonic}${mediant}${augmented4th}${dominant}${submediant}${leadingtone}`;

        console.log("----");
        console.log("Root is now " + tonic);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/c-lydian-mode-on-piano-keyboard.png";
    } else if (r == 1 && m == 5) {
        console.log('Locrian');
        let tonic = 'C', minor2nd = 'Db(C#)', mediant = 'Eb(D#)', subdominant = 'F', diminished5th = 'Gb(F#)', submediant = 'Ab(G#)', leadingtone = 'Bb';

        

        let collected = ` ${tonic}${minor2nd}${mediant}${subdominant}${diminished5th}${submediant}${leadingtone}`;

        console.log("----");
        console.log("Root is now " + tonic);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/c-locrian-mode-on-piano-keyboard.png";
        
    } else if (r == 1 && m == 6) {
        console.log('Phrygian');
        let tonic = 'C';
        let minor2nd = 'Db(C#)';
        let mediant = 'Eb(D#)';
        let subdominant = 'F';
        let dominant = 'G';
        let submediant = 'Ab(G#)';
        let leadingtone = 'Bb';

        

        let collected = ` ${tonic}${minor2nd}${mediant}${subdominant}${dominant}${submediant}${leadingtone}`;

        console.log("----");
        console.log("Root is now " + tonic);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/c-phrygian-mode-on-piano-keyboard.png";
    } else if (r == 1 && m == 7) {
        console.log('Dorian');
        let tonic = 'C';
        let supertonic = 'D';
        let mediant = 'Eb(D#)';
        let subdominant = 'F';
        let dominant = 'G';
        let submediant = 'A';
        let leadingtone = 'Bb';

        

        let collected = ` ${tonic}${supertonic}${mediant}${subdominant}${dominant}${submediant}${leadingtone}`;

        console.log("----");
        console.log("Root is now " + tonic);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/c-dorian-mode-on-piano-keyboard.png";
    } else if (r == 1 && m == 9) {
        console.log('Pentatonic');
        let tonic = 'C';
        let supertonic = 'D';
        let mediant = 'E';
        // let subdominant = '-';
        let dominant = 'G';
        let submediant = 'A';
        

        let collected = ` ${tonic}${supertonic}${mediant}${dominant}${submediant}`;

        console.log("----");
        console.log("Root is now " + tonic);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/c-major-pentatonic-scale-on-piano-keyboard.png";
    } else if (r == 2 && m == 1) {
        console.log('Ionian');
        let tonic = 'C#';
        let supertonic = 'D#(Eb)';
        let mediant = 'F';
        let subdominant = 'F#(Gb)';
        let dominant = 'G#(Ab)';
        let submediant = 'A#(Bb)';
        let leadingtone= 'C';

        

        let collected = ` ${tonic}${supertonic}${mediant}${subdominant}${dominant}${submediant}${leadingtone}`;

        console.log("----");
        console.log("Root is now " + tonic);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/c-sharp-ionian-mode-on-piano-keyboard.png";

    } else if (r == 2 && m == 2) {
        console.log('Aeolian');
        let tonic = 'C#';
        let supertonic = 'D#(Eb)';
        let mediant = 'E';
        let subdominant = 'F#(Gb)';
        let dominant = 'G#(Ab)';
        let submediant = 'A';
        let leadingtone = 'B';

        

        let collected = ` ${tonic}${supertonic}${mediant}${subdominant}${dominant}${submediant}${leadingtone}`;

        console.log("----");
        console.log("Root is now " + tonic);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/c-sharp-aeolian-mode-on-piano-keyboard.png";

    } else if (r == 2 && m == 3) {
        console.log('Mixolydian');
        let tonic = 'C#';
        let supertonic = 'D#(Eb)';
        let mediant = 'F';
        let subdominant = 'F#(Gb)';
        let dominant = 'G#(Ab)';
        let submediant = 'A#(Bb)';
        let leadingtone = 'B';

        

        let collected = ` ${tonic}${supertonic}${mediant}${subdominant}${dominant}${submediant}${leadingtone}`;

        console.log("----");
        console.log("Root is now " + tonic);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/c-sharp-mixolydian-mode-on-piano-keyboard.png";

    } else if (r == 2 && m == 4) {
        console.log('Lydian');
        let tonic = 'C#';
        let supertonic = 'D#(Eb)';
        let mediant = 'F';
        let augmented4th = 'G';
        let dominant = 'G#(Ab)';
        let submediant = 'A#(Bb)';
        let leadingtone= 'C';

        

        let collected = ` ${tonic}${supertonic}${mediant}${augmented4th}${dominant}${submediant}${leadingtone}`;

        console.log("----");
        console.log("Root is now " + tonic);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/c-sharp-lydian-mode-on-piano-keyboard.png";


    } else if (r == 2 && m == 5) {
        console.log('Locrian');
        let tonic = 'C#';
        let minor2nd = 'D';
        let mediant = 'E';
        let subdominant = 'F#(Gb)';
        let diminished5th = 'G';
        let submediant = 'A';
        let leadingtone = 'B';

        

        let collected = ` ${tonic}${minor2nd}${mediant}${subdominant}${diminished5th}${submediant}${leadingtone}`;

        console.log("----");
        console.log("Root is now " + tonic);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/c-sharp-locrian-mode-on-piano-keyboard.png";


    } else if (r == 2 && m == 6) {
        console.log('Phrygian');
        let tonic = 'C#';
        let minor2nd = 'D';
        let mediant = 'E';
        let subdominant = 'F#(Gb)';
        let dominant = 'G#(Ab)';
        let submediant = 'A';
        let leadingtone = 'B';

        

        let collected = ` ${tonic}${minor2nd}${mediant}${subdominant}${dominant}${submediant}${leadingtone}`;

        console.log("----");
        console.log("Root is now " + tonic);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/c-sharp-phrygian-mode-on-piano-keyboard.png";


    } else if (r == 2 && m == 7) {
        console.log('Dorian');
        let tonic = 'C#';
        let supertonic = 'D#(Eb)';
        let mediant = 'E';
        let subdominant = 'F#(Gb)';
        let dominant = 'G#(Ab)';
        let submediant = 'A#(Bb)';
        let leadingtone = 'B';

        

        let collected = ` ${tonic}${supertonic}${mediant}${subdominant}${dominant}${submediant}${leadingtone}`;

        console.log("----");
        console.log("Root is now " + tonic);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/c-sharp-dorian-mode-on-piano-keyboard.png";


    } else if (r == 2 && m == 9) {
        console.log('Pentatonic');
        let tonic = 'C#';
        let supertonic = 'D#(Eb)';
        let mediant = 'F';
        // let subdominant = '-';
        let dominant = 'G#(Ab)';
        let submediant = 'A#(Bb)';

        

        let collected = ` ${tonic}${supertonic}${mediant}${dominant}${submediant}`;

        console.log("----");
        console.log("Root is now " + tonic);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/c-sharp-major-pentatonic-scale-on-piano-keyboard.png";


    } else if (r == 3 && m == 1) {
        console.log('Ionian');
        let tonic = 'D';
        let supertonic = 'E';
        let mediant = 'F#(Gb)';
        let subdominant = 'G';
        let dominant = 'A';
        let submediant = 'B';
        let leadingtone= 'C#(Db)';

        

        let collected = ` ${tonic}${supertonic}${mediant}${subdominant}${dominant}${submediant}${leadingtone}`;

        console.log("----");
        console.log("Root is now " + tonic);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/d-ionian-mode-on-piano-keyboard.png";
    } else if (r == 3 && m == 2) {
        console.log('Aeolian');
        let tonic = 'D';
        let supertonic = 'E';
        let mediant = 'F';
        let subdominant = 'G';
        let dominant = 'A';
        let submediant = 'Bb';
        let leadingtone = 'C';

        

        let collected = ` ${tonic}${supertonic}${mediant}${subdominant}${dominant}${submediant}${leadingtone}`;

        console.log("----");
        console.log("Root is now " + tonic);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/d-aeolian-mode-on-piano-keyboard.png";
    } else if (r == 3 && m == 3) {
        console.log('Mixolydian');
        let tonic = 'D';
        let supertonic = 'E';
        let mediant = 'F#(Gb)';
        let subdominant = 'G';
        let dominant = 'A';
        let submediant = 'B';
        let leadingtone = 'C';

        

        let collected = ` ${tonic}${supertonic}${mediant}${subdominant}${dominant}${submediant}${leadingtone}`;

        console.log("----");
        console.log("Root is now " + tonic);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/d-mixolydian-mode-on-piano-keyboard.png";
    } else if (r == 3 && m == 4) {
        console.log('Lydian');
        let tonic = 'D';
        let supertonic = 'E';
        let mediant = 'F#(Gb)';
        let augmented4th = 'G#(Ab)';
        let dominant = 'A';
        let submediant = 'B';
        let leadingtone= 'C#(Db)';

        

        let collected = ` ${tonic}${supertonic}${mediant}${augmented4th}${dominant}${submediant}${leadingtone}`;

        console.log("----");
        console.log("Root is now " + tonic);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/d-lydian-mode-on-piano-keyboard.png";
    } else if (r == 3 && m == 5) {
        console.log('Locrian');
        let tonic = 'D';
        let minor2nd = 'Eb(D#)';
        let mediant = 'F';
        let subdominant = 'G';
        let diminished5th = 'Ab(G#)';
        let submediant = 'Bb';
        let leadingtone = 'C';

        

        let collected = ` ${tonic}${minor2nd}${mediant}${subdominant}${diminished5th}${submediant}${leadingtone}`;

        console.log("----");
        console.log("Root is now " + tonic);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/d-locrian-mode-on-piano-keyboard.png";
    } else if (r == 3 && m == 6) {
        console.log('Phrygian');
        let tonic = 'D';
        let minor2nd = 'Eb(D#)';
        let mediant = 'F';
        let subdominant = 'G';
        let dominant = 'A';
        let submediant = 'Bb';
        let leadingtone = 'C';

        

        let collected = ` ${tonic}${minor2nd}${mediant}${subdominant}${dominant}${submediant}${leadingtone}`;

        console.log("----");
        console.log("Root is now " + tonic);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/d-phrygian-mode-on-piano-keyboard.png";
    } else if (r == 3 && m == 7) {
        console.log('Dorian');
        let tonic = 'D';
        let supertonic = 'E';
        let mediant = 'F';
        let subdominant = 'G';
        let dominant = 'A';
        let submediant = 'B';
        let leadingtone = 'C';

        

        let collected = ` ${tonic}${supertonic}${mediant}${subdominant}${dominant}${submediant}${leadingtone}`;

        console.log("----");
        console.log("Root is now " + tonic);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/dorian-mode-on-piano-keyboard.png";
    } else if (r == 3 && m == 9) {
        console.log('Pentatonic');
        let tonic = 'D';
        let supertonic = 'E';
        let mediant = 'F#(Gb)';
        // let subdominant = '-';
        let dominant = 'A';
        let submediant = 'B';

        

        let collected = ` ${tonic}${supertonic}${mediant}${dominant}${submediant}`;

        console.log("----");
        console.log("Root is now " + tonic);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/d-major-pentatonic-scale-on-piano-keyboard.png";
    } else if (r == 4 && m == 1) {
        console.log('Ionian');
        let tonic = 'Eb';
        let supertonic = 'F';
        let mediant = 'G';
        let subdominant = 'Ab(G#)';
        let dominant = 'Bb';
        let submediant = 'C';
        let leadingtone= 'D';

        

        let collected = ` ${tonic}${supertonic}${mediant}${subdominant}${dominant}${submediant}${leadingtone}`;

        console.log("----");
        console.log("Root is now " + tonic);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/e-flat-ionian-mode-on-piano-keyboard.png";
    } else if (r == 4 && m == 2) {
        console.log('Aeolian');
        let tonic = 'Eb';
        let supertonic = 'F';
        let mediant = 'Gb(A#)';
        let subdominant = 'Ab(G#)';
        let dominant = 'Bb';
        let submediant = 'Cb(B)';
        let leadingtone = 'Db(C#)';

        

        let collected = ` ${tonic}${supertonic}${mediant}${subdominant}${dominant}${submediant}${leadingtone}`;

        console.log("----");
        console.log("Root is now " + tonic);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/e-flat-aeolian-mode-on-piano-keyboard.png";
    } else if (r == 4 && m == 3) {
        console.log('Mixolydian');
        let tonic = 'Eb';
        let supertonic = 'F';
        let mediant = 'G';
        let subdominant = 'Ab(G#)';
        let dominant = 'Bb';
        let submediant = 'C';
        let leadingtone = 'Db(C#)';

        

        let collected = ` ${tonic}${supertonic}${mediant}${subdominant}${dominant}${submediant}${leadingtone}`;

        console.log("----");
        console.log("Root is now " + tonic);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/e-flat-mixolydian-mode-on-piano-keyboard.png";
    } else if (r == 4 && m == 4) {
        console.log('Lydian');
        let tonic = 'Eb';
        let supertonic = 'F';
        let mediant = 'G';
        let augmented4th = 'A';
        let dominant = 'Bb';
        let submediant = 'C';
        let leadingtone= 'D';

        

        let collected = ` ${tonic}${supertonic}${mediant}${augmented4th}${dominant}${submediant}${leadingtone}`;

        console.log("----");
        console.log("Root is now " + tonic);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/e-flat-lydian-mode-on-piano-keyboard.png";
    } else if (r == 4 && m == 5) {
        console.log('Locrian');
        let tonic = 'Eb';
        let minor2nd = 'F';
        let mediant = 'Gb(F#)';
        let subdominant = 'Ab(G#)';
        let diminished5th = 'A';
        let submediant = 'Cb(B)';
        let leadingtone = 'Db(C#)';

        

        let collected = ` ${tonic}${minor2nd}${mediant}${subdominant}${diminished5th}${submediant}${leadingtone}`;

        console.log("----");
        console.log("Root is now " + tonic);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/e-flat-locrian-mode-on-piano-keyboard.png";
    } else if (r == 4 && m == 6) {
        console.log('Phrygian');
        let tonic = 'Eb';
        let minor2nd = 'E';
        let mediant = 'Gb(F#)';
        let subdominant = 'Ab(G#)';
        let dominant = 'Bb(A#)';
        let submediant = 'B(Cb)';
        let leadingtone = 'Db(C#)';

        

        let collected = ` ${tonic}${minor2nd}${mediant}${subdominant}${dominant}${submediant}${leadingtone}`;

        console.log("----");
        console.log("Root is now " + tonic);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/e-flat-phrygian-mode-on-piano-keyboard.png";
    } else if (r == 4 && m == 7) {
        console.log('Dorian');
        let tonic = 'Eb';
        let supertonic = 'F';
        let mediant = 'Gb(F#)';
        let subdominant = 'Ab(G#)';
        let dominant = 'Bb(A#)';
        let submediant = 'C';
        let leadingtone = 'Db(C#)';

        

        let collected = ` ${tonic}${supertonic}${mediant}${subdominant}${dominant}${submediant}${leadingtone}`;

        console.log("----");
        console.log("Root is now " + tonic);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/d-sharp-dorian-mode-on-piano-keyboard.png";
    } else if (r == 4 && m == 9) {
        console.log('Pentatonic');
        let tonic = 'Eb';
        let supertonic = 'F';
        let mediant = 'G';
        // let subdominant = '-';
        let dominant = 'Bb';
        let submediant = 'C';

        

        let collected = ` ${tonic}${supertonic}${mediant}${dominant}${submediant}`;

        console.log("----");
        console.log("Root is now " + tonic);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/e-flat-major-pentatonic-scale-on-piano-keyboard.png";

    } else if (r == 5 && m == 1) {
        console.log('Ionian');
        let tonic = 'E';
        let supertonic = 'F#(Gb)';
        let mediant = 'G#(Ab)';
        let subdominant = 'A';
        let dominant = 'B';
        let submediant = 'C#';
        let leadingtone= 'D#';

        

        let collected = ` ${tonic}${supertonic}${mediant}${subdominant}${dominant}${submediant}${leadingtone}`;

        console.log("----");
        console.log("Root is now " + tonic);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/e-ionian-mode-on-piano-keyboard.png";
    } else if (r == 5 && m == 2) {
        console.log('Aeolian');
        let tonic = 'E';
        let supertonic = 'F#(Gb)';
        let mediant = 'G';
        let subdominant = 'A';
        let dominant = 'B';
        let submediant = 'C';
        let leadingtone = 'D';

        

        let collected = ` ${tonic}${supertonic}${mediant}${subdominant}${dominant}${submediant}${leadingtone}`;

        console.log("----");
        console.log("Root is now " + tonic);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/e-aeolian-mode-on-piano-keyboard.png";
    } else if (r == 5 && m == 3) {
        console.log('Mixolydian');
        let tonic = 'E';
        let supertonic = 'F#(Gb)';
        let mediant = 'G#(Ab)';
        let subdominant = 'A';
        let dominant = 'B';
        let submediant = 'C#(Db)';
        let leadingtone = 'D';

        

        let collected = ` ${tonic}${supertonic}${mediant}${subdominant}${dominant}${submediant}${leadingtone}`;

        console.log("----");
        console.log("Root is now " + tonic);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/e-mixolydian-mode-on-piano-keyboard.png";
    } else if (r == 5 && m == 4) {
        console.log('Lydian');
        let tonic = 'E';
        let supertonic = 'F#(Gb)';
        let mediant = 'G#(Ab)';
        let augmented4th = 'A#(Bb)';
        let dominant = 'B';
        let submediant = 'C#(Db)';
        let leadingtone= 'D#(Eb)';

        

        let collected = ` ${tonic}${supertonic}${mediant}${augmented4th}${dominant}${submediant}${leadingtone}`;

        console.log("----");
        console.log("Root is now " + tonic);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/e-lydian-mode-on-piano-keyboard.png";
    } else if (r == 5 && m == 5) {
        console.log('Locrian');
        let tonic = 'E';
        let minor2nd = 'F';
        let mediant = 'G';
        let subdominant = 'A';
        let diminished5th = 'Bb';
        let submediant = 'C';
        let leadingtone = 'D';

        

        let collected = ` ${tonic}${minor2nd}${mediant}${subdominant}${diminished5th}${submediant}${leadingtone}`;

        console.log("----");
        console.log("Root is now " + tonic);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/e-locrian-mode-on-piano-keyboard.png";
    } else if (r == 5 && m == 6) {
        console.log('Phrygian');
        let tonic = 'E';
        let minor2nd = 'F';
        let mediant = 'G';
        let subdominant = 'A';
        let dominant = 'B';
        let submediant = 'C';
        let leadingtone = 'D';

        

        let collected = ` ${tonic}${minor2nd}${mediant}${subdominant}${dominant}${submediant}${leadingtone}`;

        console.log("----");
        console.log("Root is now " + tonic);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/phrygian-mode-on-piano-keyboard.png";
    } else if (r == 5 && m == 7) {
        console.log('Dorian');
        let tonic = 'E';
        let supertonic = 'F#(Gb)';
        let mediant = 'G';
        let subdominant = 'A';
        let dominant = 'B';
        let submediant = 'C#(Db)';
        let leadingtone = 'D';

        

        let collected = ` ${tonic}${supertonic}${mediant}${subdominant}${dominant}${submediant}${leadingtone}`;

        console.log("----");
        console.log("Root is now " + tonic);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/e-dorian-mode-on-piano-keyboard.png";
    } else if (r == 5 && m == 9) {
        console.log('Pentatonic');
        let tonic = 'E';
        let supertonic = 'F#(Gb)';
        let mediant = 'G#(Ab)';
        // let subdominant = '-';
        let dominant = 'B';
        let submediant = 'C#';

        

        let collected = ` ${tonic}${supertonic}${mediant}${dominant}${submediant}`;

        console.log("----");
        console.log("Root is now " + tonic);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/e-major-pentatonic-scale-on-piano-keyboard.png";
    } else if (r == 6 && m == 1) {
        console.log('Ionian');
        let tonic = 'F';
        let supertonic = 'G';
        let mediant = 'A';
        let subdominant = 'Bb';
        let dominant = 'C';
        let submediant = 'D';
        let leadingtone= 'E';

        

        let collected = ` ${tonic}${supertonic}${mediant}${subdominant}${dominant}${submediant}${leadingtone}`;

        console.log("----");
        console.log("Root is now " + tonic);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/f-ionian-mode-on-piano-keyboard.png";
    } else if (r == 6 && m == 2) {
        console.log('Aeolian');
        let tonic = 'F';
        let supertonic = 'G';
        let mediant = 'Ab(G#)';
        let subdominant = 'Bb';
        let dominant = 'C';
        let submediant = 'Db(C#)';
        let leadingtone = 'Eb(D#)';

        

        let collected = ` ${tonic}${supertonic}${mediant}${subdominant}${dominant}${submediant}${leadingtone}`;

        console.log("----");
        console.log("Root is now " + tonic);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/f-aeolian-mode-on-piano-keyboard.png";

    } else if (r == 6 && m == 3) {
        console.log('Mixolydian');
        let tonic = 'F';
        let supertonic = 'G';
        let mediant = 'A';
        let subdominant = 'Bb';
        let dominant = 'C';
        let submediant = 'D';
        let leadingtone = 'Eb(D#)';

        

        let collected = ` ${tonic}${supertonic}${mediant}${subdominant}${dominant}${submediant}${leadingtone}`;

        console.log("----");
        console.log("Root is now " + tonic);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/f-mixolydian-mode-on-piano-keyboard.png";
    } else if (r == 6 && m == 4) {
        console.log('Lydian');
        let tonic = 'F';
        let supertonic = 'G';
        let mediant = 'A';
        let augmented4th = 'B';
        let dominant = 'C';
        let submediant = 'D';
        let leadingtone= 'E';

        

        let collected = ` ${tonic}${supertonic}${mediant}${augmented4th}${dominant}${submediant}${leadingtone}`;

        console.log("----");
        console.log("Root is now " + tonic);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/lydian-mode-on-piano-keyboard.png";
    } else if (r == 6 && m == 5) {
        console.log('Locrian');
        let tonic = 'F';
        let minor2nd = 'Gb(F#)';
        let mediant = 'Ab(G#)';
        let subdominant = 'Bb(A#)';
        let diminished5th = 'Cb(B)';
        let submediant = 'Db(C#)';
        let leadingtone = 'Eb(D#)';

        

        let collected = ` ${tonic}${minor2nd}${mediant}${subdominant}${diminished5th}${submediant}${leadingtone}`;

        console.log("----");
        console.log("Root is now " + tonic);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/f-locrian-mode-on-piano-keyboard.png";
    } else if (r == 6 && m == 6) {
        console.log('Phrygian');
        let tonic = 'F';
        let minor2nd = 'Gb';
        let mediant = 'Ab(G#)';
        let subdominant = 'Bb(A#)';
        let dominant = 'C';
        let submediant = 'Db(C#)';
        let leadingtone = 'Eb(D#)';

        

        let collected = ` ${tonic}${minor2nd}${mediant}${subdominant}${dominant}${submediant}${leadingtone}`;

        console.log("----");
        console.log("Root is now " + tonic);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/f-phrygian-mode-on-piano-keyboard.png";
    } else if (r == 6 && m == 7) {
        console.log('Dorian');
        let tonic = 'F';
        let supertonic = 'G';
        let mediant = 'Ab(G#)';
        let subdominant = 'Bb(A#)';
        let dominant = 'C';
        let submediant = 'D';
        let leadingtone = 'Eb(D#)';

        

        let collected = ` ${tonic}${supertonic}${mediant}${subdominant}${dominant}${submediant}${leadingtone}`;

        console.log("----");
        console.log("Root is now " + tonic);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/f-dorian-mode-on-piano-keyboard.png";
    } else if (r == 6 && m == 9) {
        console.log('Pentatonic');
        let tonic = 'F';
        let supertonic = 'G';
        let mediant = 'A';
        // let subdominant = '-';
        let dominant = 'C';
        let submediant = 'D';

        

        let collected = ` ${tonic}${supertonic}${mediant}${dominant}${submediant}`;

        console.log("----");
        console.log("Root is now " + tonic);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/f-major-pentatonic-scale-on-piano-keyboard.png";
    } else if (r == 7 && m == 1) {
        console.log('Ionian');
        let tonic = 'F#';
        let supertonic = 'G#(Ab)';
        let mediant = 'A#(Bb)';
        let subdominant = 'B';
        let dominant = 'C#(Db)';
        let submediant = 'D#(Eb)';
        let leadingtone= 'F';

        

        let collected = ` ${tonic}${supertonic}${mediant}${subdominant}${dominant}${submediant}${leadingtone}`;

        console.log("----");
        console.log("Root is now " + tonic);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/f-sharp-ionian-mode-on-piano-keyboard.png";
    } else if (r == 7 && m == 2) {
        console.log('Aeolian');
        let tonic = 'F#';
        let supertonic = 'G#(Ab)';
        let mediant = 'A';
        let subdominant = 'B';
        let dominant = 'C#(Db)';
        let submediant = 'D';
        let leadingtone = 'E';

        

        let collected = ` ${tonic}${supertonic}${mediant}${subdominant}${dominant}${submediant}${leadingtone}`;

        console.log("----");
        console.log("Root is now " + tonic);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/f-sharp-aeolian-mode-on-piano-keyboard.png";
    } else if (r == 7 && m == 3) {
        console.log('Mixolydian');
        let tonic = 'F#';
        let supertonic = 'G#(Ab)';
        let mediant = 'A#(Bb)';
        let subdominant = 'B';
        let dominant = 'C#(Db)';
        let submediant = 'D#(Eb)';
        let leadingtone = 'E';

        

        let collected = ` ${tonic}${supertonic}${mediant}${subdominant}${dominant}${submediant}${leadingtone}`;

        console.log("----");
        console.log("Root is now " + tonic);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/f-sharp-mixolydian-mode-on-piano-keyboard.png";
    } else if (r == 7 && m == 4) {
        console.log('Lydian');
        let tonic = 'F#';
        let supertonic = 'G#(Ab)';
        let mediant = 'A#(Bb)';
        let augmented4th = 'C';
        let dominant = 'C#(Db)';
        let submediant = 'D#(Eb)';
        let leadingtone= 'F';

        

        let collected = ` ${tonic}${supertonic}${mediant}${augmented4th}${dominant}${submediant}${leadingtone}`;

        console.log("----");
        console.log("Root is now " + tonic);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/f-sharp-lydian-mode-on-piano-keyboard.png";
    } else if (r == 7 && m == 5) {
        console.log('Locrian');
        let tonic = 'F#';
        let minor2nd = 'G';
        let mediant = 'A';
        let subdominant = 'B';
        let diminished5th = 'C';
        let submediant = 'D';
        let leadingtone = 'E';

        

        let collected = ` ${tonic}${minor2nd}${mediant}${subdominant}${diminished5th}${submediant}${leadingtone}`;

        console.log("----");
        console.log("Root is now " + tonic);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/f-sharp-locrian-mode-on-piano-keyboard.png";
    } else if (r == 7 && m == 6) {
        console.log('Phrygian');
        let tonic = 'F#';
        let minor2nd = 'G';
        let mediant = 'A';
        let subdominant = 'B';
        let dominant = 'C#(Db)';
        let submediant = 'D';
        let leadingtone = 'E';

        

        let collected = ` ${tonic}${minor2nd}${mediant}${subdominant}${dominant}${submediant}${leadingtone}`;

        console.log("----");
        console.log("Root is now " + tonic);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://www.basicmusictheory.com/img/f-sharp-phrygian-mode-on-piano-keyboard.png";
    } else if (r == 7 && m == 7) {
        console.log('Dorian');
        let tonic = 'F#';
        let supertonic = 'G#(Ab)';
        let mediant = 'A';
        let subdominant = 'B';
        let dominant = 'C#(Db)';
        let submediant = 'D#(Eb)';
        let leadingtone = 'E';

        

        let collected = ` ${tonic}${supertonic}${mediant}${subdominant}${dominant}${submediant}${leadingtone}`;

        console.log("----");
        console.log("Root is now " + tonic);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/f-sharp-dorian-mode-on-piano-keyboard.png"
    } else if (r == 7 && m == 9) {
        console.log('Pentatonic');
        let tonic = 'F#';
        let supertonic = 'G#(Ab)';
        let mediant = 'A#(Bb)';
        // let subdominant = '-';
        let dominant = 'C#(Db)';
        let submediant = 'D#(Eb)';

        

        let collected = ` ${tonic}${supertonic}${mediant}${dominant}${submediant}`;

        console.log("----");
        console.log("Root is now " + tonic);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/f-sharp-major-pentatonic-scale-on-piano-keyboard.png";
    } else if (r == 8 && m == 1) {
        console.log('Ionian');

        let tonic = 'G';
        let supertonic = 'A';
        let mediant = 'B';
        let subdominant = 'C';
        let dominant = 'D';
        let submediant = 'E';
        let leadingtone= 'F#(Gb)';

        

        let collected = ` ${tonic}${supertonic}${mediant}${subdominant}${dominant}${submediant}${leadingtone}`;

        console.log("----");
        console.log("Root is now " + tonic);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/g-ionian-mode-on-piano-keyboard.png";

    } else if (r == 8 && m == 2) {
        console.log('Aeolian');

        let tonic = 'G';
        let supertonic = 'A';
        let mediant = 'Bb';
        let subdominant = 'C';
        let dominant = 'D';
        let submediant = 'Eb(D#)';
        let leadingtone = 'F';

        

        let collected = ` ${tonic}${supertonic}${mediant}${subdominant}${dominant}${submediant}${leadingtone}`;

        console.log("----");
        console.log("Root is now " + tonic);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/g-aeolian-mode-on-piano-keyboard.png";

    } else if (r == 8 && m == 3) {
        console.log('Mixolydian');

        let tonic = 'G';
        let supertonic = 'A';
        let mediant = 'B';
        let subdominant = 'C';
        let dominant = 'D';
        let submediant = 'E';
        let leadingtone = 'F';

        

        let collected = ` ${tonic}${supertonic}${mediant}${subdominant}${dominant}${submediant}${leadingtone}`;

        console.log("----");
        console.log("Root is now " + tonic);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/mixolydian-mode-on-piano-keyboard.png";

    } else if (r == 8 && m == 4) {
        console.log('Lydian');

        let tonic = 'G';
        let supertonic = 'A';
        let mediant = 'B';
        let augmented4th = 'C#(Db)';
        let dominant = 'D';
        let submediant = 'E';
        let leadingtone= 'F#(Gb)';

        

        let collected = ` ${tonic}${supertonic}${mediant}${augmented4th}${dominant}${submediant}${leadingtone}`;

        console.log("----");
        console.log("Root is now " + tonic);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/g-lydian-mode-on-piano-keyboard.png";

    } else if (r == 8 && m == 5) {
        console.log('Locrian');

        let tonic = 'G';
        let minor2nd = 'Ab(F#)';
        let mediant = 'Bb(A#)';
        let subdominant = 'C';
        let diminished5th = 'Db(C#)';
        let submediant = 'Eb(D#)';
        let leadingtone = 'F';

        

        let collected = ` ${tonic}${minor2nd}${mediant}${subdominant}${diminished5th}${submediant}${leadingtone}`;

        console.log("----");
        console.log("Root is now " + tonic);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/g-locrian-mode-on-piano-keyboard.png";

    } else if (r == 8 && m == 6) {
        console.log('Phrygian');

        let tonic = 'G';
        let minor2nd = 'Ab(F#)';
        let mediant = 'Bb(A#)';
        let subdominant = 'C';
        let dominant = 'D';
        let submediant = 'Eb(D#)';
        let leadingtone = 'F';

        

        let collected = ` ${tonic}${minor2nd}${mediant}${subdominant}${dominant}${submediant}${leadingtone}`;

        console.log("----");
        console.log("Root is now " + tonic);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/g-phrygian-mode-on-piano-keyboard.png";

    } else if (r == 8 && m == 7) {
        console.log('Dorian');

        let tonic = 'G';
        let supertonic = 'A';
        let mediant = 'Bb(A#)';
        let subdominant = 'C';
        let dominant = 'D';
        let submediant = 'E';
        let leadingtone = 'F';

        

        let collected = ` ${tonic}${supertonic}${mediant}${subdominant}${dominant}${submediant}${leadingtone}`;

        console.log("----");
        console.log("Root is now " + tonic);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/g-dorian-mode-on-piano-keyboard.png";

    } else if (r == 8 && m == 9) {
        console.log('Pentatonic');

        let tonic = 'G';
        let supertonic = 'A';
        let mediant = 'B';
        // let subdominant = '-';
        let dominant = 'D';
        let submediant = 'E';

        

        let collected = ` ${tonic}${supertonic}${mediant}${dominant}${submediant}`;

        console.log("----");
        console.log("Root is now " + tonic);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/g-major-pentatonic-scale-on-piano-keyboard.png";

    } else if (r == 9 && m == 1) {
        console.log('Ionian');
        let tonic = 'G#';
        let supertonic = 'A#(Gb)';
        let mediant = 'C';
        let subdominant = 'C#(Db)';
        let dominant = 'D#(Eb)';
        let submediant = 'F';
        let leadingtone= 'G';

        

        let collected = ` ${tonic}${supertonic}${mediant}${subdominant}${dominant}${submediant}${leadingtone}`;

        console.log("----");
        console.log("Root is now " + tonic);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/g-sharp-ionian-mode-on-piano-keyboard.png";
    } else if (r == 9 && m == 2) {
        console.log('Aeolian');
        let tonic = 'G#';
        let supertonic = 'A#(Gb)';
        let mediant = 'B';
        let subdominant = 'C#(Db)';
        let dominant = 'D#(Eb)';
        let submediant = 'E';
        let leadingtone = 'F#(Gb)';

        

        let collected = ` ${tonic}${supertonic}${mediant}${subdominant}${dominant}${submediant}${leadingtone}`;

        console.log("----");
        console.log("Root is now " + tonic);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/g-sharp-aeolian-mode-on-piano-keyboard.png";
    } else if (r == 9 && m == 3) {
        console.log('Mixolydian');
        let tonic = 'G#';
        let supertonic = 'A#(Gb)';
        let mediant = 'C';
        let subdominant = 'C#(Db)';
        let dominant = 'D#(Eb)';
        let submediant = 'F';
        let leadingtone = 'F#(Gb)';

        

        let collected = ` ${tonic}${supertonic}${mediant}${subdominant}${dominant}${submediant}${leadingtone}`;

        console.log("----");
        console.log("Root is now " + tonic);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/g-sharp-mixolydian-mode-on-piano-keyboard.png";
    } else if (r == 9 && m == 4) {
        console.log('Lydian');
        let tonic = 'G#';
        let supertonic = 'A#(Gb)';
        let mediant = 'C';
        let augmented4th = 'D';
        let dominant = 'D#(Eb)';
        let submediant = 'F';
        let leadingtone= 'G';

        

        let collected = ` ${tonic}${supertonic}${mediant}${augmented4th}${dominant}${submediant}${leadingtone}`;

        console.log("----");
        console.log("Root is now " + tonic);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/g-sharp-lydian-mode-on-piano-keyboard.png";
    } else if (r == 9 && m == 5) {
        console.log('Locrian');
        let tonic = 'G#';
        let minor2nd = 'A';
        let mediant = 'B';
        let subdominant = 'C#(Db)';
        let diminished5th = 'D';
        let submediant = 'E';
        let leadingtone = 'F#(Gb)';

        

        let collected = ` ${tonic}${minor2nd}${mediant}${subdominant}${diminished5th}${submediant}${leadingtone}`;

        console.log("----");
        console.log("Root is now " + tonic);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/g-sharp-locrian-mode-on-piano-keyboard.png";
    } else if (r == 9 && m == 6) {
        console.log('Phrygian');
        let tonic = 'G#';
        let minor2nd = 'A';
        let mediant = 'B';
        let subdominant = 'C#(Db)';
        let dominant = 'D#(Eb)';
        let submediant = 'E';
        let leadingtone = 'F#(Gb)';

        

        let collected = ` ${tonic}${minor2nd}${mediant}${subdominant}${dominant}${submediant}${leadingtone}`;

        console.log("----");
        console.log("Root is now " + tonic);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/g-sharp-phrygian-mode-on-piano-keyboard.png";
    } else if (r == 9 && m == 7) {
        console.log('Dorian');
        let tonic = 'G#';
        let supertonic = 'A#(Bb)';
        let mediant = 'B';
        let subdominant = 'C#(Db)';
        let dominant = 'D#(Eb)';
        let submediant = 'F';
        let leadingtone = 'F#(Gb)';

        

        let collected = ` ${tonic}${supertonic}${mediant}${subdominant}${dominant}${submediant}${leadingtone}`;

        console.log("----");
        console.log("Root is now " + tonic);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/g-sharp-dorian-mode-on-piano-keyboard.png";
    } else if (r == 9 && m == 9) {
        console.log('Pentatonic');
        let tonic = 'G#';
        let supertonic = 'Bb';
        let mediant = 'C';
        // let subdominant = '-';
        let dominant = 'D#(Eb)';
        let submediant = 'F';

        

        let collected = ` ${tonic}${supertonic}${mediant}${dominant}${submediant}`;

        console.log("----");
        console.log("Root is now " + tonic);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/g-sharp-major-pentatonic-scale-on-piano-keyboard.png";
    } else if (r == 10 && m == 1) {
        console.log('Ionian');
        let tonic = 'A';
        let supertonic = 'B';
        let mediant = 'C#';
        let subdominant = 'D';
        let dominant = 'E';
        let submediant = 'F#(Gb)';
        let leadingtone= 'G#(Ab)';

        

        let collected = ` ${tonic}${supertonic}${mediant}${subdominant}${dominant}${submediant}${leadingtone}`;

        console.log("----");
        console.log("Root is now " + tonic);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/a-ionian-mode-on-piano-keyboard.png";

    } else if (r == 10 && m == 2) {
        console.log('Aeolian');
        let tonic = 'A';
        let supertonic = 'B';
        let mediant = 'C';
        let subdominant = 'D';
        let dominant = 'E';
        let submediant = 'F';
        let leadingtone = 'G';

        

        let collected = ` ${tonic}${supertonic}${mediant}${subdominant}${dominant}${submediant}${leadingtone}`;

        console.log("----");
        console.log("Root is now " + tonic);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/aeolian-mode-on-piano-keyboard.png";

    } else if (r == 10 && m == 3) {
        console.log('Mixolydian');
        let tonic = 'A';
        let supertonic = 'B';
        let mediant = 'C#(Db)';
        let subdominant = 'D';
        let dominant = 'E';
        let submediant = 'F#(Gb)';
        let leadingtone = 'G';

        

        let collected = ` ${tonic}${supertonic}${mediant}${subdominant}${dominant}${submediant}${leadingtone}`;

        console.log("----");
        console.log("Root is now " + tonic);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/a-mixolydian-mode-on-piano-keyboard.png";



    } else if (r == 10 && m == 4) {
        console.log('Lydian');
        let tonic = 'A';
        let supertonic = 'B';
        let mediant = 'C#(Db)';
        let augmented4th = 'D#(Eb)';
        let dominant = 'E';
        let submediant = 'F#(Gb)';
        let leadingtone= 'G#(Ab)';

        

        let collected = ` ${tonic}${supertonic}${mediant}${augmented4th}${dominant}${submediant}${leadingtone}`;

        console.log("----");
        console.log("Root is now " + tonic);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/a-lydian-mode-on-piano-keyboard.png";

    } else if (r == 10 && m == 5) {
        console.log('Locrian');
        let tonic = 'A';
        let minor2nd = 'Bb';
        let mediant = 'C';
        let subdominant = 'D';
        let diminished5th = 'Eb(D#)';
        let submediant = 'F';
        let leadingtone = 'G';

        

        let collected = ` ${tonic}${minor2nd}${mediant}${subdominant}${diminished5th}${submediant}${leadingtone}`;

        console.log("----");
        console.log("Root is now " + tonic);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/a-locrian-mode-on-piano-keyboard.png";


    } else if (r == 10 && m == 6) {
        console.log('Phrygian');
        let tonic = 'A';
        let minor2nd = 'Bb(A#)';
        let mediant = 'C';
        let subdominant = 'D';
        let dominant = 'E';
        let submediant = 'F';
        let leadingtone = 'G';

        

        let collected = ` ${tonic}${minor2nd}${mediant}${subdominant}${dominant}${submediant}${leadingtone}`;

        console.log("----");
        console.log("Root is now " + tonic);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/a-phrygian-mode-on-piano-keyboard.png";


    } else if (r == 10 && m == 7) {
        console.log('Dorian');
        let tonic = 'A';
        let supertonic = 'B';
        let mediant = 'C';
        let subdominant = 'D';
        let dominant = 'E';
        let submediant = 'F#';
        let leadingtone = 'G';

        

        let collected = ` ${tonic}${supertonic}${mediant}${subdominant}${dominant}${submediant}${leadingtone}`;

        console.log("----");
        console.log("Root is now " + tonic);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/a-dorian-mode-on-piano-keyboard.png";

    } else if (r == 10 && m == 9) {
        console.log('Pentatonic');
        let tonic = 'A';
        let supertonic = 'B';
        let mediant = 'C#';
        // let subdominant = '-';
        let dominant = 'E';
        let submediant = 'F#(Gb)';

        

        let collected = ` ${tonic}${supertonic}${mediant}${dominant}${submediant}`;

        console.log("----");
        console.log("Root is now " + tonic);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/a-major-pentatonic-scale-on-piano-keyboard.png";




    } else if (r == 11 && m == 1) {
        console.log('Ionian');

        let tonic = 'Bb';
        let supertonic = 'C';
        let mediant = 'D';
        let subdominant = 'Eb(D#)';
        let dominant = 'F';
        let submediant = 'G';
        let leadingtone= 'A';

        

        let collected = ` ${tonic}${supertonic}${mediant}${subdominant}${dominant}${submediant}${leadingtone}`;

        console.log("----");
        console.log("Root is now " + tonic);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/b-flat-ionian-mode-on-piano-keyboard.png";

    } else if (r == 11 && m == 2) {
        console.log('Aeolian');

        let tonic = 'Bb';
        let supertonic = 'C';
        let mediant = 'Db(E#)';
        let subdominant = 'Eb(D#)';
        let dominant = 'F';
        let submediant = 'Gb(F#)';
        let leadingtone = 'Ab(G#)';

        

        let collected = ` ${tonic}${supertonic}${mediant}${subdominant}${dominant}${submediant}${leadingtone}`;

        console.log("----");
        console.log("Root is now " + tonic);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/b-flat-aeolian-mode-on-piano-keyboard.png";


    } else if (r == 11 && m == 3) {
        console.log('Mixolydian');

        let tonic = 'Bb';
        let supertonic = 'C';
        let mediant = 'D';
        let subdominant = 'Eb(D#)';
        let dominant = 'F';
        let submediant = 'G';
        let leadingtone = 'Ab(G#)';

        

        let collected = ` ${tonic}${supertonic}${mediant}${subdominant}${dominant}${submediant}${leadingtone}`;

        console.log("----");
        console.log("Root is now " + tonic);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/b-flat-mixolydian-mode-on-piano-keyboard.png";

    } else if (r == 11 && m == 4) {
        console.log('Lydian');

        let tonic = 'Bb';
        let supertonic = 'C';
        let mediant = 'D';
        let augmented4th = 'E';
        let dominant = 'F';
        let submediant = 'G';
        let leadingtone= 'A';

        

        let collected = ` ${tonic}${supertonic}${mediant}${augmented4th}${dominant}${submediant}${leadingtone}`;

        console.log("----");
        console.log("Root is now " + tonic);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/b-flat-lydian-mode-on-piano-keyboard.png";

    } else if (r == 11 && m == 5) {
        console.log('Locrian');

        let tonic = 'Bb';
        let minor2nd = 'Cb(B)';
        let mediant = 'Db(C#)';
        let subdominant = 'Eb(D#)';
        let diminished5th = 'E';
        let submediant = 'Gb(F#)';
        let leadingtone = 'Ab(G#)';

        

        let collected = ` ${tonic}${minor2nd}${mediant}${subdominant}${diminished5th}${submediant}${leadingtone}`;

        console.log("----");
        console.log("Root is now " + tonic);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/b-flat-locrian-mode-on-piano-keyboard.png";

    } else if (r == 11 && m == 6) {
        console.log('Phrygian');

        let tonic = 'Bb';
        let minor2nd = 'Cb(B)';
        let mediant = 'Db(C#)';
        let subdominant = 'Eb(D#)';
        let dominant = 'F';
        let submediant = 'Gb(A#)';
        let leadingtone = 'Ab(G#)';

        

        let collected = ` ${tonic}${minor2nd}${mediant}${subdominant}${dominant}${submediant}${leadingtone}`;

        console.log("----");
        console.log("Root is now " + tonic);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/b-flat-phrygian-mode-on-piano-keyboard.png";

    } else if (r == 11 && m == 7) {
        console.log('Dorian');

        let tonic = 'Bb';
        let supertonic = 'C';
        let mediant = 'Db(C#)';
        let subdominant = 'Eb(D#)';
        let dominant = 'F';
        let submediant = 'G';
        let leadingtone = 'Ab(G#)';

        

        let collected = ` ${tonic}${supertonic}${mediant}${subdominant}${dominant}${submediant}${leadingtone}`;

        console.log("----");
        console.log("Root is now " + tonic);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/b-flat-dorian-mode-on-piano-keyboard.png";

    } else if (r == 11 && m == 9) {
        console.log('Pentatonic');

        let tonic = 'Bb';
        let supertonic = 'C';
        let mediant = 'D';
        // let subdominant = '-';
        let dominant = 'F';
        let submediant = 'G';
        

        let collected = ` ${tonic}${supertonic}${mediant}${dominant}${submediant}`;

        console.log("----");
        console.log("Root is now " + tonic);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/b-flat-major-pentatonic-scale-on-piano-keyboard.png";
    } else if (r == 12 && m == 1) {
        console.log('Ionian');

        let tonic = 'B';
        let supertonic = 'C#(Db)';
        let mediant = 'D#(Eb)';
        let subdominant = 'E';
        let dominant = 'F#(Gb)';
        let submediant = 'G#(Ab)';
        let leadingtone= 'A#(Bb)';

        

        let collected = ` ${tonic}${supertonic}${mediant}${subdominant}${dominant}${submediant}${leadingtone}`;

        console.log("----");
        console.log("Root is now " + tonic);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/b-ionian-mode-on-piano-keyboard.png";

    } else if (r == 12 && m == 2) {
        console.log('Aeolian');

        let tonic = 'B';
        let supertonic = 'C#(Db)';
        let mediant = 'D';
        let subdominant = 'E';
        let dominant = 'F#(Gb)';
        let submediant = 'G';
        let leadingtone = 'A';

        

        let collected = ` ${tonic}${supertonic}${mediant}${subdominant}${dominant}${submediant}${leadingtone}`;

        console.log("----");
        console.log("Root is now " + tonic);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/b-aeolian-mode-on-piano-keyboard.png";

    } else if (r == 12 && m == 3) {
        console.log('Mixolydian');

        let tonic = 'B';
        let supertonic = 'C#(Db)';
        let mediant = 'D#(Eb)';
        let subdominant = 'E';
        let dominant = 'F#(Gb)';
        let submediant = 'G#(Ab)';
        let leadingtone = 'A';

        

        let collected = ` ${tonic}${supertonic}${mediant}${subdominant}${dominant}${submediant}${leadingtone}`;

        console.log("----");
        console.log("Root is now " + tonic);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/b-mixolydian-mode-on-piano-keyboard.png";

    } else if (r == 12 && m == 4) {
        console.log('Lydian');

        let tonic = 'B';
        let supertonic = 'C#(Db)';
        let mediant = 'D#(Eb)';
        let augmented4th = 'F';
        let dominant = 'F#(Gb)';
        let submediant = 'G#(Ab)';
        let leadingtone= 'A#(Bb)';

        

        let collected = ` ${tonic}${supertonic}${mediant}${augmented4th}${dominant}${submediant}${leadingtone}`;

        console.log("----");
        console.log("Root is now " + tonic);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/b-lydian-mode-on-piano-keyboard.png";

    } else if (r == 12 && m == 5) {
        console.log('Locrian');

        let tonic = 'B';
        let minor2nd = 'C';
        let mediant = 'D';
        let subdominant = 'E';
        let diminished5th = 'F';
        let submediant = 'G';
        let leadingtone = 'A';

        

        let collected = ` ${tonic}${minor2nd}${mediant}${subdominant}${diminished5th}${submediant}${leadingtone}`;

        console.log("----");
        console.log("Root is now " + tonic);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/locrian-mode-on-piano-keyboard.png";

    } else if (r == 12 && m == 6) {
        console.log('B Phrygian')

        let tonic = 'B';
        let minor2nd = 'C';
        let mediant = 'D';
        let subdominant = 'E';
        let dominant = 'F#(Gb)';
        let submediant = 'G';
        let leadingtone = 'A';

        

        let collected = ` ${tonic}${minor2nd}${mediant}${subdominant}${dominant}${submediant}${leadingtone}`;

        console.log("----");
        console.log("Root is now " + tonic);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/b-phrygian-mode-on-piano-keyboard.png";
    } else if (r == 12 && m == 7) {
        console.log('B Dorian');

        let tonic = 'B';
        let minor2nd = 'C#';
        let mediant = 'D';
        let subdominant = 'E';
        let diminished5th = 'F#';
        let submediant = 'G#';
        let leadingtone = 'A';

        

        let collected = ` ${tonic}${minor2nd}${mediant}${subdominant}${diminished5th}${submediant}${leadingtone}`;

        console.log("----");
        console.log("Root is now " + tonic);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/b-dorian-mode-on-piano-keyboard.png";

    } else if (r == 12 && m == 9) {
        console.log('B Pentatonic');

        let tonic = 'B';
        let supertonic = 'C#(Db)';
        let mediant = 'D#(Eb)';
        // let subdominant = '-';
        let dominant = 'F#(Gb)';
        let submediant = 'G#(Ab)';
        

        let collected = ` ${tonic}${supertonic}${mediant}${dominant}${submediant}`;

        console.log("----");
        console.log("Root is now " + tonic);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/b-major-pentatonic-scale-on-piano-keyboard.png";

    }
}