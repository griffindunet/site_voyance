
var cards = new Array ();


var cardsLeftToDeal = 7;
var cardsDealt = 0;

cards[0] = "00_Fool"; //* le mat
cards[1] = "01_Magician"; //Le Bateleur
cards[2] = "02_High_Priestess"; //La Papesse
cards[3] = "03_Empress";//L'Impératrice
cards[4] = "04_Emperor"; //empereur
cards[5] = "05_Hierophant"; //le pape
cards[6] = "06_Lovers"; //l'amoureux
cards[7] = "07_Chariot"; //chariot
cards[8] = "08_Strength"; // la force
cards[9] = "09_Hermit"; //hermite
cards[10] = "10_Wheel_of_Fortune"; //fortune
cards[11] = "11_Justice";
cards[12] = "12_Hanged_Man";  // le pendu
cards[13] = "13_Death"; //la mort
cards[14] = "14_Temperance"; //temperance
cards[15] = "15_Devil"; //le diable
cards[16] = "16_Tower"; // la tour de dieu 
cards[17] = "17_Star"; // etoiles
cards[18] = "18_Moon"; // la lune 
cards[19] = "19_Sun"; //soleil
cards[20] = "20_Judgement"; //jugement
cards[21] = "21_World"; //monde
cards[22] = "22_Ace_of_Wands"; //le mat

var textes_array = new Array() ;
textes_array.push ("Le Mat vous prédit des rencontres amoureuses riches.Dans votre profession il annonce de nouveaux projets") ; //on insère dans le tableau le texte de la carte 1
textes_array.push ("LMots clés: Apprentissage, nouveau départ, réussite, créativité, jeunesse, dynamisme, entreprenariat, initiative, énergie, action nouvelle.Amour: Représente le début d'une relation, un amour constructif et sincère. Lorsque le bateleur sort à l'endroit dans un tirage du tarot de Marseille, il est question d'un fort pouvoir d'attraction facilitant les relations pouvant être nombreuses.Argent: Le consultant devra sans doute investir pour entreprendre, mais les résultats seront positifs.Santé: Le bateleur, lorsqu'il sort à l'endroit, est signe de vitalité et de grande forme. Il représente une personne très résistante et en bonne santé.Travail: Indique le début d'une activité avec de bons gains à la clé. Le consultant exerce un travail manuel, mais qui comporte des risques. Cela peut aussi être le signe d'un contrat en perspective. Dans tous les cas, le consultant sera face à une profession qui requiert une certaine autonomie.") ; //on insère dans le tableau le texte de la carte 2
textes_array.push ("La signification du Bateleur en amour  :Nouvel élan, rencontre, action.La signification du Bateleur au niveau professionnel : Nouveau travail, commerce, éducation.La signification du Bateleur au niveau financier :Négoces, transaction, bonnes nouvelles.") ; //on insère dans le tableau le texte de la carte 3
textes_array.push ("elle représente donc la phase de concrétisation d’un projet, le temps étant plus à l’action. Son impact est fort et marqué dans le domaine du travail et des projets associés. Positive en amour et signe de changement dans le travail") ; //on insère dans le tableau le texte de la carte 4
textes_array.push ("vous pourrez acquérir force, renommée et succès à une seule condition, qui est celle de réfléchir avant de vous engager. Le Pape est aussi le symbole de la prudence qui doit opérer face à la tentation de tout ce qui brille et qui peut vous aveugler et vous faire croire que vous allez rapidement trouver ce que vous voulez ou ce que vous cherchez.") ; //on insère dans le tableau le texte de la carte 5
textes_array.push ("symbolise bien sûr l’amour, mais il serait bien réducteur de penser que cet arcane du tarot n’ouvre pas les portes à d’autres messages et interprétations. L’Amoureux symbolise aussi le choix, les décisions mais aussi quelquefois l’hésitation. L’amoureux incarne aussi le côté altruiste, le dévouement et la sincérité. C’est une lame de confiance, honnêteté mais aussi de stabilité émotionnelle sans oublier le désir, la passion mais aussi la prudence. L’Amoureux est une carte du tarot de Marseille qui vous dévoilera un message positif et qui saura vous guider si vous traversez une période de doutes ou d’hésitations.") ; //on insère dans le tableau le texte de la carte 6
textes_array.push ("Détermination, collaboration et de réussite.le Chariot représente un char sur lequel est juché un personnage couronné, symbole de triomphe et de réussite. Le char quant à lui représente le mouvement et les déplacements. C’est une lame du tarot très positive: elle annonce succès, chance, réussite et voyages. L’énergie est là et avec cette arcane du tarot, elle est décuplée et motivante.  Un plein d'énergie qu'il faudra apprendre à maîtriser !") ; //on insère dans le tableau le texte de la carte 7
textes_array.push ("La force est un guide pour prendre les bonnes directions") ; //on insère dans le tableau le texte de la carte 8
textes_array.push ("Elle représente un personnage d’un certain âge qui suit un chemin dans la nuit, équipé d’une lanterne et d’une canne. C’est une carte importante  elle évoque le recul et le besoin fort de se retrouver avec soi-même, de faire une remise en question assez importante sur sa vie générale. L’Hermite dans le tarot de Marseille est le symbole du retour sur soi ou d’un besoin évident de repli.  ou un nouveau départ. Après la réflexion et la remise en question, vient toujours l’action.") ; //on insère dans le tableau le texte de la carte 9
textes_array.push ("la Roue de Fortune est représentée par un chien, un sphinx et un petit singe. Cette carte du tarot de Marseille annonce une transformation positive dans la vie. La notion du mouvement symbolise et annonce que certaines parties de vie peuvent connaître des changements importants et transformateurs.Les virages ou les choix seront importants pour l’avenir, ils devront donc se faire avec réflexion. Chaque action ou chaque parole aura un impact sur votre vie future. Le message de la Roue de Fortune dans le tarot de Marseille conseille d’être attentif Une carte aux multiples facettes et messages  de La Force") ; //on insère dans le tableau le texte de la carte 10
textes_array.push (" la stabilité dont vous pourriez avoir besoin dans votre vie. Dans le domaine amoureux ou social, la Justice peut symboliser une rupture ou un divorce.") ; //on insère dans le tableau le texte de la carte 11
textes_array.push ("le Pendu dans le tarot est de se résigner à attendre car aucune autre solution n’est possible pour le moment. Sur le plan spirituel, le Pendu annonce une période de repli, un moment de gestation qui pourra être mis à profit de manière enrichissante et positive pour préparer un nouveau départ dans la vie, de nouveaux projets. C’est la carte du tarotqui symbolise le recul et le détachement. Dans un moment comme celui que vous annonce la lame du Pendu dans le tarot de Marseille, on a souvent l’impression de ne plus être acteur de sa vie, mais plus un spectateur sans pouvoir d’action ou de changement. Il vaut mieux cependant accepter cette période pendant laquelle on a vraiment peu de chance de pouvoir changer ou bouger les choses.") ; //on insère dans le tableau le texte de la carte 12
textes_array.push ("Une page se tourne pour laisser place à autre chose.CETTE LAME ANNONCE AUSSI DU CHANGEMENT") ; //on insère dans le tableau le texte de la carte 13
textes_array.push ("Vous allez avoir de la Sécurité,en  amours, communication, échange et réussite") ; //on insère dans le tableau le texte de la carte 14
textes_array.push ("Le Diable vous invite à la prudence dans vos décisions !") ; //on insère dans le tableau le texte de la carte 15
textes_array.push ("elle annonce un changement radical !Coup de foudre et bouleversements amoureux !") ; //on insère dans le tableau le texte de la carte 16
textes_array.push ("Elle chasse les mauvaises pensées et les idées noires !l'étoile est un présage de réussite professionnelle") ; //on insère dans le tableau le texte de la carte 17
textes_array.push ("Une lame qui saura vous surprendre et vous aider") ; //on insère dans le tableau le texte de la carte 18
textes_array.push ("Positive et créatrice elle annonce chance et harmonieUn signe favorable pour la vie professionnelle") ; //on insère dans le tableau le texte de la carte 19
textes_array.push ("IL annonce changements favorables et autonomie de vie Une belle réussite dans les études et les affaires") ; //on insère dans le tableau le texte de la carte 20
textes_array.push ("Elle vous prédit réussite et épanouissement !Le  Monde symbole de maternité ou de grossesse ") ; //on insère dans le tableau le texte de la carte 21
textes_array.push ("Elle parle plus fortement les caractéristiques que vous aurez besoin pour réussir dans ces nouvelles conditions. Vous aurez besoin pour exploiter votre potentiel d'innovation, d'enthousiasme et volonté de faire un résultat positif.") ; //on insère dans le tableau le texte de la carte 22
textes_array.push ("Erreur") ; //on insère dans le tableau le texte de la carte 23


var random = function() {
  	return Math.round(Math.random() * (22-cardsDealt));
};




var randomOrient = function() {
	return Math.round(Math.random());
};


var removeCard = function(k) {
	for (var j=k; j<cards.length; j++) {
		cards[j] = cards[j+1];	
	}
	cardsLeftToDeal--;
	cardsDealt++;
};


var dealCard = function(i) {
	if (cardsLeftToDeal == 0) {
		return false;
	} else {
		
		var img = document.createElement("img");
		
		var cardJustDealt = cards[i];
		var orient = randomOrient();
		$(img).addClass(cardJustDealt);
		
		img.src = ("images/deck/" + cards[i] + ".jpg");
		img.alt = cards[i];
		
		if (orient === 1) {
			$(img).addClass("orientationUp");
			document.getElementById("hand").appendChild(img);
			removeCard(i);
		} else {
			$(img).addClass("orientationUp");
			document.getElementById("hand").appendChild(img);
			removeCard(i);
		}

		$(img).on('click', function(){$("#desc").html(textes_array[i])});
	}
};


$(document).ready(function() {
	$('#deal').click(function() {
		console.log(dealCard(random()));
	});
	$('#Recommencer').click(function() {
		location.reload();
	});


});



