<div class="container">
    <div class="row">
        <div class="col-md-14 mx-auto mt-5">
            <?php if(isset($_SESSION['status'])): ?>
                <div class="alert <?php if($_SESSION['status_code'] == 'success'){echo 'alert-success';}elseif($_SESSION['status_code'] == 'error'){echo 'alert-danger';}?>" role="alert">
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <?php echo $_SESSION['status']; ?>
                    <br>
                </div>
            <?php endif; ?>
            <?php unset($_SESSION['status']); ?>
        </div>
    </div>
</div>

