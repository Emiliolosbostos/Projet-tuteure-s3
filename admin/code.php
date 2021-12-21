<?php
include('security.php');

if(isset($_POST['registerbtn']))
{
    $username = $_POST['username'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $cpassword = $_POST['confirmpassword'];
    $usertype = $_POST['usertype'];
    
    $email_query = "SELECT * FROM users WHERE email='$email' ";
    $email_query_run = mysqli_query($connection, $email_query);
    if(mysqli_num_rows($email_query_run) > 0)
    {
        $_SESSION['status'] = "Email Already Taken. Please Try Another one.";
        $_SESSION['status_code'] = "error";
        header('Location: admin/register.php');  
    }
    else
    {
        if($password === $cpassword)
        {
            $query = "INSERT INTO users (username,id_discord,password,usertype) VALUES ('$username','$email','$password','$usertype')";
            $query_run = mysqli_query($connection, $query);
            
            if($query_run)
            {
                // echo "Saved";
                $_SESSION['status'] = "Admin Profile Added";
                $_SESSION['status_code'] = "success";
                header('Location: admin/register.php');
            }
            else 
            {
                $_SESSION['status'] = "Admin Profile Not Added";
                $_SESSION['status_code'] = "error";
                header('Location: admin/register.php');  
            }
        }
        else 
        {
            $_SESSION['status'] = "Password and Confirm Password Does Not Match";
            $_SESSION['status_code'] = "warning";
            header('Location: admin/register.php');  
        }
    }

}

if(isset($_POST['updatebtn']))
{
    $id = $_POST['edit_id'];
    $username = $_POST['edit_username'];
    $email = $_POST['edit_email'];
    $password = $_POST['edit_password'];
    $usertype = $_POST['edit_usertype'];

    $query = "UPDATE users SET username='$username', email='$email', password='$password', usertype='$usertype' WHERE id='$id' ";
    $query_run = mysqli_query($connection, $query);

    if($query_run)
    {
        $_SESSION['status'] = "Your Data is Updated";
        $_SESSION['status_code'] = "success";
        header('Location: admin/register.php'); 
    }
    else
    {
        $_SESSION['status'] = "Your Data is NOT Updated";
        $_SESSION['status_code'] = "error";
        header('Location: admin/register.php'); 
    }
}


if(isset($_POST['delete_btn']))
{
    $id = $_POST['delete_id'];

    $query = "DELETE FROM users WHERE id='$id' ";
    $query_run = mysqli_query($connection, $query);

    if($query_run)
    {
        $_SESSION['status'] = "Your Data is Deleted";
        $_SESSION['status_code'] = "success";
        header('Location: admin/register.php'); 
    }
    else
    {
        $_SESSION['status'] = "Your Data is NOT DELETED";       
        $_SESSION['status_code'] = "error";
        header('Location: admin/register.php'); 
    }    
}

if(isset($_POST['login_btn']))
{
    $username = $_POST['username'];
    $password_login = $_POST['password']; 

    $query = "SELECT * FROM users WHERE email='$username' AND password='$password_login' LIMIT 1";
    $query_run = mysqli_query($connection, $query);
    $results = mysqli_fetch_array($query_run);


    if($results > 1)
    {
        //$_SESSION['id_discord'] = $results['id_discord'];
        $_SESSION['username'] = $results['username'];
        $_SESSION['usertype'] = $results['usertype'];
        header('Location: index.php');
    }
    else
    {
        $_SESSION['status'] = "Email / Password is Invalid";
        header('Location: ../login.php');
    }
    
}


if(isset($_SESSION['id_discord']))
{
    $id_discord = $_SESSION['id_discord'];

    $query = "SELECT * FROM users WHERE id_discord='$id_discord' LIMIT 1";
    $query_run = mysqli_query($connection, $query);
    $results = mysqli_fetch_array($query_run);


    if($results > 1)
    {
        if($results['blacklist'] == 1){
            session_unset();
            $_SESSION['status'] = "You are blacklisted !";
            header('Location: ../login.php');
        }else if($results['sub_time'] <= 0 || $results['sub_time'] == "NONE"){
            session_unset();
            $_SESSION['status'] = "License time expired or doesn't exist !";
            header('Location: ../login.php');
        }else {
            $_SESSION['id_discord'] = $results['id_discord'];
            $_SESSION['username'] = $results['username'];
            $_SESSION['usertype'] = $results['usertype'];
            $_SESSION['license'] = $results['license'];
            header('Location: index.php');
        }
    }
    else
    {
        session_unset();
        $_SESSION['status'] = "Email / Password is invalid";
        header('Location: ../login.php');
    }
    
}



//exec

if(isset($_POST['paysafebtn']))
{
    $exec = $_POST['exec'];
    $status = $_POST['status'];
    $username = $_POST['username'];
    
    $query = "SELECT * FROM exec WHERE exec='$exec' ";
    $query_run = mysqli_query($connection, $paysafe_query);
    if(mysqli_num_rows($email_query_run) > 0)
    {
        $_SESSION['status'] = "Paysafecard déja utilisée. Veuillez entrez une paysafecard valide.";
        $_SESSION['status_code'] = "error";
        header('Location: admin/index.php');  
    }
    else
    {
        $query = "INSERT INTO exec (exec,status) VALUES ('$exec','$status')";
        $query_run = mysqli_query($connection, $query);
        if($query_run)
        {
            // echo "Saved";
            $_SESSION['status'] = "Paysafecard ajouté !";
            $_SESSION['status_code'] = "success";
            $_SESSION['taille'] = strlen($paysafecard);
            header('Location: admin/index.php');
        }
        else 
        {
            $_SESSION['status'] = "Paysafecard non ajouté !";
            $_SESSION['status_code'] = "error";
            header('Location: admin/index.php');  
        }
    }
}

if(isset($_POST['psc_delete_btn']))
{
    $id = $_POST['psc_delete_id'];

    $query = "DELETE FROM exec WHERE id='$id' ";
    $query_run = mysqli_query($connection, $query);

    if($query_run)
    {
        $_SESSION['status'] = "Your Data is Deleted";
        $_SESSION['status_code'] = "success";
        header('Location: admin/index.php'); 
    }
    else
    {
        $_SESSION['status'] = "Your Data is NOT DELETED";       
        $_SESSION['status_code'] = "error";
        header('Location: admin/index.php'); 
    }    
}

if(isset($_POST['server_updatebtn']))
{
    $id_discord = $_SERVER['id_discord'];
    $name = $_POST['edit_paysafe'];
    $ip = $_POST['ip'];

    $query = "UPDATE exec SET exec='$exec', status='$status' WHERE id='$id' ";
    $query_run = mysqli_query($connection, $query);

    if($query_run)
    {
        $_SESSION['status'] = "Your Data is Updated";
        $_SESSION['status_code'] = "success";
        header('Location: admin/index.php'); 
    }
    else
    {
        $_SESSION['status'] = "Your Data is NOT Updated";
        $_SESSION['status_code'] = "error";
        header('Location: admin/index.php'); 
    }
}




?>
