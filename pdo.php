<?php

$user = "login";
$pass = "mot_de_passe";

try {
    $db = new PDO("mysql:host=localhost;dbname=ton_nom_de_BDD",$user,$pass); //Ne pas oublier de changer vos settings pour vous connecter à votre propre BDD et si on veut héberger le site sur un serveur il faudra renseigner l'IP
}catch (PDOException $e){
    print "Erreur :" . $e->getMessage() . "<br/>";
    die();
}

?>