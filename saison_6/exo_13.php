<?php
	$sMessage= "";
    $tab = array();
    $tab2 = array(); 
    $i = 0;
    $j = 0;
    $icompt = 0;
    
    if (isset($_POST["btn_php"]))
    {
        $iUserNumber = $_POST["iUserNumber"];

        for ($i; $i < $iUserNumber; $i++)
        {
            
            $Tab[$i] = $_POST["nombre" . $i];
        }

        $Tab2 = [0, $Tab[0]];
        $icompt = $iUserNumber -1;


        for ($j; $j < $icompt; $j++)
        {
            if ($Tab2[1] < $Tab[$j])
                {
                    $Tab2[1] = $Tab[($j)];
                    $Tab2[0] = $j;
                }
        }
        
        $sMessage = "le nombres le plus grand est : " . $Tab2[1] . ".</br>" . "Il est à l'index " . $Tab2[0] . " du tableau.";
        
    }

	require "exo_13.html";
?>

