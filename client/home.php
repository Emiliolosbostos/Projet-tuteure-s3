<?php
session_start();
if(isset($_SESSION['valid'])){
  echo '';
}else{
  session_destroy();
  header('Location: ../');
}
?>
<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="../assets/css/accueil.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
    <script src="https://code.jquery.com/jquery-3.4.1.js"></script>

    <title>Home</title>
</head>
<body>
<?php include('../includes/navbar.php'); ?>
<div class="content">
    <button id="Quiz" class="btn" onclick="window.location.href='quiz.php';">
        Quiz
    </button>
    <button id="Dactylographie" class="btn" onclick="window.location.href='dactylo.php';">
        Dactylographie
    </button>
    <button id="CodeATrou" class="btn" onclick="window.location.href='codeAtrous.php';">
        Code à trou
    </button>
    <table>
        <thead>
            <tr>
                <th>Pseudo</th>
                <th onclick="sortColumn('age')" class="wh">Score</th>
            </tr>
        </thead>
        <tbody id="tableData"></tbody>
        </table>
</div>
 <script src="../assets/js/accueil.js" type="text/javascript" ></script>
<?php include('../includes/footer.php'); ?>
</body>
</html>