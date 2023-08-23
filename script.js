var logo_background = document.getElementById("gateway_bg");

x = -10; i= 1;

setInterval(function() { 
    
    if ( x<=13) 
    {
        x++;
        logo_background.style.marginLeft = x+1+"%";
    }
    else x = -10;
},300);

var myElement = document.getElementById("blog-img");

y= 0
setInterval(function(){
    y = y>= 0? y+1: 0;
    if(y%4 == 0) myElement.style.backgroundImage = "url('image1.png')";

    else if ( y%4==1) myElement.style.backgroundImage = "url('image2.png')";

    else if ( y%4==2) myElement.style.backgroundImage = "url('image3.png')";

    else myElement.style.backgroundImage = "url('image4.png')";

    
},1700)


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
  












