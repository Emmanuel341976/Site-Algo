<?php
	$sMessage= "";
    $tab = array();
    $i = 0;
    $j = 0;
    $rNoteSum = 0;
    $rAvrerage = 0;
    $iNbSup = 0;
    
    if (isset($_POST["btn_php"]))
    {
        $iUserNumber = $_POST["iUserNumber"];

        for ($i; $i < $iUserNumber; $i++)
        {
            
            $Tab[$i] = $_POST["nombre" . $i];
            $rNoteSum = $rNoteSum + $Tab[$i];
        }

        $rAverage = round(($rNoteSum / $iUserNumber), 2);
        
        for ($j; $j < $iUserNumber; $j++)
        {
            if ($rAverage < $Tab[$j])
                {
                    $iNbSup = $iNbSup + 1;
                }
        }
        
        $sMessage = "La moyenne de la classe est : " . $rAverage . ".</br>" . $iNbSup . " élève(s) ont eut une note supérieure à la moyenne de la classe.";
        
    }

	require "exo_14.html";
?>

