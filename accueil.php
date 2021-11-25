<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="css/bootstrap.css">
    <link rel="stylesheet" href="perso.css">
    <style>
        .gris {
            background: #656262;
            color: lavender;
        }
    </style>
</head>
<body>
     <header>
         <div class="container-fluid py-2">
                 <h1 style="text-align: center">Nom du site</h1>
                 <nav class="navbar navbar-expand-lg navbar-light" style="border-radius: 3px">
                     <div class="container-fluid">
                         <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                             <span class="navbar-toggler-icon"></span>
                         </button>
                         <div class="collapse navbar-collapse" id="navbarSupportedContent">
                             <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                 <li class="nav-item">
                                     <img height="50em" ; src="logoptut.jpeg">
                                 </li>
                                 <li class="nav-item">
                                     <a class="nav-link active" aria-current="page" href="accueil.php">
                                         <button class="btn btn-outline-success" type="submit">
                                             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16">
                                                 <path fill-rule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
                                                 <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
                                             </svg>
                                         </button>
                                     </a>
                                 </li>

                                 <li class="nav-item">
                                     <a class="nav-link active" aria-current="page" href="accueil.php">
                                         <button class="btn btn-outline-success" type="submit">
                                             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-earmark-bar-graph" viewBox="0 0 16 16">
                                                 <path d="M10 13.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-6a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v6zm-2.5.5a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-1zm-3 0a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-1z"/>
                                                 <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z"/>
                                             </svg>
                                         </button>
                                     </a>
                                 </li>

                             </ul>
                             <form action="accueil.php" method="post">
                                 <label><input type="text" name="rechercher">
                                     <button class="btn btn-outline-success" type="submit">
                                         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                             <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                                         </svg>
                                     </button>
                                 </label>
                             </form>
                             <li class="nav-item">
                                 <a class="nav-link" href="#">
                                     <button type="button" class="btn btn-success">
                                         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                                             <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                                             <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                                         </svg>
                                     </button>
                                 </a>
                             </li>
                         </div>
                     </div>
                 </nav>
         </div>
     </header>

    <main>
            <div class="container-fluid mt-4">
                <div class="container">
                    <div class="row m-2 p-2">
                        <article class="col-3 m-5 p-2 text-center" style="background: #656262; border: 2px black solid; color: lavender; border-radius: 4px;">
                            <h1>Dactilographie</h1>
                            <video src="demo.mp4" loop autoplay class="w-100" style="border-radius: 3px"></video>
                                <a href="#">
                                    <button class="btn">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#34C924" class="bi bi-reception-4" viewBox="0 0 16 16">
                                            <path d="M0 11.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2zm4-3a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-5zm4-3a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-8zm4-3a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-11z"/>
                                        </svg>
                                    </button>
                                </a>
                                <a href="#"><button class="bouton btn">JOUER</button></a>
                                <a href="#">
                                    <button class="btn">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#34C924" class="bi bi-info" viewBox="0 0 16 16">
                                            <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                                        </svg>
                                    </button>
                                </a>
                        </article>
                        <article class="col-3 m-5 p-2 text-center" style="background: #656262; border: 2px black solid; color: lavender; border-radius: 4px;">
                            <h1>Quiz</h1>
                            <video src="demo.mp4" loop autoplay class="w-100" style="border-radius: 3px"></video>
                            <a href="#">
                                <button class="btn">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#34C924" class="bi bi-reception-4" viewBox="0 0 16 16">
                                        <path d="M0 11.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2zm4-3a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-5zm4-3a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-8zm4-3a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-11z"/>
                                    </svg>
                                </button>
                            </a>
                            <a href="#"><button class="bouton btn">JOUER</button></a>
                            <a href="#">
                                <button class="btn">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#34C924" class="bi bi-info" viewBox="0 0 16 16">
                                        <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                                    </svg>
                                </button>
                            </a>
                        </article>
                        <article class="col-3 m-5 p-2 text-center" style="background: #656262; border: 2px black solid; color: lavender; border-radius: 4px;">
                            <h1>Code à trou</h1>
                            <video src="demo.mp4" loop autoplay class="w-100" style="border-radius: 3px"></video>
                                <a href="#">
                                    <button class="btn">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#34C924" class="bi bi-reception-4" viewBox="0 0 16 16">
                                            <path d="M0 11.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2zm4-3a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-5zm4-3a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-8zm4-3a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-11z"/>
                                        </svg>
                                    </button>
                                </a>
                                <a href="#"><button class="bouton btn">JOUER</button></a>
                                <a href="#">
                                    <button class="btn">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#34C924" class="bi bi-info" viewBox="0 0 16 16">
                                            <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                                        </svg>
                                    </button>
                                </a>
                        </article>
                    </div>
                </div>
            </div>
    </main>

    <footer class="py-4 text-center gris mt-3">
         <div class="container">
             <p>footer ici</p>
         </div>
     </footer>


</body>
</html>