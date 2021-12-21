<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
ini_set('max_execution_time', 300); //300 seconds = 5 minutes. In case if your CURL is slow and is loading too much (Can be IPv6 problem)

error_reporting(E_ALL);

define('OAUTH2_CLIENT_ID', '857963281564827659'); //Your client Id
define('OAUTH2_CLIENT_SECRET', 'Wj076sPo_3K9bw1wVLGAjNtugzt4x-MV'); //Your secret client code

$authorizeURL = 'https://discordapp.com/api/oauth2/authorize';
$tokenURL = 'https://discordapp.com/api/oauth2/token';
$apiURLBase = 'https://discordapp.com/api/users/@me';

session_start();

// Start the login process by sending the user to Discord's authorization page
if(get('action') == 'login') {

  $params = array(
    'client_id' => OAUTH2_CLIENT_ID,
    'redirect_uri' => 'https://own-ac.com/login.php',
    'response_type' => 'code',
    'scope' => 'identify guilds'
  );

  // Redirect the user to Discord's authorization page
  header('Location: https://discordapp.com/api/oauth2/authorize' . '?' . http_build_query($params));
  die();
}


// When Discord redirects the user back here, there will be a "code" and "state" parameter in the query string
if(get('code')) {

  // Exchange the auth code for a token
  $token = apiRequest($tokenURL, array(
    "grant_type" => "authorization_code",
    'client_id' => OAUTH2_CLIENT_ID,
    'client_secret' => OAUTH2_CLIENT_SECRET,
    'redirect_uri' => 'https://own-ac.com/login.php',
    'code' => get('code')
  ));
  $logout_token = $token->access_token;
  $_SESSION['access_token'] = $token->access_token;


  header('Location: ' . $_SERVER['PHP_SELF']);
}

if(session('access_token')) {
	$user = apiRequest($apiURLBase);
	$_SESSION['id_discord'] = $user->id;
	//print_r($user);
	header('Location: admin/code.php');
}else if(session('access_token') && session('id_discord')){
	header('Location: admin/code.php');
}


if(get('action') == 'logout') {
  // This must to logout you, but it didn't worked(

  $params = array(
    'access_token' => $logout_token
  );

  // Redirect the user to Discord's revoke page
  header('Location: https://discordapp.com/api/oauth2/token/revoke' . '?' . http_build_query($params));
  die();
}

function apiRequest($url, $post=FALSE, $headers=array()) {
  $ch = curl_init($url);
  curl_setopt($ch, CURLOPT_IPRESOLVE, CURL_IPRESOLVE_V4);
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);

  $response = curl_exec($ch);


  if($post)
    curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($post));

  $headers[] = 'Accept: application/json';

  if(session('access_token'))
    $headers[] = 'Authorization: Bearer ' . session('access_token');

  curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

  $response = curl_exec($ch);
  return json_decode($response);
}

function get($key, $default=NULL) {
  return array_key_exists($key, $_GET) ? $_GET[$key] : $default;
}

function session($key, $default=NULL) {
  return array_key_exists($key, $_SESSION) ? $_SESSION[$key] : $default;
}
?>

<!doctype html>
<html lang="en">
  <head>
  	<title>Admin Area - Login</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

	<link href="https://fonts.googleapis.com/css?family=Lato:300,400,700,900&display=swap" rel="stylesheet">
	<link rel="stylesheet" href="admin/assets/login_assets/css/style.css">
	<style>
	@import "compass/css3";
	body {
		background-color: #2f3542;
		min-height: 100%;
		color: #fff;
		background-size: cover;
		background-position: center;
		font-family: Raleway, sans-serif;
		overflow-x: hidden;
      overflow-y: hidden;
	}
	canvas{
      position:absolute;
      left:0;
      top:0;
      z-index:-1;
	  
    }
    .container1{
      position:absolute;
      z-index:0;
      left:12px;
      top:10px;
    }
	</style>

	</head>
	<div id="container1">
  <canvas id="canvas"></canvas>
</div>
	<body >

	<section class="ftco-section">
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-md-12 col-lg-10">
					<div class="wrap d-md-flex">
						<div class="text-wrap p-4 p-lg-5 text-center d-flex align-items-center order-md-last">
							<div class="text w-100">
								<h2><br><span></span></h2>
								<p>pas d'inspi pr remplir ce beau carré vert, <br>si vs avez des idées n'hesitez pas</p>
								<!--<a href="" data-shoppy-product="8oAtmAS" class="btn btn-white btn-outline-white">Buy here !</a>
							--></div>
							</div>
								<div class="login-wrap p-4 p-lg-5">
							<div class="d-flex">
								<!--<div class="w-100">
									<h3 class="mb-4">Login</h3>
								</div>-->
								<div class="w-100">
									<p class="social-media d-flex justify-content-end">
										<a href="https://discord.gg/mVMkTGUsGY" class="social-icon d-flex align-items-center justify-content-center"><span class="fab fa-discord"></span></a>
									</p>
								</div>
							</div>
							<form action="admin/code.php" class="signin-form" method="POST">
								<div class="form-group mb-3">
									<input type="email" class="form-control" placeholder="Email" name="username" required>
								</div>
								<div class="form-group mb-3">
									<input type="password" class="form-control" placeholder="Password" name="password" required>
								</div>
								<?php
									if(isset($_SESSION['status']) && $_SESSION['status'] !='') 
									{
										echo '<h2 class="bg-danger text-white"> '.$_SESSION['status'].' </h2>';
										unset($_SESSION['status']);
									}
								?>
								<div class="form-group">
									<button name="login_btn" type="submit" class="form-control btn btn-primary submit px-3">Se connecter</button>
								</div>
								<div class="form-group">
									<center style="color:#656262;">ou</center>
								</div>
								<div class="form-group">
									<a href="#?action=login" class="form-control btn btn-info px-3"><i class="fab fa-discord"></i>&nbsp;Se connecter avec discord (bientot)</a>
								</div>
								<div class="form-group d-md-flex">
									<div class="w-50 text-left">
										<a href="index.php" class="tktpasigo"><i class="fas fa-long-arrow-alt-left tktpaskho"></i> &nbsp;Revenir en arrière</a>
									</div>
									<!--<div class="w-50 text-md-right">
										<a href="#">Forgot Password</a>
									</div>-->
								</div>
		          			</form>
		        		</div>
		      		</div>
				</div>
			</div>
		</div>
	</section>

	<script src="admin/js/jquery.min.js"></script>
  <script src="admin/js/popper.js"></script>
  <script src="admin/js/bootstrap.min.js"></script>
  <script src="admin/js/main.js"></script>
  <script src="https://kit.fontawesome.com/b7ce7823f4.js" crossorigin="anonymous"></script>
  <script>
			/**
		* Canvas Experiment
		* Based on https://tympanus.net/Development/AnimatedHeaderBackgrounds/index.html
		* Deps: GreenSocks TweenLite
		*/

		/**
		* Constructor
		*/
		function Animate(canvas, options) {
		this.canvas = canvas;
		this.options = defaults(options || {}, this.options);
		this.init();
		}

		/**
		* Default options
		*/
		Animate.prototype.options = {
		density: 10, // Affects how many poitns are created
		speed: 10, // Time in seconds to shift points
		sync: false, // Should points move in sync
		distance: 100, // Distance to move points
		lineColor: '23, 255, 2',
		circleColor: '23, 255, 2',
		radius: 20,
		lineWidth: 1,
		lines: 3,  // Number of closest lines to draw
		updateClosest : false, // Update closet points each loop
		mouse: true, // Link to mouse or random

		};

		/**
		* Setup everything
		*/
		Animate.prototype.init = function(){
		this.width = window.innerWidth;
		this.height = window.innerHeight;
		this.target = {
			position: {
			x: this.width / 2,
			y: this.height / 2
			}
		};

		// Setup canvas
		this.canvas.width = this.width;
		this.canvas.height = this.height;

		this.ctx = canvas.getContext('2d');

		window.addEventListener('resize', this.resize.bind(this));

		if(this.options.mouse === true && !('ontouchstart' in window) ) {
			window.addEventListener('mousemove', this.mousemove.bind(this));
		}

		this.points = [];
		for(var x = 0; x < this.width; x = x + this.width / this.options.density) {
			for(var y = 0; y < this.height; y = y + this.height/ this.options.density) {
			var point = new Point({
				x: x + Math.random() * this.width/ this.options.density,
				y: y + Math.random() * this.height/this.options.density
			}, this.ctx, this.points.length + 1, this.options);
			this.points.push(point);
			}
		}

		// Setup Circles
		for(var i in this.points) {
			this.points[i].circle = new Circle(this.points[i], this.ctx, this.options);
		}

		this.findClosest(); // Points

		this.animate(); // Start the loop

		this.shiftPoints(); // Start the tween loop

		if(this.options.mouse === false) {
			this.moveTarget(); // Start the random target loop
		}

		};

		/*
		* Cycles through each Point and finds its neighbors
		*/
		Animate.prototype.findClosest = function() {
		for(var i = 0; i < this.points.length; i++) {
			// Save the point
			var point = this.points[i];
			// Reset
			point.closest = [];
			// Cycle through the others
			for(var j = 0; j < this.points.length; j++) {
			// Point to test
			var testPoint = this.points[j];
			if(point.id !== testPoint.id) {
				var placed = false, k;
				for (k = 0; k < this.options.lines; k ++) {
				if(!placed) {
					if(typeof point.closest[k] === 'undefined') {
					point.closest[k] = testPoint;
					placed = true;
					}
				}
				}

				for(k = 0; k < this.options.lines; k++){
				if(!placed) {
					if(point.distanceTo(testPoint) < point.distanceTo(point.closest[k])) {
					point.closest[k] = testPoint;
					placed = true;
					}
				}
				}
			}
			}
		}
		};

		/**
		* Animation Loop
		*/
		Animate.prototype.animate = function() {
		var i;
		// Should we recalucate closest?
		if(this.options.updateClosest) {
			this.findClosest();
		}

		// Calculate Opacity
		for(i in this.points) {
			if(this.points[i].distanceTo(this.target, true) < 5000) {
			this.points[i].opacity = 0.4;
			this.points[i].circle.opacity = 0.6;
			} else if (this.points[i].distanceTo(this.target, true) < 10000) {
			this.points[i].opacity = 0.2;
			this.points[i].circle.opacity = 0.3;
			} else if (this.points[i].distanceTo(this.target, true) < 30000) {
			this.points[i].opacity = 0.1;
			this.points[i].circle.opacity = 0.2;
			} else {
			this.points[i].opacity = 0.05;
			this.points[i].circle.opacity = 0.05;
			}
		}
		// Clear
		this.ctx.clearRect(0, 0, this.width, this.height);
		for(i in this.points) {

			this.points[i].drawLines();
			this.points[i].circle.draw();
		}
		// Loop
		window.requestAnimationFrame(this.animate.bind(this));
		};

		/**
		* Starts each point in tween loop
		*/
		Animate.prototype.shiftPoints = function() {
		for(var i in this.points) {
			this.points[i].shift();
		}
		};


		/**
		* Make sure the canvas is the right size
		*/
		Animate.prototype.resize = function() {
		this.width = window.innerWidth;
		this.height = window.innerHeight;
		this.canvas.width = this.width;
		this.canvas.height = this.height;
		};

		/**
		* Mouse Move Event - Moves the target with the mouse
		* @param    event   {Object}   Mouse event
		*/
		Animate.prototype.mousemove = function(event) {
		if(event.pageX || event.pageY) {
			this.target.position.x = event.pageX;
			this.target.position.y = event.pageY;
		} else if(event.clientX || event.clientY) {
			this.target.position.x = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
			this.target.position.y = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
		}
		};

		/**
		* Randomly move the target
		*/
		Animate.prototype.moveTarget = function() {
		var _this = this;
		TweenLite.to(this.target.position, 2, {
			x : (Math.random() * (this.width - 200)) + 100,
			y : (Math.random() * (this.height - 200)) + 100,
			ease: Expo.easeInOut,
			onComplete: function() {
			_this.moveTarget();
			}
		});
		};

		/**
		* Point Constructor
		* @param    position   {Object}     set of x and u coords
		* @param    ctx        {Object}     Canvas context to draw on
		* @param    options    {Object}     options passed from main function
		*/
		function Point(position, ctx, id, options) {
		this.options = options || {};
		this.id = id;
		this.ctx = ctx;
		this.position = position || {x: 0, y: 0};
		this.origin = {
			x: this.position.x,
			y: this.position.y
		};
		this.opacity = 0;
		this.closest = [];
		}

		/**
		* Caluclates the distance to another point
		* @param    point    {Object}    Another Point
		* @param    abs      {Boolean}   Return the absolute value or not
		* @returns  {Number}
		*/
		Point.prototype.distanceTo = function(point, abs) {
		abs = abs || false;
		var distance = Math.pow(this.position.x - point.position.x, 2) + Math.pow(this.position.y - point.position.y, 2);
		return abs ? Math.abs(distance) : distance;
		};

		/**
		*  Draws lines to the closet points
		*/
		Point.prototype.drawLines = function() {
		for(var i in this.closest) {
			if(this.opacity  > 0) {
			this.ctx.beginPath();
			this.ctx.moveTo(this.position.x, this.position.y);
			var test = i + 1;
			if(!this.closest[test]) {
				test = 0;
			}
			this.ctx.lineCap = 'round';
			this.ctx.strokeStyle = 'rgba(' + this.options.lineColor + ', ' + this.opacity + ')';
			this.ctx.lineWidth = this.options.lineWidth;


			this.ctx.lineTo(this.closest[i].position.x, this.closest[i].position.y);

			this.ctx.stroke();
			}
		}
		};

		/**
		* Tween loop to move each point around it's origin
		*/
		Point.prototype.shift = function() {
		var _this = this,
			speed = this.options.speed;

		// Random the time a little
		if(this.options.sync !== true) {
			speed -= this.options.speed * Math.random();
		}
		TweenLite.to(this.position, speed, {
			x : (this.origin.x - (this.options.distance/2) + Math.random() * this.options.distance),
			y : (this.origin.y - (this.options.distance/2) + Math.random() * this.options.distance),
			ease: Expo.easeInOut,
			onComplete: function() {
			_this.shift();
			}
		});
		};

		/**
		* Circle Constructor
		* @param    point   {Object}    Point object
		* @param    ctx     {Object}    Context to draw on
		* @param    options {Object}    options passed from main function
		*/
		function Circle(point, ctx, options) {
		this.options = options || {};
		this.point = point || null;
		this.radius = this.options.radius || null;
		this.color = this.options.color || null;
		this.opacity = 0;
		this.ctx = ctx;
		}


		/**
		* Draws Circle to context
		*/
		Circle.prototype.draw = function() {
		if(this.opacity > 0) {
			this.ctx.beginPath();
			this.ctx.arc(this.point.position.x, this.point.position.y, this.options.radius, 0, 2 * Math.PI, false);
			this.ctx.fillStyle = 'rgba(' + this.options.circleColor + ', ' + this.opacity + ')';
			this.ctx.fill();
		}
		};

		// Get the balls rolling
		new Animate(document.getElementById('canvas'));


		/**
		* Utility Function to set default options
		* @param    object    {object}
		* @param    src  {object}
		*/
		function defaults(object, src) {
		for(var i in src) {
			if(typeof object[i] === 'undefined') {
			object[i] = src[i];
			}
		}
		return object;
		}
  </script>

	</body>
</html>

