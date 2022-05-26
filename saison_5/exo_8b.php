<?php
	$sMessage= "";

if (isset($_POST["btn_php"]))
{

// Variables iNumberName, iBiggerNumber, iUserNumber

// Début

// Ecrire "Saisir le nombre d'entrées désirées."

// Lire iUserNumber

// lire nombre1
// iBiggerNumber <- nombre1

// Pour i <- 2 à iUsernerNumber

// 	iNumberName <- "nombre" + i

// 	lire iNumberName

// 		SI (iBiggerNumber < iNumberName)
// 			ALORS
// 				iBiggerName <- iNumberName
// 		FINSI

// 	i Suivant

// Ecrire "Le nombre le plus grand de la liste est " + iBiggerNumber 
		
// Fin

$iUserNumber = $_POST["iUserNumber"];

$iBiggerNumber = $_POST["nombre1"];

$iOrderNumber = 1;

for ($i =2; $i <= $iUserNumber; $i++)
{

    $iNumberName = "nombre" . $i;

    $iNextNumber = $_POST[$iNumberName];

        if ($iBiggerNumber < $iNextNumber)
            {

                $iBiggerNumber = $iNextNumber;
                $iOrderNumber = $i;

            }
}

$sMessage = "Le nombre " . $iOrderNumber . " est le plus grand de la liste c'est : " . $iBiggerNumber;

    

}



	
	require "exo_8b.html";
?>

