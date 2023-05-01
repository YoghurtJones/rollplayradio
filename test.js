const audioplayers = document.querySelectorAll(".audio-player");

audioplayers.forEach((audioplayer) => {
  const audio = audioplayer.querySelector(".audio-track");
  const playBtn = audioplayer.querySelector(".audio-play");
  const stopBtn = audioplayer.querySelector(".audio-stop");
  const muteBtn = audioplayer.querySelector(".audio-mute");
  const volumeUpBtn = audioplayer.querySelector(".vol-increase-10");
  const volumeDownBtn = audioplayer.querySelector(".vol-decrease-10");
  
  let intervalID;
  let previousVolume = 0.5;
  
  playBtn.addEventListener("click", playAudio);
  stopBtn.addEventListener("click", stopAudio);
  muteBtn.addEventListener("click", toggleMute);
  
  volumeDownBtn.addEventListener("mousedown", () => {
    intervalID = setInterval(() => {
      if (audio.volume > 0.1 && audio.volume <= 1) {
        audio.volume -= 0.1;
        console.log('Volume decreased by 10%.');
      }
    }, 100);
  });
  
  volumeDownBtn.addEventListener("mouseup", () => {
    clearInterval(intervalID);
  });
  
  volumeUpBtn.addEventListener("mousedown", () => {
    intervalID = setInterval(() => {
      if (audio.volume > 0 && audio.volume < 1) {
        audio.volume += 0.1;
        console.log('Volume increased by 10%.');
      }
    }, 100);
  });
  
  volumeUpBtn.addEventListener("mouseup", () => {
    clearInterval(intervalID);
  });
  
  function playAudio() {
    if (audio.paused) {
      audio.play();
      playBtn.textContent = 'Pause';
      console.log('Audio now playing.');
    } else {
      audio.pause();
      playBtn.textContent = 'Play';
      console.log('Audio now paused.');
    }
  }
  
  volumeDownBtn.addEventListener("touchstart", () => {
    intervalID = setInterval(() => {
      if (audio.volume > 0.1 && audio.volume <= 1) {
        audio.volume -= 0.1;
        console.log('Volume decreased by 10%.');
      }
    }, 100);
  });
  
  volumeDownBtn.addEventListener("touchend", () => {
    clearInterval(intervalID);
  });
  
  volumeUpBtn.addEventListener("touchstart", () => {
    intervalID = setInterval(() => {
      if (audio.volume > 0 && audio.volume < 1) {
        audio.volume += 0.1;
        console.log('Volume increased by 10%.');
      }
    }, 100);
  });
  
  volumeUpBtn.addEventListener("touchend", () => {
    clearInterval(intervalID);
  });
  
  function stopAudio() {
    if (!audio.paused) {
      audio.pause();
      audio.currentTime = 0;
      playBtn.textContent = 'Play';
      console.log('Audiotrack has now stopped.');
    }
  }
  
  function toggleMute() {
    if (audio.volume > 0) {
      previousVolume = audio.volume;
      audio.volume = 0;
      console.log('Audiotrack is muted.');
      muteBtn.textContent = 'Unmute';
    } else {
      audio.volume = previousVolume;
      console.log('Audiotrack is unmuted.');
      muteBtn.textContent = 'Mute';
    }
  }
});