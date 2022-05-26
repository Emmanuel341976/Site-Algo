<?php
	$sMessage= "";

$tab = array(9);
$Note = 0;

$i = 0;

if (isset($_POST["btn_php"]))
{
    for ($i; $i <= 8; $i++)
        {
            $Note = $_POST["nombre". $i];
            $tab [$i] = $Note;
        }
    
   
    $sMessage =  $tab;
    
}

	require "exo_6.html";
?>

