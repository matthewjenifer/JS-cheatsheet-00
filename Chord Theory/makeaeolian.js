document.getElementById("myButton").onclick = function () {
    root = document.getElementById("myRoot").value; //accepts root note input

    class Aeolian {
        constructor(rootNote, major2nd, minor3rd, perfect4th, perfect5th, minor6th, minor7th) {
            this.rootNote = rootNote;
            this.major2nd = major2nd;
            this.minor3rd = minor3rd;
            this.perfect4th = perfect4th;
            this.perfect5th = perfect5th;
            this.minor6th = minor6th;
            this.minor7th = minor7th;

        }
        rootNote() {
            console.log("Root Note:", this.rootNote);
        }
        major2nd() {
            console.log("Major 2nd:", this.major2nd);
        }
        minor3rd() {
            console.log("Minor 3rd:", this.minor3rd);
        }
        perfect4th() {
            console.log("Perfect 4th:", this.perfect4th);
        }
        perfect5th() {
            console.log("Perfect 5th:", this.perfect5th);
        }
        minor6th() {
            console.log("Minor 6th:", this.minor6th);
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

            document.getElementById("yourModeSir").innerHTML = JSON.stringify(collected);
            const image = document.querySelector("img");
            image.src = "https://m.basicmusictheory.com/img/c-aeolian-mode-on-piano-keyboard.png"; 

        } else if (root == 'C#' || root == 'Db') {
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

            document.getElementById("yourModeSir").innerHTML = JSON.stringify(collected);
            const image = document.querySelector("img");
            image.src = "https://m.basicmusictheory.com/img/c-sharp-aeolian-mode-on-piano-keyboard.png"; 


        } else if (root == 'D') {
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

            document.getElementById("yourModeSir").innerHTML = JSON.stringify(collected);
            const image = document.querySelector("img");
            image.src = "https://m.basicmusictheory.com/img/d-aeolian-mode-on-piano-keyboard.png"; 


        } else if (root == 'Eb' || root == 'D#') {
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

            document.getElementById("yourModeSir").innerHTML = JSON.stringify(collected);
            const image = document.querySelector("img");
            image.src = "https://m.basicmusictheory.com/img/e-flat-aeolian-mode-on-piano-keyboard.png"; 


        } else if (root == 'E') {
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

            document.getElementById("yourModeSir").innerHTML = JSON.stringify(collected);
            const image = document.querySelector("img");
            image.src = "https://m.basicmusictheory.com/img/e-aeolian-mode-on-piano-keyboard.png"; 


        } else if (root == 'F') {
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

            document.getElementById("yourModeSir").innerHTML = JSON.stringify(collected);
            const image = document.querySelector("img");
            image.src = "https://m.basicmusictheory.com/img/f-aeolian-mode-on-piano-keyboard.png"; 


        } else if (root == 'F#' || root == 'Gb') {
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

            document.getElementById("yourModeSir").innerHTML = JSON.stringify(collected);
            const image = document.querySelector("img");
            image.src = "https://m.basicmusictheory.com/img/f-sharp-aeolian-mode-on-piano-keyboard.png"; 


        } else if (root == 'G') {
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

            document.getElementById("yourModeSir").innerHTML = JSON.stringify(collected);
            const image = document.querySelector("img");
            image.src = "https://m.basicmusictheory.com/img/g-aeolian-mode-on-piano-keyboard.png"; 


        } else if (root == 'G#' || root == 'Ab') {
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

            document.getElementById("yourModeSir").innerHTML = JSON.stringify(collected);
            const image = document.querySelector("img");
            image.src = "https://m.basicmusictheory.com/img/g-sharp-aeolian-mode-on-piano-keyboard.png"; 


        } else if (root == 'A') {
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

            document.getElementById("yourModeSir").innerHTML = JSON.stringify(collected);
            const image = document.querySelector("img");
            image.src = "https://m.basicmusictheory.com/img/aeolian-mode-on-piano-keyboard.png"; 


        } else if (root == 'Bb' || root == 'A#') {
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

            document.getElementById("yourModeSir").innerHTML = JSON.stringify(collected);
            const image = document.querySelector("img");
            image.src = "https://m.basicmusictheory.com/img/b-flat-aeolian-mode-on-piano-keyboard.png"; 


        } else if (root == 'B') {
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

            document.getElementById("yourModeSir").innerHTML = JSON.stringify(collected);
            const image = document.querySelector("img");
            image.src = "https://m.basicmusictheory.com/img/b-aeolian-mode-on-piano-keyboard.png"; 


        } else {
            console.log("invalid root")
            document.getElementById("yourModeSir").innerHTML = "...MODE DOES NOT EXIST!";
        }
    }
    makeMode()
    if (root == 'A' || root == 'Ab' || root == 'B' || root == 'Bb' || root == 'C' || root == 'C#' || root == 'D' || root == 'D#' || root == 'E' || root == 'Eb' || root == 'F' || root == 'F#' || root == 'G' || root == 'G#') {
        document.getElementById("myLabel").innerHTML = root + " Aeolian is below:";
    } else {
        document.getElementById("myLabel").innerHTML = " try again, my man...";
    }
}