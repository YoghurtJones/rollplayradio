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
      playButton.classList.remove('fa-play');
      playButton.classList.add('fa-pause');
    } else {
      audioTrack.pause();
      playButton.classList.remove('fa-pause');
      playButton.classList.add('fa-play');
    }
  });

  volumeSlider.addEventListener('input', function() {
    audioTrack.volume = volumeSlider.value;
    volumeLevel.value = volumeSlider.value;
  });

  muteButton.addEventListener('click', function() {
    if (audioTrack.play && !audioTrack.muted) {
      muteButton.classList.remove('fa-volume-high');
      muteButton.classList.add('fa-volume-off');
      audioTrack.muted = true;
    } else {
      audioTrack.muted = false;
      muteButton.classList.remove('fa-volume-off');
      muteButton.classList.add('fa-volume-high');
    }
  });

  stopButton.addEventListener('click', function() {
    audioTrack.pause();
    audioTrack.currentTime = 0;
  });
}

// Call the function for each audio player on the page
controlAudioPlayer('forest');
controlAudioPlayer('magic-item-shop');
controlAudioPlayer('search');
controlAudioPlayer('necromancer');