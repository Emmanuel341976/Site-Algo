<?php

	$sMessage= "";	

	// Début
	if (isset($_POST["btn_php"]))  {
	// Variables : iUserNumber iUserNumber1
	
	// Ecrire : "Entrez un nombre."
	// Lire iUserNumber
	$iUserNumber = $_POST["iUserNumber"];
	// Ecrire : "Entrez un second nombre."
	// Lire iUserNumber1
	$iUserNumber1 = $_POST["iUserNumber1"];

	

	if (($iUserNumber < 0 && $iUserNumber1 < 0) || ($iUserNumber > 0 && $iUserNumber1 > 0))

	{
		$sMessage = $iUserNumber * $iUserNumber1 . " : Le résultat est positif";
	}

	else
	{
		$sMessage = $iUserNumber * $iUserNumber1 . " : Le résultat est négatif";
	}

	// SI iUserNumber < 0 ET iUserNumber1 < 0 ALORS
	// 	Ecrire : "Le produit des deux nombres est positif"
	
	// FINSI
	
	// SI iUserNumber > 0 ET iUserNumber1 > 0 ALORS
	// 	Ecrire : "Le produit des deux nombres est positif"
	
	// FINSI
	
	// SI iUserNumber < 0 XOR iUserNumber1 < 0 ALORS
	// 	Ecrire : "Le produit des deux nombres est négatif"
	
	// FINSI
	
	
	// Fin


	}






	require "exo_2.html";
?>

