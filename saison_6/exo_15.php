<?php
	$sMessage= "";
    $Tab = array();
    $i = 1;
   
    
    if (isset($_POST["btn_php"]))
    {
        $iUserNumber = $_POST["iUserNumber"];
        $Tab[0] = 1000;

        for ($i; $i < 21; $i++)
        {
            
            $Tab[$i] = $Tab[$i-1] + $Tab[$i-1] * 2.75 / 100;

        }

        
        $sMessage = "L'éparge réalisée à " . $iUserNumber . " ans est : " . round($Tab[$iUserNumber], 2) . " euros";
        
    }

	require "exo_15.html";
?>

