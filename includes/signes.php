<?php
/*source du script https://codes-sources.commentcamarche.net/source/52096-votre-signe-astrologique adapté */
$mois1 = Array('Decembre','Janvier','Fevrier','Mars','Avril','Mai','Juin','Juillet','Aout','Septembre','Octore','Novembre','Decembre','Janvier');
$jour='';
$mois='';
$annee='';
if(isset($_POST['jour'])){

   $jour =$_POST['jour'];
      $mois =$_POST['mois'];
   $annee =$_POST['annee'];
   $date =$jour.'-'.$mois.'-'.$annee;
   $transfdate =strtotime($date);
   //date limite zodiaque
   $janvier = '20-01-'.$annee;
   $fevrier = '18-02-'.$annee;
   $mars = '20-03-'.$annee;
   $avril = '20-04-'.$annee;
   $mai = '21-05-'.$annee;
   $juin = '21-06-'.$annee;
   $juillet = '22-07-'.$annee;
   $aout = '22-08-'.$annee;
   $septembre = '22-09-'.$annee;
   $octobre = '22-10-'.$annee;
   $novembre = '22-11-'.$annee;
   $decembre = '21-12-'.$annee;
$zodiaque=array($janvier,$fevrier,$mars,$avril,$mai,$juin,$juillet,$aout,$septembre,$octobre,$novembre,$decembre);

  /* $zodiaque=Array($annee,''.$annee,''.$annee,''.$annee,''.$annee,''.$annee,''.$annee,''.$annee,''.$annee,''.$annee,''.$annee,''.$annee);*/

   $capricorne= "Capricorne : il est tant pour vous de prendre le large cap : vacances sereines et repos !
Les îles Capricorne ou Cancer libre à vous dans vos choix !
l’argent est votre point fort :  Tout s’achète, même l’amour !
qu’attendez vous pour être heureux ! Prise de tête à corne ce n’est pas pour vous, libérez vous de la culpabilité !";
   $Verseau = "Verseau: une journée plutôt houleuse, le silence est votre atout !
Les astres de l’amour sont avec vous, la lune en pluton s’annonce porteuse de bonne nouvelle ! En 2040 l’âme sœur sera à vos côté ! Gardez espoir  santé : faite vous des bain de bouche au clou de girofle et jus de pomme de terre !";
   $Poissons = "Poissons : Nager comme un poisson dans l’eau est votre sport favori voir même une passion ! Méfiez vous de la passion elle fine par vous dépassionner ! Votre partenaire la saumonette rentre dans une  phase de jalousie car dans les hautes mer le thon vous tourne autour ! Cessez de naviguer dans tous les sens !
Ne dépensez pas votre énergie dans les eaux trouble ! Dégainé les spermato au moment de la fécondation et non à tout bout de champs !Votre atout : la conserve ou le surgelé! ";
   $belier = "Bélier :à chaque coup de corne vous gagnez des points à vie, évitez le corps à corps trop rapproché ! l’amour sera dans la lutte au quotidien, évitez de trop palabrer ! Du repos s’impose entre deux coup de sabots!  Prudence : le broutage de gazon régulier est mauvais pour le digestion !. ";
   $Taureau = "Taureau:la Taureau-machi est votre point fort , cette journée est plutôt mouvementé !
Restez sur vos garde ! l’amour peux se trouver dans votre harem.
Travaillez la respiration ainsi que la précision !";
   $gemaux ="Gémaux : Votre devise est toujours la même : gare au doublon ! Restez vigilant face à vous même, il n’est jamais bon la trahison envers son semblable !l’idéal, le partage est à envisager! Si vous êtes née dans la même poche : y plus rien à faire que de supporter l’autre !Cas contraire : vous êtes sauvée ! Envolez vous au plus loin !";
   $Cancer = "Cancer : rien ne sert de marcher de travers ! Départ du mauvais pieds pour cette journée qui s’annonce favorable au couple ! Célibataire, creusez ! Ensablé vous serait en sécurité ! Santé : 4 Pattes en l’air est conseillé  pour les dos sensible !";
   $Lion = "Lion: méfiez vous des longues pauses ! La fainéantise réduit la vitalité des muscles! Abrevez vous du lexir de jouvence qui réduira vos rides a court termes ! l’amour rugit autour de vos ! Environnement de chasse serein !
    •<b> A éviter</b> : d’ouvrir vos grande gueule car risque de crampe et blocage de la machoir !";
   $Vierge = "Vierge : votre partenaire s’égare dans le verger !  Amour : il serait temps pour vous enfin de vous lâcher ! Pensez a retirer les toiles d’araignées (c’est conseillé) pomper autrui avec modération, sinon vous risquez de gonfler tous le monde ! libérez vos sens exacerbés, plongez au coeur du sujet !";
   $Balance = "Balance : cessez toute activité nuisible à votre santé ! Votre vie sentimental de liane en liane exaspère votre entourage ! Voyez le pour et le contre ne penchez ni trop à gauche ni trop a droite ! Ni trop en avant ni trop en arrière !Trouvez votre équilibre ! Votre point fort : que justice soit faite !";
   $Scorpion = "Scorpion:arrêtez de tourner en rond, car vous finirez par vous mordre la queue !
Qui dit : queue en l’air brise le silence! Pique ma queue dame de pic ! Prenez votre avenir a bras le corps, lézardez au soleil génial pour le teint ,Restez au vin n’abusez pas de l’eau ! Déconseillé la jalousie, le partage et le mélange de partenaire est même recommandé ! Extra pour la  santé et l’équilibre du couple ! Souriez !";	
   $Sagitaire = "Sagitaire :le silence est un atout ! Abstinence si le va et viens devient trop court, l’adage qui dit ‘plus c’est long plus c’est bon ‘ est l’essence même de votre personnalité ! Foncez ! Prendre entre deux position  de grande respiration excellent pour les poumons !";
 
$signezodiaque=array($capricorne,$Verseau, $Poissons,$belier,$Taureau,$gemaux,$Cancer,$Lion,$Vierge,$Balance,$Scorpion,$Sagitaire );


for($a=0;$a<count($signezodiaque);$a++){


   if($transfdate<=strtotime($zodiaque[$a]) &&$transfdate>strtotime($zodiaque[$a-1])){$monsigne=$signezodiaque[$a];}
}

}
?>