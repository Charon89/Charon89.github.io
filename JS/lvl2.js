let balls_amount = localStorage.getItem("balls_amount");
let time = localStorage.getItem("time_lvl2");
let random_gen = rnd();
let click_counter = 0;
let expression_result;

let int = setInterval(myTimer, 1000);

let score_container = document.querySelector(".score_container");
let curson_container = document.querySelector(".curson_container");

let score_value = document.querySelector(".score_value");
let attemps_value = document.querySelector(".attemps_value");
let correct_value = document.querySelector(".correct_value");
let wrong_value = document.querySelector(".wrong_value");
let view = document.querySelector(".playground");
let timer = document.querySelector(".time_value");
let pop_sound = document.querySelector("#pop_sound");

let operand_1 = document.querySelector("#operand_1");
let operand_2 = document.querySelector("#operand_2");
attemps_value.innerHTML = "4";
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

class balloon {
  constructor(source, width, value) {
    this.img_source = source;
    this.div_box_width = width;
    this.p_value = value;
  }

  create() {
    let newpos = makeNewPosition();
    let newDiv = document.createElement('div');
    let newImg = document.createElement('img');
    let newP = document.createElement('p');

    //newDiv.setAttribute("id","crosss_"+val);
    newDiv.style.width = this.div_box_width + 'px';
    newImg.style.width = this.div_box_width + 'px';
    newP.innerHTML = this.p_value;


    newP.style.width = this.div_box_width + 'px';
    newP.style.padding = "30%";
    newP.style.zIndex = 2;
    newP.style.textAlign = "center";
    newP.style.color = "yellow";
    newP.style.position = "absolute";


    newDiv.style.position = "absolute";
    newDiv.style.top = 300+'px';
    newDiv.style.left = -300+'px';
    //alert("H: " + newpos[0] + " W: " + newpos[1] );

    newImg.src = this.img_source;
    newImg.style.position = "relative";
    newImg.style.top = newpos[0];
    newImg.style.left = newpos[1];

  
    let container = document.querySelector(".playground"); 
    let newnewDiv = container.appendChild(newDiv);
    let newnewImg = newDiv.appendChild(newP);
    newnewDiv.appendChild(newImg);

    newDiv.className = "newBalloon";
    newP.className = "newParagraph";

  }
  changeRandom( random ){
    let pRandomValue = random;
    let changeP = document.querySelector('.newParagraph');
    changeP.innerHTML = pRandomValue;
   // alert(this.p_value);
  }
  getValue(){
    return this.p_value;
  }
  modifyValue(a){
    this.p_value = a;
  }
}

function rnd(){
  return Math.floor(Math.random() * 34 + 1);
}

function randon_expession() {
  do{
  operand_1.innerHTML = Math.floor(Math.random() * 25 + 1);
  operand_2.innerHTML = Math.floor(Math.random() * 9 + 1);
  }while(parseInt(operand_2.innerHTML) > parseInt(operand_1.innerHTML));
  $('.newBalloon').innerHTML = parseInt(operand_1.innerHTML) - parseInt(operand_2.innerHTML);
  expression_result = parseInt(operand_1.innerHTML) - parseInt(operand_2.innerHTML);
  document.querySelector(".newParagraph").innerHTML = expression_result;
  //document.querySelector(".newParagraph").style.color = "red";
}
//window.addEventListener("load",randon_expession);


var ball = [];
do{
  operand_1.innerHTML = Math.floor(Math.random() * 25 + 1);
  operand_2.innerHTML = Math.floor(Math.random() * 9 + 1);
  }while(parseInt(operand_2.innerHTML) > parseInt(operand_1.innerHTML));
for (let i = 0; i < balls_amount; i++) {
  let rend_p = makeNewPosition();
  random_gen = Math.floor(Math.random() * 34 + 1);
  ball[i] = new balloon("../IMG/balloons/ball_"+Math.floor(Math.random() * 5 + 1)+".png", 100, rnd());
  expression_result = parseInt(operand_1.innerHTML) - parseInt(operand_2.innerHTML);
  ball[0].modifyValue(parseInt(expression_result));
  ball[i].create();
  $('.newBalloon').innerHTML = parseInt(operand_1.innerHTML) - parseInt(operand_2.innerHTML);
  document.querySelector(".newParagraph").innerHTML = expression_result;
  //document.querySelector(".newParagraph").style.color = "red";
}

//---- Balloons move
$(document).ready(function () {
  animateDiv('.newBalloon');
});

function makeNewPosition() {
  let w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0) - 100;
  let h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0) - 100;
  let h_head = document.querySelector("#head_name").offsetHeight;
  let nh = Math.floor(Math.random() * (h - h_head));
  let nw = Math.floor(Math.random() * w);

  return [nh, nw];
}

function animateDiv(myclass) {
  $('.newBalloon').each(function(){
    let newq = makeNewPosition();
  $(this).animate({ top: newq[0], left: newq[1],opacity: 1, queue: false }, 3000, 
  function () {
    animateDiv(myclass);
  });
  });
}

function playAudio() { 
  pop_sound.play(); 
} 

let if_end = setInterval(endCheck, 100);
  function endCheck() {
      if(parseInt(attemps_value.innerHTML) == 0){
        endLevel();
      }
  }
  window.addEventListener("load",endCheck);

//   $(document).on('click', '.playground', function(){ 
//     $(document).on('click', '.newBalloon', function(){ 
//         alert($(this).find('.newParagraph').text());
//     });       
// });
  
 function balloonDoAction(){
     var x = $(".newBalloon");
       for (var j = 0; j < x.length; j++) {
         x[j].addEventListener('click', function(event) {
          let inner_value = parseInt($(this).find('.newParagraph').text())
          if(inner_value == expression_result)
          {
            click_counter++;
            score_value.innerHTML = click_counter;
            correct_value.innerHTML = parseInt(correct_value.innerHTML)+1;
            attemps_value.innerHTML = parseInt(attemps_value.innerHTML)-1;
            $(".newBalloon").remove();
            playAudio();
            respawn();
            randon_expession();
          }
          else{
            click_counter++;
            score_value.innerHTML = click_counter;
            attemps_value.innerHTML = parseInt(attemps_value.innerHTML)-1;
            wrong_value.innerHTML = parseInt(wrong_value.innerHTML)+1;
            $(this).remove();
            playAudio();
          }
        });
      }   
  }
  $('.playground').on("click", "div.newBalloon", balloonDoAction);
//document.querySelector(".newBalloon").addEventListener("click", balloonDoAction);
  
  function respawn() {
   // alert(popped);
      ball = [];
      for (let i = 0; i < balls_amount; i++) {
      let rend_p = makeNewPosition();
      ball[i] = new balloon("../IMG/balloons/ball_"+Math.floor(Math.random() * 5 + 1)+".png", 100, rnd());
      ball[i].create();
    }
  }


//Score-Attemps-Hits

function endLevel(){
  clearInterval(int);
  clearInterval(if_end);
  //timer.innerHTML = "Time is up!";
      score_container.style.padding = "10%";
      score_container.style.paddingTop = "0px";
      score_container.style.textAlign = "center";
      score_container.style.width = "100vw";
      score_container.style.height = "100vh";
      view.style.display = "none";
      let next = document.querySelector("#next_lvl");
      next.style.display = "inline";
}

//MOUSE COORDS
function curson_container_move(event) {
  let mouse_y = event.clientY + 5;
  let mouse_x = event.clientX + 5;
  curson_container.style.top = mouse_y + "px";
  curson_container.style.left = mouse_x + "px";
}
document.addEventListener('mousemove', curson_container_move);

function myTimer() {
    if (time > 0)
      timer.innerHTML = time--;
    if (time < 10)
      timer.style.color = "red";
    if (time <= 0) {
      endLevel();
      //clearInterval(myTimer);
    }
}

//On load events


window.addEventListener("load", myTimer);
