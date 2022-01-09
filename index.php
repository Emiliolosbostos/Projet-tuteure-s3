<?php
session_start();

$questions = array(
  1 => "Quel est le langage informatique qui permet d'embellir nos pages HTML ?",
  2 => "Quelle est la lettre qui sert de nom à un des langages de programmation les plus connues ?",
  3 => "Quel est le nom du serpent qui sert également de nom à un langage de programmation ?"
);

$reponses = array(
  1 => "CSS",
  2 => "C",
  3 => "PYTHON"
);

?>

<!DOCTYPE html>
<html>
<canvas>
</canvas>
<head>
    <title>tkt</title>
    <link href="style.css" rel="stylesheet" type="text/css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
</head>
<body>
  <div class="div1"> 
    <div class="div2">

    <?php
    if(isset($_POST['pswd'])){
      $pswd = $_POST['pswd'];
      $pswd = strtoupper($pswd);
      if($pswd == $reponses[$_SESSION['rand_keys']]){
        $_SESSION['valid'] = 'test';
        //echo($_SESSION['rand_keys']);
        header('Location: client/home.php');
      }else{
        if(isset($_SESSION['valid'])){
          unset($_SESSION['valid']);
        }
        $_SESSION['unvalid'] = 'unvalid';
        echo ('
        <div class="frame">
          <div class="modal">
            <img src="https://100dayscss.com/codepen/alert.png" width="44" height="38" />
            <span class="title">Mauvaise réponse !</span>
            <p>Accès refusé</p>
            <div class="button">Réessayer</div>
          </div>
        </div>
        <script>
        $(".button").bind("click", function() {
          $(".modal").addClass("hide");
          setTimeout(function() {
            window.location.href = "index.php";
          }, 750);
        });
      </script>
        ');
      }
    }else if(!isset($_SESSION['unvalid'])){
      $rand_keys = array_rand($reponses, 1);
      $_SESSION['rand_keys'] = $rand_keys;
      //echo($rand_keys);
    }
    ?>


      <form action="index.php" method="POST">
        <label for="pswd"><?php echo $questions[$_SESSION['rand_keys']]; ?></label>
      </br>
        <input type="password" name="pswd" id="pswd" class="box">
      </br>
        <input type="submit" value="Valider" class="confirm" id="tkt"/>
    </form>
    </div>

  </div>

  <script>
  // Initialising the canvas
  var canvas = document.querySelector('canvas'),
      ctx = canvas.getContext('2d');

  // Setting the width and height of the canvas
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // Setting up the letters
  var letters = 'πϖρϱσςฆก小ABCDEFGHIJKLMLOPQRSTUVWXYZ01八';
  letters = letters.split('');

  // Setting up the columns
  var fontSize = 10,
      columns = canvas.width / fontSize;

  // Setting up the drops
  var drops = [];
  for (var i = 0; i < columns; i++) {
    drops[i] = 1;
  }

  // Setting up the draw function
  function draw() {
    ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    for (var i = 0; i < drops.length; i++) {
      var text = letters[Math.floor(Math.random() * letters.length)];
      ctx.fillStyle = '#aaa';
      ctx.fillText(text, i * fontSize, drops[i] * fontSize);
      drops[i]++;
      if (drops[i] * fontSize > canvas.height && Math.random() > .95) {
        drops[i] = 0;
      }
    }
  }

  // Loop the animation
  setInterval(draw, 33);
  </script>
  
   
</body>
</html>
  

  
