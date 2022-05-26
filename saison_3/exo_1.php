<?php



	$sMessage = "";

	if (isset($_POST["btn_php"]))  {
		
	
	
		$iUserNumber = $_POST["iUserNumber"];
	
	if ( $iUserNumber < 0)
	{
	
		$sMessage = $iUserNumber . " : Le nombre est négatif";
	
	}
	
		else	{
					$sMessage = $iUserNumber . " : Le nombre est positif";
				}	
	
	
	
			}
	

	require "exo_1.html";
?>

