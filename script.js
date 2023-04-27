let audioVolumes = document.querySelectorAll("input[name='volume-slider']");
audioVolumes.forEach(function (audioVolume) {
  audioVolume.oninput = function () {
    let progressBar = this.parentNode.querySelector("progress");
    progressBar.value = audioVolume.value;
    console.log(`The volume is currently ${progressBar.value}`);
  };
});

// 
// 
// 

// How to play/pause audio on card and toggle icon

const playBtns = document.querySelectorAll('.card-middle .audio-play i');
playBtns.forEach(playBtn => {
  playBtn.addEventListener('click', togglePlayPause);
});

function togglePlayPause(event) {
  const playBtn = event.target;
  const audioTrack = playBtn.closest('.card').querySelector('.audio-track');
  if (playBtn.classList.contains('fa-play')) {
    playBtn.classList.remove('fa-play');
    playBtn.classList.add('fa-pause');
    audioTrack.play();
  } else {
    playBtn.classList.remove('fa-pause');
    playBtn.classList.add('fa-play');
    audioTrack.pause();
  }
}


const audioVolume = document.querySelectorAll(".audio-volume");

// Loop through all the audio volume elements and add an event listener to each input element
audioVolume.forEach(volumeElem => {
  const volumeSlider = volumeElem.querySelector('input[type="range"]');
  const audioTrack = volumeElem.closest('.card').querySelector('.audio-track');

  // Add an event listener to the volume slider input element
  volumeSlider.addEventListener('input', () => {
    const volume = parseFloat(volumeSlider.value);
    audioTrack.volume = volume;
  });
});


// How to mute/unmute audio on card and toggle icon
const audioMute = document.querySelectorAll(".audio-mute i");
const audioTrack = document.querySelectorAll(".audio-track");

audioMute.forEach(muteBtn => {
  muteBtn.addEventListener('click', toggleMute);
});

function toggleMute() {
  if (this.classList.contains('fa-volume-high')) {
    this.classList.remove('fa-volume-high');
    this.classList.add('fa-volume-off');
    audioTrack.forEach(track => {
      track.muted = true;
      track.dataset.muted = "true";
    });
  } else {
    this.classList.remove('fa-volume-off');
    this.classList.add('fa-volume-high');
    audioTrack.forEach(track => {
      track.muted = false;
      track.dataset.muted = "false";
    });
  }
}



const audioStop = document.querySelectorAll(".audio-stop");