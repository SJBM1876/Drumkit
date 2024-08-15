window.addEventListener("keydown", function(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    
    if (!audio) return; // Stop the function from running if no audio element found.
    
    audio.currentTime = 0; // Rewind audio to the start.
    audio.play(); // Play the audio.
    
    key.classList.add("playing"); // Add the "playing" class to the corresponding key.
});

function removeTransition(e) {
    if (e.propertyName !== "transform") return; // Skip if the transitioned property is not "transform".
    this.classList.remove("playing"); // Remove the "playing" class from the key.
}

const keys = document.querySelectorAll(".key");

keys.forEach(key => key.addEventListener("transitionend", removeTransition));
