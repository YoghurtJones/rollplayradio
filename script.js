// Function to control an audio player
function controlAudioPlayer(audioPlayerID) {
  // Get the relevant elements for the audio player
  var playButton = document.querySelector('#' + audioPlayerID + ' .audio-play i');
  var audioTrack = document.querySelector('#' + audioPlayerID + ' .audio-track');
  var volumeSlider = document.querySelector('#' + audioPlayerID + ' input[type="range"]');
  var volumeLevel = document.querySelector('#' + audioPlayerID + ' progress');
  var muteButton = document.querySelector('#' + audioPlayerID + ' .audio-mute i');
  var stopButton = document.querySelector('#' + audioPlayerID + ' .audio-stop i');

  // Set up event listeners for the audio player
  playButton.addEventListener('click', function() {
    if (audioTrack.paused) {
      audioTrack.play();
      // playButton.innerHTML = '<i class="fa-solid fa-pause"></i>';
    } else {
      audioTrack.pause();
      // playButton.innerHTML = '<i class="fa-solid fa-play"></i>';
    }
  });

  volumeSlider.addEventListener('input', function() {
    audioTrack.volume = volumeSlider.value;
    volumeLevel.value = volumeSlider.value;
  });

  muteButton.addEventListener('click', function() {
    if (audioTrack.muted) {
      audioTrack.muted = false;
      // muteButton.innerHTML = '<i class="fa-solid fa-volume-high"></i>';
    } else {
      audioTrack.muted = true;
      // muteButton.innerHTML = '<i class="fa-solid fa-volume-mute"></i>';
    }
  });

  stopButton.addEventListener('click', function() {
    audioTrack.pause();
    audioTrack.currentTime = 0;
    // playButton.innerHTML = '<i class="fa-solid fa-play"></i>';
  });
}

// Call the function for each audio player on the page
controlAudioPlayer('forest');
controlAudioPlayer('magic-item-shop');
controlAudioPlayer('search');
controlAudioPlayer('acererak');