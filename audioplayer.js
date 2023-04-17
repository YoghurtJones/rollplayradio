// Locally stop audio element and reset playback

var audioPlayElements = document.querySelectorAll(".audio-play");
var audioElements = document.querySelectorAll(".audio-track");

audioPlayElements.forEach(function (audioPlay, index) {
  audioPlay.addEventListener("click", function () {
    var audioElement = audioElements[index];
    if (audioElement.paused) {
      audioElement.play();
      audioElement.volume = 0.5;
      audioPlay.classList.replace("fa-play", "fa-pause");
      console.log("Audio element is now playing.");
    } else {
      audioElement.pause();
      audioPlay.classList.replace("fa-pause", "fa-play");
      console.log("Audio element is now reset.");
    }
  });
});

//Locally mute audio element.

var audioMuteElements = document.querySelectorAll(".audio-mute");
var audioElements = document.querySelectorAll(".audio-track");

audioMuteElements.forEach(function (audioMute, index) {
  audioMute.addEventListener("click", function () {
    var audioElement = audioElements[index];
    if (!audioElement.paused && audioElement.volume > 0) {
      audioElement.volume = 0;
      audioMute.classList.replace("fa-volume-high", "fa-volume-xmark");
      console.log("Audio element volume set to 0.");
    } else {
      audioElement.volume = 0.5;
      audioMute.classList.replace("fa-volume-xmark", "fa-volume-high");
      console.log("Audio element volume set to 1.");
    }
  });
});

var audioStopElements = document.querySelectorAll(".audio-stop");
var audioElements = document.querySelectorAll(".audio-track");
var audioPlayElements = document.querySelectorAll(".audio-play");

audioStopElements.forEach(function (audioStop, index) {
  audioStop.addEventListener("click", function () {
    var audioElement = audioElements[index];
    if (!audioElement.paused) {
      audioElement.pause();
      audioElement.volume = 0;
      audioElement.currentTime = 0;
      audioPlayElements[index].classList.remove("fa-pause");
      audioPlayElements[index].classList.add("fa-play");
      console.log("Audio element has been stopped.");
    }
  });
});

// // Update boxshadow to reflect music type

// var cardBoxShadow = document.querySelectorAll(".music");

// cardBoxShadow.forEach(function(div) {
//   div.addEventListener("click", function() {
//     if (div.style.boxShadow) {
//       div.style.boxShadow = "";
//     } else {
//       div.style.boxShadow = "0 0 20px red";
//       console.log("Boxshadow style for music added to card.");
//     }
//   });
// });

// var cardBoxShadow = document.querySelectorAll(".ambience");

// cardBoxShadow.forEach(function(div) {
//   div.addEventListener("click", function() {
//     if (div.style.boxShadow) {
//       div.style.boxShadow = "";
//     } else {
//       div.style.boxShadow = "0 0 20px greenyellow";
//       console.log("Boxshadow style for ambience added to card.");
//     }
//   });
// });

// // GLOBAL PAUSE

// // Get the existing div element
// const myDiv = document.querySelector('#globalmute');

// // Initialize an array to keep track of the previously paused audio elements
// let pausedAudioElements = [];

// // Add a click event listener to the existing div
// myDiv.addEventListener('click', () => {
//   // Get all audio elements on the page
//   const audioElements = document.querySelectorAll('audio');

//   if (pausedAudioElements.length === 0) {
//     // Pause each audio element and add it to the array of paused audio elements
//     audioElements.forEach(audio => {
//       if (!audio.paused) {
//         audio.pause();
//         pausedAudioElements.push(audio);
//         console.log("Each active audio element has been paused and added to array.");
//       }
//       myDiv.style.opacity = .25;
//     });
//   } else {
//     // Play each previously paused audio element and clear the array of paused audio elements
//     pausedAudioElements.forEach(audio => audio.play());
//     pausedAudioElements = [];
//     console.log("Each paused audio element has been resumed and removed from array.");
//     myDiv.style.opacity = 1;
//   }
// });
