<?php
	$sMessage= "";

	if (isset($_POST["btn_php"]))
{
	// Variables rResultC1 rResultC2 rResultC3 rResultC4 reel

	// Début

	// Ecrire : "quel est le résultat du premier candidat?"

	// lire rResultC1

	$rResultC1 = $_POST["rResultC1"];

	// Ecrire : "quel est le résultat du deuxième candidat?"

	// lire rResultC2

	$rResultC2 = $_POST["rResultC2"];

	// Ecrire : "quel est le résultat du troisième candidat?"

	// lire rResultC3

	$rResultC3 = $_POST["rResultC3"];

	// Ecrire : "quel est le résultat du quatrième candidat?"

	// lire rResultC4

	$rResultC4 = $_POST["rResultC4"];

	// SI rResultC1 > 50 ALORS

	// 		Ecrire "Le premier cadidat est élu au premier tour."

	// 			SINON SI rResultC1 < 12.5 ALORS
						
	// 					Ecrire "Le premier cadidat est battu."

	// 						SINON SI rResultC1 > rResultC2 ET rResultC1 > rResultC3 ET rResultC1 > rResultC4 ALORS

	// 							Ecrire "Le premier cadidat est en ballottage favorable."

	// 								SINON SI rResultC1 < rResultC2 OU rResultC1 < rResultC3 OU rResultC1 < rResultC4 ALORS

	// 									Ecrire "Le premier cadidat est en ballottage défavorable."

	if ($rResultC1 > 50)

		{
			$sMessage = "Le premier cadidat est élu au premier tour.";
		}

			else if ($rResultC1 < 12.5)

				{
					$sMessage = "Le premier cadidat est battu.";
				}

					else if ($rResultC1 > $rResultC2 && $rResultC1 > $rResultC3 && $rResultC1 > $rResultC4)

						{
							$sMessage = "Le premier cadidat est en ballottage favorable.";
						}

							else
								{
									$sMessage = "Le premier cadidat est en ballottage défavorable.";
								}


	// FINSI									

	// Fin

}

	require "exo_6.html";
?>

