<?php

	$sMessage= "";
	
// 	Variable : iUserNumber Entier

if (isset($_POST["btn_php"]))
{

// Début

// Ecrire : "Entrez un nombre."
// Lire iUserNumber
$iUserNumber = $_POST["iUserNumber"];

if($iUserNumber < 0)
{
	$sMessage = "Le nombre est négatif.";
}
	elseif ($iUserNumber > 0) 
	{
		$sMessage = "Le nombre est positif.";
	}
		else
		{
			$sMessage = "Le nombre est égal à zéro.";
		}

// SI iUserNumber < 0 ALORS
// 	Ecrire : "Le nombre est négatif"

// SINONSI iUserNumber > 0 ALORS
// 	Ecrire : "Le nombre est positif"

// SINON
// 	Ecrire : "Le nombre est égal à zéro"

// FINSI

// Fin
}
	require "exo_4.html";
?>

