document.addEventListener("DOMContentLoaded", function () {
    const backgroundAudio = document.getElementById("background-audio");
    const playButton = document.getElementById("play-button");
    const pauseButton = document.getElementById("pause-button");
    const restartButton = document.getElementById("restart-button");
  
    if (backgroundAudio && playButton && pauseButton && restartButton) {
      playButton.addEventListener("click", function () {
        backgroundAudio.play().catch((error) => {
          console.error("Error playing audio:", error);
        });
      });
  
      pauseButton.addEventListener("click", function () {
        backgroundAudio.pause();
      });
  
      restartButton.addEventListener("click", function () {
        backgroundAudio.currentTime = 0; // Set audio to start from beginning
        backgroundAudio.play().catch((error) => {
          console.error("Error playing audio:", error);
        });
      });
    }
  });