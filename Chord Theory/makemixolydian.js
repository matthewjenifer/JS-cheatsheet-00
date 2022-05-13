document.getElementById("myButton").onclick = function () {
    root = document.getElementById("myRoot").value; //accepts root note input

    class Mixolydian {
        constructor(rootNote, major2nd, major3rd, perfect4th, perfect5th, major6th, minor7th) {
            this.rootNote = rootNote;
            this.major2nd = major2nd;
            this.major3rd = major3rd;
            this.perfect4th = perfect4th;
            this.perfect5th = perfect5th;
            this.major6th = major6th;
            this.minor7th = minor7th;

        }
        rootNote() {
            console.log("Root Note:", this.rootNote);
        }
        major2nd() {
            console.log("Major 2nd:", this.major2nd);
        }
        major3rd() {
            console.log("Major 3rd:", this.major3rd);
        }
        perfect4th() {
            console.log("Perfect 4th:", this.perfect4th);
        }
        perfect5th() {
            console.log("Perfect 5th:", this.perfect5th);
        }
        major6th() {
            console.log("Major 6th:", this.major2nd);
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

            document.getElementById("yourModeSir").innerHTML = JSON.stringify(collected);
            const image = document.querySelector("img");
            image.src = "https://m.basicmusictheory.com/img/c-mixolydian-mode-on-piano-keyboard.png"; 

        } else if (root == 'C#' || root == 'Db') {
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

            document.getElementById("yourModeSir").innerHTML = JSON.stringify(collected);
            const image = document.querySelector("img");
            image.src = "https://m.basicmusictheory.com/img/c-sharp-mixolydian-mode-on-piano-keyboard.png"; 


        } else if (root == 'D') {
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

            document.getElementById("yourModeSir").innerHTML = JSON.stringify(collected);
            const image = document.querySelector("img");
            image.src = "https://m.basicmusictheory.com/img/d-mixolydian-mode-on-piano-keyboard.png"; 


        } else if (root == 'Eb' || root == 'D#') {
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

            document.getElementById("yourModeSir").innerHTML = JSON.stringify(collected);
            const image = document.querySelector("img");
            image.src = "https://m.basicmusictheory.com/img/e-flat-mixolydian-mode-on-piano-keyboard.png"; 


        } else if (root == 'E') {
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

            document.getElementById("yourModeSir").innerHTML = JSON.stringify(collected);
            const image = document.querySelector("img");
            image.src = "https://m.basicmusictheory.com/img/e-mixolydian-mode-on-piano-keyboard.png"; 


        } else if (root == 'F') {
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

            document.getElementById("yourModeSir").innerHTML = JSON.stringify(collected);
            const image = document.querySelector("img");
            image.src = "https://m.basicmusictheory.com/img/f-mixolydian-mode-on-piano-keyboard.png"; 


        } else if (root == 'F#' || root == 'Gb') {
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

            document.getElementById("yourModeSir").innerHTML = JSON.stringify(collected);
            const image = document.querySelector("img");
            image.src = "https://m.basicmusictheory.com/img/f-sharp-mixolydian-mode-on-piano-keyboard.png"; 


        } else if (root == 'G') {
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

            document.getElementById("yourModeSir").innerHTML = JSON.stringify(collected);
            const image = document.querySelector("img");
            image.src = "https://m.basicmusictheory.com/img/mixolydian-mode-on-piano-keyboard.png"; 


        } else if (root == 'G#' || root == 'Ab') {
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

            document.getElementById("yourModeSir").innerHTML = JSON.stringify(collected);
            const image = document.querySelector("img");
            image.src = "https://m.basicmusictheory.com/img/g-sharp-mixolydian-mode-on-piano-keyboard.png"; 


        } else if (root == 'A') {
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

            document.getElementById("yourModeSir").innerHTML = JSON.stringify(collected);
            const image = document.querySelector("img");
            image.src = "https://m.basicmusictheory.com/img/a-mixolydian-mode-on-piano-keyboard.png"; 


        } else if (root == 'Bb' || root == 'A#') {
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

            document.getElementById("yourModeSir").innerHTML = JSON.stringify(collected);
            const image = document.querySelector("img");
            image.src = "https://m.basicmusictheory.com/img/b-flat-mixolydian-mode-on-piano-keyboard.png"; 


        } else if (root == 'B') {
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

            document.getElementById("yourModeSir").innerHTML = JSON.stringify(collected);
            const image = document.querySelector("img");
            image.src = "https://m.basicmusictheory.com/img/b-mixolydian-mode-on-piano-keyboard.png"; 


        } else {
            console.log("invalid root")
            document.getElementById("yourModeSir").innerHTML = "...MODE DOES NOT EXIST!";
        }
    }
    makeMode()
    if (root == 'A' || root == 'Ab' || root == 'B' || root == 'Bb' || root == 'C' || root == 'C#' || root == 'D' || root == 'D#' || root == 'E' || root == 'Eb' || root == 'F' || root == 'F#' || root == 'G' || root == 'G#') {
        document.getElementById("myLabel").innerHTML = root + " Mixolydian is below:";
    } else {
        document.getElementById("myLabel").innerHTML = " try again, my man...";
    }
}