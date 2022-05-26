		

		// ALGORITHME Exo_2_2
		function Exo_2_2_jsform()
		
		{
		// DEBUT
		// VARIABLE iNombreUtilisateur, iCarre en NUMERIQUE
		var iUserNumber, iCarreiSquareUserNumber;
		
		// ECRIRE "Veuillez saisir un nombre"
		// LIRE iNombreUtilisateur
		iUserNumber= document.getElementById("iUserNumber").value;
		
		// iCarre= iNombreUtilisateur * iNombreUtilisateur
		iCarreiSquareUserNumber= iUserNumber * iUserNumber;
		
		// ECRIRE "Le carré de " + iNombreUtilisateur + " est " + iCarre
		document.getElementById("sp_resultat_code").innerHTML= "Le carré de " + iUserNumber + " est " + iCarreiSquareUserNumber;

		// FIN
		}


		// ALGORITHME Exo_2_2
		function Exo_2_2_jquery()
		
		{
		// DEBUT
		// VARIABLE iNombreUtilisateur, iCarre en NUMERIQUE
		var iUserNumber, iCarreiSquareUserNumber;
		
		// ECRIRE "Veuillez saisir un nombre"
		// LIRE iNombreUtilisateur
		iUserNumber= $("#iUserNumber").val();
		
		// iCarre= iNombreUtilisateur * iNombreUtilisateur
		iCarreiSquareUserNumber= iUserNumber * iUserNumber;
		
		// ECRIRE "Le carré de " + iNombreUtilisateur + " est " + iCarre
		$("#sp_resultat_code").html("Le carré de " + iUserNumber + " est " + iCarreiSquareUserNumber);

		// FIN
		}


		// ALGORITHME Exo_2_3

		function Exo_2_3_jsform()
		
		{
		// Début
		// Variables rArticlePrice  rVatRate rTotalPrice réel et iArticleQuantity entier
		let rArticlePrice, rVatRate, rTotalPrice, iArticleQuantity;
		// Ecrire : "Quel est le prix HT de votre article?" Dans le html
		// Lire rArticlePrice
		rArticlePrice = document.getElementById("rArticlePrice").value;
		// Ecrire : "Combien d'article achetez-vous?" Dans le html
		// Lire iArticleQuantity
		iArticleQuantity = document.getElementById("iArticleQuantity").value;
		// Ecrire : "Quel est le taux de TVA applicable?" Dans le html
		// Lire rVatRate
		rVatRate = document.getElementById("rVatRate").value;
		// rTotalPrice ← rArticlePrice * iArticleQuantity * ((1 + rVatRate) / 100)
		rTotalPrice = rArticlePrice * iArticleQuantity * ((1 + rVatRate) / 100);
		// Ecrire : "Le prix total de votre achat est :"
		// Ecrire : rTotalPrice
		document.getElementById("sp_resultat_code").innerHTML= "Le prix total de votre achat est : " + rTotalPrice + " &euro;";
		// Fin
		}		


		function Exo_2_3_jquery()
		
		{
		// Début	
		// Variables rArticlePrice  rVatRate rTotalPrice réel et iArticleQuantity entier
		var rArticlePrice, rVatRate, rTotalPrice, iArticleQuantity;
		// Ecrire : "Quel est le prix HT de votre article?" Dans le html
		// Lire rArticlePrice
		rArticlePrice = $("#rArticlePrice").val();
		// Ecrire : "Combien d'article achetez-vous?" Dans le html
		// Lire iArticleQuantity
		iArticleQuantity = $("#iArticleQuantity").val();
		// Ecrire : "Quel est le taux de TVA applicable?" Dans le html
		// Lire rVatRate
		rVatRate = $("#rVatRate").val();
		// rTotalPrice ← rArticlePrice * iArticleQuantity * ((1 + rVatRate) / 100)
		rTotalPrice = rArticlePrice * iArticleQuantity * ((1 + rVatRate) / 100);
		// Ecrire : "Le prix total de votre achat est :"
		// Ecrire : rTotalPrice
		$("#sp_resultat_code").html( "Le prix total de votre achat est :" + rTotalPrice + " &euro;");
		// Fin
		}		


		function Exo_2_4_jsform()

		

		{			
		// Début
		// Variables cCharacterString1 cCharacterString2 cCharacterString3 cCharacterString4 cCharacterString5 cSentence1 cSentence2 cSentence3 et cSentence4 caractères
		let cCharacterString1, cCharacterString2, cCharacterString3, cCharacterString4, cCharacterString5, cSentence1, cSentence2, cSentence3,  cSentence4;

		// 	Ecrire  : "Voici 4 varientes de la célèbre « belle marquise, vos beaux yeux me font mourir d’amour »"

		// 	cCharacterString1 ← "belle marquise"
		cCharacterString1 = "belle marquise";

		// 	cCharacterString2 ← "vos beaux yeux"
		cCharacterString2 = "vos beaux yeux";

		// 	cCharacterString3 ← "me font mourir"
		cCharacterString3 = "me font mourir";

		// 	cCharacterString4 ← "d’amour"
		cCharacterString4 = "d’amour";

		// 	cCharacterString5 ← " "
		cCharacterString5 = " ";

		// 	cSentence1 ← cCharacterString2 & cCharacterString5 & cCharacterString1 & cCharacterString5 & cCharacterString3 & cCharacterString5 & cCharacterString4
		cSentence1 = cCharacterString2 + cCharacterString5 + cCharacterString1 + cCharacterString5 + cCharacterString3 + cCharacterString5 + cCharacterString4;
		

		// 	cSentence2 ← cCharacterString1 & cCharacterString5 & cCharacterString4 & cCharacterString5 & cCharacterString2 & cCharacterString5 & cCharacterString3
		cSentence2 = cCharacterString1 + cCharacterString5 + cCharacterString4 + cCharacterString5 + cCharacterString2 + cCharacterString5 + cCharacterString3;
		

		// 	cSentence3 ← cCharacterString4 & cCharacterString5 & cCharacterString2 & cCharacterString5 & cCharacterString3 & cCharacterString5 & cCharacterString1
		cSentence3 = cCharacterString4 + cCharacterString5 + cCharacterString2 + cCharacterString5 + cCharacterString3 + cCharacterString5 + cCharacterString1;
		

		// 	cSentence4 ← cCharacterString2 & cCharacterString5 & cCharacterString3 & cCharacterString5 & cCharacterString4 & cCharacterString5 & cCharacterString1
		cSentence4 = cCharacterString2 + cCharacterString5 + cCharacterString3 + cCharacterString5 + cCharacterString4 + cCharacterString5 + cCharacterString1;

		document.getElementById("sp_resultat_code").innerHTML= cSentence1;
		document.getElementById("sp_resultat_code2").innerHTML= cSentence2;
		document.getElementById("sp_resultat_code3").innerHTML= cSentence3;
		document.getElementById("sp_resultat_code4").innerHTML= cSentence4;
		// 	Ecrire : cSentence1
		// 	Ecrire : cSentence2
		// 	Ecrire : cSentence3
		// 	Ecrire : cSentence4
		
		// Fin

		}

		function Exo_2_4_jquery()
		
		{
		// Début
		// Variables cCharacterString1 cCharacterString2 cCharacterString3 cCharacterString4 cCharacterString5 cSentence1 cSentence2 cSentence3 et cSentence4 caractères
		var cCharacterString1, cCharacterString2, cCharacterString3, cCharacterString4, cCharacterString5, cSentence1, cSentence2, cSentence3,  cSentence4;

		// 	Ecrire  : "Voici 4 varientes de la célèbre « belle marquise, vos beaux yeux me font mourir d’amour »"

		// 	cCharacterString1 ← "belle marquise"
		cCharacterString1 = "belle marquise";

		// 	cCharacterString2 ← "vos beaux yeux"
		cCharacterString2 = "vos beaux yeux";

		// 	cCharacterString3 ← "me font mourir"
		cCharacterString3 = "me font mourir";

		// 	cCharacterString4 ← "d’amour"
		cCharacterString4 = "d’amour";

		// 	cCharacterString5 ← " "
		cCharacterString5 = " ";

		// 	cSentence1 ← cCharacterString2 & cCharacterString5 & cCharacterString1 & cCharacterString5 & cCharacterString3 & cCharacterString5 & cCharacterString4
		cSentence1 = cCharacterString2 + cCharacterString5 + cCharacterString1 + cCharacterString5 + cCharacterString3 + cCharacterString5 + cCharacterString4;
		

		// 	cSentence2 ← cCharacterString1 & cCharacterString5 & cCharacterString4 & cCharacterString5 & cCharacterString2 & cCharacterString5 & cCharacterString3
		cSentence2 = cCharacterString1 + cCharacterString5 + cCharacterString4 + cCharacterString5 + cCharacterString2 + cCharacterString5 + cCharacterString3;
		

		// 	cSentence3 ← cCharacterString4 & cCharacterString5 & cCharacterString2 & cCharacterString5 & cCharacterString3 & cCharacterString5 & cCharacterString1
		cSentence3 = cCharacterString4 + cCharacterString5 + cCharacterString2 + cCharacterString5 + cCharacterString3 + cCharacterString5 + cCharacterString1;
		

		// 	cSentence4 ← cCharacterString2 & cCharacterString5 & cCharacterString3 & cCharacterString5 & cCharacterString4 & cCharacterString5 & cCharacterString1
		cSentence4 = cCharacterString2 + cCharacterString5 + cCharacterString3 + cCharacterString5 + cCharacterString4 + cCharacterString5 + cCharacterString1;

		$("#sp_resultat_code").html(cSentence1);
		$("#sp_resultat_code2").html(cSentence2);
		$("#sp_resultat_code3").html(cSentence3);
		$("#sp_resultat_code4").html(cSentence4);

		// 	Ecrire : cSentence1
		// 	Ecrire : cSentence2
		// 	Ecrire : cSentence3
		// 	Ecrire : cSentence4
		
		// Fin

			
		}