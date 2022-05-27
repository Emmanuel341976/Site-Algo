<?php
	$sMessage= "";
    $Tab = array();
    $i = 1;
    $j = 1;
    $iValue = 0;

    if (isset($_POST["btn_php"]))
    {
        
        $Tab[0] = $_POST["nombre0"];

        for($i; $i < 100; $i++)
        {
            $iValue = $_POST["nombre" . $i];
            $j = $i - 1;

            while ($j >= 0 && $Tab[$j] > $iValue)
                {
                    $Tab[$j+1] = $Tab[$j];
                    $j--;
                }
            $Tab[$j+1] = $iValue;    
        }

    $sMessage =  $Tab;  
    }

	require "exo_17.html";
?>

