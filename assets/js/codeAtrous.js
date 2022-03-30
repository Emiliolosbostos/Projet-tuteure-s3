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
                    "                <strong>//But: Donner à taillePop le premier argument de ligne de commande</strong><br>\n" +
                    "                public static void main(String[] args) { <br>\n" +
                    "                <br>\n" +
                    "                &emsp;int taillePop;<br>\n" +
                    "                <br>\n" +
                    "                &emsp;if (args.length != 1) {<br>\n" +
                    "                &emsp;&emsp;System.err.println(\"utilisation : java Exo taille_pop_initiale\");<br>\n" +
                    "                &emsp;&emsp;System.exit(1);<br>\n" +
                    "                &emsp;}<br>\n" +
                    "                <br>\n" +
                    "                &emsp;taillePop = Integer.parseInt(<input name=\"rep1\" id=\"answer\" type=\"text\" size=10 maxlength=10 checked>);<br>\n" +
                    "                &emsp;if ((taillePop < 0) || (taillePop > 100)) taillePop = 100;<br>\n" +
                    "                <br>\n" +
                    "                }<br>\n" +
                    "            </blockquote>",
                "<blockquote id=\"question\">\n" +
                "            <strong>//But: Creer un tableau cells à la bonne taille</strong><br>\n" +
                "            public class IntArrayExemple { <br>\n" +
                "            <br>\n" +
                "            &emsp;public int[] cells;<br>\n" +
                "            <br>\n" +
                "            &emsp;public IntArrayExemple(int size) { <br>\n" +
                "            &emsp;&emsp;// création du tableau <br>\n" +
                "            &emsp;&emsp;// initialisation des int à 0 <br>\n" +
                "            &emsp;&emsp;cells = new int[<input name=\"rep1\" id=\"answer\" type=\"text\" size=10 maxlength=10 checked></input>]; <br>\n" +
                "            &emsp;&emsp;for (int i=0; i&lt;size; i++) cells[i] = 0; <br>\n" +
                "            &emsp;} <br>\n" +
                "            } <br>\n" +
                "            <br>\n" +
                "        </blockquote>",
                "<blockquote id=\"question\">\n" +
                "                <strong>//But: Faire appel au constructeur parent</strong><br>\n" +
                "                public class Fantome extends Mobile {<br>\n" +
                "                &emsp;public Fantome(Case emplacement, int type, int[] desti) {<br>\n" +
                "                &emsp;&emsp;<input name=\"rep1\" id=\"answer\" type=\"text\" size=10 maxlength=10 checked>(emplacement,type);<br>\n" +
                "                &emsp;&emsp;this.type=type;<br>\n" +
                "                &emsp;&emsp;gum=false;<br>\n" +
                "                &emsp;&emsp;door=false;<br>\n" +
                "                &emsp;&emsp;this.desti=desti;<br>\n" +
                "                &emsp;&emsp;destination=emplacement.model.getCase(desti[0],desti[1]);<br>\n" +
                "                &emsp;}<br>\n" +
                "                }<br>\n" +
                "            </blockquote>"
            ],
                [
                    "args[0]",
                    "size",
                    "super"
                ]
            ];
            setTotalQuestionNumber(tabQuestions[0].length);
            break;
        case 'Python':
            tabQuestions = [
                [
                    "<blockquote id=\"question\">\n" +
                    "                <strong>#But: Compléter la fonction factorielle récursive</strong><br>\n" +
                    "                <strong>#Ne pas ajouter d'espace entre les nombres et les signes (ex: 1 + 3 au lieu de 1+3)</strong><br>\n" +
                    "                def factorielle(n):<br>\n" +
                    "                &emsp;if n == 0:<br>\n" +
                    "                &emsp;&emsp;return 1<br>\n" +
                    "                &emsp;else:<br>\n" +
                    "                &emsp;&emsp;return n * <input name=\"rep1\" id=\"answer\" type=\"text\" size=20 maxlength=20 checked><br>\n" +
                    "            </blockquote>",
                    "<blockquote id=\"question\">\n" +
                    "                <strong>#But: Remplir la fonction de décomposition d'un nombre</strong><br>\n" +
                    "                from math import *<br>\n" +
                    "                def decomp(n):<br>\n" +
                    "                &emsp;d=2<br>\n" +
                    "                &emsp;div=[]<br>\n" +
                    "                &emsp;while d &lt; <input name=\"rep1\" id=\"answer\" type=\"text\" size=10 maxlength=10 checked>:<br>\n" +
                    "                &emsp;&emsp;if n%d==0:<br>\n" +
                    "                &emsp;&emsp;&emsp;div.append(d)<br>\n" +
                    "                &emsp;&emsp;&emsp;d-=1<br>\n" +
                    "                &emsp;&emsp;&emsp;n//=d<br>\n" +
                    "                &emsp;&emsp;d+=1<br>\n" +
                    "                &emsp;div.append(n)<br>\n" +
                    "                &emsp;return div<br>\n" +
                    "            </blockquote>",
                    "<blockquote id=\"question\">\n" +
                    "                <strong>#But: renverser la liste </strong><br>\n" +
                    "                def reverse(L):<br>\n" +
                    "                &emsp;return L[<input name=\"rep1\" id=\"answer\" type=\"text\" size=10 maxlength=10 checked></input>]<br>\n" +
                    "                <br>\n" +
                    "            </blockquote>"

                ],
                [
                    "factorielle(n-1)",
                    "sqrt(n)",
                    "::-1"
                ]
            ];
            setTotalQuestionNumber(tabQuestions[0].length);
            break;
        case 'HTML':
            tabQuestions = [
                [
                    "<blockquote id=\"question\">\n" +
                    "                <strong>&lt;!-- But: Ajouter une balise image ainsi que la bonne option pour lui passer le chemin --&gt;</strong><br>\n" +
                    "                &lt;div class=\"proposition\"&gt;<br>\n" +
                    "                &emsp;&lt;<input name=\"rep1\" id=\"answer\" type=\"text\" size=10 maxlength=10 checked>=\"img/Auxelles-Haut.jpg\"&gt;<br>\n" +
                    "                &emsp;&lt;span&gt;<br>\n" +
                    "                &emsp;&emsp;Auxelles-Haut<br>\n" +
                    "                &emsp;&lt;/span&gt;<br>\n" +
                    "                &lt;/div&gt;<br>\n" +
                    "            </blockquote>",
                    "<blockquote id=\"question\">\n" +
                    "                <strong>&lt;!-- But: Sélectionner HTML par défaut dans la liste au chargement de la page --&gt;</strong><br>\n" +
                    "                &lt;select id=\"language\"&gt<br>\n" +
                    "                &emsp;&lt;option value=\"Java\"&gt<br>\n" +
                    "                &emsp;&emsp;Java<br>\n" +
                    "                &emsp;&lt;/option&gt<br><br>\n" +
                    "                &emsp;&lt;option value=\"Python\"&gt<br>\n" +
                    "                &emsp;&emsp;Python<br>\n" +
                    "                &emsp;&lt;/option&gt<br><br>\n" +
                    "                &emsp;&lt;option value=\"HTML\" <input name=\"rep1\" id=\"answer\" type=\"text\" size=10 maxlength=10 checked>&gt<br>\n" +
                    "                &emsp;&emsp;HTML<br>\n" +
                    "                &emsp;&lt;/option&gt<br><br>\n" +
                    "                &lt;/select&gt<br>\n" +
                    "            </blockquote>",
                    "<blockquote id=\"question\">\n" +
                    "                <strong>&lt;!--But: Remplir l'input avec un exemple transparent (jj/mm/aaaa), qui n'a pas de valeur--&gt;</strong><br>\n" +
                    "                &lt;div class=\"row\"&gt;<br>\n" +
                    "                &emsp;&lt;div class=\"col-md-2\"&gt;<br>\n" +
                    "                &emsp;&emsp;Date de départ :<br>\n" +
                    "                &emsp;&lt;/div&gt;<br>\n" +
                    "                &emsp;&lt;input type=\"text\" name=\"depart\" id=\"depart\" <input name=\"rep1\" id=\"answer\" type=\"text\" size=20 maxlength=20 checked>=\"jj/mm/aaaa\" required/&gt;<br>\n" +
                    "                &lt;/div&gt;\n" +
                    "            </blockquote>"
                ],
                [
                    "img src",
                    "selected",
                    "placeholder"
                ]
            ];
            setTotalQuestionNumber(tabQuestions[0].length);
            break;
        default:
            tabQuestions = [
                [
                    "<blockquote id=\"question\">\n" +
                    "                <strong>//But: Donner à taillePop le premier argument de ligne de commande</strong><br>\n" +
                    "                public static void main(String[] args) { <br>\n" +
                    "                <br>\n" +
                    "                &emsp;int taillePop;<br>\n" +
                    "                <br>\n" +
                    "                &emsp;if (args.length != 1) {<br>\n" +
                    "                &emsp;&emsp;System.err.println(\"utilisation : java Exo taille_pop_initiale\");<br>\n" +
                    "                &emsp;&emsp;System.exit(1);<br>\n" +
                    "                &emsp;}<br>\n" +
                    "                <br>\n" +
                    "                &emsp;taillePop = Integer.parseInt(<input name=\"rep1\" id=\"answer\" type=\"text\" size=10 maxlength=10 checked>);<br>\n" +
                    "                &emsp;if ((taillePop < 0) || (taillePop > 100)) taillePop = 100;<br>\n" +
                    "                <br>\n" +
                    "                }<br>\n" +
                    "            </blockquote>",
                    "<blockquote id=\"question\">\n" +
                    "            <strong>//But: Creer un tableau cells à la bonne taille</strong><br>\n" +
                    "            public class IntArrayExemple { <br>\n" +
                    "            <br>\n" +
                    "            &emsp;public int[] cells;<br>\n" +
                    "            <br>\n" +
                    "            &emsp;public IntArrayExemple(int size) { <br>\n" +
                    "            &emsp;&emsp;// création du tableau <br>\n" +
                    "            &emsp;&emsp;// initialisation des int à 0 <br>\n" +
                    "            &emsp;&emsp;cells = new int[<input name=\"rep1\" id=\"answer\" type=\"text\" size=10 maxlength=10 checked></input>]; <br>\n" +
                    "            &emsp;&emsp;for (int i=0; i&lt;size; i++) cells[i] = 0; <br>\n" +
                    "            &emsp;} <br>\n" +
                    "            } <br>\n" +
                    "            <br>\n" +
                    "        </blockquote>",
                    "<blockquote id=\"question\">\n" +
                    "                <strong>//But: Faire appel au constructeur parent</strong><br>\n" +
                    "                public class Fantome extends Mobile {<br>\n" +
                    "                &emsp;public Fantome(Case emplacement, int type, int[] desti) {<br>\n" +
                    "                &emsp;&emsp;<input name=\"rep1\" id=\"answer\" type=\"text\" size=10 maxlength=10 checked>(emplacement,type);<br>\n" +
                    "                &emsp;&emsp;this.type=type;<br>\n" +
                    "                &emsp;&emsp;gum=false;<br>\n" +
                    "                &emsp;&emsp;door=false;<br>\n" +
                    "                &emsp;&emsp;this.desti=desti;<br>\n" +
                    "                &emsp;&emsp;destination=emplacement.model.getCase(desti[0],desti[1]);<br>\n" +
                    "                &emsp;}<br>\n" +
                    "                }<br>\n" +
                    "            </blockquote>"
                ],
                [
                    "args[0]",
                    "size",
                    "super"
                ]
            ];
            setTotalQuestionNumber(tabQuestions[0].length);
            break;
    }

    console.log(tabQuestions[0].length)
    if (index<=tabQuestions[0].length-1)
        document.getElementById("code").innerHTML = tabQuestions[0][index];
    else {
        document.getElementById("code").innerHTML = "Félicitations, tu as parcouru l'ensemble des questions de ce langage!"
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
    console.log('debug')
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
    document.getElementById("num").textContent = value+1;

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

