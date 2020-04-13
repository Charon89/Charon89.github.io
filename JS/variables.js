let settings = JSON.parse(localStorage.getItem("settings"));
let balls_amount = settings.balls_amount;
let time = settings.time_lvl1;
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
let correct = document.querySelector("#correct");
let incorrect = document.querySelector("#incorrect");

let operand_1 = document.querySelector("#operand_1");
let operand_2 = document.querySelector("#operand_2");
attemps_value.innerHTML = settings.attemps;
//---- FULLSCREEN MODE
let fs_status = 0;
let fs = document.querySelector("#fs_button");
let hui = 10;

module.exprots = {
    hui
}