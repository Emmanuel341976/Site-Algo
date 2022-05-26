<?php
	$sMessage= "";
    $tab0 = array();
    $tab1 = array();
    $tab2 = array(); 
    $i = 0;
    
    if (isset($_POST["btn_php"]))
    {
        $iUserNumber = $_POST["iUserNumber"];
        for ($i; $i < $iUserNumber; $i++)
            {
                $Tab0[$i] = $_POST["nombre0_". $i];
                $Tab1[$i] = $_POST["nombre1_". $i];
                $Tab2[$i]  = $Tab0[$i] + $Tab1[$i];
            }
        
        $sMessage = $Tab2;
        
    }

	require "exo_10.html";
?>

