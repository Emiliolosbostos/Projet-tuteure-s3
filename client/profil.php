<?php session_start(); ?>
<!DOCTYPE HTML>
<html lang="fr">
<head>
  <link rel="shortcut icon" href="#">
  <meta charset="UTF-8">

  <title>Profil</title>

<!--  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css">
-->
  <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
  <link href="../assets/css/profil.css" rel="stylesheet">
</head>

<body>
  <?php include('../includes/navbar.php'); ?>
  <div class="bloc" id="iconChoose">
      <strong>Choisis un nouvel avatar : </strong>
      <input type="image" src="../assets/res/icons/icons8-finn-64.png" id="icone" onclick="chooseIconFinn()">
      <input type="image" src="../assets/res/icons/icons8-anonymous-mask-64.png" id="icone" onclick="chooseIconAnonymous()">
      <input type="image" src="../assets/res/icons/icons8-futurama-bender-64.png" id="icone" onclick="chooseIconFuturama()">
      <input type="image" src="../assets/res/icons/icons8-homer-simpson-64.png" id="icone" onclick="chooseIconHomer()">
      <input type="image" src="../assets/res/icons/icons8-mermaid-64.png" id="icone" onclick="chooseIconMermaid()">
  </div>
  <div class="bloc" id="container">
    <div id="picOfProfil">
<!--        <input type="image" src="../assets/res/icons/icons8-finn-64.png" id="icone" onclick="changeIcon()">-->
    </div>
  <div class="infoPerso">
      Name: <?php echo ($_SESSION['username']); ?>
      <br>
      Usertype : <?php echo ($_SESSION['usertype']); ?>
  </div>
    <div class="stats">
        <div id="stat">
            <div id="quiz">
                Le quiz:
            </div>
        </div>
        <div id="stat">
            <div id="codeATrou">
                Code à trou:
            </div>
        </div>
        <div id="stat">
            <div id="dactylo">
                Dactylographie:
            </div>
        </div>
    </div>


  </div>
  <script src="../assets/js/profil.js" type="text/javascript" ></script>

  <?php include('../includes/footer.php'); ?>
</body>
</html>
<?php
function chooseIconFinn() {
    $icon = "../assets/res/icons/icons8-finn-64.png";

}
?>