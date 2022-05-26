<?php
	$sMessage= "";

if (isset($_POST["btn_php"]))
{

 $iUserNumber = $_POST["iUserNumber"];
 
 if ($iUserNumber < 1 || $iUserNumber > 3)
    { 
        $sMessage = ("La saisie est incorrecte veuillez saisir un nouveau nombre.");
    }
        else
        {
            $sMessage = ("La saisie est correcte merci.");
        }

}
	
	require "exo_1.html";
?>

