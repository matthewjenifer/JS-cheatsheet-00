document.getElementById("myButton").onclick = function () {

    let selection = document.getElementById('rootSelect');
    let selection2 = document.getElementById('modeSelect');
    let r = selection.selectedIndex;
    let m = selection2.selectedIndex;
    if (r == 1 && m == 1) {
        console.log('Ionian');
        let root = 'C';
        let major2nd = 'D';
        let major3rd = 'E';
        let perfect4th = 'F';
        let perfect5th = 'G';
        let major6th = 'A';
        let major7th = 'B';

        let comma = ', ';

        let collected = ` ${root}${comma}${major2nd}${comma}${major3rd}${comma}${perfect4th}${comma}${perfect5th}${comma}${major6th}${comma}${major7th}${comma}`;

        console.log("----");
        console.log("Root is now " + root);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/ionian-mode-on-piano-keyboard.png";
    } else if (r == 1 && m == 2) {
        console.log('Aeolian');
        let root = 'C';
        let major2nd = 'D';
        let minor3rd = 'Eb';
        let perfect4th = 'F';
        let perfect5th = 'G';
        let minor6th = 'Ab';
        let minor7th = 'Bb';

        let comma = ', ';

        let collected = ` ${root}${comma}${major2nd}${comma}${minor3rd}${comma}${perfect4th}${comma}${perfect5th}${comma}${minor6th}${comma}${minor7th}${comma}`;

        console.log("----");
        console.log("Root is now " + root);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/c-aeolian-mode-on-piano-keyboard.png";
    } else if (r == 1 && m == 3) {
        console.log('Mixolydian');
        let root = 'C';
        let major2nd = 'D';
        let major3rd = 'E';
        let perfect4th = 'F';
        let perfect5th = 'G';
        let major6th = 'A';
        let minor7th = 'Bb';

        let comma = ', ';

        let collected = ` ${root}${comma}${major2nd}${comma}${major3rd}${comma}${perfect4th}${comma}${perfect5th}${comma}${major6th}${comma}${minor7th}${comma}`;

        console.log("----");
        console.log("Root is now " + root);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/c-mixolydian-mode-on-piano-keyboard.png";
    } else if (r == 1 && m == 4) {
        console.log('Lydian');
        let root = 'C';
        let major2nd = 'D';
        let major3rd = 'E';
        let augmented4th = 'F#(Gb)';
        let perfect5th = 'G';
        let major6th = 'A';
        let major7th = 'B';

        let comma = ', ';

        let collected = ` ${root}${comma}${major2nd}${comma}${major3rd}${comma}${augmented4th}${comma}${perfect5th}${comma}${major6th}${comma}${major7th}${comma}`;

        console.log("----");
        console.log("Root is now " + root);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/c-lydian-mode-on-piano-keyboard.png";
    } else if (r == 1 && m == 5) {
        console.log('Locrian');
        let root = 'C';
        let minor2nd = 'Db(C#)';
        let minor3rd = 'Eb(D#)';
        let perfect4th = 'F';
        let diminished5th = 'Gb(F#)';
        let minor6th = 'Ab(G#)';
        let minor7th = 'Bb';

        let comma = ', ';

        let collected = ` ${root}${comma}${minor2nd}${comma}${minor3rd}${comma}${perfect4th}${comma}${diminished5th}${comma}${minor6th}${comma}${minor7th}${comma}`;

        console.log("----");
        console.log("Root is now " + root);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/c-locrian-mode-on-piano-keyboard.png";
    } else if (r == 1 && m == 6) {
        console.log('Phrygian');
        let root = 'C';
        let minor2nd = 'Db(C#)';
        let minor3rd = 'Eb(D#)';
        let perfect4th = 'F';
        let perfect5th = 'G';
        let minor6th = 'Ab(G#)';
        let minor7th = 'Bb';

        let comma = ', ';

        let collected = ` ${root}${comma}${minor2nd}${comma}${minor3rd}${comma}${perfect4th}${comma}${perfect5th}${comma}${minor6th}${comma}${minor7th}${comma}`;

        console.log("----");
        console.log("Root is now " + root);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/c-phrygian-mode-on-piano-keyboard.png";
    } else if (r == 1 && m == 7) {
        console.log('Dorian');
        let root = 'C';
        let major2nd = 'D';
        let minor3rd = 'Eb(D#)';
        let perfect4th = 'F';
        let perfect5th = 'G';
        let major6th = 'A';
        let minor7th = 'Bb';

        let comma = ', ';

        let collected = ` ${root}${comma}${major2nd}${comma}${minor3rd}${comma}${perfect4th}${comma}${perfect5th}${comma}${major6th}${comma}${minor7th}${comma}`;

        console.log("----");
        console.log("Root is now " + root);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/c-dorian-mode-on-piano-keyboard.png";
    } else if (r == 1 && m == 9) {
        console.log('Pentatonic');
        let root = 'C';
        let major2nd = 'D';
        let major3rd = 'E';
        // let perfect4th = '-';
        let perfect5th = 'G';
        let major6th = 'A';
        let comma = ', ';

        let collected = ` ${root}${comma}${major2nd}${comma}${major3rd}${comma}${perfect5th}${comma}${major6th}${comma}`;

        console.log("----");
        console.log("Root is now " + root);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/c-major-pentatonic-scale-on-piano-keyboard.png";
    } else if (r == 2 && m == 1) {
        console.log('Ionian');
        let root = 'C#';
        let major2nd = 'D#(Eb)';
        let major3rd = 'F';
        let perfect4th = 'F#(Gb)';
        let perfect5th = 'G#(Ab)';
        let major6th = 'A#(Bb)';
        let major7th = 'C';

        let comma = ', ';

        let collected = ` ${root}${comma}${major2nd}${comma}${major3rd}${comma}${perfect4th}${comma}${perfect5th}${comma}${major6th}${comma}${major7th}${comma}`;

        console.log("----");
        console.log("Root is now " + root);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/c-sharp-ionian-mode-on-piano-keyboard.png";

    } else if (r == 2 && m == 2) {
        console.log('Aeolian');
        let root = 'C#';
        let major2nd = 'D#(Eb)';
        let minor3rd = 'E';
        let perfect4th = 'F#(Gb)';
        let perfect5th = 'G#(Ab)';
        let minor6th = 'A';
        let minor7th = 'B';

        let comma = ', ';

        let collected = ` ${root}${comma}${major2nd}${comma}${minor3rd}${comma}${perfect4th}${comma}${perfect5th}${comma}${minor6th}${comma}${minor7th}${comma}`;

        console.log("----");
        console.log("Root is now " + root);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/c-sharp-aeolian-mode-on-piano-keyboard.png";

    } else if (r == 2 && m == 3) {
        console.log('Mixolydian');
        let root = 'C#';
        let major2nd = 'D#(Eb)';
        let major3rd = 'F';
        let perfect4th = 'F#(Gb)';
        let perfect5th = 'G#(Ab)';
        let major6th = 'A#(Bb)';
        let minor7th = 'B';

        let comma = ', ';

        let collected = ` ${root}${comma}${major2nd}${comma}${major3rd}${comma}${perfect4th}${comma}${perfect5th}${comma}${major6th}${comma}${minor7th}${comma}`;

        console.log("----");
        console.log("Root is now " + root);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/c-sharp-mixolydian-mode-on-piano-keyboard.png";

    } else if (r == 2 && m == 4) {
        console.log('Lydian');
        let root = 'C#';
        let major2nd = 'D#(Eb)';
        let major3rd = 'F';
        let augmented4th = 'G';
        let perfect5th = 'G#(Ab)';
        let major6th = 'A#(Bb)';
        let major7th = 'C';

        let comma = ', ';

        let collected = ` ${root}${comma}${major2nd}${comma}${major3rd}${comma}${augmented4th}${comma}${perfect5th}${comma}${major6th}${comma}${major7th}${comma}`;

        console.log("----");
        console.log("Root is now " + root);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/c-sharp-lydian-mode-on-piano-keyboard.png";


    } else if (r == 2 && m == 5) {
        console.log('Locrian');
        let root = 'C#';
        let minor2nd = 'D';
        let minor3rd = 'E';
        let perfect4th = 'F#(Gb)';
        let diminished5th = 'G';
        let minor6th = 'A';
        let minor7th = 'B';

        let comma = ', ';

        let collected = ` ${root}${comma}${minor2nd}${comma}${minor3rd}${comma}${perfect4th}${comma}${diminished5th}${comma}${minor6th}${comma}${minor7th}${comma}`;

        console.log("----");
        console.log("Root is now " + root);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/c-sharp-locrian-mode-on-piano-keyboard.png";


    } else if (r == 2 && m == 6) {
        console.log('Phrygian');
        let root = 'C#';
        let minor2nd = 'D';
        let minor3rd = 'E';
        let perfect4th = 'F#(Gb)';
        let perfect5th = 'G#(Ab)';
        let minor6th = 'A';
        let minor7th = 'B';

        let comma = ', ';

        let collected = ` ${root}${comma}${minor2nd}${comma}${minor3rd}${comma}${perfect4th}${comma}${perfect5th}${comma}${minor6th}${comma}${minor7th}${comma}`;

        console.log("----");
        console.log("Root is now " + root);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/c-sharp-phrygian-mode-on-piano-keyboard.png";


    } else if (r == 2 && m == 7) {
        console.log('Dorian');
        let root = 'C#';
        let major2nd = 'D#(Eb)';
        let minor3rd = 'E';
        let perfect4th = 'F#(Gb)';
        let perfect5th = 'G#(Ab)';
        let major6th = 'A#(Bb)';
        let minor7th = 'B';

        let comma = ', ';

        let collected = ` ${root}${comma}${major2nd}${comma}${minor3rd}${comma}${perfect4th}${comma}${perfect5th}${comma}${major6th}${comma}${minor7th}${comma}`;

        console.log("----");
        console.log("Root is now " + root);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/c-sharp-dorian-mode-on-piano-keyboard.png";


    } else if (r == 2 && m == 9) {
        console.log('Pentatonic');
        let root = 'C#';
        let major2nd = 'D#(Eb)';
        let major3rd = 'F';
        // let perfect4th = '-';
        let perfect5th = 'G#(Ab)';
        let major6th = 'A#(Bb)';

        let comma = ', ';

        let collected = ` ${root}${comma}${major2nd}${comma}${major3rd}${comma}${perfect5th}${comma}${major6th}${comma}`;

        console.log("----");
        console.log("Root is now " + root);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/c-sharp-major-pentatonic-scale-on-piano-keyboard.png";


    } else if (r == 3 && m == 1) {
        console.log('Ionian');
        let root = 'D';
        let major2nd = 'E';
        let major3rd = 'F#(Gb)';
        let perfect4th = 'G';
        let perfect5th = 'A';
        let major6th = 'B';
        let major7th = 'C#(Db)';

        let comma = ', ';

        let collected = ` ${root}${comma}${major2nd}${comma}${major3rd}${comma}${perfect4th}${comma}${perfect5th}${comma}${major6th}${comma}${major7th}${comma}`;

        console.log("----");
        console.log("Root is now " + root);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/d-ionian-mode-on-piano-keyboard.png";
    } else if (r == 3 && m == 2) {
        console.log('Aeolian');
        let root = 'D';
        let major2nd = 'E';
        let minor3rd = 'F';
        let perfect4th = 'G';
        let perfect5th = 'A';
        let minor6th = 'Bb';
        let minor7th = 'C';

        let comma = ', ';

        let collected = ` ${root}${comma}${major2nd}${comma}${minor3rd}${comma}${perfect4th}${comma}${perfect5th}${comma}${minor6th}${comma}${minor7th}${comma}`;

        console.log("----");
        console.log("Root is now " + root);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/d-aeolian-mode-on-piano-keyboard.png";
    } else if (r == 3 && m == 3) {
        console.log('Mixolydian');
        let root = 'D';
        let major2nd = 'E';
        let major3rd = 'F#(Gb)';
        let perfect4th = 'G';
        let perfect5th = 'A';
        let major6th = 'B';
        let minor7th = 'C';

        let comma = ', ';

        let collected = ` ${root}${comma}${major2nd}${comma}${major3rd}${comma}${perfect4th}${comma}${perfect5th}${comma}${major6th}${comma}${minor7th}${comma}`;

        console.log("----");
        console.log("Root is now " + root);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/d-mixolydian-mode-on-piano-keyboard.png";
    } else if (r == 3 && m == 4) {
        console.log('Lydian');
        let root = 'D';
        let major2nd = 'E';
        let major3rd = 'F#(Gb)';
        let augmented4th = 'G#(Ab)';
        let perfect5th = 'A';
        let major6th = 'B';
        let major7th = 'C#(Db)';

        let comma = ', ';

        let collected = ` ${root}${comma}${major2nd}${comma}${major3rd}${comma}${augmented4th}${comma}${perfect5th}${comma}${major6th}${comma}${major7th}${comma}`;

        console.log("----");
        console.log("Root is now " + root);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/d-lydian-mode-on-piano-keyboard.png";
    } else if (r == 3 && m == 5) {
        console.log('Locrian');
        let root = 'D';
        let minor2nd = 'Eb(D#)';
        let minor3rd = 'F';
        let perfect4th = 'G';
        let diminished5th = 'Ab(G#)';
        let minor6th = 'Bb';
        let minor7th = 'C';

        let comma = ', ';

        let collected = ` ${root}${comma}${minor2nd}${comma}${minor3rd}${comma}${perfect4th}${comma}${diminished5th}${comma}${minor6th}${comma}${minor7th}${comma}`;

        console.log("----");
        console.log("Root is now " + root);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/d-locrian-mode-on-piano-keyboard.png";
    } else if (r == 3 && m == 6) {
        console.log('Phrygian');
        let root = 'D';
        let minor2nd = 'Eb(D#)';
        let minor3rd = 'F';
        let perfect4th = 'G';
        let perfect5th = 'A';
        let minor6th = 'Bb';
        let minor7th = 'C';

        let comma = ', ';

        let collected = ` ${root}${comma}${minor2nd}${comma}${minor3rd}${comma}${perfect4th}${comma}${perfect5th}${comma}${minor6th}${comma}${minor7th}${comma}`;

        console.log("----");
        console.log("Root is now " + root);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/d-phrygian-mode-on-piano-keyboard.png";
    } else if (r == 3 && m == 7) {
        console.log('Dorian');
        let root = 'D';
        let major2nd = 'E';
        let minor3rd = 'F';
        let perfect4th = 'G';
        let perfect5th = 'A';
        let major6th = 'B';
        let minor7th = 'C';

        let comma = ', ';

        let collected = ` ${root}${comma}${major2nd}${comma}${minor3rd}${comma}${perfect4th}${comma}${perfect5th}${comma}${major6th}${comma}${minor7th}${comma}`;

        console.log("----");
        console.log("Root is now " + root);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/dorian-mode-on-piano-keyboard.png";
    } else if (r == 3 && m == 9) {
        console.log('Pentatonic');
        let root = 'D';
        let major2nd = 'E';
        let major3rd = 'F#(Gb)';
        // let perfect4th = '-';
        let perfect5th = 'A';
        let major6th = 'B';

        let comma = ', ';

        let collected = ` ${root}${comma}${major2nd}${comma}${major3rd}${comma}${perfect5th}${comma}${major6th}${comma}`;

        console.log("----");
        console.log("Root is now " + root);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/d-major-pentatonic-scale-on-piano-keyboard.png";
    } else if (r == 4 && m == 1) {
        console.log('Ionian');
        let root = 'Eb';
        let major2nd = 'F';
        let major3rd = 'G';
        let perfect4th = 'Ab(G#)';
        let perfect5th = 'Bb';
        let major6th = 'C';
        let major7th = 'D';

        let comma = ', ';

        let collected = ` ${root}${comma}${major2nd}${comma}${major3rd}${comma}${perfect4th}${comma}${perfect5th}${comma}${major6th}${comma}${major7th}${comma}`;

        console.log("----");
        console.log("Root is now " + root);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/e-flat-ionian-mode-on-piano-keyboard.png";
    } else if (r == 4 && m == 2) {
        console.log('Aeolian');
        let root = 'Eb';
        let major2nd = 'F';
        let minor3rd = 'Gb(A#)';
        let perfect4th = 'Ab(G#)';
        let perfect5th = 'Bb';
        let minor6th = 'Cb(B)';
        let minor7th = 'Db(C#)';

        let comma = ', ';

        let collected = ` ${root}${comma}${major2nd}${comma}${minor3rd}${comma}${perfect4th}${comma}${perfect5th}${comma}${minor6th}${comma}${minor7th}${comma}`;

        console.log("----");
        console.log("Root is now " + root);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/e-flat-aeolian-mode-on-piano-keyboard.png";
    } else if (r == 4 && m == 3) {
        console.log('Mixolydian');
        let root = 'Eb';
        let major2nd = 'F';
        let major3rd = 'G';
        let perfect4th = 'Ab(G#)';
        let perfect5th = 'Bb';
        let major6th = 'C';
        let minor7th = 'Db(C#)';

        let comma = ', ';

        let collected = ` ${root}${comma}${major2nd}${comma}${major3rd}${comma}${perfect4th}${comma}${perfect5th}${comma}${major6th}${comma}${minor7th}${comma}`;

        console.log("----");
        console.log("Root is now " + root);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/e-flat-mixolydian-mode-on-piano-keyboard.png";
    } else if (r == 4 && m == 4) {
        console.log('Lydian');
        let root = 'Eb';
        let major2nd = 'F';
        let major3rd = 'G';
        let augmented4th = 'A';
        let perfect5th = 'Bb';
        let major6th = 'C';
        let major7th = 'D';

        let comma = ', ';

        let collected = ` ${root}${comma}${major2nd}${comma}${major3rd}${comma}${augmented4th}${comma}${perfect5th}${comma}${major6th}${comma}${major7th}${comma}`;

        console.log("----");
        console.log("Root is now " + root);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/e-flat-lydian-mode-on-piano-keyboard.png";
    } else if (r == 4 && m == 5) {
        console.log('Locrian');
        let root = 'Eb';
        let minor2nd = 'F';
        let minor3rd = 'Gb(F#)';
        let perfect4th = 'Ab(G#)';
        let diminished5th = 'A';
        let minor6th = 'Cb(B)';
        let minor7th = 'Db(C#)';

        let comma = ', ';

        let collected = ` ${root}${comma}${minor2nd}${comma}${minor3rd}${comma}${perfect4th}${comma}${diminished5th}${comma}${minor6th}${comma}${minor7th}${comma}`;

        console.log("----");
        console.log("Root is now " + root);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/e-flat-locrian-mode-on-piano-keyboard.png";
    } else if (r == 4 && m == 6) {
        console.log('Phrygian');
        let root = 'Eb';
        let minor2nd = 'E';
        let minor3rd = 'Gb(F#)';
        let perfect4th = 'Ab(G#)';
        let perfect5th = 'Bb(A#)';
        let minor6th = 'B(Cb)';
        let minor7th = 'Db(C#)';

        let comma = ', ';

        let collected = ` ${root}${comma}${minor2nd}${comma}${minor3rd}${comma}${perfect4th}${comma}${perfect5th}${comma}${minor6th}${comma}${minor7th}${comma}`;

        console.log("----");
        console.log("Root is now " + root);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/e-flat-phrygian-mode-on-piano-keyboard.png";
    } else if (r == 4 && m == 7) {
        console.log('Dorian');
        let root = 'Eb';
        let major2nd = 'F';
        let minor3rd = 'Gb(F#)';
        let perfect4th = 'Ab(G#)';
        let perfect5th = 'Bb(A#)';
        let major6th = 'C';
        let minor7th = 'Db(C#)';

        let comma = ', ';

        let collected = ` ${root}${comma}${major2nd}${comma}${minor3rd}${comma}${perfect4th}${comma}${perfect5th}${comma}${major6th}${comma}${minor7th}${comma}`;

        console.log("----");
        console.log("Root is now " + root);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/d-sharp-dorian-mode-on-piano-keyboard.png";
    } else if (r == 4 && m == 9) {
        console.log('Pentatonic');
        let root = 'Eb';
        let major2nd = 'F';
        let major3rd = 'G';
        // let perfect4th = '-';
        let perfect5th = 'Bb';
        let major6th = 'C';

        let comma = ', ';

        let collected = ` ${root}${comma}${major2nd}${comma}${major3rd}${comma}${perfect5th}${comma}${major6th}${comma}`;

        console.log("----");
        console.log("Root is now " + root);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/e-flat-major-pentatonic-scale-on-piano-keyboard.png";

    } else if (r == 5 && m == 1) {
        console.log('Ionian');
        let root = 'E';
        let major2nd = 'F#(Gb)';
        let major3rd = 'G#(Ab)';
        let perfect4th = 'A';
        let perfect5th = 'B';
        let major6th = 'C#';
        let major7th = 'D#';

        let comma = ', ';

        let collected = ` ${root}${comma}${major2nd}${comma}${major3rd}${comma}${perfect4th}${comma}${perfect5th}${comma}${major6th}${comma}${major7th}${comma}`;

        console.log("----");
        console.log("Root is now " + root);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/e-ionian-mode-on-piano-keyboard.png";
    } else if (r == 5 && m == 2) {
        console.log('Aeolian');
        let root = 'E';
        let major2nd = 'F#(Gb)';
        let minor3rd = 'G';
        let perfect4th = 'A';
        let perfect5th = 'B';
        let minor6th = 'C';
        let minor7th = 'D';

        let comma = ', ';

        let collected = ` ${root}${comma}${major2nd}${comma}${minor3rd}${comma}${perfect4th}${comma}${perfect5th}${comma}${minor6th}${comma}${minor7th}${comma}`;

        console.log("----");
        console.log("Root is now " + root);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/e-aeolian-mode-on-piano-keyboard.png";
    } else if (r == 5 && m == 3) {
        console.log('Mixolydian');
        let root = 'E';
        let major2nd = 'F#(Gb)';
        let major3rd = 'G#(Ab)';
        let perfect4th = 'A';
        let perfect5th = 'B';
        let major6th = 'C#(Db)';
        let minor7th = 'D';

        let comma = ', ';

        let collected = ` ${root}${comma}${major2nd}${comma}${major3rd}${comma}${perfect4th}${comma}${perfect5th}${comma}${major6th}${comma}${minor7th}${comma}`;

        console.log("----");
        console.log("Root is now " + root);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/e-mixolydian-mode-on-piano-keyboard.png";
    } else if (r == 5 && m == 4) {
        console.log('Lydian');
        let root = 'E';
        let major2nd = 'F#(Gb)';
        let major3rd = 'G#(Ab)';
        let augmented4th = 'A#(Bb)';
        let perfect5th = 'B';
        let major6th = 'C#(Db)';
        let major7th = 'D#(Eb)';

        let comma = ', ';

        let collected = ` ${root}${comma}${major2nd}${comma}${major3rd}${comma}${augmented4th}${comma}${perfect5th}${comma}${major6th}${comma}${major7th}${comma}`;

        console.log("----");
        console.log("Root is now " + root);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/e-lydian-mode-on-piano-keyboard.png";
    } else if (r == 5 && m == 5) {
        console.log('Locrian');
        let root = 'E';
        let minor2nd = 'F';
        let minor3rd = 'G';
        let perfect4th = 'A';
        let diminished5th = 'Bb';
        let minor6th = 'C';
        let minor7th = 'D';

        let comma = ', ';

        let collected = ` ${root}${comma}${minor2nd}${comma}${minor3rd}${comma}${perfect4th}${comma}${diminished5th}${comma}${minor6th}${comma}${minor7th}${comma}`;

        console.log("----");
        console.log("Root is now " + root);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/e-locrian-mode-on-piano-keyboard.png";
    } else if (r == 5 && m == 6) {
        console.log('Phrygian');
        let root = 'E';
        let minor2nd = 'F';
        let minor3rd = 'G';
        let perfect4th = 'A';
        let perfect5th = 'B';
        let minor6th = 'C';
        let minor7th = 'D';

        let comma = ', ';

        let collected = ` ${root}${comma}${minor2nd}${comma}${minor3rd}${comma}${perfect4th}${comma}${perfect5th}${comma}${minor6th}${comma}${minor7th}${comma}`;

        console.log("----");
        console.log("Root is now " + root);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/phrygian-mode-on-piano-keyboard.png";
    } else if (r == 5 && m == 7) {
        console.log('Dorian');
        let root = 'E';
        let major2nd = 'F#(Gb)';
        let minor3rd = 'G';
        let perfect4th = 'A';
        let perfect5th = 'B';
        let major6th = 'C#(Db)';
        let minor7th = 'D';

        let comma = ', ';

        let collected = ` ${root}${comma}${major2nd}${comma}${minor3rd}${comma}${perfect4th}${comma}${perfect5th}${comma}${major6th}${comma}${minor7th}${comma}`;

        console.log("----");
        console.log("Root is now " + root);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/e-dorian-mode-on-piano-keyboard.png";
    } else if (r == 5 && m == 9) {
        console.log('Pentatonic');
        let root = 'E';
        let major2nd = 'F#(Gb)';
        let major3rd = 'G#(Ab)';
        // let perfect4th = '-';
        let perfect5th = 'B';
        let major6th = 'C#';

        let comma = ', ';

        let collected = ` ${root}${comma}${major2nd}${comma}${major3rd}${comma}${perfect5th}${comma}${major6th}${comma}`;

        console.log("----");
        console.log("Root is now " + root);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/e-major-pentatonic-scale-on-piano-keyboard.png";
    } else if (r == 6 && m == 1) {
        console.log('Ionian');
        let root = 'F';
        let major2nd = 'G';
        let major3rd = 'A';
        let perfect4th = 'Bb';
        let perfect5th = 'C';
        let major6th = 'D';
        let major7th = 'E';

        let comma = ', ';

        let collected = ` ${root}${comma}${major2nd}${comma}${major3rd}${comma}${perfect4th}${comma}${perfect5th}${comma}${major6th}${comma}${major7th}${comma}`;

        console.log("----");
        console.log("Root is now " + root);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/f-ionian-mode-on-piano-keyboard.png";
    } else if (r == 6 && m == 2) {
        console.log('Aeolian');
        let root = 'F';
        let major2nd = 'G';
        let minor3rd = 'Ab(G#)';
        let perfect4th = 'Bb';
        let perfect5th = 'C';
        let minor6th = 'Db(C#)';
        let minor7th = 'Eb(D#)';

        let comma = ', ';

        let collected = ` ${root}${comma}${major2nd}${comma}${minor3rd}${comma}${perfect4th}${comma}${perfect5th}${comma}${minor6th}${comma}${minor7th}${comma}`;

        console.log("----");
        console.log("Root is now " + root);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/f-aeolian-mode-on-piano-keyboard.png";

    } else if (r == 6 && m == 3) {
        console.log('Mixolydian');
        let root = 'F';
        let major2nd = 'G';
        let major3rd = 'A';
        let perfect4th = 'Bb';
        let perfect5th = 'C';
        let major6th = 'D';
        let minor7th = 'Eb(D#)';

        let comma = ', ';

        let collected = ` ${root}${comma}${major2nd}${comma}${major3rd}${comma}${perfect4th}${comma}${perfect5th}${comma}${major6th}${comma}${minor7th}${comma}`;

        console.log("----");
        console.log("Root is now " + root);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/f-mixolydian-mode-on-piano-keyboard.png";
    } else if (r == 6 && m == 4) {
        console.log('Lydian');
        let root = 'F';
        let major2nd = 'G';
        let major3rd = 'A';
        let augmented4th = 'B';
        let perfect5th = 'C';
        let major6th = 'D';
        let major7th = 'E';

        let comma = ', ';

        let collected = ` ${root}${comma}${major2nd}${comma}${major3rd}${comma}${augmented4th}${comma}${perfect5th}${comma}${major6th}${comma}${major7th}${comma}`;

        console.log("----");
        console.log("Root is now " + root);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/lydian-mode-on-piano-keyboard.png";
    } else if (r == 6 && m == 5) {
        console.log('Locrian');
        let root = 'F';
        let minor2nd = 'Gb(F#)';
        let minor3rd = 'Ab(G#)';
        let perfect4th = 'Bb(A#)';
        let diminished5th = 'Cb(B)';
        let minor6th = 'Db(C#)';
        let minor7th = 'Eb(D#)';

        let comma = ', ';

        let collected = ` ${root}${comma}${minor2nd}${comma}${minor3rd}${comma}${perfect4th}${comma}${diminished5th}${comma}${minor6th}${comma}${minor7th}${comma}`;

        console.log("----");
        console.log("Root is now " + root);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/f-locrian-mode-on-piano-keyboard.png";
    } else if (r == 6 && m == 6) {
        console.log('Phrygian');
        let root = 'F';
        let minor2nd = 'Gb';
        let minor3rd = 'Ab(G#)';
        let perfect4th = 'Bb(A#)';
        let perfect5th = 'C';
        let minor6th = 'Db(C#)';
        let minor7th = 'Eb(D#)';

        let comma = ', ';

        let collected = ` ${root}${comma}${minor2nd}${comma}${minor3rd}${comma}${perfect4th}${comma}${perfect5th}${comma}${minor6th}${comma}${minor7th}${comma}`;

        console.log("----");
        console.log("Root is now " + root);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/f-phrygian-mode-on-piano-keyboard.png";
    } else if (r == 6 && m == 7) {
        console.log('Dorian');
        let root = 'F';
        let major2nd = 'G';
        let minor3rd = 'Ab(G#)';
        let perfect4th = 'Bb(A#)';
        let perfect5th = 'C';
        let major6th = 'D';
        let minor7th = 'Eb(D#)';

        let comma = ', ';

        let collected = ` ${root}${comma}${major2nd}${comma}${minor3rd}${comma}${perfect4th}${comma}${perfect5th}${comma}${major6th}${comma}${minor7th}${comma}`;

        console.log("----");
        console.log("Root is now " + root);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/f-dorian-mode-on-piano-keyboard.png";
    } else if (r == 6 && m == 9) {
        console.log('Pentatonic');
        let root = 'F';
        let major2nd = 'G';
        let major3rd = 'A';
        // let perfect4th = '-';
        let perfect5th = 'C';
        let major6th = 'D';

        let comma = ', ';

        let collected = ` ${root}${comma}${major2nd}${comma}${major3rd}${comma}${perfect5th}${comma}${major6th}${comma}`;

        console.log("----");
        console.log("Root is now " + root);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/f-major-pentatonic-scale-on-piano-keyboard.png";
    } else if (r == 7 && m == 1) {
        console.log('Ionian');
        let root = 'F#';
        let major2nd = 'G#(Ab)';
        let major3rd = 'A#(Bb)';
        let perfect4th = 'B';
        let perfect5th = 'C#(Db)';
        let major6th = 'D#(Eb)';
        let major7th = 'F';

        let comma = ', ';

        let collected = ` ${root}${comma}${major2nd}${comma}${major3rd}${comma}${perfect4th}${comma}${perfect5th}${comma}${major6th}${comma}${major7th}${comma}`;

        console.log("----");
        console.log("Root is now " + root);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/f-sharp-ionian-mode-on-piano-keyboard.png";
    } else if (r == 7 && m == 2) {
        console.log('Aeolian');
        let root = 'F#';
        let major2nd = 'G#(Ab)';
        let minor3rd = 'A';
        let perfect4th = 'B';
        let perfect5th = 'C#(Db)';
        let minor6th = 'D';
        let minor7th = 'E';

        let comma = ', ';

        let collected = ` ${root}${comma}${major2nd}${comma}${minor3rd}${comma}${perfect4th}${comma}${perfect5th}${comma}${minor6th}${comma}${minor7th}${comma}`;

        console.log("----");
        console.log("Root is now " + root);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/f-sharp-aeolian-mode-on-piano-keyboard.png";
    } else if (r == 7 && m == 3) {
        console.log('Mixolydian');
        let root = 'F#';
        let major2nd = 'G#(Ab)';
        let major3rd = 'A#(Bb)';
        let perfect4th = 'B';
        let perfect5th = 'C#(Db)';
        let major6th = 'D#(Eb)';
        let minor7th = 'E';

        let comma = ', ';

        let collected = ` ${root}${comma}${major2nd}${comma}${major3rd}${comma}${perfect4th}${comma}${perfect5th}${comma}${major6th}${comma}${minor7th}${comma}`;

        console.log("----");
        console.log("Root is now " + root);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/f-sharp-mixolydian-mode-on-piano-keyboard.png";
    } else if (r == 7 && m == 4) {
        console.log('Lydian');
        let root = 'F#';
        let major2nd = 'G#(Ab)';
        let major3rd = 'A#(Bb)';
        let augmented4th = 'C';
        let perfect5th = 'C#(Db)';
        let major6th = 'D#(Eb)';
        let major7th = 'F';

        let comma = ', ';

        let collected = ` ${root}${comma}${major2nd}${comma}${major3rd}${comma}${augmented4th}${comma}${perfect5th}${comma}${major6th}${comma}${major7th}${comma}`;

        console.log("----");
        console.log("Root is now " + root);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/f-sharp-lydian-mode-on-piano-keyboard.png";
    } else if (r == 7 && m == 5) {
        console.log('Locrian');
        let root = 'F#';
        let minor2nd = 'G';
        let minor3rd = 'A';
        let perfect4th = 'B';
        let diminished5th = 'C';
        let minor6th = 'D';
        let minor7th = 'E';

        let comma = ', ';

        let collected = ` ${root}${comma}${minor2nd}${comma}${minor3rd}${comma}${perfect4th}${comma}${diminished5th}${comma}${minor6th}${comma}${minor7th}${comma}`;

        console.log("----");
        console.log("Root is now " + root);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/f-sharp-locrian-mode-on-piano-keyboard.png";
    } else if (r == 7 && m == 6) {
        console.log('Phrygian');
        let root = 'F#';
        let minor2nd = 'G';
        let minor3rd = 'A';
        let perfect4th = 'B';
        let perfect5th = 'C#(Db)';
        let minor6th = 'D';
        let minor7th = 'E';

        let comma = ', ';

        let collected = ` ${root}${comma}${minor2nd}${comma}${minor3rd}${comma}${perfect4th}${comma}${perfect5th}${comma}${minor6th}${comma}${minor7th}${comma}`;

        console.log("----");
        console.log("Root is now " + root);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://www.basicmusictheory.com/img/f-sharp-phrygian-mode-on-piano-keyboard.png";
    } else if (r == 7 && m == 7) {
        console.log('Dorian');
        let root = 'F#';
        let major2nd = 'G#(Ab)';
        let minor3rd = 'A';
        let perfect4th = 'B';
        let perfect5th = 'C#(Db)';
        let major6th = 'D#(Eb)';
        let minor7th = 'E';

        let comma = ', ';

        let collected = ` ${root}${comma}${major2nd}${comma}${minor3rd}${comma}${perfect4th}${comma}${perfect5th}${comma}${major6th}${comma}${minor7th}${comma}`;

        console.log("----");
        console.log("Root is now " + root);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/f-sharp-dorian-mode-on-piano-keyboard.png"
    } else if (r == 7 && m == 9) {
        console.log('Pentatonic');
        let root = 'F#';
        let major2nd = 'G#(Ab)';
        let major3rd = 'A#(Bb)';
        // let perfect4th = '-';
        let perfect5th = 'C#(Db)';
        let major6th = 'D#(Eb)';

        let comma = ', ';

        let collected = ` ${root}${comma}${major2nd}${comma}${major3rd}${comma}${perfect5th}${comma}${major6th}${comma}`;

        console.log("----");
        console.log("Root is now " + root);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/f-sharp-major-pentatonic-scale-on-piano-keyboard.png";
    } else if (r == 8 && m == 1) {
        console.log('Ionian');

        let root = 'G';
        let major2nd = 'A';
        let major3rd = 'B';
        let perfect4th = 'C';
        let perfect5th = 'D';
        let major6th = 'E';
        let major7th = 'F#(Gb)';

        let comma = ', ';

        let collected = ` ${root}${comma}${major2nd}${comma}${major3rd}${comma}${perfect4th}${comma}${perfect5th}${comma}${major6th}${comma}${major7th}${comma}`;

        console.log("----");
        console.log("Root is now " + root);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/g-ionian-mode-on-piano-keyboard.png";

    } else if (r == 8 && m == 2) {
        console.log('Aeolian');

        let root = 'G';
        let major2nd = 'A';
        let minor3rd = 'Bb';
        let perfect4th = 'C';
        let perfect5th = 'D';
        let minor6th = 'Eb(D#)';
        let minor7th = 'F';

        let comma = ', ';

        let collected = ` ${root}${comma}${major2nd}${comma}${minor3rd}${comma}${perfect4th}${comma}${perfect5th}${comma}${minor6th}${comma}${minor7th}${comma}`;

        console.log("----");
        console.log("Root is now " + root);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/g-aeolian-mode-on-piano-keyboard.png";

    } else if (r == 8 && m == 3) {
        console.log('Mixolydian');

        let root = 'G';
        let major2nd = 'A';
        let major3rd = 'B';
        let perfect4th = 'C';
        let perfect5th = 'D';
        let major6th = 'E';
        let minor7th = 'F';

        let comma = ', ';

        let collected = ` ${root}${comma}${major2nd}${comma}${major3rd}${comma}${perfect4th}${comma}${perfect5th}${comma}${major6th}${comma}${minor7th}${comma}`;

        console.log("----");
        console.log("Root is now " + root);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/mixolydian-mode-on-piano-keyboard.png";

    } else if (r == 8 && m == 4) {
        console.log('Lydian');

        let root = 'G';
        let major2nd = 'A';
        let major3rd = 'B';
        let augmented4th = 'C#(Db)';
        let perfect5th = 'D';
        let major6th = 'E';
        let major7th = 'F#(Gb)';

        let comma = ', ';

        let collected = ` ${root}${comma}${major2nd}${comma}${major3rd}${comma}${augmented4th}${comma}${perfect5th}${comma}${major6th}${comma}${major7th}${comma}`;

        console.log("----");
        console.log("Root is now " + root);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/g-lydian-mode-on-piano-keyboard.png";

    } else if (r == 8 && m == 5) {
        console.log('Locrian');

        let root = 'G';
        let minor2nd = 'Ab(F#)';
        let minor3rd = 'Bb(A#)';
        let perfect4th = 'C';
        let diminished5th = 'Db(C#)';
        let minor6th = 'Eb(D#)';
        let minor7th = 'F';

        let comma = ', ';

        let collected = ` ${root}${comma}${minor2nd}${comma}${minor3rd}${comma}${perfect4th}${comma}${diminished5th}${comma}${minor6th}${comma}${minor7th}${comma}`;

        console.log("----");
        console.log("Root is now " + root);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/g-locrian-mode-on-piano-keyboard.png";

    } else if (r == 8 && m == 6) {
        console.log('Phrygian');

        let root = 'G';
        let minor2nd = 'Ab(F#)';
        let minor3rd = 'Bb(A#)';
        let perfect4th = 'C';
        let perfect5th = 'D';
        let minor6th = 'Eb(D#)';
        let minor7th = 'F';

        let comma = ', ';

        let collected = ` ${root}${comma}${minor2nd}${comma}${minor3rd}${comma}${perfect4th}${comma}${perfect5th}${comma}${minor6th}${comma}${minor7th}${comma}`;

        console.log("----");
        console.log("Root is now " + root);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/g-phrygian-mode-on-piano-keyboard.png";

    } else if (r == 8 && m == 7) {
        console.log('Dorian');

        let root = 'G';
        let major2nd = 'A';
        let minor3rd = 'Bb(A#)';
        let perfect4th = 'C';
        let perfect5th = 'D';
        let major6th = 'E';
        let minor7th = 'F';

        let comma = ', ';

        let collected = ` ${root}${comma}${major2nd}${comma}${minor3rd}${comma}${perfect4th}${comma}${perfect5th}${comma}${major6th}${comma}${minor7th}${comma}`;

        console.log("----");
        console.log("Root is now " + root);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/g-dorian-mode-on-piano-keyboard.png";

    } else if (r == 8 && m == 9) {
        console.log('Pentatonic');

        let root = 'G';
        let major2nd = 'A';
        let major3rd = 'B';
        // let perfect4th = '-';
        let perfect5th = 'D';
        let major6th = 'E';

        let comma = ', ';

        let collected = ` ${root}${comma}${major2nd}${comma}${major3rd}${comma}${perfect5th}${comma}${major6th}${comma}`;

        console.log("----");
        console.log("Root is now " + root);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/g-major-pentatonic-scale-on-piano-keyboard.png";

    } else if (r == 9 && m == 1) {
        console.log('Ionian');
        let root = 'G#';
        let major2nd = 'A#(Gb)';
        let major3rd = 'C';
        let perfect4th = 'C#(Db)';
        let perfect5th = 'D#(Eb)';
        let major6th = 'F';
        let major7th = 'G';

        let comma = ', ';

        let collected = ` ${root}${comma}${major2nd}${comma}${major3rd}${comma}${perfect4th}${comma}${perfect5th}${comma}${major6th}${comma}${major7th}${comma}`;

        console.log("----");
        console.log("Root is now " + root);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/g-sharp-ionian-mode-on-piano-keyboard.png";
    } else if (r == 9 && m == 2) {
        console.log('Aeolian');
        let root = 'G#';
        let major2nd = 'A#(Gb)';
        let minor3rd = 'B';
        let perfect4th = 'C#(Db)';
        let perfect5th = 'D#(Eb)';
        let minor6th = 'E';
        let minor7th = 'F#(Gb)';

        let comma = ', ';

        let collected = ` ${root}${comma}${major2nd}${comma}${minor3rd}${comma}${perfect4th}${comma}${perfect5th}${comma}${minor6th}${comma}${minor7th}${comma}`;

        console.log("----");
        console.log("Root is now " + root);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/g-sharp-aeolian-mode-on-piano-keyboard.png";
    } else if (r == 9 && m == 3) {
        console.log('Mixolydian');
        let root = 'G#';
        let major2nd = 'A#(Gb)';
        let major3rd = 'C';
        let perfect4th = 'C#(Db)';
        let perfect5th = 'D#(Eb)';
        let major6th = 'F';
        let minor7th = 'F#(Gb)';

        let comma = ', ';

        let collected = ` ${root}${comma}${major2nd}${comma}${major3rd}${comma}${perfect4th}${comma}${perfect5th}${comma}${major6th}${comma}${minor7th}${comma}`;

        console.log("----");
        console.log("Root is now " + root);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/g-sharp-mixolydian-mode-on-piano-keyboard.png";
    } else if (r == 9 && m == 4) {
        console.log('Lydian');
        let root = 'G#';
        let major2nd = 'A#(Gb)';
        let major3rd = 'C';
        let augmented4th = 'D';
        let perfect5th = 'D#(Eb)';
        let major6th = 'F';
        let major7th = 'G';

        let comma = ', ';

        let collected = ` ${root}${comma}${major2nd}${comma}${major3rd}${comma}${augmented4th}${comma}${perfect5th}${comma}${major6th}${comma}${major7th}${comma}`;

        console.log("----");
        console.log("Root is now " + root);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/g-sharp-lydian-mode-on-piano-keyboard.png";
    } else if (r == 9 && m == 5) {
        console.log('Locrian');
        let root = 'G#';
        let minor2nd = 'A';
        let minor3rd = 'B';
        let perfect4th = 'C#(Db)';
        let diminished5th = 'D';
        let minor6th = 'E';
        let minor7th = 'F#(Gb)';

        let comma = ', ';

        let collected = ` ${root}${comma}${minor2nd}${comma}${minor3rd}${comma}${perfect4th}${comma}${diminished5th}${comma}${minor6th}${comma}${minor7th}${comma}`;

        console.log("----");
        console.log("Root is now " + root);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/g-sharp-locrian-mode-on-piano-keyboard.png";
    } else if (r == 9 && m == 6) {
        console.log('Phrygian');
        let root = 'G#';
        let minor2nd = 'A';
        let minor3rd = 'B';
        let perfect4th = 'C#(Db)';
        let perfect5th = 'D#(Eb)';
        let minor6th = 'E';
        let minor7th = 'F#(Gb)';

        let comma = ', ';

        let collected = ` ${root}${comma}${minor2nd}${comma}${minor3rd}${comma}${perfect4th}${comma}${perfect5th}${comma}${minor6th}${comma}${minor7th}${comma}`;

        console.log("----");
        console.log("Root is now " + root);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/g-sharp-phrygian-mode-on-piano-keyboard.png";
    } else if (r == 9 && m == 7) {
        console.log('Dorian');
        let root = 'G#';
        let major2nd = 'A#(Bb)';
        let minor3rd = 'B';
        let perfect4th = 'C#(Db)';
        let perfect5th = 'D#(Eb)';
        let major6th = 'F';
        let minor7th = 'F#(Gb)';

        let comma = ', ';

        let collected = ` ${root}${comma}${major2nd}${comma}${minor3rd}${comma}${perfect4th}${comma}${perfect5th}${comma}${major6th}${comma}${minor7th}${comma}`;

        console.log("----");
        console.log("Root is now " + root);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/g-sharp-dorian-mode-on-piano-keyboard.png";
    } else if (r == 9 && m == 9) {
        console.log('Pentatonic');
        let root = 'G#';
        let major2nd = 'Bb';
        let major3rd = 'C';
        // let perfect4th = '-';
        let perfect5th = 'D#(Eb)';
        let major6th = 'F';

        let comma = ', ';

        let collected = ` ${root}${comma}${major2nd}${comma}${major3rd}${comma}${perfect5th}${comma}${major6th}${comma}`;

        console.log("----");
        console.log("Root is now " + root);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/g-sharp-major-pentatonic-scale-on-piano-keyboard.png";
    } else if (r == 10 && m == 1) {
        console.log('Ionian');
        let root = 'A';
        let major2nd = 'B';
        let major3rd = 'C#';
        let perfect4th = 'D';
        let perfect5th = 'E';
        let major6th = 'F#(Gb)';
        let major7th = 'G#(Ab)';

        let comma = ', ';

        let collected = ` ${root}${comma}${major2nd}${comma}${major3rd}${comma}${perfect4th}${comma}${perfect5th}${comma}${major6th}${comma}${major7th}${comma}`;

        console.log("----");
        console.log("Root is now " + root);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/a-ionian-mode-on-piano-keyboard.png";

    } else if (r == 10 && m == 2) {
        console.log('Aeolian');
        let root = 'A';
        let major2nd = 'B';
        let minor3rd = 'C';
        let perfect4th = 'D';
        let perfect5th = 'E';
        let minor6th = 'F';
        let minor7th = 'G';

        let comma = ', ';

        let collected = ` ${root}${comma}${major2nd}${comma}${minor3rd}${comma}${perfect4th}${comma}${perfect5th}${comma}${minor6th}${comma}${minor7th}${comma}`;

        console.log("----");
        console.log("Root is now " + root);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/aeolian-mode-on-piano-keyboard.png";

    } else if (r == 10 && m == 3) {
        console.log('Mixolydian');
        let root = 'A';
        let major2nd = 'B';
        let major3rd = 'C#(Db)';
        let perfect4th = 'D';
        let perfect5th = 'E';
        let major6th = 'F#(Gb)';
        let minor7th = 'G';

        let comma = ', ';

        let collected = ` ${root}${comma}${major2nd}${comma}${major3rd}${comma}${perfect4th}${comma}${perfect5th}${comma}${major6th}${comma}${minor7th}${comma}`;

        console.log("----");
        console.log("Root is now " + root);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/a-mixolydian-mode-on-piano-keyboard.png";



    } else if (r == 10 && m == 4) {
        console.log('Lydian');
        let root = 'A';
        let major2nd = 'B';
        let major3rd = 'C#(Db)';
        let augmented4th = 'D#(Eb)';
        let perfect5th = 'E';
        let major6th = 'F#(Gb)';
        let major7th = 'G#(Ab)';

        let comma = ', ';

        let collected = ` ${root}${comma}${major2nd}${comma}${major3rd}${comma}${augmented4th}${comma}${perfect5th}${comma}${major6th}${comma}${major7th}${comma}`;

        console.log("----");
        console.log("Root is now " + root);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/a-lydian-mode-on-piano-keyboard.png";

    } else if (r == 10 && m == 5) {
        console.log('Locrian');
        let root = 'A';
        let minor2nd = 'Bb';
        let minor3rd = 'C';
        let perfect4th = 'D';
        let diminished5th = 'Eb(D#)';
        let minor6th = 'F';
        let minor7th = 'G';

        let comma = ', ';

        let collected = ` ${root}${comma}${minor2nd}${comma}${minor3rd}${comma}${perfect4th}${comma}${diminished5th}${comma}${minor6th}${comma}${minor7th}${comma}`;

        console.log("----");
        console.log("Root is now " + root);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/a-locrian-mode-on-piano-keyboard.png";


    } else if (r == 10 && m == 6) {
        console.log('Phrygian');
        let root = 'A';
        let minor2nd = 'Bb(A#)';
        let minor3rd = 'C';
        let perfect4th = 'D';
        let perfect5th = 'E';
        let minor6th = 'F';
        let minor7th = 'G';

        let comma = ', ';

        let collected = ` ${root}${comma}${minor2nd}${comma}${minor3rd}${comma}${perfect4th}${comma}${perfect5th}${comma}${minor6th}${comma}${minor7th}${comma}`;

        console.log("----");
        console.log("Root is now " + root);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/a-phrygian-mode-on-piano-keyboard.png";


    } else if (r == 10 && m == 7) {
        console.log('Dorian');
        let root = 'A';
        let major2nd = 'B';
        let minor3rd = 'C';
        let perfect4th = 'D';
        let perfect5th = 'E';
        let major6th = 'F#';
        let minor7th = 'G';

        let comma = ', ';

        let collected = ` ${root}${comma}${major2nd}${comma}${minor3rd}${comma}${perfect4th}${comma}${perfect5th}${comma}${major6th}${comma}${minor7th}${comma}`;

        console.log("----");
        console.log("Root is now " + root);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/a-dorian-mode-on-piano-keyboard.png";

    } else if (r == 10 && m == 9) {
        console.log('Pentatonic');
        let root = 'A';
        let major2nd = 'B';
        let major3rd = 'C#';
        // let perfect4th = '-';
        let perfect5th = 'E';
        let major6th = 'F#(Gb)';

        let comma = ', ';

        let collected = ` ${root}${comma}${major2nd}${comma}${major3rd}${comma}${perfect5th}${comma}${major6th}${comma}`;

        console.log("----");
        console.log("Root is now " + root);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/a-major-pentatonic-scale-on-piano-keyboard.png";




    } else if (r == 11 && m == 1) {
        console.log('Ionian');

        let root = 'Bb';
        let major2nd = 'C';
        let major3rd = 'D';
        let perfect4th = 'Eb(D#)';
        let perfect5th = 'F';
        let major6th = 'G';
        let major7th = 'A';

        let comma = ', ';

        let collected = ` ${root}${comma}${major2nd}${comma}${major3rd}${comma}${perfect4th}${comma}${perfect5th}${comma}${major6th}${comma}${major7th}${comma}`;

        console.log("----");
        console.log("Root is now " + root);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/b-flat-ionian-mode-on-piano-keyboard.png";

    } else if (r == 11 && m == 2) {
        console.log('Aeolian');

        let root = 'Bb';
        let major2nd = 'C';
        let minor3rd = 'Db(E#)';
        let perfect4th = 'Eb(D#)';
        let perfect5th = 'F';
        let minor6th = 'Gb(F#)';
        let minor7th = 'Ab(G#)';

        let comma = ', ';

        let collected = ` ${root}${comma}${major2nd}${comma}${minor3rd}${comma}${perfect4th}${comma}${perfect5th}${comma}${minor6th}${comma}${minor7th}${comma}`;

        console.log("----");
        console.log("Root is now " + root);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/b-flat-aeolian-mode-on-piano-keyboard.png";


    } else if (r == 11 && m == 3) {
        console.log('Mixolydian');

        let root = 'Bb';
        let major2nd = 'C';
        let major3rd = 'D';
        let perfect4th = 'Eb(D#)';
        let perfect5th = 'F';
        let major6th = 'G';
        let minor7th = 'Ab(G#)';

        let comma = ', ';

        let collected = ` ${root}${comma}${major2nd}${comma}${major3rd}${comma}${perfect4th}${comma}${perfect5th}${comma}${major6th}${comma}${minor7th}${comma}`;

        console.log("----");
        console.log("Root is now " + root);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/b-flat-mixolydian-mode-on-piano-keyboard.png";

    } else if (r == 11 && m == 4) {
        console.log('Lydian');

        let root = 'Bb';
        let major2nd = 'C';
        let major3rd = 'D';
        let augmented4th = 'E';
        let perfect5th = 'F';
        let major6th = 'G';
        let major7th = 'A';

        let comma = ', ';

        let collected = ` ${root}${comma}${major2nd}${comma}${major3rd}${comma}${augmented4th}${comma}${perfect5th}${comma}${major6th}${comma}${major7th}${comma}`;

        console.log("----");
        console.log("Root is now " + root);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/b-flat-lydian-mode-on-piano-keyboard.png";

    } else if (r == 11 && m == 5) {
        console.log('Locrian');

        let root = 'Bb';
        let minor2nd = 'Cb(B)';
        let minor3rd = 'Db(C#)';
        let perfect4th = 'Eb(D#)';
        let diminished5th = 'E';
        let minor6th = 'Gb(F#)';
        let minor7th = 'Ab(G#)';

        let comma = ', ';

        let collected = ` ${root}${comma}${minor2nd}${comma}${minor3rd}${comma}${perfect4th}${comma}${diminished5th}${comma}${minor6th}${comma}${minor7th}${comma}`;

        console.log("----");
        console.log("Root is now " + root);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/b-flat-locrian-mode-on-piano-keyboard.png";

    } else if (r == 11 && m == 6) {
        console.log('Phrygian');

        let root = 'Bb';
        let minor2nd = 'Cb(B)';
        let minor3rd = 'Db(C#)';
        let perfect4th = 'Eb(D#)';
        let perfect5th = 'F';
        let minor6th = 'Gb(A#)';
        let minor7th = 'Ab(G#)';

        let comma = ', ';

        let collected = ` ${root}${comma}${minor2nd}${comma}${minor3rd}${comma}${perfect4th}${comma}${perfect5th}${comma}${minor6th}${comma}${minor7th}${comma}`;

        console.log("----");
        console.log("Root is now " + root);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/b-flat-phrygian-mode-on-piano-keyboard.png";

    } else if (r == 11 && m == 7) {
        console.log('Dorian');

        let root = 'Bb';
        let major2nd = 'C';
        let minor3rd = 'Db(C#)';
        let perfect4th = 'Eb(D#)';
        let perfect5th = 'F';
        let major6th = 'G';
        let minor7th = 'Ab(G#)';

        let comma = ', ';

        let collected = ` ${root}${comma}${major2nd}${comma}${minor3rd}${comma}${perfect4th}${comma}${perfect5th}${comma}${major6th}${comma}${minor7th}${comma}`;

        console.log("----");
        console.log("Root is now " + root);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/b-flat-dorian-mode-on-piano-keyboard.png";

    } else if (r == 11 && m == 9) {
        console.log('Pentatonic');

        let root = 'Bb';
        let major2nd = 'C';
        let major3rd = 'D';
        // let perfect4th = '-';
        let perfect5th = 'F';
        let major6th = 'G';
        let comma = ', ';

        let collected = ` ${root}${comma}${major2nd}${comma}${major3rd}${comma}${perfect5th}${comma}${major6th}${comma}`;

        console.log("----");
        console.log("Root is now " + root);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/b-flat-major-pentatonic-scale-on-piano-keyboard.png";
    } else if (r == 12 && m == 1) {
        console.log('Ionian');

        let root = 'B';
        let major2nd = 'C#(Db)';
        let major3rd = 'D#(Eb)';
        let perfect4th = 'E';
        let perfect5th = 'F#(Gb)';
        let major6th = 'G#(Ab)';
        let major7th = 'A#(Bb)';

        let comma = ', ';

        let collected = ` ${root}${comma}${major2nd}${comma}${major3rd}${comma}${perfect4th}${comma}${perfect5th}${comma}${major6th}${comma}${major7th}${comma}`;

        console.log("----");
        console.log("Root is now " + root);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/b-ionian-mode-on-piano-keyboard.png";

    } else if (r == 12 && m == 2) {
        console.log('Aeolian');

        let root = 'B';
        let major2nd = 'C#(Db)';
        let minor3rd = 'D';
        let perfect4th = 'E';
        let perfect5th = 'F#(Gb)';
        let minor6th = 'G';
        let minor7th = 'A';

        let comma = ', ';

        let collected = ` ${root}${comma}${major2nd}${comma}${minor3rd}${comma}${perfect4th}${comma}${perfect5th}${comma}${minor6th}${comma}${minor7th}${comma}`;

        console.log("----");
        console.log("Root is now " + root);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/b-aeolian-mode-on-piano-keyboard.png";

    } else if (r == 12 && m == 3) {
        console.log('Mixolydian');

        let root = 'B';
        let major2nd = 'C#(Db)';
        let major3rd = 'D#(Eb)';
        let perfect4th = 'E';
        let perfect5th = 'F#(Gb)';
        let major6th = 'G#(Ab)';
        let minor7th = 'A';

        let comma = ', ';

        let collected = ` ${root}${comma}${major2nd}${comma}${major3rd}${comma}${perfect4th}${comma}${perfect5th}${comma}${major6th}${comma}${minor7th}${comma}`;

        console.log("----");
        console.log("Root is now " + root);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/b-mixolydian-mode-on-piano-keyboard.png";

    } else if (r == 12 && m == 4) {
        console.log('Lydian');

        let root = 'B';
        let major2nd = 'C#(Db)';
        let major3rd = 'D#(Eb)';
        let augmented4th = 'F';
        let perfect5th = 'F#(Gb)';
        let major6th = 'G#(Ab)';
        let major7th = 'A#(Bb)';

        let comma = ', ';

        let collected = ` ${root}${comma}${major2nd}${comma}${major3rd}${comma}${augmented4th}${comma}${perfect5th}${comma}${major6th}${comma}${major7th}${comma}`;

        console.log("----");
        console.log("Root is now " + root);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/b-lydian-mode-on-piano-keyboard.png";

    } else if (r == 12 && m == 5) {
        console.log('Locrian');

        let root = 'B';
        let minor2nd = 'C';
        let minor3rd = 'D';
        let perfect4th = 'E';
        let diminished5th = 'F';
        let minor6th = 'G';
        let minor7th = 'A';

        let comma = ', ';

        let collected = ` ${root}${comma}${minor2nd}${comma}${minor3rd}${comma}${perfect4th}${comma}${diminished5th}${comma}${minor6th}${comma}${minor7th}${comma}`;

        console.log("----");
        console.log("Root is now " + root);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/locrian-mode-on-piano-keyboard.png";

    } else if (r == 12 && m == 6) {
        console.log('B Phrygian')

        let root = 'B';
        let minor2nd = 'C';
        let minor3rd = 'D';
        let perfect4th = 'E';
        let perfect5th = 'F#(Gb)';
        let minor6th = 'G';
        let minor7th = 'A';

        let comma = ', ';

        let collected = ` ${root}${comma}${minor2nd}${comma}${minor3rd}${comma}${perfect4th}${comma}${perfect5th}${comma}${minor6th}${comma}${minor7th}${comma}`;

        console.log("----");
        console.log("Root is now " + root);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/b-phrygian-mode-on-piano-keyboard.png";
    } else if (r == 12 && m == 7) {
        console.log('B Dorian');

        let root = 'B';
        let minor2nd = 'C#';
        let minor3rd = 'D';
        let perfect4th = 'E';
        let diminished5th = 'F#';
        let minor6th = 'G#';
        let minor7th = 'A';

        let comma = ', ';

        let collected = ` ${root}${comma}${minor2nd}${comma}${minor3rd}${comma}${perfect4th}${comma}${diminished5th}${comma}${minor6th}${comma}${minor7th}${comma}`;

        console.log("----");
        console.log("Root is now " + root);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/b-dorian-mode-on-piano-keyboard.png";

    } else if (r == 12 && m == 9) {
        console.log('B Pentatonic');

        let root = 'B';
        let major2nd = 'C#(Db)';
        let major3rd = 'D#(Eb)';
        // let perfect4th = '-';
        let perfect5th = 'F#(Gb)';
        let major6th = 'G#(Ab)';
        let comma = ', ';

        let collected = ` ${root}${comma}${major2nd}${comma}${major3rd}${comma}${perfect5th}${comma}${major6th}${comma}`;

        console.log("----");
        console.log("Root is now " + root);
        console.log("----");

        console.log(collected);

        document.getElementById("yourScaleSir").innerHTML = JSON.stringify(collected);
        const image = document.querySelector("img");
        image.src = "https://m.basicmusictheory.com/img/b-major-pentatonic-scale-on-piano-keyboard.png";

    }
}