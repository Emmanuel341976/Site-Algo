<?php
	$sMessage= "";
    $Tab16 = array();
    $k = 1;
    $j = 1;

   
    
    if (isset($_POST["btn_php"]))
    {
        
        $Tab16[0] = $_POST["iUserNumber"];

        for ($k; $k < 100; $k++)
            {                     
                $Tab16[$k] = $_POST["nombre" . $k];          
            }

        for ($j; $j < 100; $j++)
            {           
                if (($Tab16[$j]) == ($Tab16[$j-1]+1))
                    {
                        $bVar = true;
                    }
                else
                    {
                        $bVar = false;
                        break;
                    }
            }
    
        if ($bVar == true)
            {
                $sMessage = "Les valeurs du tableau sont consécutives";
            } 
        else
            { 
                $sMessage = "Les valeurs du tableau ne sont pas consécutives";
            }
  
    
    }
	require "exo_16.html";
?>

