document.getElementById("myButton").onclick = function () {
    root = document.getElementById("myRoot").value; //accepts root note input

    class Locrian {
        constructor(rootNote, minor2nd, minor3rd, perfect4th, diminished5th, minor6th, minor7th) {
            this.rootNote = rootNote;
            this.minor2nd = minor2nd;
            this.minor3rd = minor3rd;
            this.perfect4th = perfect4th;
            this.diminished5th = diminished5th;
            this.minor6th = minor6th;
            this.minor7th = minor7th;

        }
        rootNote() {
            console.log("Root Note:", this.rootNote);
        }
        minor2nd() {
            console.log("Minor 2nd:", this.minor2nd);
        }
        minor3rd() {
            console.log("Minor 3rd:", this.minor3rd);
        }
        perfect4th() {
            console.log("Perfect 4th:", this.perfect4th);
        }
        diminished5th() {
            console.log("Diminished 5th:", this.diminished5th);
        }
        minor6th() {
            console.log("Minor 6th:", this.minor2nd);
        }
        minor7th() {
            console.log("Minor 7th:", this.minor7th);
        }
        scaleData() {
            return this;
        }
    };

    function makeMode() {
        if (root == 'C') {
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

            document.getElementById("yourModeSir").innerHTML = JSON.stringify(collected);
            const image = document.querySelector("img");
            image.src = "https://m.basicmusictheory.com/img/c-locrian-mode-on-piano-keyboard.png"; 

        } else if (root == 'C#' || root == 'Db') {
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

            document.getElementById("yourModeSir").innerHTML = JSON.stringify(collected);
            const image = document.querySelector("img");
            image.src = "https://m.basicmusictheory.com/img/c-sharp-locrian-mode-on-piano-keyboard.png"; 


        } else if (root == 'D') {
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

            document.getElementById("yourModeSir").innerHTML = JSON.stringify(collected);
            const image = document.querySelector("img");
            image.src = "https://m.basicmusictheory.com/img/d-locrian-mode-on-piano-keyboard.png"; 


        } else if (root == 'Eb' || root == 'D#') {
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

            document.getElementById("yourModeSir").innerHTML = JSON.stringify(collected);
            const image = document.querySelector("img");
            image.src = "https://m.basicmusictheory.com/img/e-flat-locrian-mode-on-piano-keyboard.png"; 


        } else if (root == 'E') {
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

            document.getElementById("yourModeSir").innerHTML = JSON.stringify(collected);
            const image = document.querySelector("img");
            image.src = "https://m.basicmusictheory.com/img/e-locrian-mode-on-piano-keyboard.png"; 


        } else if (root == 'F') {
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

            document.getElementById("yourModeSir").innerHTML = JSON.stringify(collected);
            const image = document.querySelector("img");
            image.src = "https://m.basicmusictheory.com/img/f-locrian-mode-on-piano-keyboard.png"; 


        } else if (root == 'F#' || root == 'Gb') {
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

            document.getElementById("yourModeSir").innerHTML = JSON.stringify(collected);
            const image = document.querySelector("img");
            image.src = "https://m.basicmusictheory.com/img/f-sharp-locrian-mode-on-piano-keyboard.png"; 


        } else if (root == 'G') {
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

            document.getElementById("yourModeSir").innerHTML = JSON.stringify(collected);
            const image = document.querySelector("img");
            image.src = "https://m.basicmusictheory.com/img/g-locrian-mode-on-piano-keyboard.png"; 


        } else if (root == 'G#' || root == 'Ab') {
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

            document.getElementById("yourModeSir").innerHTML = JSON.stringify(collected);
            const image = document.querySelector("img");
            image.src = "https://m.basicmusictheory.com/img/g-sharp-locrian-mode-on-piano-keyboard.png"; 


        } else if (root == 'A') {
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

            document.getElementById("yourModeSir").innerHTML = JSON.stringify(collected);
            const image = document.querySelector("img");
            image.src = "https://m.basicmusictheory.com/img/a-locrian-mode-on-piano-keyboard.png"; 


        } else if (root == 'Bb' || root == 'A#') {
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

            document.getElementById("yourModeSir").innerHTML = JSON.stringify(collected);
            const image = document.querySelector("img");
            image.src = "https://m.basicmusictheory.com/img/b-flat-locrian-mode-on-piano-keyboard.png"; 


        } else if (root == 'B') {
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

            document.getElementById("yourModeSir").innerHTML = JSON.stringify(collected);
            const image = document.querySelector("img");
            image.src = "https://m.basicmusictheory.com/img/locrian-mode-on-piano-keyboard.png"; 


        } else {
            console.log("invalid root")
            document.getElementById("yourModeSir").innerHTML = "...MODE DOES NOT EXIST!";
        }
    }
    makeMode()
    if (root == 'A' || root == 'Ab' || root == 'B' || root == 'Bb' || root == 'C' || root == 'C#' || root == 'D' || root == 'D#' || root == 'E' || root == 'Eb' || root == 'F' || root == 'F#' || root == 'G' || root == 'G#') {
        document.getElementById("myLabel").innerHTML = root + " Locrian is below:";
    } else {
        document.getElementById("myLabel").innerHTML = " try again, my man...";
    }
}