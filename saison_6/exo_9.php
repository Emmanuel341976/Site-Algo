<?php
	$sMessage= "";
    $tab = array(); 
    $i = 0;
    $Value = 0;
    $iTabIndexSum = 0;
    
    if (isset($_POST["btn_php"]))
    {
        $iUserNumber = $_POST["iUserNumber"];
        for ($i; $i < $iUserNumber; $i++)
            {
                $Value = $_POST["nombre". $i];
                $tab [$i] = $Value;
                
                $iTabIndexSum = $iTabIndexSum + $tab[$i];

            }
        
        $sMessage =  "La somme des index du tableau est : " . $iTabIndexSum;
        
    }

	require "exo_9.html";
?>

