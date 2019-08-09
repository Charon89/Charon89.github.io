localStorage.setItem("balls_amount",9);
localStorage.setItem("time_lvl1",90);
localStorage.setItem("time_lvl2",120);
localStorage.setItem("time_lvl3",150);
document.querySelector("#backgroundAudio").volume = 0.05;
let getName_container = document.querySelector(".getName_container");
window.addEventListener("load",()=>{
  getName_container.style.display="block";
});

function getName_container_hide(){
  getName_container.style.display="none";
}

//fetch_name.addEventListener("click", getName_container_hide);
submit_name=()=>{
  let good = false;
  let name_form = document.getElementsByClassName("getName_form");  

  
  let age = parseInt(name_form[1].value);
  let name = name_form[0].value;

      if((age < 50 && age > 3) && (age !="") && name.length > 2)
      {
        getName_container_hide();
      }
      else{
        //alert("age: "+age + "Name length: "+ name.length);
        alert("Invalid entry");
      }

  localStorage.setItem("name",name_form[0].value);
  localStorage.setItem("age",name_form[1].value);
}

window.addEventListener("load",()=>{
  let name = localStorage.getItem("name");
  if(name!=""){ //getName_container_hide();
  }
});


document.querySelector("#getName_button").addEventListener("click",submit_name);

//CREATED BY MOZILLA ---- FULLSCREEN MODE
let fs_status = 0;
let fs = document.querySelector("#fs_button");
function toggleFullScreen() {

  var doc = window.document;
  var docEl = doc.documentElement;

  var requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
  var cancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;

  if (!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
    fs.src = "IMG/buttons/button_FullScreen.png";
    requestFullScreen.call(docEl);
  }
  else {
    cancelFullScreen.call(doc);
    fs.src = "IMG/buttons/button_FullScreen_pressed.png";

  }
}
fs.addEventListener("click", toggleFullScreen);


//Select lvl************
let lvl_status = 0;

let lvl1 = document.querySelector("#lvl1"); //img
let lvl2 = document.querySelector("#lvl2"); //img
let lvl3 = document.querySelector("#lvl3"); //img

let start = document.querySelector("#start");

lvl1.addEventListener("click", () => lvl_status = 1);
lvl2.addEventListener("click", () => lvl_status = 2);
lvl3.addEventListener("click", () => lvl_status = 3);

function change_button() {

  if (lvl_status == 1) {
    lvl1.src = "IMG/buttons/pressed_button_fuzzy_1_text.png";
    lvl2.src = "IMG/buttons/button_fuzzy_2_text.png";
    lvl3.src = "IMG/buttons/button_fuzzy_3_text.png";
    start.href = "HTML/lvl1.html";
  }

  if (lvl_status == 2) {
    lvl1.src = "IMG/buttons/button_fuzzy_1_text.png";
    lvl2.src = "IMG/buttons/pressed_button_fuzzy_2_text.png";
    lvl3.src = "IMG/buttons/button_fuzzy_3_text.png";
    start.href = "HTML/lvl2.html";
  }

  if (lvl_status == 3) {
    lvl1.src = "IMG/buttons/button_fuzzy_1_text.png";
    lvl2.src = "IMG/buttons/button_fuzzy_2_text.png";
    lvl3.src = "IMG/buttons/pressed_button_fuzzy_3_text.png";
    start.href = "HTML/lvl3.html";
  }
}

lvl1.addEventListener("click", change_button);
lvl2.addEventListener("click", change_button);
lvl3.addEventListener("click", change_button);

//Start****************
