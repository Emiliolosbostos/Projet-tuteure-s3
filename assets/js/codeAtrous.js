// - TROUVER DES QUESTIONS
// - ARRANGER CSS



// lis le select
var language = document.getElementById("language").value;
var selectElement = document.getElementById("language");
selectElement.addEventListener('change', (event) => {
    var language = event.target.value;
    languageChange(language);
});

//initialisation variables
var index=0;
var score=0;
var nbQuestion=0;
//tableau questions
var tabQuestions;
var input = document.getElementById('answer');

//Initialisation jeu
init("Java");

//Selon le langage choisi, crée un tableau avec les questions et réponses
function setQuestion(language,index) {
    switch (language) {
        case 'Java':
            tabQuestions = [
                [
                "<blockquote id=\"question\">\n" +
                "            public class IntArrayExemple { <br>\n" +
                "            &emsp;public int[] cells;<br>\n" +
                "            <br>\n" +
                "            &emsp;public IntArrayExemple(int size) { <br>\n" +
                "            &emsp;&emsp;// création du tableau <br>\n" +
                "            &emsp;&emsp;// initialisation des int à 0 <br>\n" +
                "            &emsp;&emsp;cells = new int[<input name=\"rep1\" id=\"answer\" type=text size=10 maxlength=\"10\" checked></input>]; <br>\n" +
                "            &emsp;&emsp;for (int i=0; i&lt;size; i++) cells[i] = 0; <br>\n" +
                "            &emsp;} <br>\n" +
                "            } <br>\n" +
                "            <br>\n" +
                "        </blockquote>",
                "<blockquote id=\"question\">\n" +
                "    public class IntArrayExemple { <br>\n" +
                "    &emsp;public exemple2[] <input name=\"rep1\" id=\"answer\" type=text size=20 maxlength=\"20\" checked></input>;<br>\n" +
                "    <br>\n" +
                "    } <br>\n" +
                "    <br>\n" +
                "</blockquote>",
                "<blockquote id=\"question\">\n" +
                "    public class IntArrayExemple { <br>\n" +
                "    &emsp;public exemple3[] <input name=\"rep1\" id=\"answer\" type=text size=20 maxlength=\"20\" checked></input>;<br>\n" +
                "    <br>\n" +
                "    } <br>\n" +
                "    <br>\n" +
                "</blockquote>"
            ],
                [
                    "size",
                    "answer",
                    "answer"
                ]
            ];
            setTotalQuestionNumber(tabQuestions[0].length);
            break;
        case 'Python':
            tabQuestions = [
                [
                    "<blockquote id=\"question\">\n" +
                    "            public class IntArrayExemple { <br>\n" +
                    "            &emsp;public int[] cells;<br>\n" +
                    "            <br>\n" +
                    "            &emsp;public IntArrayExejgk hjfghdes int à 0 <br>\n" +
                    "            &emsp;&emsp;cells = new int[<input name=\"rep1\" id=\"answer\" type=text size=10 maxlength=\"10\" checked></input>]; <br>\n" +
                    "            &emsp;&emsp;for (int i=0; i&lt;size; i++) cells[i] = 0; <br>\n" +
                    "            &emsp;} <br>\n" +
                    "            } <br>\n" +
                    "            <br>\n" +
                    "        </blockquote>",
                    "<blockquote id=\"question\">\n" +
                    "    public class IntArrayExemple { <br>\n" +
                    "    &emsp;public exemple2[] <input name=\"rep1\" id=\"answer\" type=text size=20 maxlength=\"20\" checked></input>;<br>\n" +
                    "    <br>\n" +
                    "    } <br>\n" +
                    "    <br>\n" +
                    "</blockquote>"
                ],
                [
                    "size",
                    "answer"
                ]
            ];
            setTotalQuestionNumber(tabQuestions[0].length);
            break;
        case 'HTML':
            tabQuestions = [
                [
                    "<blockquote id=\"question\">\n" +
                    "            public class IntArrayExemple { <br>\n" +
                    "            &emsp;public int[] cells;<br>\n" +
                    "            <br>\n" +
                    "            &emsp;public IntArrayExemple(int size) { <br>\n" +
                    "            &emsp;&emsp;// création du tableau <br>\n" +
                    "            &emsp;&emsp;// initialisation des int à 0 <br>\n" +
                    "            &emsp;&emsp;cells = new int[<input name=\"rep1\" id=\"answer\" type=text size=10 maxlength=\"10\" checked></input>]; <br>\n" +
                    "            &emsp;&emsp;for (int i=0; i&lt;size; i++) cells[i] = 0; <br>\n" +
                    "            &emsp;} <br>\n" +
                    "            } <br>\n" +
                    "            <br>\n" +
                    "        </blockquote>",
                    "<blockquote id=\"question\">\n" +
                    "    public class IntArrayExemple { <br>\n" +
                    "    &emsp;public exemple2[] <input name=\"rep1\" id=\"answer\" type=text size=20 maxlength=\"20\" checked></input>;<br>\n" +
                    "    <br>\n" +
                    "    } <br>\n" +
                    "    <br>\n" +
                    "</blockquote>",
                    "<blockquote id=\"question\">\n" +
                    "    public class IntArrayExemple { <br>\n" +
                    "    &emsp;public exemple3[] <input name=\"rep1\" id=\"answer\" type=text size=20 maxlength=\"20\" checked></input>;<br>\n" +
                    "    <br>\n" +
                    "    } <br>\n" +
                    "    <br>\n" +
                    "</blockquote>"
                ],
                [
                    "size",
                    "answer",
                    "answer"
                ]
            ];
            setTotalQuestionNumber(tabQuestions[0].length);
            break;
        case 'Javascript':
            tabQuestions = [
                [
                    "<blockquote id=\"question\">\n" +
                    "            public class IntArrayExemple { <br>\n" +
                    "            &emsp;public int[] cells;<br>\n" +
                    "            <br>\n" +
                    "            &emsp;public IntArrayExemple(int size) { <br>\n" +
                    "            &emsp;&emsp;// création du tableau <br>\n" +
                    "            &emsp;&emsp;// initialisation des int à 0 <br>\n" +
                    "            &emsp;&emsp;cells = new int[<input name=\"rep1\" id=\"answer\" type=text size=10 maxlength=\"10\" checked></input>]; <br>\n" +
                    "            &emsp;&emsp;for (int i=0; i&lt;size; i++) cells[i] = 0; <br>\n" +
                    "            &emsp;} <br>\n" +
                    "            } <br>\n" +
                    "            <br>\n" +
                    "        </blockquote>",
                    "<blockquote id=\"question\">\n" +
                    "    public class IntArrayExemple { <br>\n" +
                    "    &emsp;public exemple2[] <input name=\"rep1\" id=\"answer\" type=text size=20 maxlength=\"20\" checked></input>;<br>\n" +
                    "    <br>\n" +
                    "    } <br>\n" +
                    "    <br>\n" +
                    "</blockquote>",
                    "<blockquote id=\"question\">\n" +
                    "    public class IntArrayExemple { <br>\n" +
                    "    &emsp;public exemple3[] <input name=\"rep1\" id=\"answer\" type=text size=20 maxlength=\"20\" checked></input>;<br>\n" +
                    "    <br>\n" +
                    "    } <br>\n" +
                    "    <br>\n" +
                    "</blockquote>"
                ],
                [
                    "size",
                    "answer",
                    "answer"
                ]
            ];
            setTotalQuestionNumber(tabQuestions[0].length);
            break;
        case 'C':
            tabQuestions = [
                [
                    "<blockquote id=\"question\">\n" +
                    "            public class IntArrayExemple { <br>\n" +
                    "            &emsp;public int[] cells;<br>\n" +
                    "            <br>\n" +
                    "            &emsp;public IntArrayExemple(int size) { <br>\n" +
                    "            &emsp;&emsp;// création du tableau <br>\n" +
                    "            &emsp;&emsp;// initialisation des int à 0 <br>\n" +
                    "            &emsp;&emsp;cells = new int[<input name=\"rep1\" id=\"answer\" type=text size=10 maxlength=\"10\" checked></input>]; <br>\n" +
                    "            &emsp;&emsp;for (int i=0; i&lt;size; i++) cells[i] = 0; <br>\n" +
                    "            &emsp;} <br>\n" +
                    "            } <br>\n" +
                    "            <br>\n" +
                    "        </blockquote>",
                    "<blockquote id=\"question\">\n" +
                    "    public class IntArrayExemple { <br>\n" +
                    "    &emsp;public exemple2[] <input name=\"rep1\" id=\"answer\" type=text size=20 maxlength=\"20\" checked></input>;<br>\n" +
                    "    <br>\n" +
                    "    } <br>\n" +
                    "    <br>\n" +
                    "</blockquote>",
                    "<blockquote id=\"question\">\n" +
                    "    public class IntArrayExemple { <br>\n" +
                    "    &emsp;public exemple3[] <input name=\"rep1\" id=\"answer\" type=text size=20 maxlength=\"20\" checked></input>;<br>\n" +
                    "    <br>\n" +
                    "    } <br>\n" +
                    "    <br>\n" +
                    "</blockquote>"
                ],
                [
                    "size",
                    "answer",
                    "answer"
                ]
            ];
            setTotalQuestionNumber(tabQuestions[0].length);
            break;
        default:
            tabQuestions = [
                [
                    "<blockquote id=\"question\">\n" +
                    "            public class IntArrayExemple { <br>\n" +
                    "            &emsp;public int[] cells;<br>\n" +
                    "            <br>\n" +
                    "            &emsp;public IntArrayExemple(int size) { <br>\n" +
                    "            &emsp;&emsp;// création du tableau <br>\n" +
                    "            &emsp;&emsp;// initialisation des int à 0 <br>\n" +
                    "            &emsp;&emsp;cells = new int[<input name=\"rep1\" id=\"answer\" type=text size=10 maxlength=\"10\" checked></input>]; <br>\n" +
                    "            &emsp;&emsp;for (int i=0; i&lt;size; i++) cells[i] = 0; <br>\n" +
                    "            &emsp;} <br>\n" +
                    "            } <br>\n" +
                    "            <br>\n" +
                    "        </blockquote>",
                    "<blockquote id=\"question\">\n" +
                    "    public class IntArrayExemple { <br>\n" +
                    "    &emsp;public exemple2[] <input name=\"rep1\" id=\"answer\" type=text size=20 maxlength=\"20\" checked></input>;<br>\n" +
                    "    <br>\n" +
                    "    } <br>\n" +
                    "    <br>\n" +
                    "</blockquote>",
                    "<blockquote id=\"question\">\n" +
                    "    public class IntArrayExemple { <br>\n" +
                    "    &emsp;public exemple3[] <input name=\"rep1\" id=\"answer\" type=text size=20 maxlength=\"20\" checked></input>;<br>\n" +
                    "    <br>\n" +
                    "    } <br>\n" +
                    "    <br>\n" +
                    "</blockquote>"
                ],
                [
                    "size",
                    "answer",
                    "answer"
                ]
            ];
            setTotalQuestionNumber(tabQuestions[0].length);
            break;
    }

    console.log(tabQuestions[0].length)
    if (index<=tabQuestions[0].length-1)
        document.getElementById("code").innerHTML = tabQuestions[0][index];
    else {
        document.getElementById("code").innerHTML = "BRAVO, TU AS PARCOURU TOUTES LES QUESTIONS"
        document.getElementById("check").innerHTML = "";
        document.getElementById("question").textContent = "";
    }
}

function languageChange(language) {
    index=0;
    score=0;
    nbQuestion=0;
    init(language);
    // setQuestionNumber(value)
    // setQuestion(language,index);
}
//appui du bouton vérifier
function check() {
    nbQuestion++;
    setQuestionNumber(nbQuestion);
    errors(index);
    index++;

    language = document.getElementById("language").value;
    setQuestion(language,index);
    // setScore(nbQuestion);
    // document.getElementById("score").innerHTML = "Score: <span id=\"scoreNow\"></span> / <span id=\"scoreTotal\"></span>";
}

//vérifie la réponse
function errors(index) {
    response = document.getElementById("response")
    answer = document.getElementById("answer").value
    console.log(answer);
    if (answer==tabQuestions[1][index]) {
        var txt = "Juste";
        score++;
    }
    if (answer!=tabQuestions[1][index]) var txt = "Faux, la réponse était: "+tabQuestions[1][index];
    document.getElementById("scoreNow").innerHTML=score;
    alert(txt);
}

function setQuestionNumber(value){
    document.getElementById("num").textContent = value;

    if(nbQuestion>0) {
        document.getElementById("score").innerHTML="Score: <span id=\"scoreNow\"></span> / <span id=\"scoreTotal\"></span>";
        if(index<=tabQuestions[0].length-1)
            document.getElementById("scoreTotal").textContent = value;
    }
}

//met le nombre de question a value
function setTotalQuestionNumber(value) {
    totalQuestionNumberElement = document.getElementById("total");
    totalQuestionNumberElement.textContent = value;
}

//initialise une partie
function init(language){
    document.getElementById("question").innerHTML = "Question: <span id=\"num\"></span> / <span id=\"total\"></span>";
    document.getElementById("check").innerHTML = "<input type=button value=\"Vérifier\" onclick=\"check()\" ></input>";
    document.getElementById("score").innerHTML="";
    // document.getElementById("scoreNow").textContent="0";
    setQuestion(language,index);
    setQuestionNumber(nbQuestion);
}

