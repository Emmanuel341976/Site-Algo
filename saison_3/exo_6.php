<?php

	$sMessage= "";

if (isset($_POST["btn_php"]))
{

$iUserAge = $_POST["iUserAge"];

if ($iUserAge < 6)
{
	$sMessage = "L'enfent est trop petit";
}

	switch ($iUserAge)
		{
			case 6 :
				$sMessage = "L'enfent est en Poussin";
			break;
			
			case 7:
				$sMessage = "L'enfent est en Poussin";
			break;

			case 8 :
				$sMessage = "L'enfent est en Pupille";
			break;

			case 9 :
				$sMessage = "L'enfent est en Pupille";
			break;

			case 10 :
				$sMessage = "L'enfent est en Minime";
			break;

			case 11 :
				$sMessage = "L'enfent est en Minime";

		}

if ($iUserAge > 12)
		{
			$sMessage = "L'enfent est en Cadet";
		}
}

	require "exo_6.html";
?>




