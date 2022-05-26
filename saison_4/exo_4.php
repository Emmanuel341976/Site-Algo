<?php
	$sMessage= "";
	// Variables iCopyNb entier rCopyPrice réél
	if (isset($_POST["btn_php"]))
	{
	// Début
	
	// Ecrire : "Quelle est le nombre de copy que vous avez réalisé"
	
	// Lire iCopyNb

	$iCopyNb = $_POST["iCopyNb"];
	
	// SI iCopyNb =< 10 ALORS
	if ($iCopyNb <= 10)
 	{
	// 	rCopyPrice = iCopyNb * 0.1
		$rCopyPrice = $iCopyNb * 0.1;
	}	
	// 	SINON
	
			// 		SI iCopyNb > 10 ET iCopyNb =< 30 ALORS
			else if ( $iCopyNb > 10 && $iCopyNb <= 30)
			{
			
			// 		  rCopyPrice = 10 * 0.1 + (iCopyNb - 10 ) * 0.09
			$rCopyPrice = 10 * 0.1 + ($iCopyNb - 10 ) * 0.09;
			}
	// 			SINON

				else
				{
					$rCopyPrice =  10 * 0.1 + 20 * 0.09 + ($iCopyNb - 30) * 0.08;
				}

				  
	// 			  rCopyPrice = 10 * 0.1 + 20 * 0.09 + (iCopyNb - 30) * 0.08
	
	// FIN SI 
	
	// Ecrire : "Le prix total de votre commande est de " + rCopyPrice + "euros"
	$sMessage = "Le prix total de votre commande est de " . $rCopyPrice . " euros";
	
	// Fin

	}



	require "exo_4.html";
?>

