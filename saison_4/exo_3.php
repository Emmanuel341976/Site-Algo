<?php
	$sMessage= "";

if (isset($_POST["btn_php"]))
{
	$iUserHours = $_POST["iUserHours"];
	$iUserMinutes = $_POST["iUserMinutes"];
	$iUserSeconds = $_POST["iUserSeconds"];

	if ($iUserHours == 23 && $iUserMinutes == 59 && $iUserSeconds == 59)
    {
        $iUserHours = 0;
        $iUserMinutes = 0;
        $iUserSeconds = 0;
    }

        else if ( $iUserMinutes == 59 && $iUserSeconds == 59)
            {
                $iUserHours = $iUserHours + 1;
                $iUserMinutes = 0;
                $iUserSeconds = 0;
            }
                else if ($iUserSeconds == 59)
                    {
                        $iUserMinutes = $iUserMinutes + 1;
                        $iUserSeconds = 0;
                    }
                        else
                            { 
                                $iUserSeconds = $iUserSeconds + 1;
                            }
	$sMessage = "Dans une seconde il sera : " . $iUserHours . " heure(s) " . $iUserMinutes . " minutes et " . $iUserSeconds . " secondes.";

}



	require "exo_3.html";
?>

