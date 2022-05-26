<?php
	$sMessage= "";

    $rOrderChance=0;
    $rUnorderChance=0;
    $i=1;


if (isset($_POST["btn_php"]))
{
   $iNumbHorse = $_POST["iNumbHorse"];
   $iPlayedHorse = $_POST["iPlayedHorse"];


    function factorielle($iNumber)
{

    

   
    $iFactorielle = 1;

    for($i = 1; $i <= $iNumber; $i++)
    {

    $iFactorielle = $iFactorielle * $i;

    }

    return $iFactorielle;
}


    $rOrderChance = (factorielle($iNumbHorse) / factorielle($iNumbHorse - $iPlayedHorse));
    $rUnorderChance = (factorielle($iNumbHorse) / (factorielle($iPlayedHorse) * factorielle($iNumbHorse - $iPlayedHorse)));
    

$sMessage = "Les chances de gagner dans l'ordre sont de 1 chance sur " . $rOrderChance . ".</br>" . "Les chances de gagner dans le désordre sont de 1 chance sur " . $rUnorderChance . ".";


}


	
	require "exo_11b.html";
?>

