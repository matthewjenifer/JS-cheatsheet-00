const pads = document.querySelectorAll(".pad"); // select all pad elements

pads.forEach(pad => pad.addEventListener("click", handlePadClick)); // add a click event listener to each pad

document.addEventListener("keydown", handleKeyDown); // add a keydown event listener to the document

function handlePadClick(event) { // handle pad click event
    const key = event.target.getAttribute("data-key"); // get the data-key attribute of the clicked pad
    const audioElement = document.querySelector(`audio[data-key="${key}"]`); // select the audio element with a matching data-key attribute
            audioElement.currentTime = 0; // reset audio to the start
            audioElement.play(); // play the audio

            document.querySelectorAll("audio").forEach(audio => { // select all audio elements
                if (audio !== audioElement) { // if the audio element is not the one that was just played
                    audio.pause(); // pause the audio
                    audio.currentTime = 0; // reset the audio to the start
    }
});
}


function handleKeyDown(event) { // handle keydown event
    const key = event.code; // get the data-key attribute of the audio element that corresponds to the pressed key
    const padElement = document.querySelector(`.pad[data-key="${key}"]`); // select the pad element with a matching data-key attribute
            padElement.click(); // trigger a click event on the pad element
}
