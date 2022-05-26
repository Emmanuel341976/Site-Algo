<?php
	$sMessage= "";

if (isset($_POST["btn_php"]))
{
	// Variables iUserDay iUserMonth iUserYear bYearTest

	// Début
	
	// Ecrire "Donner le numéro du jour dans le mois."
	// Lire iUserDay

	$iUserDay = $_POST["iUserDay"];

	// Ecrire "Donner le numéro du mois."
	// Lire iUserMonth

	$iUserMonth = $_POST["iUserMonth"];

	// Ecrire "Donner l'année."
	// Lire iUserYear

	$iUserYear = $_POST["iUserYear"];

 // Test année Bissextile

 if ((($iUserYear / 4) - floor($iUserYear / 4)) * 100 == 0)
 {
	  $bYearTest = true;   
  }
		  else $bYearTest = false;

if($bYearTest = true)    
  {
	  if ((($iUserYear / 100) - floor($iUserYear / 100)) * 100 == 0)
		  {
			  $bYearTest = true;
		  }
				  else $bYearTest = false;
  }

if($bYearTest = true)    
  {
	  if ((($iUserYear / 400) - floor($iUserYear / 400)) * 100 == 0)
		  {
			  $bYearTest = true;
		  }
				  else $bYearTest = false;
  }

	// SI iUserDay == 31 ET (iUserMonTh == 2 OU iUserMonth == 4 OU iUserMonth == 6 OU iUserMonth == 9 OU iUserMonth == 11 ) ALORS
	// 	Ecrire "La date n'est pas valide."
	
	// 		SINON SI iUserDay == 29 ET iUserMonth == 2 ET !iUserYear dp 4 ALORS
	// 			Ecrire "La date n'est pas valide."
	
	// 				SINON Ecrire "La date est valide."


	if ($iUserDay == 31 && ($iUserMonth == 4 || $iUserMonth == 6 || $iUserMonth == 9 || $iUserMonth == 11))
			{
				$sMessage = "La date n'est pas valide.";
			}

				else if ( $iUserDay == 29 && $iUserMonth == 2 && $bYearTest !== true)
					{
						$sMessage = ("La date n'est pas valide.");
					}

						else
						{
							$sMessage = ("La date est valide.");
						}

	// FINSI
	
	// Fin

}
	require "exo_8.html";
?>

