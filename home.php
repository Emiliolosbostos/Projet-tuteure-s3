<?php
session_start();
if(isset($_SESSION['valid'])){
    echo 'Bienvenue mon reuf';
}else{
    session_destroy();
    echo 'Bien essayé petit malin';
}

?>