<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//FR" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html lang="FR-fr" dir="ltr" xml:lang="fr" xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>Signe du zodiak</title>
</head>
<style type="text/css">
#age{margin:1% 10%;font-size:90%;font-weight:bold;color:#3E3E3E;}
</style>
<body>
<?php
$mois = Array('Decembre','Janvier','Fevrier','Mars','Avril','Mai','Juin','Juillet','Aout','Septembre','Octore','Novembre','Decembre');
$jour='';$month='';$annee='';

if(isset($_POST['jour'])){
	$jour = $_POST['jour'];
	$month = $_POST['mois'];
	$annee = $_POST['annee'];
	$date = $jour.'-'.$month.'-'.$annee;
	$tst = strtotime($date); //essaie de transformer une date au format timestamp
	
	$dateZodiak = Array('20-01-'.$annee,'18-02-'.$annee,'20-03-'.$annee,'20-04-'.$annee,'21-05-'.$annee,'21-06-'.$annee,'22-07-'.$annee,'22-08-'.$annee,'22-09-'.$annee,'22-10-'.$annee,'22-11-'.$annee,'21-12-'.$annee);
	$signeZodiak = Array("Capricorne","Verseau","Poissons","Bélier","Taureau","Gémaux","Cancer","Lion","Vierge","Balance","Scorpion","Sagitaire");
	
	for($a=0;$a<count($signeZodiak);$a++){
		if($tst<=strtotime($dateZodiak[$a]) && $tst > strtotime($dateZodiak[$a-1])){$monSigne = $signeZodiak[$a];}
	}

	echo '<div id="age">'.$monSigne.'</div>';}
?>
<form name="calculeage" method="post" action="test.php">
<select name="jour">
<?php
	for($a=1;$a<31;$a++){
	$s = $jour==$a ? 'selected' : '';
	echo '<option value="'.$a.'" label="jour" '.$s.'>'.$a.'</option>';
	}
?>
</select>
<select name="mois">
<?php
	for($a=1;$a<13;$a++){
	$s = $month==$a ? 'selected' : '';
	echo '<option value="'.$a.'" label="mois" '.$s.'>'.$mois[$a].'</option>';
	}
?>
</select>
<select name="annee">
<?php
	for($a=1942;$a<2000;$a++){
	$s = $annee==$a ? 'selected' : '';
	echo '<option value="'.$a.'" label="annee" '.$s.'>'.$a.'</option>';
	}
?>
</select>
<input type="submit" value="Voir mon signe" name="submit">
</form>
</body>
</html>