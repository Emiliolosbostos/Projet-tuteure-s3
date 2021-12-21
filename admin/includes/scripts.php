  <!-- Bootstrap core JavaScript-->
  <script src="assets/vendor/jquery/jquery.min.js"></script>
  <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

  <!-- Core plugin JavaScript-->
  <script src="assets/vendor/jquery-easing/jquery.easing.min.js"></script>
  

  <!-- Custom scripts for all pages-->
  <script src="assets/js/sb-admin-2.min.js"></script>

  <!-- Page level plugins -->
  <script src="assets/vendor/chart.js/Chart.min.js"></script>

  <!-- Page level custom scripts -->
  <script src="assets/js/demo/chart-area-demo.js"></script>
  <script src="assets/js/demo/chart-pie-demo.js"></script>


  <script>
    const themeSwitch = document.querySelector('input');

    themeSwitch.addEventListener('change', () => {
      document.body.classList.toggle('dark-theme');
      window.localStorage.setItem('theme', 'dark-theme');
    });

   
  </script>

  <script>
    $(function(){
        var test = localStorage.input === 'true'? true: false;
        $('input').prop('checked', test || false);
    });

    $('input').on('change', function() {
        localStorage.input = $(this).is(':checked');
        console.log($(this).is(':checked'));
        localStorage.tktpas = document.body.classList.length
        console.log(document.body.classList.length)
    });

    $(window).on('load', function(){ 
      if(localStorage.tktpas == 2){
        document.body.classList.toggle('dark-theme');
        console.log(document.body.classList)
      }
      
    });

    $('#logout').on('click', function() {
      localStorage.clear();
    });
  </script>

