<?php
	$sMessage= "";



if (isset($_POST["btn_php"]))
{
    $iRendu = 0;
    $iNbB10 = 0;
    $iNbB5 = 0;
    $iNbP1 = 0;


    $iPayement = $_POST["iPayement"];

    $iTotalPrice = $_POST["iTotalPrice"];

    $iRendu = $iPayement - $iTotalPrice;

    $iNbB10 = floor($iRendu / 10);
    

    if ($iRendu - ((floor($iRendu / 10)) * 10) >= 5)
    {
        $iNbB5 = 1;
    }
        else
        {
            $iNbB5 = 0;
        }

    if ($iRendu - (floor($iRendu / 10)) * 10 > 5)
        {
            $iNbP1 = ($iRendu - (floor($iRendu / 10)) * 10 -5);
        }
            else
            {
                if ($iRendu - (floor($iRendu / 10)) * 10 < 5)
                    {
                        $iNbP1 = ($iRendu - (floor($iRendu / 10)) * 10);
                    }
            }




    $sMessage =  "La Monnaie qui vous est rendue est : </br>" . $iNbB10 . " billet(s) de 10 euros. </br>" . $iNbB5 . " billet(s) de 5 euros. </br>" . $iNbP1 . " pièces(s) de 1 euro. </br>";

}



	
	require "exo_10.html";
?>

