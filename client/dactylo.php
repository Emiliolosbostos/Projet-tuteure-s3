<!DOCTYPE html>
<html lang="fr">
<head>
    <link rel="shortcut icon" href="#">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <title>Dactylographie</title>

    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css">
    <link href="../assets/css/dactylo.css" rel="stylesheet">
</head>

<body>
<?php include('../includes/navbar.php'); ?>

<div class="container">
    <div class="writeCase">
        <div id="dact">
            <h1 style="margin: 0.3em;"><span>D</span>actylographie
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="#34C924" class="bi bi-body-text" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M0 .5A.5.5 0 0 1 .5 0h4a.5.5 0 0 1 0 1h-4A.5.5 0 0 1 0 .5Zm0 2A.5.5 0 0 1 .5 2h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5Zm9 0a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5Zm-9 2A.5.5 0 0 1 .5 4h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Zm5 0a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5Zm7 0a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Zm-12 2A.5.5 0 0 1 .5 6h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5Zm8 0a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5Zm-8 2A.5.5 0 0 1 .5 8h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5Zm7 0a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5Zm-7 2a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1h-8a.5.5 0 0 1-.5-.5Zm0 2a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5Zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Z"/>
                </svg>
            </h1>

            <h2>Veuillez recopier ce qu'il y a écris en arrière plan le plus rapidement possible</h2>

            <form NAME="form" onsubmit="return false">

                <p id="textToWrite" style="font-size: 1.3em; color: #34C924; margin-bottom: 1em ">ceci est un text a recopier</p>
                <textarea NAME="rep1" id="answer" TYPE=text checked style=" font-size: xx-large; text-align: start; height: 10em; width: 30em;"></textarea>
                <h4><time>00:00:00</time></h4>
                <button id="rst" style="font-size: large">Réessayer</button>
                <button id="valider" style="font-size: large">Valider</button>

            </form>

            <button id="rejouer" class="btn" onclick="window.location.href='dactylo.php';">REJOUER</button>
            <p id="progress"></p>
        </div>
    </div>
    <div id="answers">
    </div>
</div>
<script src="../assets/js/dactylo.js" type="text/javascript" ></script>

</body>



</html>