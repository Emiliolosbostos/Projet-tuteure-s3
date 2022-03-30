<html>

<head>
    <meta http-equiv="Content-Language" content="fr">
    <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
    <link href="../assets/css/codeAtrous.css" rel="stylesheet">
    <title>Code à trous</title>

</head>

<body>
    <?php include('../includes/navbar.php'); ?>
    <h1>
        <span>C</span>ode à Trous
    </h1>
    <p><hr></p>

    <h2>
    <form method="post" action="codeAtrous.php">
        <label for="language">Langage:</label>
        <select class="language" name="language" id="language">
            <option value="Java" <?php if(isset($_POST["language"]) && $_POST["language"]=="Java") echo("selected"); ?> >
                Java
            </option>
            <option value="Python" <?php if(isset($_POST["language"]) && $_POST["language"]=="Python") echo("selected"); ?> >
                Python
            </option>
            <option value="HTML" <?php if(isset($_POST["language"]) && $_POST["language"]=="HTML") echo("selected"); ?> >
                HTML
            </option>
            <option value="Javascript" <?php if(isset($_POST["language"]) && $_POST["language"]=="Javascript") echo("selected"); ?> >
                Javascript
            </option>
            <option value="C" <?php if(isset($_POST["language"]) && $_POST["language"]=="C") echo("selected"); ?> >
                C
            </option>
        </select>
        <br><br>
    </h2>


    <h3 align="center" id="question">
    </h3>


    <form method="post" action="codeAtrous.php" name="form2">
        <div id="code">
        </div>
        <br>
        <div align="center" id="response">

        <div>

        <div align=center id="check">
            <input type=button value="Vérifier" onclick="check()" ></input>
        </div>
    </form>

    <br>

    <div id="score">
        Score: <span id="scoreNow"></span> / <span id="scoreTotal"></span>
    </div>
<script src="../assets/js/codeAtrous.js" type="text/javascript" ></script>
</body>
</html>