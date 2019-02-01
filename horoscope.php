
<!doctype html>
<html lang="fr">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" href="../../../../favicon.ico">
  	<link rel="stylesheet" href="css/carte.css" />

  	<script src="https://code.jquery.com/jquery-1.10.2.js"></script>

	<script src="js/tarot.js"></script>
  	<script src="js/deck.js"></script>
  	<title>Galaxy Voyance|Horoscope by Remy Wilmet</title>

    <!-- Bootstrap core CSS -->
    <link href="https://getbootstrap.com/docs/4.0/dist/css/bootstrap.min.css" rel="stylesheet">

    <!-- Custom styles for this template -->
    <link href="css/style.css" rel="stylesheet">
  </head>

  <body>

<?php 
include('includes/menu.php');
 
include('includes/signes.php');

?>
<!-- image-->
<br>
<br>
<br>
    <div class="col-lg-12" id="image">
      <div class="image">
  <div class="baniere">
  <img src="nebuleuse.jpg" id="nebula">
  <p id="titre">Galaxy <br>
  &nbsp &nbsp&nbsp&nbsp&nbsp&nbsp Voyance</p>
  <img src="etoile.png" id="etoile1">
  <img src="etoile.png" id="etoile2">
  <img src="etoile.png" id="etoile3">
  <img src="etoile.png" id="etoile4">
</div>
</div>
</div>
    <!-- Begin page content -->
    <main role="main" id="principe"class="container">
                        <h1>Horoscope By Remy Wilmet </h1>





<!------ Include the above in your HEAD tag ---------->
<form name="calculeage" method="post" action="horoscope.php">

    <div class="container">    
        <div id="loginbox" style="margin-top:50px;" class="mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">                    
            <div class="panel panel-info" >
                  

                    <div style="padding-top:30px" class="panel-body" >

                        <div style="display:none" id="login-alert" class="alert alert-danger col-sm-12"></div>
                            
                        <form id="loginform" class="form-horizontal" role="form">
                                    
                            <div style="margin-bottom: 25px" class="input-group">
                                      
                      <select name="jour">
                     <?php
                     for($a=1;$a<32;$a++){
                     $s = $day==$a ? 'selected' : '';
                     echo '<option value="'.$a.'" '.$s.'>'.$a.'</option>';
                     }
                     ?>
                     </select>                                        



                      
                      <select name="mois">
                     <?php
                     for($a=1;$a<13;$a++){
                     $s = $month==$a ? 'selected' : '';
                     echo '<option value="'.$a.'" '.$s.'>'.$a.'</option>';
                     }
                     ?>
                     </select>

                     <select name="annee">
                     <?php
                     for($a=1942;$a<2020;$a++){
                     $s = $annee==$a ? 'selected' : '';
                     echo '<option value="'.$a.'" '.$s.'>'.$a.'</option>';
                     }
                     ?>
                     </select>
                     </div>


                                
                      


                                <div style="margin-top:10px" class="form-group">
                                    <!-- Button -->

                                  <input type="submit" value="Voir mon signe" name="submit">

<?php echo '<div class="alert alert-success">
<div id="age">'.$monsigne.'</div></div>'; ?>


                                </div>    
                            </form>     
    </main>

   <?php 

   include('includes/footer.php');
   ?>
    <!-- Bootstrap core JavaScript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script>window.jQuery || document.write('<script src="../../assets/js/vendor/jquery-slim.min.js"><\/script>')</script>
    <script src="../../assets/js/vendor/popper.min.js"></script>
    <script src="../../dist/js/bootstrap.min.js"></script>
  </body>
</html>
