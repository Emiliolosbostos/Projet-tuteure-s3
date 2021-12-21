<?php
include('security.php');
include('includes/header.php'); 
include('includes/navbar.php');
?>

<!-- Begin Page Content -->
<div class="container-fluid">

  <!-- Page Heading -->
  <div class="d-sm-flex align-items-center justify-content-between mb-4">
    <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
  </div>

  <!-- Content Row -->
  <div class="row">

    <!-- Earnings (Monthly) Card Example -->
    <div class="col-xl-3 col-md-6 mb-4">
      <div class="card border-left-primary shadow h-100 py-2">
        <div class="card-body">
          <div class="row no-gutters align-items-center">
            <div class="col mr-2">
              <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">Total Users</div>
              <div class="h5 mb-0 font-weight-bold text-gray-800">

                <?php
                  //$row = mysqli_num_rows($query_run);
                  $query = "SELECT count(id) FROM users";
                  $query_run = mysqli_query($connection, $query);
                  $_SESSION['users_nb'] = mysqli_num_rows($query_run);
                  echo '<h4>'.$_SESSION['users_nb'].'</h4>';
                ?>

              </div>
            </div>
            <div class="col-auto">
              <i class="fas fa-users fa-2x text-gray-300"></i>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="col-xl-3 col-md-6 mb-4">
      <div class="card border-left-primary shadow h-100 py-2">
        <div class="card-body">
          <div class="row no-gutters align-items-center">
            <div class="col mr-2">
              <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">Total Jeux</div>
              <div class="h5 mb-0 font-weight-bold text-gray-800">
                <?php
                $query = "SELECT count(id) FROM jeux";
                $query_run = mysqli_query($connection, $query);
                $_SESSION['jeux_nb'] = mysqli_num_rows($query_run);
                echo '<h4>'.$_SESSION['jeux_nb'].'</h4>';
                ?>
              </div>
            </div>
            <div class="col-auto">
              <i class="fas fa-server fa-2x text-gray-300"></i>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>

  <!-- Content Row -->


  


<!-- DEBUT --- execs -->
<div class="card border-left-primary shadow mb-4">
  <div class="card-header py-3">
    <h6 class="m-0 font-weight-bold text-primary">Users
    </h6>
  </div>
  <div class="card-body">

    <div class="table-responsive">
    <?php

        $query = "SELECT * FROM users";
        $query_run = mysqli_query($connection, $query);
    ?>
      <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
        <thead>
          <tr>
              <th>ID</th>
              <th>Username</th>
              <th>Email</th>
              <th>Password</th>
              <th>Date Inscription</th>
              <th>IP</th>
              <th>Discord ID</th>
              <th>Usertype</th>
              <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
        <?php
        if(mysqli_num_rows($query_run) > 0)
        {
            while($row = mysqli_fetch_assoc($query_run))
            {
               ?>
          <tr>
            <td><?php  echo $row['id']?></td>
            <td><?php  echo $row['username']; ?></td>
            <td><?php  echo $row['email']; ?></td>
            <td><?php  echo $row['password']; ?></td>
            <td><?php  echo $row['dateIncription']; ?></td>
            <td><?php  echo $row['ip']; ?></td>
            <td><?php  echo $row['id_discord']; ?></td>
            <td><?php  echo $row['usertype']; ?></td>
            
            <td>
              <!-- DEBUT fenetre edit user -->
              <div class="modal fade" id="edituser" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">Edit your server infos</h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <form action="../code.php" method="POST">

                      <div class="modal-body">

                          <div class="form-group">
                              <label>Name </label>
                              <input type="text" name="name" class="form-control" value="<?php echo $row['nom']?>" autocomplete="off" required>
                          </div>
                          <div class="form-group">
                              <label>IP</label>
                              <input type="text" name="ip" class="form-control" value="<?php echo $row['ip']?>" required>
                              <small class="error" style="color: red;"></small>
                          </div>
                      
                      </div>
                      <div class="modal-footer">
                        <button type="submit" name="paysafebtn" class="btn btn-primary">Save</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <!-- FIN fenetre edit server -->

              <button class="btn btn-primary" type="button" name="edit_btn" data-toggle="modal" data-target="#edituser"> EDIT</button>
              <button class="btn btn-danger" type="button" name="edit_btn" data-toggle="modal" data-target="#edituser"> DELETE</button>

            </td>
          </tr>
          <?php
            }
        }
        else {
            echo "No Record Found";
        }
        ?>
        </tbody>
      </table>
   
    </div>
  </div>
</div>
<!-- FIN ----- execs -->






  <?php
include('includes/scripts.php');
include('includes/footer.php');
?>