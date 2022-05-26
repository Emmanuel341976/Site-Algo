<?php
	$sMessage= "";

if (isset($_POST["btn_php"]))
{
    
//     Variables iUserNumber, i

// Début

// Ecrire "entrez un nombre."

// Lire iUserNumber

$iUserNumber = $_POST["iUserNumber"];
$sResult = " ";

// 	POUR iCompteur = 0, iCompteur <=10, iCompeur ++

// 		iUserNumber += 1
// 		Ecrire += iUserNumber + " " 

// 	FINPOUR

for ($i = 0; $i < 10; $i++)
    {
        $iUserNumber += 1;

        $sResult = $sResult . " " . $iUserNumber;
    }
			
// Fin

$sMessage = "Les dix nombres qui suive votre nombre sont : " . $sResult;

}



	
	require "exo_4.html";
?>

