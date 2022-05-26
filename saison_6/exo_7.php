<?php
	$sMessage= "";

    $tab = array(9);
    $Note = 0;
    $iSomme = 0;
    $rMoyenne = 0;
    
    $i = 0;
    
    if (isset($_POST["btn_php"]))
    {
        for ($i; $i <= 8; $i++)
            {
                $Note = $_POST["nombre". $i];
                $tab [$i] = $Note;
                $iSomme = $iSomme + $tab[$i];
            }
        
        $rMoyenne = round(($iSomme / 9), 2);
        $sMessage =  "La Moyenne des notes est : " . $rMoyenne;
        
    }

	require "exo_7.html";
?>

