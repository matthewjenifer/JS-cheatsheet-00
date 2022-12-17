document.getElementById("myButton").onclick = function () {
    tonic = document.getElementById("myRoot").value; //accepts root note input

    class Aeolian { // https://youtu.be/7Mgsn4p31kA - Songs that use the Aeolian mode (David Bennett Piano)
        constructor(tonic, supertonic, mediant, subdominant, dominant, submediant, leadingTone) {
            this.tonic = tonic;
            this.supertonic = supertonic;
            this.mediant = mediant;
            this.subdominant = subdominant;
            this.dominant = dominant;
            this.submediant = submediant;
            this.leadingTone = leadingTone;
        }
        tonic() {
            console.log("Tonic:", this.tonic); // Root Note
        }
        supertonic() {
            console.log("Supertonic:", this.supertonic); // Major 2nd
        }
        mediant() {
            console.log("Mediant:", this.mediant); // Minor 3rd
        }
        subdominant() {
            console.log("Subdominant:", this.subdominant); // Perfect 4th
        }
        dominant() {
            console.log("Dominant:", this.dominant); // Perfect 5th
        }
        submediant() {
            console.log("Submediant:", this.submediant); // Minor 6th
        }
        leadingTone() {
            console.log("Leading Tone:", this.leadingTone); // Minor 7th
        }
        scaleData() {
            return this;
        }
    }

    function makeMode() { // This function checks if the tonic is equal to 'C', and if it is, it declares six variables: supertonic, mediant, subdominant, dominant, submediant, and leadingTone.
        if (tonic == 'C') {
            let supertonic = 'D', mediant = 'Eb', subdominant = 'F', dominant = 'G', submediant = 'Ab', leadingTone = 'Bb'; //The function then concatenates these variables into a string, separated by a comma, and logs the string to the console. The function also logs a message indicating that the tonic is now 'C'.
            console.log("----");
            console.log("Tonic is now " + tonic);
            console.log("----");

            document.getElementById("yourModeSir").innerHTML = JSON.stringify(`${tonic}, ${supertonic}, ${mediant}, ${subdominant}, ${dominant}, ${submediant}, ${leadingTone},`);
            const image = document.querySelector("img");
            image.src = "https://m.basicmusictheory.com/img/c-aeolian-mode-on-piano-keyboard.png"; 

        } else if (tonic == 'C#' || tonic == 'Db') {
            let supertonic = 'D#' || 'Eb', mediant = 'E', subdominant = 'F#' || 'Gb', dominant = 'G#' || 'Ab', submediant = 'A', leadingTone = 'B';

            console.log("----");
            console.log("Tonic is now " + tonic);
            console.log("----");

            document.getElementById("yourModeSir").innerHTML = JSON.stringify(`${tonic}, ${supertonic}, ${mediant}, ${subdominant}, ${dominant}, ${submediant}, ${leadingTone},`);;
            const image = document.querySelector("img");
            image.src = "https://m.basicmusictheory.com/img/c-sharp-aeolian-mode-on-piano-keyboard.png"; 

        } else if (tonic == 'D') {
            let supertonic = 'E', mediant = 'F', subdominant = 'G', dominant = 'A', submediant = 'Bb', leadingTone = 'C';

            console.log("----");
            console.log("Tonic is now " + tonic);
            console.log("----");

            document.getElementById("yourModeSir").innerHTML = JSON.stringify(`${tonic}, ${supertonic}, ${mediant}, ${subdominant}, ${dominant}, ${submediant}, ${leadingTone},`);;
            const image = document.querySelector("img");
            image.src = "https://m.basicmusictheory.com/img/d-aeolian-mode-on-piano-keyboard.png"; 
        }  else if (tonic == 'Eb' || tonic == 'D#') {
            let supertonic = 'F', mediant = 'Gb' || 'A#', subdominant = 'Ab' || 'G#', dominant = 'Bb', submediant = 'B', leadingTone = 'Db' || 'C#';

            console.log("----");
            console.log("Tonic is now " + tonic);
            console.log("----");

            document.getElementById("yourModeSir").innerHTML = JSON.stringify(`${tonic}, ${supertonic}, ${mediant}, ${subdominant}, ${dominant}, ${submediant}, ${leadingTone},`);;
            const image = document.querySelector("img");
            image.src = "https://m.basicmusictheory.com/img/e-flat-aeolian-mode-on-piano-keyboard.png";
        } else if (tonic == 'E' || tonic == 'Fb') {
            let supertonic = 'F#' || 'Gb', mediant = 'G', subdominant = 'A', dominant = 'B', submediant = 'C', leadingTone = 'D';

            console.log("----");
            console.log("Tonic is now " + tonic);
            console.log("----");

            document.getElementById("yourModeSir").innerHTML = JSON.stringify(`${tonic}, ${supertonic}, ${mediant}, ${subdominant}, ${dominant}, ${submediant}, ${leadingTone},`);;
            const image = document.querySelector("img");
            image.src = "https://m.basicmusictheory.com/img/e-aeolian-mode-on-piano-keyboard.png"; 
        } else if (tonic == 'F') {
            let supertonic = 'G', mediant = 'Ab' || 'G#', subdominant = 'Bb' || 'A#', dominant = 'C', submediant = 'Db' || 'C#', leadingTone = 'Eb' || 'D#';
        
            console.log("----");
            console.log("Tonic is now " + tonic);
            console.log("----");
        
            document.getElementById("yourModeSir").innerHTML = JSON.stringify(`${tonic}, ${supertonic}, ${mediant}, ${subdominant}, ${dominant}, ${submediant}, ${leadingTone},`);;
            const image = document.querySelector("img");
            image.src = "https://m.basicmusictheory.com/img/f-aeolian-mode-on-piano-keyboard.png"; 
        } else if (tonic == 'F#' || tonic == 'Gb') {
            let supertonic = 'G#' || 'Ab', mediant = 'A', subdominant = 'B', dominant = 'C#' || 'D', submediant = 'D', leadingTone = 'E';
        
            console.log("----");
            console.log("Tonic is now " + tonic);
            console.log("----");
        
            document.getElementById("yourModeSir").innerHTML = JSON.stringify(`${tonic}, ${supertonic}, ${mediant}, ${subdominant}, ${dominant}, ${submediant}, ${leadingTone},`);;
            const image = document.querySelector("img");
            image.src = "https://m.basicmusictheory.com/img/f-sharp-aeolian-mode-on-piano-keyboard.png"; 
        } else if (tonic == 'G') {
            let supertonic = 'A', mediant = 'Bb' || 'A#', subdominant = 'C', dominant = 'D', submediant = 'Eb' || 'D#', leadingTone = 'F';
        
            console.log("----");
            console.log("Tonic is now " + tonic);
            console.log("----");
        
            document.getElementById("yourModeSir").innerHTML = JSON.stringify(`${tonic}, ${supertonic}, ${mediant}, ${subdominant}, ${dominant}, ${submediant}, ${leadingTone},`);;
            const image = document.querySelector("img");
            image.src = "https://m.basicmusictheory.com/img/g-aeolian-mode-on-piano-keyboard.png"; 
        } else if (tonic == 'G#' || tonic == 'Ab') {
            let supertonic = 'A#' || 'Gb', mediant = 'B', subdominant = 'C#' || 'Db', dominant = 'D#' || 'Eb', submediant = 'E', leadingTone = 'F#';
        
            console.log("----");
            console.log("Tonic is now " || tonic);
            console.log("----");
        
            document.getElementById("yourModeSir").innerHTML = JSON.stringify(`${tonic}, ${supertonic}, ${mediant}, ${subdominant}, ${dominant}, ${submediant}, ${leadingTone},`);;
            const image = document.querySelector("img");
            image.src = "https://m.basicmusictheory.com/img/g-sharp-aeolian-mode-on-piano-keyboard.png"; 
        } else if (tonic == 'A') {
            let supertonic = 'B', mediant = 'C', subdominant = 'D', dominant = 'E', submediant = 'F', leadingTone = 'G';
        
            console.log("----");
            console.log("Tonic is now " + tonic);
            console.log("----");
        
            document.getElementById("yourModeSir").innerHTML = JSON.stringify(`${tonic}, ${supertonic}, ${mediant}, ${subdominant}, ${dominant}, ${submediant}, ${leadingTone},`);;
            const image = document.querySelector("img");
            image.src = "https://m.basicmusictheory.com/img/aeolian-mode-on-piano-keyboard.png"; 
        } else if (tonic == 'Bb' || tonic == 'A#') {
            let supertonic = 'C', mediant = 'Db' || 'E#', subdominant = 'Eb' || 'Db', dominant = 'F', submediant = 'Gb' || 'F#', leadingTone = 'Ab' || 'G#';

            console.log("----");
            console.log("Tonic is now " + tonic);
            console.log("----");

            document.getElementById("yourModeSir").innerHTML = JSON.stringify(`${tonic}, ${supertonic}, ${mediant}, ${subdominant}, ${dominant}, ${submediant}, ${leadingTone},`);;
            const image = document.querySelector("img");
            image.src = "https://m.basicmusictheory.com/img/b-flat-aeolian-mode-on-piano-keyboard.png";
        } else if(tonic == 'B') {
            let supertonic = 'C#' || 'Db', mediant = 'D', subdominant = 'E', dominant = 'F#' || 'Gb', submediant = 'G', leadingTone = 'A';

            console.log("----");
        console.log("Tonic is now " + tonic);
        console.log("----");

        document.getElementById("yourModeSir").innerHTML = JSON.stringify(`${tonic}, ${supertonic}, ${mediant}, ${subdominant}, ${dominant}, ${submediant}, ${leadingTone},`);;
            const image = document.querySelector("img");
            image.src = "https://m.basicmusictheory.com/img/b-aeolian-mode-on-piano-keyboard.png"; 
    } else {
        console.log("invalid root")
        document.getElementById("yourModeSir").innerHTML = "...MODE DOES NOT EXIST!";
    }
}

makeMode()
    if (tonic =='A' || tonic =='Ab' || tonic =='A#' || tonic =='B' || tonic =='Bb' || tonic =='B#' || tonic =='C' || tonic =='C#' || tonic == 'Cb' || tonic =='D' || tonic =='D#' || tonic == 'Db' || tonic =='E' || tonic =='E#' || tonic == 'Fb' || tonic =='Eb' || tonic =='F' || tonic =='F#' || tonic =='G' || tonic =='G#' || tonic =='Gb') {
        document.getElementById("myLabel").innerHTML = tonic + " Aeolian is below:";
    } else {
        document.getElementById("myLabel").innerHTML = " ERROR: try again, my man...";
    }









}