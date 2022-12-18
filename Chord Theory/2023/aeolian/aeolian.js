document.getElementById("myButton").onclick = function () {
    tonic = document.getElementById("myRoot").value; // accepts root note input

        // const selectElement = document.getElementById("myRoot"); // Get the selected value from the select element in dropdown list

        // const tonic = selectElement.value;

    class Aeolian { // https://youtu.be/7Mgsn4p31kA - Songs that use the Aeolian mode (David Bennett Piano)

        constructor(tonic, supertonic, mediant, subdominant, dominant, submediant, leadingTone) { // https://www.musictheory.net/lessons/23
            this.tonic = tonic;
            this.supertonic = supertonic;
            this.mediant = mediant;
            this.subdominant = subdominant;
            this.dominant = dominant;
            this.submediant = submediant;
            this.leadingTone = leadingTone;
        }
        tonic() {
            console.log("Root Note:", this.tonic); 
        }
        supertonic() {
            console.log("Major 2nd:", this.supertonic); 
        }
        mediant() {
            console.log("Minor 3rd:", this.mediant); 
        }
        subdominant() {
            console.log("Perfect 4th:", this.subdominant); 
        }
        dominant() {
            console.log("Perfect 5th:", this.dominant);
        }
        submediant() {
            console.log("Minor 6th:", this.submediant); 
        }
        leadingTone() {
            console.log("Minor 7th:", this.leadingTone); 
        }
        scaleData() {
            return this;
        }
    }

    function makeMode() { // This function checks if the tonic is equal to 'C', or any valid root note value, and if it is, it declares six variables: supertonic, mediant, subdominant, dominant, submediant, and leadingTone.

        if (tonic.toLowerCase() ==='c') { // code should execute regardless of the case of the given character 
            let supertonic = 'D', mediant = 'Eb', subdominant = 'F', dominant = 'G', submediant = 'Ab', leadingTone = 'Bb'; 

            console.log("----");
            console.log("Tonic is now " + tonic); // prints root note
            console.log("----");

            document.getElementById("yourModeSir").innerHTML = JSON.stringify(`${tonic}, ${supertonic}, ${mediant}, ${subdominant}, ${dominant}, ${submediant}, ${leadingTone},`); // The function then concatenates these variables into a string, separated by a comma, and logs the string to the console. The function also logs a message indicating that the tonic is now 'C'. 

            const image = document.querySelector("img"); // image element declared as variable
            image.src = "https://m.basicmusictheory.com/img/c-aeolian-mode-on-piano-keyboard.png";  // corresponding piano key visual

        } else if (tonic == 'C#' || tonic == 'Db') {
            let supertonic = 'D#' || 'Eb', mediant = 'E', subdominant = 'F#' || 'Gb', dominant = 'G#' || 'Ab', submediant = 'A', leadingTone = 'B';

            console.log("----");
            console.log("Tonic is now " + tonic);
            console.log("----");

            document.getElementById("yourModeSir").innerHTML = JSON.stringify(`${tonic}, ${supertonic}, ${mediant}, ${subdominant}, ${dominant}, ${submediant}, ${leadingTone},`);

            const image = document.querySelector("img");
            image.src = "https://m.basicmusictheory.com/img/c-sharp-aeolian-mode-on-piano-keyboard.png"; 

        } else if (tonic.toLowerCase() === 'd') {
            let supertonic = 'E', mediant = 'F', subdominant = 'G', dominant = 'A', submediant = 'Bb', leadingTone = 'C';

            console.log("----");
            console.log("Tonic is now " + tonic);
            console.log("----");

            document.getElementById("yourModeSir").innerHTML = JSON.stringify(`${tonic}, ${supertonic}, ${mediant}, ${subdominant}, ${dominant}, ${submediant}, ${leadingTone},`);

            const image = document.querySelector("img");
            image.src = "https://m.basicmusictheory.com/img/d-aeolian-mode-on-piano-keyboard.png"; 

        }  else if (tonic == 'Eb' || tonic == 'D#') {
            let supertonic = 'F', mediant = 'Gb' || 'A#', subdominant = 'Ab' || 'G#', dominant = 'Bb', submediant = 'B', leadingTone = 'Db' || 'C#';

            console.log("----");
            console.log("Tonic is now " + tonic);
            console.log("----");

            document.getElementById("yourModeSir").innerHTML = JSON.stringify(`${tonic}, ${supertonic}, ${mediant}, ${subdominant}, ${dominant}, ${submediant}, ${leadingTone},`);

            const image = document.querySelector("img");
            image.src = "https://m.basicmusictheory.com/img/e-flat-aeolian-mode-on-piano-keyboard.png";

        } else if (tonic.toLowerCase() === 'e' || tonic == 'Fb') {
            let supertonic = 'F#' || 'Gb', mediant = 'G', subdominant = 'A', dominant = 'B', submediant = 'C', leadingTone = 'D';

            console.log("----");
            console.log("Tonic is now " + tonic);
            console.log("----");

            document.getElementById("yourModeSir").innerHTML = JSON.stringify(`${tonic}, ${supertonic}, ${mediant}, ${subdominant}, ${dominant}, ${submediant}, ${leadingTone},`);

            const image = document.querySelector("img");
            image.src = "https://m.basicmusictheory.com/img/e-aeolian-mode-on-piano-keyboard.png"; 

        } else if (tonic.toLowerCase() === 'f') {
            let supertonic = 'G', mediant = 'Ab' || 'G#', subdominant = 'Bb' || 'A#', dominant = 'C', submediant = 'Db' || 'C#', leadingTone = 'Eb' || 'D#';
        
            console.log("----");
            console.log("Tonic is now " + tonic);
            console.log("----");
        
            document.getElementById("yourModeSir").innerHTML = JSON.stringify(`${tonic}, ${supertonic}, ${mediant}, ${subdominant}, ${dominant}, ${submediant}, ${leadingTone},`);

            const image = document.querySelector("img");
            image.src = "https://m.basicmusictheory.com/img/f-aeolian-mode-on-piano-keyboard.png"; 

        } else if (tonic == 'F#' || tonic == 'Gb') {
            let supertonic = 'G#' || 'Ab', mediant = 'A', subdominant = 'B', dominant = 'C#' || 'D', submediant = 'D', leadingTone = 'E';
        
            console.log("----");
            console.log("Tonic is now " + tonic);
            console.log("----");
        
            document.getElementById("yourModeSir").innerHTML = JSON.stringify(`${tonic}, ${supertonic}, ${mediant}, ${subdominant}, ${dominant}, ${submediant}, ${leadingTone},`);

            const image = document.querySelector("img");
            image.src = "https://m.basicmusictheory.com/img/f-sharp-aeolian-mode-on-piano-keyboard.png"; 

        } else if (tonic.toLowerCase() === 'g') {
            let supertonic = 'A', mediant = 'Bb' || 'A#', subdominant = 'C', dominant = 'D', submediant = 'Eb' || 'D#', leadingTone = 'F';
        
            console.log("----");
            console.log("Tonic is now " + tonic);
            console.log("----");
        
            document.getElementById("yourModeSir").innerHTML = JSON.stringify(`${tonic}, ${supertonic}, ${mediant}, ${subdominant}, ${dominant}, ${submediant}, ${leadingTone},`);

            const image = document.querySelector("img");
            image.src = "https://m.basicmusictheory.com/img/g-aeolian-mode-on-piano-keyboard.png"; 

        } else if (tonic == 'G#' || tonic == 'Ab') {
            let supertonic = 'A#' || 'Gb', mediant = 'B', subdominant = 'C#' || 'Db', dominant = 'D#' || 'Eb', submediant = 'E', leadingTone = 'F#';
        
            console.log("----");
            console.log("Tonic is now " || tonic);
            console.log("----");
        
            document.getElementById("yourModeSir").innerHTML = JSON.stringify(`${tonic}, ${supertonic}, ${mediant}, ${subdominant}, ${dominant}, ${submediant}, ${leadingTone},`);

            const image = document.querySelector("img");
            image.src = "https://m.basicmusictheory.com/img/g-sharp-aeolian-mode-on-piano-keyboard.png"; 

        } else if (tonic.toLowerCase() === 'a') {
            let supertonic = 'B', mediant = 'C', subdominant = 'D', dominant = 'E', submediant = 'F', leadingTone = 'G';
        
            console.log("----");
            console.log("Tonic is now " + tonic);
            console.log("----");
        
            document.getElementById("yourModeSir").innerHTML = JSON.stringify(`${tonic}, ${supertonic}, ${mediant}, ${subdominant}, ${dominant}, ${submediant}, ${leadingTone},`);

            const image = document.querySelector("img");
            image.src = "https://m.basicmusictheory.com/img/aeolian-mode-on-piano-keyboard.png"; 

        } else if (tonic == 'Bb' || tonic == 'A#') {
            let supertonic = 'C', mediant = 'Db' || 'E#', subdominant = 'Eb' || 'Db', dominant = 'F', submediant = 'Gb' || 'F#', leadingTone = 'Ab' || 'G#';

            console.log("----");
            console.log("Tonic is now " + tonic);
            console.log("----");

            document.getElementById("yourModeSir").innerHTML = JSON.stringify(`${tonic}, ${supertonic}, ${mediant}, ${subdominant}, ${dominant}, ${submediant}, ${leadingTone},`);

            const image = document.querySelector("img");
            image.src = "https://m.basicmusictheory.com/img/b-flat-aeolian-mode-on-piano-keyboard.png";

        } else if(tonic.toLowerCase() === 'b') {
            let supertonic = 'C#' || 'Db', mediant = 'D', subdominant = 'E', dominant = 'F#' || 'Gb', submediant = 'G', leadingTone = 'A';

            console.log("----");
        console.log("Tonic is now " + tonic);
        console.log("----");

        document.getElementById("yourModeSir").innerHTML = JSON.stringify(`${tonic}, ${supertonic}, ${mediant}, ${subdominant}, ${dominant}, ${submediant}, ${leadingTone},`);

            const image = document.querySelector("img");
            image.src = "https://m.basicmusictheory.com/img/b-aeolian-mode-on-piano-keyboard.png"; 

    } else {
        console.log("invalid root")
            document.getElementById("yourModeSir").innerHTML = "...MODE DOES NOT EXIST!";
    }
}

makeMode() // run function

const validTonic = ['a','A', 'Ab', 'A#','b', 'B', 'Bb', 'B#','c', 'C', 'C#', 'Cb', 'd', 'D', 'D#', 'Db', 'e', 'E', 'E#', 'Fb', 'Eb','f', 'F', 'F#','g', 'G', 'G#', 'Gb']; // declare an array of all valid tonic entries


if (validTonic.includes(tonic))  { // The includes() method is a string method that determines whether a string contains the characters of a specified string. It returns a boolean value indicating whether the string was found or not.
        document.getElementById("myLabel").innerHTML = tonic + " Aeolian is below:";
    } else {
        document.getElementById("myLabel").innerHTML = " ERROR: try again, my man..somethin ain't quite right...";
    } /*  ***You can also specify a starting index at which to begin the search for the specified string by passing a second argument to the includes() method. | ie: includes(tonic, 2) */


}