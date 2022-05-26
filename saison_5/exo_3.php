<?php
	$sMessage= "";

if (isset($_POST["btn_php"]))
{
    
    $iUserNumber = $_POST["iUserNumber"];

    $iNumber = $iUserNumber + 10;

    $sDecompte = " ";

    $sResultat = "Vous avez saisi le nombre : " . $iUserNumber  . ". Les 10 nombres suivants sont : ";

    while ($iUserNumber <= $iNumber)
        {
           $iUserNumber = $iUserNumber + 1;

            $sDecompte = $sDecompte . " " . $iUserNumber; 



            
        }

        $sMessage = $sResultat . $sDecompte;
}


	
	require "exo_3.html";
?>

