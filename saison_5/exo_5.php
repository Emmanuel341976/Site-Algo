<?php
	$sMessage= "";

if (isset($_POST["btn_php"]))
{

    $iUserNumber = $_POST["iUserNumber"];
    $sResult = " ";
    $iProduit = 0;

    for ($i = 0; $i <= 10; $i++)
    {
        

        $iProduit = $iUserNumber * $i;

        $sResult = $sResult . $iUserNumber . " x " . $i . " = " . $iProduit . "</br>";
    }
			


$sMessage = $sResult;

    

}



	
	require "exo_5.html";
?>

