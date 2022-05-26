<?php
	$sMessage= "";

    $iCompteur = 0;

    if(!isset($_POST["iRandomNumber"]))
    {

        $iRandomNumber = rand(1, 100);


    

    }

   
    



if (isset($_POST["btn_php"]))
{

   
    

    
    // Variables iUserNumber iRandomNumber

    // Début
    
    // Ecrire "Saisisez un nombre comris entre 1 et 100."
    // Lire iUserNumber

    $iUserNumber = $_POST["iUserNumber"];

    $iNumber = $_POST["iRandomNumber"];
    

    //iRandomNumber <- random[1..100]
    
    // TANTQUE iUserNumber != iRandomNumber
    //         SI iUserNumber < iRandomNumber ALORS
    //             Ecrire "Plus grand."
    //                 SINON 
    //                     Ecrire "Plus petit."
    //         FINSI
    
    //         Ecrire "Saisissez un nouveau nombre"
    // FINTANTQUE

    $iCompteur = $_POST["iCompteur"];
    $iCompteur++;

    if ($iNumber !== $iUserNumber)
        {
            if ($iNumber < $iUserNumber)
                {
                    $sMessage = "Votre nombre est plus grand, saisissez un nouveau nombre." . $iNumber;
                    
                }

                    else
                    {
                        $sMessage = "Votre nombre est plus petit, saisissez un nouveau nombre." . $iNumber;
                        
                    }
           
        }

        if ($iNumber == $iUserNumber)
                    {
                        $sMessage = "Vous avez trouvé le nombre mystère, il s'agissait bien de " . $iNumber . "." . " En " . $iCompteur . " coups.";
                        
                    }
    
    // Ecrire "Bravo, vous avez trouvé le nombre, c'était : " + iRadomNumber
    
    
    // Fin

	
    $iRandomNumber = $iNumber;
 

}
	
	require "exo_2b.html";
?>

