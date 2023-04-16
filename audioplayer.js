// Locally stop audio element and reset playback

var cardDivs = document.querySelectorAll(".card");
var audioElements = document.querySelectorAll(".audioplayer");

cardDivs.forEach(function(cardDiv, index) {
  cardDiv.addEventListener("click", function() {
    var audioElement = audioElements[index];
    if (audioElement.paused) {
      audioElement.play();
      console.log("Audio element is now playing.");
    } else {
      audioElement.pause();
      audioElement.currentTime = 0;
      console.log("Audio element is now reset.");
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