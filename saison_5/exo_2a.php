<?php
	$sMessage= "";

if (isset($_POST["btn_php"]))
{

	$iUserNumber = $_POST["iUserNumber"];

	if ($iUserNumber < 10)
	{ 
		$sMessage = "Plus grand!! Veuillez saisir une nouveau nombre.";
	}
		else if ($iUserNumber > 20)
		{
			$sMessage =  "Plus petit!! Veuillez saisir une nouveau nombre.";
		}
	
			else 
			{
				$sMessage =  "Merci le nombre est compris entre 10 et 20.";
			}
	
 

}
	
	require "exo_2a.html";
?>

