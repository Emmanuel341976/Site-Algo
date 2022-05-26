<?php
	$sMessage= "";
    $Tab1 = array(4,8,7,12);
    $Tab2 = array(3,6);
    $Toon = 0;
    $j = 0; 
    $i = 0;
    
    if (isset($_POST["btn_php"]))
    {
        
        for ($i; $i < 2; $i++)
        {
            for ($j; $j < 4; $j++)
                {
                    $Toon = $Toon + $Tab1[$j] * $Tab2[$i];
                }
            $j = 0;
        }
        
        $sMessage = $Toon;
        
    }

	require "exo_11.html";
?>

