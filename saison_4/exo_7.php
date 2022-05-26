<?php
	$sMessage= "";

	// Variables iUserAge iUserAccident iUserLicense iPolicyAge iPolicyPoint integer 
 if (isset ($_POST["btn_php"]))
{
				// Début
				
				// Ecrire "Quel est votre âge?"
				// Lire iUserAge
	$iUserAge = $_POST["iUserAge"];			
				// Ecrire "Depuis combien d'année avez vous votre permis?"
				// Lire iUserLicense
	$iUserLicense = $_POST["iUserLicense"];			
				// Ecrire "Depuis combien d'années avez vous un contrat chez nous?"
				// Lire iPolicyAge
	$iPolicyAge = $_POST["iPolicyAge"];			
				// Ecrire "Combien avez vous eut d'accident responsable?"
				// Lire iUserAccident
	$iUserAccident = $_POST["iUserAccident"];			
				// Calcul du nombre de point du contrat d'assurance
				
				// SI iUserAge < 25 ALORS
				// 	iPolicyPoint ← 1
				
	if ($iUserAge < 25)
				{
				$iPolicyPoint = 1;
				}
						else
						{
							$iPolicyPoint = 0;
						}

				// SI iUserLicence < 2 ALORS
				// 	iPolicyPoint ← iPolicyPoint+1

	if ($iUserLicense < 2)
		{
		$iPolicyPoint = $iPolicyPoint + 1;
		}			
					
				// Prise en compte nombre accident
				// 	iPolicyPoint ← iPolicyPoint+iUserAccident
	
	$iPolicyPoint = $iPolicyPoint + $iUserAccident;
				
				// Prise en compte bonnification ancieneté contrat
				// SI 	iPolicyAge > 5 ALORS
				// iPolicyPoint ← iPolicyPoint-1

	if ($iPolicyAge > 5)
		{
		$iPolicyPoint = $iPolicyPoint - 1;					
		}

				
				// SI iPolicyPoint >= 3 ALORS
				// 	Ecrire "Nous ne pouvons pas vous assurer."
				
				// 	SINONSI iPolicyPoint = 2 ALORS
				// 		Ecrire "Vous avez un contrat Rouge."
				
				// 			SINONSI iPolicyPoint = 1 ALORS
				// 				Ecrire "Vous avez un contrat Orange."
				
				// 					SINONSI iPolicyPoint = 0 ALORS
				// 						 Ecrire "Vous avez un contrat Vert."
				
				// 							SINONSI iPolicyPoint = -1 ALORS
				// 							Ecrire "Vous avez un contrat Bleu."
				// FINSI
	if ($iPolicyPoint >= 3)
		{
		$sMessage = "Nous ne pouvons pas vous assurer. ";
		}

			else if ($iPolicyPoint == 2)
				{
					$sMessage = "Vous avez un contrat Rouge. ";
				}

					else if ($iPolicyPoint == 1)
						{
							$sMessage = "Vous avez un contrat Orange. ";
						}

							else if ($iPolicyPoint == 0)
								{
									$sMessage = "Vous avez un contrat Vert. ";                                
								}

									else if ($iPolicyPoint < 0)
										{
											$sMessage = "Vous avez un contrat bleu. ";                                        
										}							
				
				
				// Fin

}
	require "exo_7.html";
?>

