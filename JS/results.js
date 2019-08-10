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

let result_container = document.querySelector('.name_box');
let result_box=document.querySelectorAll('.result_box');

let age =  localStorage.getItem("age");
let name =  localStorage.getItem("name");
let result_lvl1 =  JSON.parse(localStorage.getItem("result_lvl1"));
let result_lvl2 =  JSON.parse(localStorage.getItem("result_lvl2"));
let result_lvl3 =  JSON.parse(localStorage.getItem("result_lvl3"));

create_p=(a, b, c)=>{
  let p_elem = document.createElement('p');
  a.appendChild(p_elem).innerHTML = b + c;
}

isEmpty=(obj)=> {
  for(var key in obj) {
      if(obj.hasOwnProperty(key))
          return false;
  }
  return true;
}

if(!isEmpty(age) && !isEmpty(name))
{
  create_p(result_container, "Dear ",name);
  create_p(result_container, " age of ",age);

}

if(!isEmpty(result_lvl1)){
    create_p(result_box[0],"Attemps: ", result_lvl1.attemps);
    create_p(result_box[0],"Correct hits: ", result_lvl1.correct);
    create_p(result_box[0],"Wrong hist: ", result_lvl1.wrong);
    create_p(result_box[0],"Time spent: ", result_lvl1.time_spent);
    create_p(result_box[0],"Time left: ", result_lvl1.time_left);
}
else
    result_box[0].style.display = "none";

    if(!isEmpty(result_lvl2)){
    create_p(result_box[1],"Attemps: ", result_lvl2.attemps);
    create_p(result_box[1],"Correct hits: ", result_lvl2.correct);
    create_p(result_box[1],"Wrong hist: ", result_lvl2.wrong);
    create_p(result_box[1],"Time spent: ", result_lvl2.time_spent);
    create_p(result_box[1],"Time left: ", result_lvl2.time_left);
}
else
    result_box[1].style.display = "none";

    if(!isEmpty(result_lvl3)){
    create_p(result_box[2],"Attemps: ", result_lvl3.attemps);
    create_p(result_box[2],"Correct hits: ", result_lvl3.correct);
    create_p(result_box[2],"Wrong hist: ", result_lvl3.wrong);
    create_p(result_box[2],"Time spent: ", result_lvl3.time_spent);
    create_p(result_box[2],"Time left: ", result_lvl3.time_left);
}
else
    result_box[2].style.display = "none";





