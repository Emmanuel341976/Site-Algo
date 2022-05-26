<?php

	$sMessage= "";
	
	// Début

if (isset($_POST["btn_php"])){
	

	// Variable : iUserNumber iUserNumber1 Entier
	
	// Ecrire : "Entrez un nombre."
	// Lire iUserNumber
	$iUserNumber = $_POST["iUserNumber"];
	// Ecrire : "Entrez un second nombre."
	// Lire iUserNumber1
	$iUserNumber1 = $_POST["iUserNumber1"];
	// SI iUserNumber == 0 OU iUserNumber1 == 0 ALORS
	// 	Ecrire : "Le résultat est égal à 0"
	
	// SINONSI iUserNumber < 0 ET iUserNumber1 < 0 ALORS
	// 	Ecrire : "Le nombre est positif"
	
	// SINONSI iUserNumber > 0 ET iUserNumber1 > 0 ALORS
	// 	Ecrire : "Le nombre est positif"
	
	// SINON
	// 	Ecrire : "le résultat est négatif"
	
	// FINSI

if ($iUserNumber == 0 || $iUserNumber1 == 0)

	{
	$sMessage = "Le résultat est égal à 0.";
	}

		elseif (($iUserNumber < 0 && $iUserNumber1 <0) || ($iUserNumber > 0 && $iUserNumber1 > 0 ))

			{
				$sMessage = "Le résultat est positif.";
			}

				else
					{
						$sMessage = "Le résultat est négatif.";
					}
}

	// Fin

	require "exo_5.html";
?>

