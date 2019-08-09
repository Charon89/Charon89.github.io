let pop_sound = document.querySelector("#pop_sound");
let correct = document.querySelector("#correct");
let incorrect = document.querySelector("#incorrect");


//---- FULLSCREEN MODE
let fs_status = 0;
let fs = document.querySelector("#fs_button");
function toggleFullScreen() {

  var doc = window.document;
  var docEl = doc.documentElement;

  var requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
  var cancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;

  if (!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
    fs.src = "../IMG/buttons/button_FullScreen.png";
    requestFullScreen.call(docEl);
  }
  else {
    cancelFullScreen.call(doc);
    fs.src = "../IMG/buttons/button_FullScreen_pressed.png";

  }
}
fs.addEventListener("click", toggleFullScreen);








function playAudio() { 
  pop_sound.play(); 
} 
function correctPlay() { 
  correct.play(); 
} 
function incorrectPlay() { 
  incorrect.play(); 
} 



