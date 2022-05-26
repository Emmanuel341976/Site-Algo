<?php

	$sMessage= "";

	if (isset($_POST["btn_php"]))
	{


	// Variables iToonAge entier et sToonGenre string

	// Début
	
	// Ecrire : "Quel est votre age de TOON?"
	
	// Lire iToonAge

	$iToonAge = $_POST["iToonAge"];
		
	// Ecrire : "Quel est votre genre de TOON (F/M)?"
	
	// Lire sToonGenre

	$sToonGenre = $_POST["sToonGenre"];
	
	// SI cToonGenre == M et iToonAge > 20 ALORS
	if ($sToonGenre == "M" && $iToonAge > 20)
		{
			$sMessage = "Vous êtes imposable";
		}	
	// 	Ecrire "Vous êtes imposable"
	
	// 	SINON
	// 			SI cToonGenre == F ET (iToonAge >= 18 ET iToonAge < 35)
			else if ($sToonGenre == "F" && ($iToonAge >= 18 && $iToonAge < 35))
				{
					$sMessage = "Vous êtes imposable";
				}
			// 				Ecrire "Vous êtes imposable"
			
			// 					SINON

			// 					Ecrire "Vous n'êtes pas imposable"

					else
					{
						$sMessage = "Vous n'êtes pas imposable";
					}
					
					// FINSI
					
					// Fin
}

	require "exo_5.html";
?>

