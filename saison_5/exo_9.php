<?php
	$sMessage= "";

// Variables  iNumberName, iBiggerNumber, iUserNumber, iOrderNumber

// Début

// Ecrire "Saisir le nombre d'entrées désirées."

// lire nombre1
// iBiggerNumber <- nombre1

// Pour i <- 2 à position

// 	iNumberName <- "nombre" + i

// 	lire iNumberName

// 		SI (iBiggerNumber < iNumberName)
// 			 ALORS
// 				iBiggerName <- iNumberName
// 		 FINSI

// 	 i Suivant

// Ecrire "Le nombre" + iOrderNumber +  " est le plus grand de la liste, c'est " + iBiggerNumber
	
// Fin


//  if(!isset($_POST["iposition"]))
//      {
//            $iposition = 0;

//      }


if (isset($_POST["btn_php"]))
{



$iposition = $_POST["iposition"];

$iBiggerNumber = $_POST["nombre1"];

$iOrderNumber = 1;

for ($i =2; $i <= $iposition; $i++)
{

    $iNumberName = "nombre" . $i;

    $iNextNumber = $_POST[$iNumberName];

        if ($iBiggerNumber < $iNextNumber)
            {

                $iBiggerNumber = $iNextNumber;
                $iOrderNumber = $i;

            }
}

$sMessage = "Le nombre " . $iOrderNumber . " est le plus grand de la liste c'est le : " . $iBiggerNumber;

}

	require "exo_9.html";
?>

