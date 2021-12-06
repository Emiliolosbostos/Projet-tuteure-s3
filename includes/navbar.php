<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <style>
        body .navbar {
          width: 100%;
          height: 7%;
          top: 0;
          position: fixed;
          border: 2px #17ff02 solid;
          background-color: #dfe4ea;
         /* vertical-align: center;*/
          display: flex;
        }
        body .navbar button:hover {
          background: #17ff02;
          transition: 0.5s;
          color: #202020;
        }
        body .navbar button:active {
          transform: scale(0.9);
          transition: transform 0.1s;
        }
        body .navbar button {
          margin-left: 5%;
          margin-top: 1%;
          width: 100px;
          height: 50%;
          border-radius: 5px;
          cursor: pointer;
          border: none;
          background: #202020;
          font-weight: bolder;
          color: #17ff02;
        }
    </style>
</head>
<body>
    <div class="navbar">
        <button id="accueil" class="btn" onclick="window.location.href='home.php';">
          <strong>Accueil</strong>
        </button>
        <button id="profil" class="btn">
          <strong>Profil</strong>
        </button>
    </div>
</body>
</html>
