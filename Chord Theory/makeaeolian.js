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
            let major2nd = 'D', minor3rd = 'Eb', perfect4th = 'F', perfect5th = 'G', minor6th = 'Ab', minor7th = 'Bb', comma = ', ', collected = ` ${root}${comma}${major2nd}${comma}${minor3rd}${comma}${perfect4th}${comma}${perfect5th}${comma}${minor6th}${comma}${minor7th}${comma}`;

            console.log("----");
            console.log("Root is now " + root);
            console.log("----");

            console.log(collected);

            document.getElementById("yourModeSir").innerHTML = JSON.stringify(collected);
            const image = document.querySelector("img");
            image.src = "https://m.basicmusictheory.com/img/c-aeolian-mode-on-piano-keyboard.png"; 

        } else if (root == 'C#' || root == 'Db') {
            let major2nd = 'D#(Eb)', minor3rd = 'E', perfect4th = 'F#(Gb)', perfect5th = 'G#(Ab)', minor6th = 'A', minor7th = 'B', comma = ', ', collected = ` ${root}${comma}${major2nd}${comma}${minor3rd}${comma}${perfect4th}${comma}${perfect5th}${comma}${minor6th}${comma}${minor7th}${comma}`;

            console.log("----");
            console.log("Root is now " + root);
            console.log("----");

            console.log(collected);

            document.getElementById("yourModeSir").innerHTML = JSON.stringify(collected);
            const image = document.querySelector("img");
            image.src = "https://m.basicmusictheory.com/img/c-sharp-aeolian-mode-on-piano-keyboard.png"; 


        } else if (root == 'D') {
            let major2nd = 'E', minor3rd = 'F', perfect4th = 'G', perfect5th = 'A', minor6th = 'Bb', minor7th = 'C', comma = ', ', collected = ` ${root}${comma}${major2nd}${comma}${minor3rd}${comma}${perfect4th}${comma}${perfect5th}${comma}${minor6th}${comma}${minor7th}${comma}`;

            console.log("----");
            console.log("Root is now " + root);
            console.log("----");

            console.log(collected);

            document.getElementById("yourModeSir").innerHTML = JSON.stringify(collected);
            const image = document.querySelector("img");
            image.src = "https://m.basicmusictheory.com/img/d-aeolian-mode-on-piano-keyboard.png"; 


        } else if (root == 'Eb' || root == 'D#') {
            let major2nd = 'F', minor3rd = 'Gb(A#)', perfect4th = 'Ab(G#)', perfect5th = 'Bb', minor6th = 'Cb(B)', minor7th = 'Db(C#)', comma = ', ', collected = ` ${root}${comma}${major2nd}${comma}${minor3rd}${comma}${perfect4th}${comma}${perfect5th}${comma}${minor6th}${comma}${minor7th}${comma}`;

            console.log("----");
            console.log("Root is now " + root);
            console.log("----");

            console.log(collected);

            document.getElementById("yourModeSir").innerHTML = JSON.stringify(collected);
            const image = document.querySelector("img");
            image.src = "https://m.basicmusictheory.com/img/e-flat-aeolian-mode-on-piano-keyboard.png"; 


        } else if (root == 'E') {
            let major2nd = 'F#(Gb)', minor3rd = 'G', perfect4th = 'A', perfect5th = 'B', minor6th = 'C', minor7th = 'D', comma = ', ', collected = ` ${root}${comma}${major2nd}${comma}${minor3rd}${comma}${perfect4th}${comma}${perfect5th}${comma}${minor6th}${comma}${minor7th}${comma}`;

            console.log("----");
            console.log("Root is now " + root);
            console.log("----");

            console.log(collected);

            document.getElementById("yourModeSir").innerHTML = JSON.stringify(collected);
            const image = document.querySelector("img");
            image.src = "https://m.basicmusictheory.com/img/e-aeolian-mode-on-piano-keyboard.png"; 


        } else if (root == 'F') {
            let major2nd = 'G', minor3rd = 'Ab(G#)', perfect4th = 'Bb', perfect5th = 'C', minor6th = 'Db(C#)', minor7th = 'Eb(D#)', comma = ', ', collected = ` ${root}${comma}${major2nd}${comma}${minor3rd}${comma}${perfect4th}${comma}${perfect5th}${comma}${minor6th}${comma}${minor7th}${comma}`;

            console.log("----");
            console.log("Root is now " + root);
            console.log("----");

            console.log(collected);

            document.getElementById("yourModeSir").innerHTML = JSON.stringify(collected);
            const image = document.querySelector("img");
            image.src = "https://m.basicmusictheory.com/img/f-aeolian-mode-on-piano-keyboard.png"; 


        } else if (root == 'F#' || root == 'Gb') {
            let major2nd = 'G#(Ab)', minor3rd = 'A', perfect4th = 'B', perfect5th = 'C#(Db)', minor6th = 'D', minor7th = 'E', comma = ', ', collected = ` ${root}${comma}${major2nd}${comma}${minor3rd}${comma}${perfect4th}${comma}${perfect5th}${comma}${minor6th}${comma}${minor7th}${comma}`;

            console.log("----");
            console.log("Root is now " + root);
            console.log("----");

            console.log(collected);

            document.getElementById("yourModeSir").innerHTML = JSON.stringify(collected);
            const image = document.querySelector("img");
            image.src = "https://m.basicmusictheory.com/img/f-sharp-aeolian-mode-on-piano-keyboard.png"; 


        } else if (root == 'G') {
            let major2nd = 'A', minor3rd = 'Bb', perfect4th = 'C', perfect5th = 'D', minor6th = 'Eb(D#)', minor7th = 'F', comma = ', ', collected = ` ${root}${comma}${major2nd}${comma}${minor3rd}${comma}${perfect4th}${comma}${perfect5th}${comma}${minor6th}${comma}${minor7th}${comma}`;

            console.log("----");
            console.log("Root is now " + root);
            console.log("----");

            console.log(collected);

            document.getElementById("yourModeSir").innerHTML = JSON.stringify(collected);
            const image = document.querySelector("img");
            image.src = "https://m.basicmusictheory.com/img/g-aeolian-mode-on-piano-keyboard.png"; 


        } else if (root == 'G#' || root == 'Ab') {
            let major2nd = 'A#(Gb)', minor3rd = 'B', perfect4th = 'C#(Db)', perfect5th = 'D#(Eb)', minor6th = 'E', minor7th = 'F#(Gb)', comma = ', ', collected = ` ${root}${comma}${major2nd}${comma}${minor3rd}${comma}${perfect4th}${comma}${perfect5th}${comma}${minor6th}${comma}${minor7th}${comma}`;

            console.log("----");
            console.log("Root is now " + root);
            console.log("----");

            console.log(collected);

            document.getElementById("yourModeSir").innerHTML = JSON.stringify(collected);
            const image = document.querySelector("img");
            image.src = "https://m.basicmusictheory.com/img/g-sharp-aeolian-mode-on-piano-keyboard.png"; 


        } else if (root == 'A') {
            let major2nd = 'B', minor3rd = 'C', perfect4th = 'D', perfect5th = 'E', minor6th = 'F', minor7th = 'G', comma = ', ', collected = ` ${root}${comma}${major2nd}${comma}${minor3rd}${comma}${perfect4th}${comma}${perfect5th}${comma}${minor6th}${comma}${minor7th}${comma}`;

            console.log("----");
            console.log("Root is now " + root);
            console.log("----");

            console.log(collected);

            document.getElementById("yourModeSir").innerHTML = JSON.stringify(collected);
            const image = document.querySelector("img");
            image.src = "https://m.basicmusictheory.com/img/aeolian-mode-on-piano-keyboard.png"; 


        } else if (root == 'Bb' || root == 'A#') {
            let major2nd = 'C', minor3rd = 'Db(E#)', perfect4th = 'Eb(D#)', perfect5th = 'F', minor6th = 'Gb(F#)', minor7th = 'Ab(G#)', comma = ', ', collected = ` ${root}${comma}${major2nd}${comma}${minor3rd}${comma}${perfect4th}${comma}${perfect5th}${comma}${minor6th}${comma}${minor7th}${comma}`;

            console.log("----");
            console.log("Root is now " + root);
            console.log("----");

            console.log(collected);

            document.getElementById("yourModeSir").innerHTML = JSON.stringify(collected);
            const image = document.querySelector("img");
            image.src = "https://m.basicmusictheory.com/img/b-flat-aeolian-mode-on-piano-keyboard.png"; 


        } else if (root == 'B') {
            let major2nd = 'C#(Db)', minor3rd = 'D', perfect4th = 'E', perfect5th = 'F#(Gb)', minor6th = 'G', minor7th = 'A', comma = ', ', collected = ` ${root}${comma}${major2nd}${comma}${minor3rd}${comma}${perfect4th}${comma}${perfect5th}${comma}${minor6th}${comma}${minor7th}${comma}`;

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