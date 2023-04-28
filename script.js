// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

// fade div after scrolling down 100 pixels
window.addEventListener('scroll', function() {
  const myDiv = document.getElementById('alert');
  if (window.scrollY > 100) {
    // myDiv.style.display = 'none';
    myDiv.classList.add('hidden');
  } else {
    // myDiv.style.display = 'flex';
    myDiv.classList.remove('hidden');
  }
});

// Hide div after scrolling down 150 pixels
window.addEventListener('scroll', function() {
  const myDiv = document.getElementById('alert');
  if (window.scrollY > 150) {
    myDiv.style.display = 'none';
  } else {
    myDiv.style.display = 'flex';
  }
});


// Function to control an audio player
function controlAudioPlayer(audioPlayerID) {
  // Get the relevant elements for the audio player
  var cardActive = document.querySelector('#' + audioPlayerID + ' .card');
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
      cardActive.classList.toggle('card-active');
      console.log("Card audio playing.");
    } else {
      audioTrack.pause();
      playButton.classList.remove('fa-pause');
      playButton.classList.add('fa-play');
      cardActive.classList.remove('card-active');
      console.log("Card audio paused.");
    }
  });

  volumeSlider.addEventListener('input', function() {
    audioTrack.volume = volumeSlider.value;
    volumeLevel.value = volumeSlider.value;
    console.log("Volume slider input received " + volumeSlider.value + ".");
  });

  volumeSlider.addEventListener('touchstart', function() {
    console.log("Volume slider touch started.");
  });

  volumeSlider.addEventListener('touchmove', function() {
    audioTrack.volume = volumeSlider.value;
    volumeLevel.value = volumeSlider.value;
    console.log("Volume slider touch move.");
  });

  volumeSlider.addEventListener('touchend', function() {
    console.log("Volume slider touch end.");
  });

  muteButton.addEventListener('click', function() {
    if (audioTrack.play && !audioTrack.muted) {
      muteButton.classList.remove('fa-volume-high');
      muteButton.classList.add('fa-volume-off');
      audioTrack.muted = true;
      console.log("Card audio muted.");
    } else {
      audioTrack.muted = false;
      muteButton.classList.remove('fa-volume-off');
      muteButton.classList.add('fa-volume-high');
      console.log("Card audio unmuted.");
    }
  });

  stopButton.addEventListener('click', function() {
    audioTrack.pause();
    audioTrack.currentTime = 0;
    playButton.classList.remove('fa-pause');
    playButton.classList.add('fa-play');
    cardActive.classList.remove('card-active');
    console.log("Card audio stopped.");
  });
}

// Call the function for each audio player on the page
controlAudioPlayer('forest');
controlAudioPlayer('magic-item-shop');
controlAudioPlayer('search');
controlAudioPlayer('necromancer');