<?php
	$sMessage= "";

$itab = array();
$i = 0;

if (isset($_POST["btn_php"]))
{

    for ($i; $i <= 6; $i++)
    {

        $itab [$i] = 0;

    }
   
    $sMessage =  $itab;
    
}

	require "exo_1.html";
?>

