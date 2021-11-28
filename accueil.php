<!DOCTYPE html>
<!-- Created By CodingNepal -->
<html lang="en" dir="ltr">
   <head>
      <meta charset="utf-8">
      <!-- <title>Responsive Navbar with Searchbox</title> -->
      <link rel="stylesheet" href="style.css">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
      <script src="https://code.jquery.com/jquery-3.4.1.js"></script>
   </head>
   <body>
      <nav>
         <ul>
            <li class="logo">SquizzGAme</li>
            <li class="btn"><span class="fas fa-bars"></span></li>
            <div class="items">
               <li><a href="#">Accueil</a></li>
               <li><a href="#">A propos</a></li>
               <li>
                   <a href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-smile" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                        <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"/>
                    </svg>
                   </a>
               </li>

            </div>
            <li class="search-icon">
               <input type="search" placeholder="Rechercher">
               <label class="icon">
               <span class="fas fa-search"></span>
               </label>
            </li>
         </ul>
      </nav>
      <div class="content">
      <script>
         $('nav ul li.btn span').click(function(){
           $('nav ul div.items').toggleClass("show");
           $('nav ul li.btn span').toggleClass("show");
         });
      </script>
   </body>
</html>