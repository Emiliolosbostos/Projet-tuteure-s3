<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="public/stylesheet/accueil.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
    <script src="https://code.jquery.com/jquery-3.4.1.js"></script>
</head>
<body>
  <?php include('includes/navbar.php'); ?>
  <?php
  session_start();
  if(isset($_SESSION['valid'])){
      echo 'Bienvenue mon reuf';
  }else{
      session_destroy();
      echo 'Bien essayé petit malin';
  }

  ?>
<div class="content">
    <button id="Quiz" class="btn" onclick="window.location.href='quiz.php';">
        Quiz
    </button>
    <button id="Dactylographie" class="btn" onclick="window.location.href='dactylo.php';">
        Dactylographie
    </button>
    <button id="CodeATrou" class="btn" onclick="window.location.href='codeATrou.php';">
        Code à trou
    </button>
</div>
</body>
</html>