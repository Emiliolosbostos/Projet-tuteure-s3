function erreurl(numliste) {
    laliste=eval("form1.liste"+numliste);
    return laliste[laliste.selectedIndex].value;
}

function message(erreurs) {
    if (erreurs==0) alert('Bravo, aucune erreur !');
    else if (erreurs==1) alert('Tu as fait une erreur !');
    else alert('Tu as fait '+erreurs+' erreurs !');
}


function verif1() {
    erreurs=0;
    if (form2.rep1.value!="int i=0; i<size; i++") erreurs++;
    // if (form2.rep2.value!="180") erreurs++;
    message(erreurs);
}

var input = document.getElementById('answer');
input.focus();
input.select();