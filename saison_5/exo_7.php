<?php

	$sMessage= "";

if (isset($_POST["btn_php"]))
{

    $iUserNumber = $_POST["iUserNumber"];
    $iFactorielle = 1;

    for ($i = 1; $i <= $iUserNumber; $i++)
    {

        $iFactorielle = $iFactorielle * $i;

    }

$sMessage = "La Factorielle de " . $iUserNumber . " est : " . $iFactorielle;

}

	require "exo_7.html";

?>

