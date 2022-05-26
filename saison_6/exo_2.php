<?php
	$sMessage= "";

$tab = array(6);


if (isset($_POST["btn_php"]))
{
    $tab [0]="a";
    $tab [1]="e";
    $tab [2]="i";   
    $tab [3]="o";            
    $tab [4]="u";
    $tab [5]="y";
    
   
    $sMessage =  $tab;
    
}

	require "exo_2.html";
?>

