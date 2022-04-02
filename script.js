// Global constants
//const clueHoldTime = 1000; //how long to hold each clue's light/sound
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

//Global Variables
var pattern = [];
for (let k = 0; k < 7; k++) {
  pattern[k] = Math.floor(Math.random() * 6) + 1;
}
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5; //must be between 0.0 and 1.0
var guessCounter = 0;
var clueHoldTime = 1000;
var mistakes;

function startGame() {
  //initialize game variables
  progress = 0;
  gamePlaying = true;
  mistakes = 0;

  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");

  playClueSequence();
}

function stopGame() {
  gamePlaying = false;

  // swap the Start and Stop buttons
  document.getElementById("stopBtn").classList.add("hidden");
  document.getElementById("startBtn").classList.remove("hidden");
  // reloading the page once the game is over
  location.reload();
}

// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2,
  5: 538.5,
  6: 592.8,
};

function playTone(btn, len) {
  o.frequency.value = freqMap[btn];
  g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
  context.resume();
  tonePlaying = true;
  setTimeout(function () {
    stopTone();
  }, len);
}

function startTone(btn) {
  if (!tonePlaying) {
    context.resume();
    o.frequency.value = freqMap[btn];
    g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
    context.resume();
    tonePlaying = true;
  }
}
function stopTone() {
  g.gain.setTargetAtTime(0, context.currentTime + 0.05, 0.025);
  tonePlaying = false;
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext;
var context = new AudioContext();
var o = context.createOscillator();
var g = context.createGain();
g.connect(context.destination);
g.gain.setValueAtTime(0, context.currentTime);
o.connect(g);
o.start(0);

// Function for lighting up a button
function lightButton(btn) {
  document.getElementById("button" + btn).classList.add("lit");
}

// Function for clearing a button
function clearButton(btn) {
  document.getElementById("button" + btn).classList.remove("lit");
}

// Function for playing a single clue
function playSingleClue(btn) {
  if (gamePlaying) {
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

// Function for playing the sequence of clues
function playClueSequence() {
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for (let i = 0; i <= progress; i++) {
    // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
    setTimeout(playSingleClue, delay, pattern[i]); // set a timeout to play that clue
    // Decreasing the time after each turn
    clueHoldTime = clueHoldTime - 25;
    delay += clueHoldTime;
    delay += cluePauseTime;
  }
}

function loseGame() {
  stopGame();
  alert("Game Over. You lost.");
}

function wonGame() {
  stopGame();
  alert("Congrats! You won!");
}

function guess(btn) {
  console.log("user guessed: " + btn);
  if (!gamePlaying) {
    return;
  } else {
    // If the player presses the right button, we check if the turn is over
    if (btn == pattern[guessCounter]) {
      // If the progress of the player is equal to the current index of the pattern, we check if this is the last turn
      if (progress == guessCounter) {
        // If the progress of the player is equal to the last index of the pattern, the player wins!
        if (progress == pattern.length - 1) {
          wonGame();
        } else {
          progress++;
          playClueSequence();
        }
      }
      // Else, increases the index of the pattern
      else {
        guessCounter++;
      }
    }

    // If the player presses the wrong button, the game is over
    else {
      // Increments the mistakes variable whenever the player presses the wrong button
      mistakes++;
      document.getElementById("p" + mistakes).innerHTML = "";
      //document.p1.classList.add("hidden");
      if (mistakes < 3) {
        playClueSequence();
      } else if (mistakes == 3) {
        loseGame();
      }
    }
  }
}
