<?php
	$sMessage= "";

if (isset($_POST["btn_php"]))
{

    $iUserNumber = $_POST["iUserNumber"];
    $iSomme = 0;

    for ($i = 1; $i <= $iUserNumber; $i++)
    {
        

        $iSomme = $iSomme + $i;

        
    }
			


$sMessage = "La somme des nombres est : " . $iSomme;

    

}



	
	require "exo_6.html";
?>

