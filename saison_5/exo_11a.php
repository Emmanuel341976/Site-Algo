<?php
	$sMessage= "";

    $rOrderChance=0;
    $rUnorderChance=0;
    $iFactoriellen=1;
    $iFactoriellep=1; 
    $iFactoriellenmoinsp=1;
    $i=1;


if (isset($_POST["btn_php"]))
{
   $iNumbHorse = $_POST["iNumbHorse"];
   $iPlayedHorse = $_POST["iPlayedHorse"];



    for($i = 1; $i <= ($iNumbHorse); $i++)
        {

        $iFactoriellen = ($iFactoriellen) * $i;
        
        }


    for($i = 1; $i <= ($iPlayedHorse); $i++)
        {

        $iFactoriellep = ($iFactoriellep) * $i;
        
        }


    for($i = 1; $i <= (($iNumbHorse - $iPlayedHorse)); $i++)
        {

        $iFactoriellenmoinsp = ($iFactoriellenmoinsp * $i);

        }


    $rOrderChance = ($iFactoriellen / $iFactoriellenmoinsp);
    $rUnorderChance = ($iFactoriellen / ($iFactoriellep * $iFactoriellenmoinsp));

$sMessage = "Les chances de gagner dans l'ordre sont de 1 chance sur " . $rOrderChance . ".</br>" . "Les chances de gagner dans le désordre sont de 1 chance sur " . $rUnorderChance . ".";


}


	
	require "exo_11a.html";
?>

