function Exo_4_2_jsform()
{
    let iUserHours, iUserMinutes;

    iUserHours = document.getElementById("iUserHours").value;
    iUserMinutes = document.getElementById("iUserMinutes").value;

    parseInt(iUserMinutes);
    parseInt(iUserHours);


    if (iUserHours == 23 && iUserMinutes == 59)
    {
        iUserHours = 0;
        iUserMinutes = 00;
    }

        else {
                if (iUserMinutes == 59)
                {
                    iUserHours = parseInt(iUserHours) + 1;
                    iUserMinutes = 0;
                }
                    else
                        { 
                            iUserMinutes = parseInt(iUserMinutes) + 1;
                        }

        
            }


    


    document.getElementById("sp_resultat_code").innerHTML = "Dans une minute il sera : " + iUserHours + " heure(s) " + iUserMinutes + " minutes.";

}


function Exo_4_2_jquery()
{

    
    var iUserHours, iUserMinutes;

    iUserHours = $("#iUserHours").val();
    iUserMinutes = $("#iUserMinutes").val();

    parseInt(iUserMinutes);
    parseInt(iUserHours);


    if (iUserHours == 23 && iUserMinutes == 59)
    {
        iUserHours = 0;
        iUserMinutes = 0;
    }

     
        else {
                    if (iUserMinutes == 59)
                    {
                        iUserHours = parseInt(iUserHours) + 1;
                        iUserMinutes = 0;
                    }
                        else
                            { 
                                iUserMinutes = parseInt(iUserMinutes) + 1;
                            }

                }

            


    $("#sp_resultat_code").html ("Dans une minute il sera : " + iUserHours + " heure(s) " + iUserMinutes + " minutes.");
}



function Exo_4_3_jsform()
{
    let iUserHours, iUserMinutes, iUserSeconds;

    iUserHours = document.getElementById("iUserHours").value;
    iUserMinutes = document.getElementById("iUserMinutes").value;
    iUserSeconds = document.getElementById("iUserSeconds").value;

    parseInt(iUserMinutes);
    parseInt(iUserHours);
    parseInt(iUserSeconds);



    if (iUserHours == 23 && iUserMinutes == 59 && iUserSeconds == 59)
    {
        iUserHours = 0;
        iUserMinutes = 0;
        iUserSeconds = 0;
    }

        else {
            if ( iUserMinutes == 59 && iUserSeconds == 59)
            {
                iUserHours = parseInt(iUserHours) + 1
                iUserMinutes = 0;
                iUserSeconds = 0;
            }
                else {
                    if (iUserSeconds == 59)
                    {
                        iUserMinutes = parseInt(iUserMinutes) + 1;
                        iUserSeconds = 0;
                    }
                        else
                            { 
                                iUserSeconds = parseInt(iUserSeconds) + 1;
                            }

                }

            
        }
    
    document.getElementById("sp_resultat_code").innerHTML = "Dans une seconde il sera : " + iUserHours + " heure(s) " + iUserMinutes + " minutes et " + iUserSeconds + " secondes.";


}

function Exo_4_3_jquery()
{

    var iUserHours, iUserMinutes, iUserSeconds;

    iUserHours = $("#iUserHours").val();
    iUserMinutes = $("#iUserMinutes").val();
    iUserSeconds = $("#iUserSeconds").val();

    parseInt(iUserMinutes);
    parseInt(iUserHours);
    parseInt(iUserSeconds);



    if (iUserHours == 23 && iUserMinutes == 59 && iUserSeconds == 59)
    {
        iUserHours = 0;
        iUserMinutes = 0;
        iUserSeconds = 0;
    }

        else {
            if ( iUserMinutes == 59 && iUserSeconds == 59)
            {
                iUserHours = parseInt(iUserHours) + 1
                iUserMinutes = 0;
                iUserSeconds = 0;
            }
                else {
                    if (iUserSeconds == 59)
                    {
                        iUserMinutes = parseInt(iUserMinutes) + 1;
                        iUserSeconds = 0;
                    }
                        else
                            { 
                                iUserSeconds = parseInt(iUserSeconds) + 1;
                            }

                }

            
        }
    
    $("#sp_resultat_code").html ("Dans une seconde il sera : " + iUserHours + " heure(s) " + iUserMinutes + " minutes et " + iUserSeconds + " secondes.");


}


function Exo_4_4_jsform()
{

    
 // Variables iCopyNb entier rCopyPrice réél

 let iCopyNb, rCopyPrice;

 // Début

 // Ecrire : "Quelle est le nombre de copy que vous avez réalisé"

 // Lire iCopyNb
 iCopyNb = document.getElementById("iCopyNb").value;
 // SI iCopyNb =< 10 ALORS
 if (iCopyNb <= 10)
 {
 //     rCopyPrice = iCopyNb * 0.1
        rCopyPrice = Math.round((iCopyNb * 0.1)*100)/100;
 }
 //     SINON

 //         SI iCopyNb > 10 ET iCopyNb =< 30 ALORS
    else if ( iCopyNb > 10 && iCopyNb <= 30)
    {
 //           rCopyPrice = 10 * 0.1 + (iCopyNb - 10 ) * 0.09
            rCopyPrice = Math.round((10 * 0.1 + (iCopyNb - 10 ) * 0.09)*100)/100;
    }
 //             SINON
            else
                {
                    rCopyPrice =  Math.round((10 * 0.1 + 20 * 0.09 + (iCopyNb - 30) * 0.08)*100)/100;
                }
 //               rCopyPrice = 10 * 0.1 + 20 * 0.09 + (iCopyNb - 30) * 0.08

 // FIN SI 
 
 // Ecrire : "Le prix total de votre commande est de " + rCopyPrice + "euros"

 document.getElementById("sp_resultat_code").innerHTML = "Le prix total de votre commande est de " + rCopyPrice + " euros.";
 
 // Fin



}

function Exo_4_4_jquery()
{

// Variables iCopyNb entier rCopyPrice réél

var iCopyNb, rCopyPrice;

 // Début

 // Ecrire : "Quelle est le nombre de copy que vous avez réalisé"

 // Lire iCopyNb
 iCopyNb = $("#iCopyNb").val();
 // SI iCopyNb =< 10 ALORS
 if (iCopyNb <= 10)
    {
 //     rCopyPrice = iCopyNb * 0.1
        rCopyPrice = Math.round((iCopyNb * 0.1)*100)/100;
    }
 //     SINON

 //         SI iCopyNb > 10 ET iCopyNb =< 30 ALORS
    else
        {
            if ( iCopyNb > 10 && iCopyNb <= 30)
                {
                    //           rCopyPrice = 10 * 0.1 + (iCopyNb - 10 ) * 0.09
                        rCopyPrice = Math.round((10 * 0.1 + (iCopyNb - 10 ) * 0.09)*100)/100;
                }
                //             SINON
                    else
                        {
                            rCopyPrice =  Math.round((10 * 0.1 + 20 * 0.09 + (iCopyNb - 30) * 0.08)*100)/100;
                        }
        }
 //               rCopyPrice = 10 * 0.1 + 20 * 0.09 + (iCopyNb - 30) * 0.08

 // FIN SI 
 
 // Ecrire : "Le prix total de votre commande est de " + rCopyPrice + "euros"

 $(" #sp_resultat_code").html ("Le prix total de votre commande est de " + rCopyPrice + " euros.");
 
 // Fin

}


function Exo_4_5_jsform()
{


//     Variables iToonAge entier et sToonGenre string

let iToonAge, sToonGenre;

// Début

// Ecrire : "Quel est votre age de TOON?"

// Lire iToonAge

iToonAge = document.getElementById("iToonAge").value;

// Ecrire : "Quel est votre genre de TOON (F/M)?"

// Lire sToonGenre

sToonGenre = document.getElementById("sToonGenre").value;

// SI cToonGenre == M et iToonAge > 20 ALORS

if (sToonGenre == "M" && iToonAge > 20)
	
// 	Ecrire "Vous êtes imposable"

    {
        document.getElementById("sp_resultat_code").innerHTML = "Vous êtes imposable.";
    }


// 	SINON



// 			SI cToonGenre == F ET (iToonAge >= 18 ET iToonAge < 35)

        else if (sToonGenre == "F" && (iToonAge >= 18 && iToonAge < 35))
        
        // 				Ecrire "Vous êtes imposable"

            {
                document.getElementById("sp_resultat_code").innerHTML = "Vous êtes imposable."; 
            }

// 					SINON 

                else 

// 					Ecrire "Vous n'êtes pas imposable"

                    {
                        document.getElementById("sp_resultat_code").innerHTML = "Vous n'êtes pas imposable."; 
                    }

// FINSI

// FIn

}

function Exo_4_5_jquery()
{


//     Variables iToonAge entier et sToonGenre string

var iToonAge, sToonGenre;

// Début

// Ecrire : "Quel est votre age de TOON?"

// Lire iToonAge

iToonAge = $("#iToonAge").val();

// Ecrire : "Quel est votre genre de TOON (F/M)?"

// Lire sToonGenre

sToonGenre = $("#sToonGenre").val();

// SI cToonGenre == M et iToonAge > 20 ALORS

if (sToonGenre == "M" && iToonAge > 20)
	
// 	Ecrire "Vous êtes imposable"

    {
        $("#sp_resultat_code").html ("Vous êtes imposable.");
    }


// 	SINON



// 			SI cToonGenre == F ET (iToonAge >= 18 ET iToonAge < 35)

        else 
        {
        
            if (sToonGenre == "F" && (iToonAge >= 18 && iToonAge < 35))
            
            // 				Ecrire "Vous êtes imposable"

                {
                    $("#sp_resultat_code").html ("Vous êtes imposable."); 
                
                }
                         // 	SINON 

                    else 

                        // Ecrire "Vous n'êtes pas imposable"

                        {
                            $("#sp_resultat_code").html ("Vous n'êtes pas imposable."); 
                        }
                
        }
// FINSI

// FIn

}

function Exo_4_6_jsform()
{

// Variables rResultC1 rResultC2 rResultC3 rResultC4 reel

let rResultC1, rResultC2, rResultC3, rResultC4;

// Début

// Ecrire : "Quel est le résultat du premier candidat?"

// lire rResultC1

rResultC1 = document.getElementById("rResultC1").value;

// Ecrire : "Quel est le résultat du deuxième candidat?"

// lire rResultC2

rResultC2 = document.getElementById("rResultC2").value;

// Ecrire : "Quel est le résultat du troisième candidat?"

// lire rResultC3

rResultC3 = document.getElementById("rResultC3").value;

// Ecrire : "Quel est le résultat du quatrième candidat?"

// lire rResultC4

rResultC4 = document.getElementById("rResultC4").value;

// SI rResultC1 > 50 ALORS

// 		Ecrire "Le premier cadidat est élu au premier tour."

// 			SINON SI rResultC1 < 12.5 ALORS
					
// 					Ecrire "Le premier cadidat est battu."

// 						SINON SI rResultC1 > rResultC2 ET rResultC1 > rResultC3 ET rResultC1 > rResultC4 ALORS

// 							Ecrire "Le premier cadidat est en ballottage favorable"

// 								SINON SI rResultC1 < rResultC2 OU rResultC1 < rResultC3 OU rResultC1 < rResultC4 ALORS

// 									Ecrire "Le premier cadidat est en ballottage défavorable"
                                    
// FINSI

if (rResultC1 > 50)

    {
        document.getElementById("sp_resultat_code").innerHTML = "Le premier cadidat est élu au premier tour.";
    }

    else if (rResultC1 < 12.5)

        {
            document.getElementById("sp_resultat_code").innerHTML = "Le premier cadidat est battu.";
        }

        else if (rResultC1 > rResultC2 && rResultC1 > rResultC3 && rResultC1 > rResultC4)

            {
                document.getElementById("sp_resultat_code").innerHTML = "Le premier cadidat est en ballottage favorable";
            }

                else 
                    {
                        document.getElementById("sp_resultat_code").innerHTML =  "Le premier cadidat est en ballottage défavorable";
                    }

// Fin

}



function Exo_4_6_jquery()
{

// Variables rResultC1 rResultC2 rResultC3 rResultC4 reel

var rResultC1, rResultC2, rResultC3, rResultC4;

// Début

// Ecrire : "Quel est le résultat du premier candidat?"

// lire rResultC1

rResultC1 = $("#rResultC1").val();

// Ecrire : "Quel est le résultat du deuxième candidat?"

// lire rResultC2

rResultC2 = $("#rResultC2").val();

// Ecrire : "Quel est le résultat du troisième candidat?"

// lire rResultC3

rResultC3 = $("#rResultC3").val();

// Ecrire : "Quel est le résultat du quatrième candidat?"

// lire rResultC4

rResultC4 = $("#rResultC4").val();

// SI rResultC1 > 50 ALORS

// 		Ecrire "Le premier cadidat est élu au premier tour."

// 			SINON SI rResultC1 < 12.5 ALORS
					
// 					Ecrire "Le premier cadidat est battu."

// 						SINON SI rResultC1 > rResultC2 ET rResultC1 > rResultC3 ET rResultC1 > rResultC4 ALORS

// 							Ecrire "Le premier cadidat est en ballottage favorable"

// 								SINON SI rResultC1 < rResultC2 OU rResultC1 < rResultC3 OU rResultC1 < rResultC4 ALORS

// 									Ecrire "Le premier cadidat est en ballottage défavorable"
                                    
// FINSI

if (rResultC1 > 50)

    {
        $("#sp_resultat_code").html ("Le premier cadidat est élu au premier tour.");
    }

    else

    {
    
        if (rResultC1 < 12.5)

            {
                $("#sp_resultat_code").html  ("Le premier cadidat est battu.");
            }

            else
            { 
            
                if (rResultC1 > rResultC2 && rResultC1 > rResultC3 && rResultC1 > rResultC4)

                    {
                        $("#sp_resultat_code").html ("Le premier cadidat est en ballottage favorable");
                    }

                        else 
                            {
                                $("#sp_resultat_code").html ("Le premier cadidat est en ballottage défavorable");
                            }
            }                    
    }

// Fin

}

function Exo_4_7_jsform()
{

    // Variables iUserAge iUserAccident iUserLicense iPolicyAge iPolicyPoint integer

    let iUserAge, iUserLicense, iPolicyAge, iUserAccident , iPolicyPoint=0;

    // Début

    // Ecrire "Quel est votre âge?"
    // Lire iUserAge

    iUserAge = document.getElementById("iUserAge").value;

    // Ecrire "Depuis combien d'année avez vous votre permis?"
    // Lire iUserLicense

    iUserLicense = document.getElementById("iUserLicense").value;

    // Ecrire "Depuis combien d'années avez vous un contrat chez nous?"
    // Lire iPolicyAge

    iPolicyAge = document.getElementById("iPolicyAge").value;

    // Ecrire "Combien avez vous eut d'accident responsable?"
    // Lire iUserAccident

    iUserAccident = document.getElementById("iUserAccident").value;


    // // Calcul du nombre de point du contrat d'assurance

    // SI iUserAge < 25 ALORS
    // 	iPolicyPoint ← 1

    if (iUserAge < 25)
        {
        iPolicyPoint = 1;
        }
                else
                {
                    iPolicyPoint = 0;
                }
        
    // SI iUserLicence < 2 ALORS
    // 	iPolicyPoint ← iPolicyPoint+1

    if (iUserLicense < 2)
        {
        iPolicyPoint = iPolicyPoint + 1;
        }
        
    // Prise en compte bonnification ancieneté contrat
    // SI 	iPolicyAge > 5 ALORS
    // iPolicyPoint ← iPolicyPoint-1

    if (iPolicyAge > 5)
        {
        iPolicyPoint = iPolicyPoint - 1;
        }

    // Prise en compte nombre accident
    // 	iPolicyPoint ← iPolicyPoint+iUserAccident
        
        iPolicyPoint = iPolicyPoint + iUserAccident;      
 
    // SI iPolicyPoint >= 3 ALORS
    // 	Ecrire "Nous ne pouvons pas vous assurer."

    // 	SINONSI iPolicyPoint = 2 ALORS
    // 		Ecrire "Vous avez un contrat Rouge."

    // 			SINONSI iPolicyPoint = 1 ALORS
    // 			    Ecrire "Vous avez un contrat Orange."

    // 					SINONSI iPolicyPoint = 0 ALORS
    // 					     Ecrire "Vous avez un contrat Vert."

    // 							SINONSI iPolicyPoint = -1 ALORS
    // 							Ecrire "Vous avez un contrat Bleu."
    // FINSI
    if (iPolicyPoint >= 3)
        {
        document.getElementById("sp_resultat_code").innerHTML = "Nous ne pouvons pas vous assurer. ";
        }

            else if (iPolicyPoint == 2)
                {
                    document.getElementById("sp_resultat_code").innerHTML = "Vous avez un contrat Rouge. ";
                }

                    else if (iPolicyPoint == 1)
                        {
                            document.getElementById("sp_resultat_code").innerHTML = "Vous avez un contrat Orange. ";
                        }

                            else if (iPolicyPoint == 0)
                                {
                                    document.getElementById("sp_resultat_code").innerHTML = "Vous avez un contrat Vert. ";                                
                                }

                                    else if (iPolicyPoint < 0)
                                        {
                                            document.getElementById("sp_resultat_code").innerHTML = "Vous avez un contrat bleu. ";                                        
                                        }


    // Fin

}

function Exo_4_7_jquery()
{

// Variables iUserAge iUserAccident iUserLicense iPolicyAge iPolicyPoint integer

var iUserAge, iUserLicense, iPolicyAge, iUserAccident , iPolicyPoint=0;

// Début

// Ecrire "Quel est votre âge?"
// Lire iUserAge

iUserAge = $("#iUserAge").val();

// Ecrire "Depuis combien d'année avez vous votre permis?"
// Lire iUserLicense

iUserLicense = $("#iUserLicense").val();

// Ecrire "Depuis combien d'années avez vous un contrat chez nous?"
// Lire iPolicyAge

iPolicyAge = $("#iPolicyAge").val();

// Ecrire "Combien avez vous eut d'accident responsable?"
// Lire iUserAccident

iUserAccident = $("#iUserAccident").val();


// // Calcul du nombre de point du contrat d'assurance

// SI iUserAge < 25 ALORS
// 	iPolicyPoint ← 1

if (iUserAge < 25)
    {
    iPolicyPoint = 1;
    }
            else
            {
                iPolicyPoint = 0;
            }
    
// SI iUserLicence < 2 ALORS
// 	iPolicyPoint ← iPolicyPoint+1

if (iUserLicense < 2)
    {
    iPolicyPoint = iPolicyPoint + 1;
    }
    
// Prise en compte bonnification ancieneté contrat
// SI 	iPolicyAge > 5 ALORS
// iPolicyPoint ← iPolicyPoint-1

if (iPolicyAge > 5)
    {
    iPolicyPoint = iPolicyPoint - 1;
    }

// Prise en compte nombre accident
// 	iPolicyPoint ← iPolicyPoint+iUserAccident
    
    iPolicyPoint = iPolicyPoint + iUserAccident;      

// SI iPolicyPoint >= 3 ALORS
// 	Ecrire "Nous ne pouvons pas vous assurer."

// 	SINONSI iPolicyPoint = 2 ALORS
// 		Ecrire "Vous avez un contrat Rouge."

// 			SINONSI iPolicyPoint = 1 ALORS
// 			    Ecrire "Vous avez un contrat Orange."

// 					SINONSI iPolicyPoint = 0 ALORS
// 					     Ecrire "Vous avez un contrat Vert."

// 							SINONSI iPolicyPoint = -1 ALORS
// 							Ecrire "Vous avez un contrat Bleu."
// FINSI
if (iPolicyPoint >= 3)
    {
    $("#sp_resultat_code").html("Nous ne pouvons pas vous assurer. ");
    }

        else if (iPolicyPoint == 2)
            {
                $("#sp_resultat_code").html("Vous avez un contrat Rouge. ");
            }

                else if (iPolicyPoint == 1)
                    {
                        $("#sp_resultat_code").html("Vous avez un contrat Orange. ");
                    }

                        else if (iPolicyPoint == 0)
                            {
                                $("#sp_resultat_code").html("Vous avez un contrat Vert. ");                                
                            }

                                else if (iPolicyPoint < 0)
                                    {
                                        $("#sp_resultat_code").html("Vous avez un contrat bleu. ");                                        
                                    }


// Fin

}


function Exo_4_8_jsform()
{


    // Variables iUserDay iUserMonth iUserYear

let iUserDay, iUserMonth, iUserYear, bYearTest;

    // Début
    
    // Ecrire "Donner le numéro du jour dans le mois."
    // Lire iUserDay

    iUserDay = document.getElementById("iUserDay").value;

    // Ecrire "Donner le numéro du mois."
    // Lire iUserMonth

    iUserMonth = document.getElementById("iUserMonth").value;
    
    // Ecrire "Donner l'année."
    // Lire iUserYear

    iUserYear = document.getElementById("iUserYear").value;

    // Test année Bissextile

    if (((iUserYear / 4) - Math.trunc(iUserYear / 4)) * 100 == 0)
       {
            bYearTest = true;   
        }
                else bYearTest = false;

    if(bYearTest = true)    
        {
            if (r((iUserYear / 100) - Math.trunc(iUserYear / 100)) * 100 == 0)
                {
                    bYearTest = true;
                }
                        else bYearTest = false;
        }

    if(bYearTest = true)    
        {
            if (((iUserYear / 400) - Math.trunc(iUserYear / 400)) * 100 == 0)
                {
                    bYearTest = true;
                }
                        else bYearTest = false;
        }

        
    
    // SI iUserDay == 31 ET (iUserMonTh == 2 OU iUserMonth == 4 OU iUserMonth == 6 OU iUserMonth == 9 OU iUserMonth == 11 ) ALORS
    //     Ecrire "La date n'est pas valide."
    
    //         SINON SI iUserDay == 29 ET iUserMonth == 2 ET !iUserYear dp 4 ALORS
    //             Ecrire "La date n'est pas valide."
    
    //                 SINON Ecrire "La date est valide."


if (iUserDay == 31 && (iUserMonth == 4 || iUserMonth == 6 || iUserMonth == 9 || iUserMonth == 11))
    {
        document.getElementById("sp_resultat_code").innerHTML = ("La date n'est pas valide.");
    }

        else if ( iUserDay == 29 && iUserMonth == 2 && bYearTest !== true)
            {
                document.getElementById("sp_resultat_code").innerHTML = ("La date n'est pas valide.");
            }

                else
                {
                    document.getElementById("sp_resultat_code").innerHTML = ("La date est valide.");
                }



    
    // FINSI
    
    // Fin    


}

function Exo_4_8_jquery()
{

    // Variables iUserDay iUserMonth iUserYear

    var iUserDay, iUserMonth, iUserYear, bYearTest;

    // Début
    
    // Ecrire "Donner le numéro du jour dans le mois."
    // Lire iUserDay

    iUserDay = $("#iUserDay").val();

    // Ecrire "Donner le numéro du mois."
    // Lire iUserMonth

    iUserMonth = $("#iUserMonth").val();
    
    // Ecrire "Donner l'année."
    // Lire iUserYear

    iUserYear = $("#iUserYear").val();

    // Test année Bissextile

    if (((iUserYear / 4) - Math.trunc(iUserYear / 4)) * 100 == 0)
       {
            bYearTest = true;   
        }
                else bYearTest = false;

    if(bYearTest = true)    
        {
            if (((iUserYear / 100) - Math.trunc(iUserYear / 100)) * 100 == 0)
                {
                    bYearTest = true;
                }
                        else bYearTest = false;
        }

    if(bYearTest = true)    
        {
            if (((iUserYear / 400) - Math.trunc(iUserYear / 400)) * 100 == 0)
                {
                    bYearTest = true;
                }
                        else bYearTest = false;
        }

    
    // SI iUserDay == 31 ET (iUserMonTh == 2 OU iUserMonth == 4 OU iUserMonth == 6 OU iUserMonth == 9 OU iUserMonth == 11 ) ALORS
    //     Ecrire "La date n'est pas valide."
    
    //         SINON SI iUserDay == 29 ET iUserMonth == 2 ET !iUserYear dp 4 ALORS
    //             Ecrire "La date n'est pas valide."
    
    //                 SINON Ecrire "La date est valide."


if (iUserDay == 31 && (iUserMonth == 4 || iUserMonth == 6 || iUserMonth == 9 || iUserMonth == 11))
    {
        $("#sp_resultat_code").html ("La date n'est pas valide.");
    }

        else if ( iUserDay == 29 && iUserMonth == 2 && bYearTest !== true)
            {
                $("#sp_resultat_code").html ("La date n'est pas valide.");
            }

                else
                {
                    $("#sp_resultat_code").html ("La date est valide.");
                }



    
    // FINSI
    
    // Fin 

}


