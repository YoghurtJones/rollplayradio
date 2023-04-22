//

var audioPlayElements = document.querySelectorAll(".audio-play");
var volumeSliders = document.querySelectorAll(".volume-slider");
var audioElements = document.querySelectorAll(".audio-track");
var audioMuteElements = document.querySelectorAll(".audio-mute");
var audioStopElements = document.querySelectorAll(".audio-stop");

audioPlayElements.forEach(function (audioPlay, index) {
  audioPlay.addEventListener("click", function () {
    var audioElement = audioElements[index];
    if (audioElement.paused) {
      audioElement.play();
      console.log("Audio element is now playing.");
      audioPlay.classList.replace("fa-play", "fa-pause");
      console.log("Updated icon from play to pause.");
    } else {
      audioElement.pause();
      console.log("Audio element is now paused.");
      audioPlay.classList.replace("fa-pause", "fa-play");
      console.log("Updated icon from pause to play.");
    }
  });
});

// volumeSliders.forEach(function (slider, index) {
//   var audioElement = audioElements[index];
//   slider.addEventListener("input", function () {
//     audioElement.volume = slider.value;
//     console.log("Volume changed to: " + slider.value);
//   });
// });

volumeSliders.forEach(function (slider, index) {
  var audioElement = audioElements[index];

  // Mouse events
  slider.addEventListener("input", function () {
    audioElement.volume = slider.value;
    console.log("INPUT Volume changed to: " + slider.value);
  });

  // Touch events
  slider.addEventListener("touchmove", function () {
    audioElement.volume = slider.value;
    console.log("TOUCH Volume changed to: " + slider.value);
  });
});

// audioMuteElements.forEach(function (audioMute, index) {
//   var audioElement = audioElements[index];
//   var savedVolume = audioElement.volume; // Store the current volume

//   audioMute.addEventListener("click", function () {
//     if (!audioElement.paused && audioElement.volume > 0) {
//       savedVolume = audioElement.volume; // Update savedVolume with current volume
//       audioElement.volume = 0;
//       audioMute.classList.replace("fa-volume-high", "fa-volume-xmark");
//       console.log("Audio element volume set to 0.");
//     } else {
//       audioElement.volume = savedVolume; // Set volume to savedVolume
//       audioMute.classList.replace("fa-volume-xmark", "fa-volume-high");
//       console.log("Audio element volume set to " + savedVolume + ".");
//     }
//   });
// });

audioMuteElements.forEach(function (audioMute, index) {
  var audioElement = audioElements[index];
  var savedVolume = audioElement.volume; // Store the current volume

  audioMute.addEventListener("click", function () {
    if (!audioElement.paused && audioElement.volume > 0) {
      savedVolume = audioElement.volume; // Update savedVolume with current volume
      audioElement.volume = 0;
      audioMute.classList.replace("fa-volume-high", "fa-volume-xmark");
      console.log("Audio element volume set to 0.");
    } else {
      audioElement.volume = savedVolume; // Set volume to savedVolume
      audioMute.classList.replace("fa-volume-xmark", "fa-volume-high");
      console.log("Audio element volume set to " + savedVolume + ".");
    }
  });

  audioMute.addEventListener("touchstart", function () {
    if (!audioElement.paused && audioElement.volume > 0) {
      savedVolume = audioElement.volume; // Update savedVolume with current volume
      audioElement.volume = 0;
      audioMute.classList.replace("fa-volume-high", "fa-volume-xmark");
      console.log("Audio element volume set to 0.");
    } else {
      audioElement.volume = savedVolume; // Set volume to savedVolume
      audioMute.classList.replace("fa-volume-xmark", "fa-volume-high");
      console.log("Audio element volume set to " + savedVolume + ".");
    }
  });
});

// audioStopElements.forEach(function (audioStop, index) {
//   audioStop.addEventListener("click", function () {
//     var audioElement = audioElements[index];
//     if (!audioElement.paused) {
//       audioElement.pause();
//       audioElement.currentTime = 0;
//       audioPlayElements[index].classList.remove("fa-pause");
//       audioPlayElements[index].classList.add("fa-play");
//       console.log("Audio element has been stopped.");
//     }
//   });
// });

audioStopElements.forEach(function (audioStop, index) {
  var audioElement = audioElements[index];
  audioStop.addEventListener("click", function () {
    if (!audioElement.paused) {
      audioElement.pause();
      audioElement.currentTime = 0;
      audioPlayElements[index].classList.remove("fa-pause");
      audioPlayElements[index].classList.add("fa-play");
      console.log("Audio element has been stopped.");
    }
  });

  audioStop.addEventListener("touchstart", function () {
    if (!audioElement.paused) {
      audioElement.pause();
      audioElement.currentTime = 0;
      audioPlayElements[index].classList.remove("fa-pause");
      audioPlayElements[index].classList.add("fa-play");
      console.log("Audio element has been stopped.");
    }
  });
});
