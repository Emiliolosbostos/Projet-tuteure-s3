<?php
include('security.php');
include('includes/header.php'); 
include('includes/navbar.php');
?>

<!-- Begin Page Content -->
<div class="container-fluid">

  <!-- Page Heading -->
  <div class="d-sm-flex align-items-center justify-content-between mb-4">
    <h1 class="h3 mb-0 text-gray-800">Jeux</h1>
  </div>

  <!-- Content Row -->
  <div class="row">
  </div>

  <div class="card border-left-primary shadow mb-4">
    <div class="card-header py-3">
      <h6 class="m-0 font-weight-bold text-primary">QUIZ
      </h6>
    </div>
    <div class="card-body">
      <form action="code.php" method="POST">
        <label>Catégorie</label>
        <select name="cat" id="cat" class="form-control">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select><br>
        <label>Question</label><br>
        <input type="text" name="question" class="form-control" value=""><br>
        <label>Réponse 1</label><br>
        <input type="text" name="reponse1" class="form-control" value=""><br>
        <label>Réponse 2</label><br>
        <input type="text" name="reponse2" class="form-control" value=""><br>
        <button type="submit" name="savewebhooks" class="btn btn-primary" style="width:100%;">Save</button>
      </form>


    </div>
  </div>




  <div class="card border-left-primary shadow mb-4">
       <div class="card-header py-3">
         <h6 class="m-0 font-weight-bold text-primary">DACTYLOGRAPHIE
         </h6>
       </div>
       <div class="card-body">
         <form action="code.php" method="POST">
           <label>Catégorie</label>
           <select name="cat" id="cat" class="form-control">
             <option value="1">1</option>
             <option value="2">2</option>
             <option value="3">3</option>
             <option value="4">4</option>
           </select>
           <br>
           <label>Text</label><br>
           <textarea contenteditable="true" type="text" name="text1" class="form-control" value="" rows="10" cols="50" style="resize: none;"></textarea><br>

           <button type="submit" name="savewebhooks" class="btn btn-primary" style="width:100%;">Save</button>
         </form>
       </div>
     </div>


     <div class="card border-left-primary shadow mb-4">
            <div class="card-header py-3">
              <h6 class="m-0 font-weight-bold text-primary">CODE A TROUS
              </h6>
            </div>
            <div class="card-body">
              <form action="code.php" method="POST">
                <label>Catégorie</label>
                <select name="cat" id="cat" class="form-control">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
                <br>
                <label>Text</label><br>
                <textarea contenteditable="true" type="text" name="text1" class="form-control" value="" rows="10" cols="50" style="resize: none;"></textarea><br>

                <button type="submit" name="savewebhooks" class="btn btn-primary" style="width:100%;">Save</button>
              </form>
            </div>
          </div>







</div>
<?php
include('includes/scripts.php');
include('includes/footer.php');
?>