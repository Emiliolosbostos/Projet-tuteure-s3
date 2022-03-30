<?php
include('admin/database/dbconfig.php');
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
    if(isset($_POST['pswd2']) && isset($_POST['username'])){
        $username = $_POST['username'];
        $pswd2 = $_POST['pswd2'];

        $req = $pdo->prepare('SELECT * FROM users WHERE username=:username AND password=:password LIMIT 1');
        $req->bindParam(':username', $username);
        $req->bindParam(':password', $pswd2);
        $req->execute();

        $count = $req->rowCount();
        $results = $req->fetch();
        if($results > 1)
        {
            //$_SESSION['id_discord'] = $results['id_discord'];
            $_SESSION['username'] = $results['username'];
            $_SESSION['usertype'] = $results['usertype'];
            $_SESSION['valid'] = 'test';
            //echo($_SESSION['rand_keys']);
            header('Location: client/home.php');
        }
        else
        {
            echo ('
                <div class="frame">
                  <div class="modal">
                    <img src="https://100dayscss.com/codepen/alert.png" width="44" height="38" />
                    <span class="title">Username or Password invalid !</span>
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
            header('Location: index.php');
        }
    }
    else if(isset($_POST['password']) && isset($_POST['username1']) && isset($_POST['email']) && isset($_POST['pswd'])){
      $pswd = $_POST['pswd'];
      $pswd = strtoupper($pswd);
      if($pswd == $reponses[$_SESSION['rand_keys']]){
          $username = $_POST['username1'];
          $email = $_POST['email'];
          $password = $_POST['password'];

          $req = $pdo->prepare('SELECT * FROM users WHERE email=:email');
          $req->bindParam(':email', $email);
          $req->execute();
          $count = $req->rowCount();
          if($count > 0)
          {
              $_SESSION['status'] = "Email Already Taken. Please Try Another one.";
              $_SESSION['status_code'] = "error";
              header('Location: index.php');
          }
          else
          {

              $req = $pdo->prepare('INSERT INTO users (username,email,password) VALUES (:username,:email,:password)');
              $req->bindParam(':username', $username);
              $req->bindParam(':email', $email);
              $req->bindParam(':password', $password);
              $req->execute();

              if($req)
              {
                  // echo "Saved";
                  $_SESSION['status'] = "Register success";
                  $_SESSION['status_code'] = "success";
                  $_SESSION['valid'] = 'test';
                  //echo($_SESSION['rand_keys']);
                  header('Location: client/home.php');
              }
              else
              {
                  $_SESSION['status'] = "Register failed";
                  $_SESSION['status_code'] = "error";
                  header('Location: index.php');
              }
         }
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



    <div class="form">
          <div class="tab-content">
            <div id="signup">
              <form action="index.php" method="POST">
                  <label for="pswd"><?php echo $questions[$_SESSION['rand_keys']]; ?></label>
                    </br>
                        <input type="text" name="pswd" id="pswd" class="box" placeholder="Answer">
                    </br>
                      <input type="text" name="username1" id="username1" class="box" placeholder="Username">
                    </br>
                        <input type="email" name="email" id="email" class="box" placeholder="Email">
                    </br>
                      <input type="password" name="password" id="password" class="box" placeholder="Password">
                  </br>
                      <input type="submit" value="Sign Up" class="confirm" id="tkt"/><br><br>
                      <div class="tab"><a href="#login">or Log In</a></div>
              </form>

            </div>

            <div id="login">
              <form action="index.php" method="POST">
                  <input type="text" name="username" id="username" class="box" placeholder="Username">
                </br>
                  <input type="password" name="pswd2" id="pswd2" class="box" placeholder="Password">
              </br>
                  <input type="submit" value="Login" class="confirm" id="tkt"/><br><br>
                  <div class="tab"><a href="#signup">or Sign Up</a></div>
              </form>

            </div>
          </div><!-- tab-content -->
    </div> <!-- /form -->

    <script>
        $('.form').find('input, textarea').on('keyup blur focus', function (e) {

          var $this = $(this),
              label = $this.prev('label');

        	  if (e.type === 'keyup') {
        			if ($this.val() === '') {
                  label.removeClass('active highlight');
                } else {
                  label.addClass('active highlight');
                }
            } else if (e.type === 'blur') {
            	if( $this.val() === '' ) {
            		label.removeClass('active highlight');
        			} else {
        		    label.removeClass('highlight');
        			}
            } else if (e.type === 'focus') {

              if( $this.val() === '' ) {
            		label.removeClass('highlight');
        			}
              else if( $this.val() !== '' ) {
        		    label.addClass('highlight');
        			}
            }

        });

        $('.tab a').on('click', function (e) {

          e.preventDefault();

          $(this).parent().addClass('active');
          $(this).parent().siblings().removeClass('active');

          target = $(this).attr('href');

          $('.tab-content > div').not(target).hide();

          $(target).fadeIn(600);

        });
        </script>




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
  $("#signup"). css("display", "none");
  </script>


</body>
</html>



