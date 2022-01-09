var h1 = document.getElementsByTagName('time')[0];
var valider = document.getElementById("valider");
var reset = document.getElementById('rst');
var answer = document.getElementById('answer');
var textToWrite = document.getElementById('textToWrite');
var sec = 0;
var min = 0;
var hrs = 0;
var t;

let textes = [
    "Un chasseur sachant chasser sans son chien est un bon chasseur.",
    "Cinq chiens chassent six chats.",
    "Suis-je bien chez ce cher Serge ?",
];

textToWrite.textContent = textes[Math.floor(Math.random() * (2 - 0 + 1))];

function tick(){
    sec++;
    if (sec >= 60) {
        sec = 0;
        min++;
        if (min >= 60) {
            min = 0;
            hrs++;
        }
    }
}
function add() {
    tick();
    h1.textContent = (hrs > 9 ? hrs : "0" + hrs)
        + ":" + (min > 9 ? min : "0" + min)
        + ":" + (sec > 9 ? sec : "0" + sec);
    timer();
}
function timer() {
    t = setTimeout(add, 1000);
}

answer.onclick = function () {
    timer();
    this.onclick = undefined;
}
reset.onclick = function() {
    h1.textContent = "00:00:00";
    answer.textContent = "";
    seconds = 0; minutes = 0; hours = 0;
}

function score(){

        clearTimeout(t);
        answer.hidden = true;
        reset.hidden = true;
        valider.hidden = true;

        if (textToWrite.textContent === answer.value){
            textToWrite.style.color = "#34C924";
            textToWrite.textContent = "Bravo à toi tu as vu juste!";
        }
        else {
            textToWrite.style.color = "#f00020";
            textToWrite.textContent = "Dommage c'est un échec tu fera mieux la prochaine fois!";
        }

        h1.textContent = "Vous as fini en " + hrs + " heures, " + min+" minutes et " + sec + " secondes !!";
}

valider.onclick = function () {
    score();
}

