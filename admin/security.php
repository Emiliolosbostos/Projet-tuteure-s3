<?php
session_start();
include('database/dbconfig.php');
if($connection)
{
    // echo "Database Connected";
}
else
{
    header("Location: database/dbconfig.php");
}

if(!$_SESSION['username'])
{
    header('Location: ../login.php');
}

if(isset($_POST['logout_btn']))
{
    session_destroy();
    unset($_SESSION['username']);
    header('Location: ../login.php');
}
if(isset($_SESSION['username'])){
    if($_SESSION['usertype'] == "admin" && stristr($_SERVER['PHP_SELF'], 'admin') == false){
        header("Location: admin/");
        $_SESSION['status'] = "Vous ne pouvez pas accédez au panel client avec un compte admin.";
        $_SESSION['status_code'] = "error";
    }
    if($_SESSION['usertype'] == "user" && stristr($_SERVER['PHP_SELF'], 'admin') == true){
        header("Location: ../login.php");
        $_SESSION['status'] = "Vous ne pouvez pas accédez au panel admin avec un compte client.";
        $_SESSION['status_code'] = "error";
    }
}
?>