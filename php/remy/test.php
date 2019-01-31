<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//FR" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<link href="//netdna.bootstrapcdn.com/bootstrap/3.1.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
<script src="//netdna.bootstrapcdn.com/bootstrap/3.1.0/js/bootstrap.min.js"></script>
<script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
<head>
<title>Signe du zodiak</title>
</head>

<body>

<?php 
ini_set('display_errors', 1);
error_reporting(e_all);

include('scripts/signes.php');
?>




<!------ Include the above in your HEAD tag ---------->
<form name="calculeage" method="post" action="test.php">

    <div class="container">    
        <div id="loginbox" style="margin-top:50px;" class="mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">                    
            <div class="panel panel-info" >
                    <div class="panel-heading">
                        <div class="panel-title">Horoscope</div>
                        
                    </div>     

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



                        </div>                     
                    </div>  
        </div>
    
                                                               
                                        
                          

               
               
                
         </div> 
    </div>
    