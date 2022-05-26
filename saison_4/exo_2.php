<?php
	$sMessage= "";

if (isset($_POST["btn_php"]))
	{

		$iUserHours = $_POST["iUserHours"];
		$iUserMinutes = $_POST["iUserMinutes"];

		if ($iUserHours == 23 && $iUserMinutes == 59)
		{
			$iUserHours = 0;
			$iUserMinutes = 00;
		}

			else if ($iUserMinutes == 59)
				{
					$iUserHours = $iUserHours + 1;
					$iUserMinutes = 0;
				}
					else
						{ 
						$iUserMinutes = $iUserMinutes + 1;
						}

		$sMessage = "Dans une minute il sera : " . $iUserHours . " heure(s) " . $iUserMinutes . " minutes.";

	}
		
	require "exo_2.html";
?>

