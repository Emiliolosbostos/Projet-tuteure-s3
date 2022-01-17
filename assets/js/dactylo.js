var h1 = document.getElementsByTagName('time')[0];
var form = document.getElementById("formulaire");
var valider = document.getElementById("valider");
var rejouer = document.getElementById("rejouer");
var reset = document.getElementById('rst');
var answer = document.getElementById('answer');
var textToWrite = document.getElementById('textToWrite');
var sec = 0;
var min = 0;
var hrs = 0;
var t;

var star = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"25\" height=\"25\" fill=#ffffff class=\"bi bi-star-fill\" viewBox=\"0 0 16 16\" style='margin-bottom: 1em;' '>\n" +
    "<path d=\"M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z\"/>\n" +
    "</svg>"

rejouer.hidden = true;

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
    answer.value = "";
    sec = 0; min = 0; hrs = 0;
}

function score(){

        clearTimeout(t);
        answer.hidden = true;
        reset.hidden = true;
        valider.hidden = true;
        rejouer.hidden = false;

        // if (textToWrite.textContent === answer.value){
        //     textToWrite.style.color = "#34C924";
        //     textToWrite.textContent = "Bravo à toi tu as vu juste!";
        // }
        // else {
        //     textToWrite.style.color = "#f00020";
        //     textToWrite.textContent = "Dommage c'est un échec tu fera mieux la prochaine fois!";
        // }

       h1.textContent = "Vous as fini en " + hrs + " heures, " + min+" minutes et " + sec + " secondes !!";

       var tab1 = textToWrite.textContent.split('');
       var tab2 = answer.value.split('');
       textToWrite.innerHTML = "";
       var fautes = 0;


       for (let i = 0; i<tab1.length ; i++){
           let colorBG = "";
           let color = "";
           if (tab1[i] !== tab2[i]){
               colorBG = "background-color: #f00020";
               color = "color: white;"
               fautes++;
           }
           else{
               color = "color: #34C924;"
           }
           textToWrite.innerHTML += `<span style="`+ color + colorBG +`">` + tab1[i] + `</span>`;
       }

       var surplus = tab2.length - tab1.length;

       if (surplus >= 0){
           for (let i = 0; i<surplus ; i++){
               textToWrite.innerHTML += `<span style="color: #f00020; background-color: #f00020">.</span>`;
               fautes++;
           }
           pourcentReussite = Math.round(100 * (tab2.length - fautes) / tab1.length);
           form.innerHTML += `<div style="color: #0f6848; font-size: 20px; margin: 2em;" >Sur `+ tab1.length +` caractères à recopier, vous en avez `+ (tab2.length - fautes) +` caractères justes ce qui vous fait un total de <span style="font-size: 30px; color: yellow"> `+ pourcentReussite +`% de réussite!</span></div>`;
       }
       else {
           pourcentReussite = Math.round(100 * (tab1.length - fautes) / tab1.length);
           form.innerHTML += `<div style="color: #0f6848; font-size: 20px; margin: 2em;">Sur `+ tab1.length +` caractères à recopier, vous en avez `+ (tab1.length - fautes) +` caractères justes ce qui vous fait un total de <span style="font-size: 30px; color: yellow"> `+ pourcentReussite +`% de réussite!</span></div>`;
       }

       var nbStar = 0;

       if (pourcentReussite >= 95){
           nbStar = 5;
       }
       else if(pourcentReussite >= 80){
           nbStar = 4;
       }
       else if(pourcentReussite >= 50){
           nbStar = 3;
       }
       else if(pourcentReussite >= 25){
           nbStar = 2;
       }
       else{
           nbStar = 1;
       }

       form.innerHTML += `<div id="stars"></div>`;
       var putStars = document.getElementById("stars");

       for(let i = 0; i<nbStar; i++){
           putStars.innerHTML += '<span>'+ star +'</span>';
       }
}

valider.onclick = function () {
    score();
}

function pressEnter() {
    if (window.event.keyCode === 13) score();
}



