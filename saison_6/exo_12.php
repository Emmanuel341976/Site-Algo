<?php
	$sMessage= "";
    $tab = array();
    $i = 0;
    
    if (isset($_POST["btn_php"]))
    {
        $iUserNumber = $_POST["iUserNumber"];

        for ($i; $i < $iUserNumber; $i++)
            {
                $Tab[$i] = $_POST["nombre". $i]+1;
                
            }
        
        $sMessage = $Tab;
        
    }

	require "exo_12.html";
?>

