<?php

	$sMessage= "";

	// Variables : sName sName1 sName2 Caractères

	// Début
	if (isset($_POST["btn_php"]))

	{
	// Ecrire : "Entrez un prénom."
	// Lire sName
	$sName = $_POST["sName"];
	
	// Ecrire : "Entrez un second prénom."
	// Lire sName1
	$sName1 = $_POST["sName1"];
	// Ecrire : "Entrez un troisième prénom."
	// Lire sName2
	$sName2 = $_POST["sName2"];
	// SI sName < sName1 ET sName1 < sName2 ALORS
	// 	Ecrire : "Les prénoms sont classés par ordre alphabétique"

	if (($sName < $sName1) && ($sName1 < $sName2))
	{
		$sMessage = "Les Prénoms sont classés par ordre alphabétique.";
	}

	else
	{
		$sMessage = "Les Prénoms ne sont pas classés par ordre alphabétique.";
	}
	
	// SINON
	// 	Ecrire : "Les prénoms ne sont pas classés par ordre alphabétique"
	
	// FINSI
	
	// Fin

}
	require "exo_3.html";
?>

