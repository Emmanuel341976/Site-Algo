<?php
	$sMessage= "";
    $tab = array(); 
    $i = 0;
    $Value = 0;
    $iNbNegatif =0;
    
    if (isset($_POST["btn_php"]))
    {
        $iUserNumber = $_POST["UserNumber"];
        for ($i; $i < $iUserNumber; $i++)
            {
                $Value = $_POST["nombre". $i];
                $tab [$i] = $Value;
                
                if ($Value < 0)
                    {
                        $iNbNegatif = $iNbNegatif + 1;
                    }

            }
        
        $sMessage =  "Le nombre d'entrées négative est : " . $iNbNegatif . "." . "</br>" . "Le nombre d'entrées positives est : " . ($iUserNumber - $iNbNegatif) . ".";
        
    }

	require "exo_8.html";
?>

