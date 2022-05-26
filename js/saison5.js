// Déclaration variable globale des exercices

let iRandomNumber, iTryNumber=0, iExo9 = 0, iExo10 =0, iposition=0, iposition2 = 0, iTotalPrice=0, iTotal=0, iPayement=0, iNumbHorse=0, iPlayedHorse=0;



function Exo_5_1_jsform()
{

    // Variables iUserNumber
    let iUserNumber;
    // Début
    
    // iUserNumber ← 7

        iUserNumber = document.getElementById("iUserNumber").value;
    // Ecrire "entrez un nombre entre 1 et 3."
    
    //     TANTQUE iUserNumber < 1 OU iUserNumber >3
    //         Lire iUserNumber
    //             SI iUserNumber < 1 OU iUserNumber >3 ALORS
    //                     Ecrire "La saisie n'est pas bonne."
    //             FINSI
    //     FINTANTQUE
    // document.getElementById("sp_resultat_code").innerHTML = "la saisie n'est pas valide, veuillez saisir un nouveau nombre.";
    
    if (iUserNumber < 1 || iUserNumber > 3)
    { 
        document.getElementById("sp_resultat_code").innerHTML = "La saisie est incorrecte veuillez saisir un nouveau nombre.";
    }
        else
        {
            document.getElementById("sp_resultat_code").innerHTML = "La saisie est correcte merci.";
        }
        
    
    // Ecrire "Merci pour votre saisie."
    
    // Fin



}



function Exo_5_1_jquery()
{

// Variables iUserNumber
var iUserNumber;
// Début

// iUserNumber ← 7

    iUserNumber = $("#iUserNumber").val();
// Ecrire "entrez un nombre entre 1 et 3."

//     TANTQUE iUserNumber < 1 OU iUserNumber >3
//         Lire iUserNumber
//             SI iUserNumber < 1 OU iUserNumber >3 ALORS
//                     Ecrire "La saisie n'est pas bonne."
//             FINSI
//     FINTANTQUE
// document.getElementById("sp_resultat_code").innerHTML = "la saisie n'est pas valide, veuillez saisir un nouveau nombre.";

if (iUserNumber < 1 || iUserNumber > 3)
{ 
    $("#sp_resultat_code").html("La saisie est incorrecte veuillez saisir un nouveau nombre.");
}
    else
    {
        $("#sp_resultat_code").html("La saisie est correcte merci.");
    }
    

// Ecrire "Merci pour votre saisie."

// Fin


}



function Exo_5_2a_jsform()
{

// Variables iUserNumber
let iUserNumber;
// Début

// Ecrire "Saisisez un nombre comris entre 10 et 20."
// Lire iUserNumber

iUserNumber = document.getElementById("iUserNumber").value;

// TANTQUE iUserNumber < 10 OU iUserNumber > 20
//         SI iUserNumber < 10 ALORS
//             Ecrire "Plus grand."
//                 SINON
//                     Ecrire "Plus petit."
//         FINSI

//         Ecrire "Saisissez un nouveau nombre"
// FINTANTQUE
// Ecrire "Merci le nombre est compris entre 10 et 20."

if (iUserNumber < 10)
{ 
    document.getElementById("sp_resultat_code").innerHTML = "Plus grand!! Veuillez saisir une nouveau nombre.";
}
    else if (iUserNumber > 20)
    {
        document.getElementById("sp_resultat_code").innerHTML = "Plus petit!! Veuillez saisir une nouveau nombre.";
    }

        else 
        {
            document.getElementById("sp_resultat_code").innerHTML = "Merci le nombre est compris entre 10 et 20.";
        }




// Fin

}



function Exo_5_2a_jquery()
{

        let iUserNumber;
    // Début

    // Ecrire "Saisisez un nombre comris entre 10 et 20."
    // Lire iUserNumber

    iUserNumber = $("#iUserNumber").val();

    // TANTQUE iUserNumber < 10 OU iUserNumber > 20
    //         SI iUserNumber < 10 ALORS
    //             Ecrire "Plus grand."
    //                 SINON
    //                     Ecrire "Plus petit."
    //         FINSI

    //         Ecrire "Saisissez un nouveau nombre"
    // FINTANTQUE
    // Ecrire "Merci le nombre est compris entre 10 et 20."

    if (iUserNumber < 10)
    { 
        $("#sp_resultat_code").html( "Plus grand!! Veuillez saisir une nouveau nombre.");
    }
        else if (iUserNumber > 20)
        {
            $("#sp_resultat_code").html( "Plus petit!! Veuillez saisir une nouveau nombre.");
        }

            else 
            {
                $("#sp_resultat_code").html( "Merci le nombre est compris entre 10 et 20.");
            }

}


function RandomNumber()
{
    

    iRandomNumber = Math.floor(Math.random() * 100);
    iRandomNumber = Math.floor(iRandomNumber);
    document.getElementById("iRandomNumber").innerHTML = iRandomNumber;

}
  


function Exo_5_2b_jsform()
{

    

    // Variables iUserNumber iRandomNumber
        let iUserNumber;
    // Début
    
    // Ecrire "Saisisez un nombre comris entre 1 et 100."
    // Lire iUserNumber
    iUserNumber = document.getElementById("iUserNumber").value;
    iUserNumber = Math.floor(iUserNumber);

    // iRandomNumber <- random[1..100]
    
    // TANTQUE iUserNumber != iRandomNumber
    //         SI iUserNumber < iRandomNumber ALORS
    //             Ecrire "Plus grand."
    //                 SINON 
    //                     Ecrire "Plus petit."
    //         FINSI
    
    //         Ecrire "Saisissez un nouveau nombre"
    // FINTANTQUE

    if (iRandomNumber !== iUserNumber)
        {
            if (iRandomNumber < iUserNumber)
                {
                    iTryNumber = ++iTryNumber;
                    document.getElementById("sp_resultat_code").innerHTML = "Votre nombre est plus grand, saisissez un nouveau nombre.";
                }

                    else
                    {
                        iTryNumber = ++iTryNumber;
                        document.getElementById("sp_resultat_code").innerHTML = "Votre nombre est plus petit, saisissez un nouveau nombre.";
                    }
        }

        if (iRandomNumber == iUserNumber)
                    {
                        iTryNumber = iTryNumber+1;
                        document.getElementById("sp_resultat_code").innerHTML = "Vous avez trouvé le nombre mystère en " + iTryNumber + " coups, il s'agissait bien de " + iRandomNumber + "."; 
                    }
    
    // Ecrire "Bravo, vous avez trouvé le nombre, c'était : " + iRadomNumber
    
    
    // Fin



}



function Exo_5_2b_jquery()
{

    
    

    // Variables iUserNumber iRandomNumber
    var iUserNumber;
    // Début
    
    // Ecrire "Saisisez un nombre comris entre 1 et 100."
    // Lire iUserNumber
    iUserNumber = $("#iUserNumber").val();
    iUserNumber = Math.floor(iUserNumber);

    // iRandomNumber <- random[1..100]
    
    // TANTQUE iUserNumber != iRandomNumber
    //         SI iUserNumber < iRandomNumber ALORS
    //             Ecrire "Plus grand."
    //                 SINON 
    //                     Ecrire "Plus petit."
    //         FINSI
    
    //         Ecrire "Saisissez un nouveau nombre"
    // FINTANTQUE

    if (iRandomNumber !== iUserNumber)
        {
            if (iRandomNumber < iUserNumber)
                {
                    iTryNumber = ++iTryNumber;
                    $("#sp_resultat_code").html("Votre nombre est plus grand, saisissez un nouveau nombre.");
                }

                    else
                    {
                        iTryNumber = ++iTryNumber;
                        $("#sp_resultat_code").html("Votre nombre est plus petit, saisissez un nouveau nombre.");
                    }
        }

        if (iRandomNumber == iUserNumber)
                    {
                        $("#sp_resultat_code").html("Vous avez trouvé le nombre mystère en " + iTryNumber +" coups, il s'agissait bien de " + iRandomNumber + "."); 
                    }
    
    // Ecrire "Bravo, vous avez trouvé le nombre, c'était : " + iRadomNumber
    
    
    // Fin


}



function Exo_5_3_jsform()
{


//     Variables iUserNumber

    let iUserNumber, sResultat, temp, nb10;

// Début



// Ecrire "Entrez un nombre."

// Lire iUserNumber

    temp = "";
    iUserNumber = parseInt(document.getElementById("iUserNumber").value);
   

    sResultat = "Vous avez saisi le nombre : " + iUserNumber + " Les 10 nombres suivants seront : ";
   
    nb10 = iUserNumber + 10;

    while (iUserNumber <  nb10)
        {
            iUserNumber = iUserNumber + 1 ;

            temp = temp + " " + iUserNumber;
            
        }
        
        document.getElementById("sp_resultat_code").innerHTML = sResultat + temp; 



// 	TANTQUE iUserNumber <= iUserNumber +10
		
// 			Ecrire iUserNumber +1

			
// 	FINTANTQUE



// Fin


}




function Exo_5_3_jquery()
{

    //     Variables iUserNumber

    var iUserNumber, sResultat, temp, nb10;

// Début



// Ecrire "Entrez un nombre."

// Lire iUserNumber

    temp = "";
    iUserNumber = parseInt($("#iUserNumber").val());
   

    sResultat = "Vous avez saisi le nombre : " + iUserNumber + " Les 10 nombres suivants seront : ";
   
    nb10 = iUserNumber + 10;

    while (iUserNumber <  nb10)
        {
            iUserNumber = iUserNumber + 1 ;

            temp = temp + " " + iUserNumber;
            
        }
        
        $("#sp_resultat_code").html(sResultat + temp); 



// 	TANTQUE iUserNumber <= iUserNumber +10
		
// 			Ecrire iUserNumber +1

			
// 	FINTANTQUE



// Fin


}




function Exo_5_4_jsform()
{

// Variables iUserNumber, i

let iUserNumber=0, i;

// Début

// Ecrire "entrez un nombre."

// Lire iUserNumber

iUserNumber = parseInt(document.getElementById("iUserNumber").value);

// 	POUR iCompteur = 0, iCompteur < 10, iCompeur ++

// iUserNumber += 1
// Ecrire += iUserNumber + " " 
// 	FINPOUR	

for (i = 0; i < 10; i++)

    {
        iUserNumber +=  1;
        document.getElementById("sp_resultat_code").innerHTML += iUserNumber + " ";
        
    }

// Fin


}



function Exo_5_4_jquery()
{

// Variables iUserNumber, i

var iUserNumber=0, i;

// Début

// Ecrire "entrez un nombre."

// Lire iUserNumber

iUserNumber = parseInt($("#iUserNumber").val());

// 	POUR iCompteur = 0, iCompteur < 10, iCompeur ++

// iUserNumber += 1
// Ecrire += iUserNumber + " " 
// 	FINPOUR	

for (i = 0; i < 10; i++)

    {
        iUserNumber +=  1;
        $("#sp_resultat_code").append (iUserNumber + " ");
        
    }

// Fin


}



function Exo_5_5_jsform()
{

let iUserNumber, i, iProduit;

iUserNumber = parseInt(document.getElementById("iUserNumber").value);

for (i = 0; i <= 10; i++)
{

    iProduit = iUserNumber * i;
    document.getElementById("sp_resultat_code").innerHTML += iUserNumber + " x " + i + " = " + iProduit + "</br>";

}


}



function Exo_5_5_jquery()
{

    let iUserNumber, i, iProduit;

    iUserNumber = parseInt($("#iUserNumber").val());
    
    for (i = 0; i <= 10; i++)
    {
    
        iProduit = iUserNumber * i;
        $("#sp_resultat_code").append (iUserNumber + " x " + i + " = " + iProduit + "</br>");
    
    }  


}


function Exo_5_6_jsform()
{
let iUserNumber, i, iSomme;

iUserNumber =parseInt(document.getElementById("iUserNumber").value);
iSomme = 0;

for(i = 1; i <= iUserNumber; i++)
{

iSomme = iSomme + i;

}

document.getElementById("sp_resultat_code").innerHTML = "La somme des nombres est : " + iSomme;

}


function Exo_5_6_jquery()
{

    var iUserNumber, i, iSomme;

    iUserNumber =parseInt($("#iUserNumber").val());
    iSomme = 0;
    
    for(i = 1; i <= iUserNumber; i++)
    {
    
    iSomme = iSomme + i;
    
    }
    
    $("#sp_resultat_code").html("La somme des nombres est : " + iSomme);

}

function Exo_5_7_jsform()
{
    let iUserNumber, i, iFactorielle;

    iUserNumber =parseInt(document.getElementById("iUserNumber").value);
    iFactorielle = 1;

    for(i = 1; i <= iUserNumber; i++)
    {

    iFactorielle = iFactorielle * i;

    }

    document.getElementById("sp_resultat_code").innerHTML = "La Factorielle de " + iUserNumber + " est : " + iFactorielle;

}


function Exo_5_7_jquery()
{

    var iUserNumber, i, iFactorielle;

    iUserNumber =parseInt($("#iUserNumber").val());
    iFactorielle = 1;
    
    for(i = 1; i <= iUserNumber; i++)
    {
    
        iFactorielle = iFactorielle * i;
    
    }
    
    $("#sp_resultat_code").html("La Factorielle de " + iUserNumber + " est : " + iFactorielle);

}


function generate_field_5_8()
{
    let page = "";
    nb = parseInt(document.getElementById("iUserNumber").value);
    for (let i = 1; i <= nb; i++) {
        page +=
            "<p>" +
            " Nombre " +
            i +
            '<input type ="number" name="nombre' +
            i +
            '"id="nombre' +
            i +
            '" value="' +
            Math.floor(Math.random() * 100) +
            '"></p>';
    }

    document.getElementById("input").innerHTML = page;
}


function Exo_5_8a_jsform()
{
// Variables iNumberName, iBiggerNumber, iUserNumber

let iNumberName, iNextNumber, iBiggerNumber, iUserNumber;

// Début

// Ecrire "Saisir le nombre d'entrées désirées."

// Lire iUserNumber

iUserNumber = document.getElementById("iUserNumber").value;

// lire nombre1
// iBiggerNumber <- nombre1

iBiggerNumber = document.getElementById("nombre1").value;

// Pour i <- 2 à iUsernerNumber

// 	iNumberName <- "nombre" + i

// 	lire iNumberName

// 		SI (iBiggerNumber < iNumberName)
// 			ALORS
// 				iBiggerName <- iNumberName
// 		FINSI

// 	i Suivant

for (i = 2; i <= iUserNumber; i++)
    {
        iNumberName = "nombre" + i;

        iNextNumber = document.getElementById(iNumberName).value;

            if(iBiggerNumber < iNextNumber)
                {
                    iBiggerNumber = iNextNumber;
                }
    }

document.getElementById("sp_resultat_code").innerHTML = "Le nombre le plus grand de la liste est " + iBiggerNumber;


// Ecrire "Le nombre le plus grand de la liste est " + iBiggerNumber 
		
// Fin
}


function Exo_5_8a_jquery()
{

    // Variables iNumberName, iBiggerNumber, iUserNumber

var iNumberName, iNextNumber, iBiggerNumber, iUserNumber;

// Début

// Ecrire "Saisir le nombre d'entrées désirées."

// Lire iUserNumber

iUserNumber = $("#iUserNumber").val();

// lire nombre1
// iBiggerNumber <- nombre1

iBiggerNumber = $("#nombre1").val();

// Pour i <- 2 à iUsernerNumber

// 	iNumberName <- "nombre" + i

// 	lire iNumberName

// 		SI (iBiggerNumber < iNumberName)
// 			ALORS
// 				iBiggerName <- iNumberName
// 		FINSI

// 	i Suivant

for (i = 2; i <= iUserNumber; i++)
    {
        iNumberName = "#nombre" + i;

        iNextNumber = $(iNumberName).val();

            if(iBiggerNumber < iNextNumber)
                {
                    iBiggerNumber = iNextNumber;
                }
    }

$("#sp_resultat_code").html("Le nombre le plus grand de la liste est " + iBiggerNumber);


// Ecrire "Le nombre le plus grand de la liste est " + iBiggerNumber 
		
// Fin

}

function Exo_5_8b_jsform()
{
// Variables iNumberName, iBiggerNumber, iUserNumber

let iNumberName, iNextNumber, iBiggerNumber, iUserNumber, iOrderNumber=1;

// Début

// Ecrire "Saisir le nombre d'entrées désirées."

// Lire iUserNumber

iUserNumber = document.getElementById("iUserNumber").value;

// lire nombre1
// iBiggerNumber <- nombre1

iBiggerNumber = document.getElementById("nombre1").value;

// Pour i <- 2 à iUsernerNumber

// 	iNumberName <- "nombre" + i

// 	lire iNumberName

// 		SI (iBiggerNumber < iNumberName)
// 			ALORS
// 				iBiggerName <- iNumberName
// 		FINSI

// 	i Suivant

for (i = 2; i <= iUserNumber; i++)
    {
        iNumberName = "nombre" + i;

        iNextNumber = document.getElementById(iNumberName).value;

            if(iBiggerNumber < iNextNumber)
                {
                    iBiggerNumber = iNextNumber;
                    iOrderNumber = i;

                }
    }

document.getElementById("sp_resultat_code").innerHTML = "Le nombre " + iOrderNumber + " est le plus grand de la liste c'est : " + iBiggerNumber;


// Ecrire "Le nombre le plus grand de la liste est " + iBiggerNumber 
		
// Fin
}


function Exo_5_8b_jquery()
{

    // Variables iNumberName, iBiggerNumber, iUserNumber

var iNumberName, iNextNumber, iBiggerNumber, iUserNumber, iOrderNumber=1;

// Début

// Ecrire "Saisir le nombre d'entrées désirées."

// Lire iUserNumber

iUserNumber = $("#iUserNumber").val();

// lire nombre1
// iBiggerNumber <- nombre1

iBiggerNumber = $("#nombre1").val();

// Pour i <- 2 à iUsernerNumber

// 	iNumberName <- "nombre" + i

// 	lire iNumberName

// 		SI (iBiggerNumber < iNumberName)
// 			ALORS
// 				iBiggerName <- iNumberName
// 		FINSI

// 	i Suivant

for (i = 2; i <= iUserNumber; i++)
    {
        iNumberName = "#nombre" + i;

        iNextNumber = $(iNumberName).val();

            if(iBiggerNumber < iNextNumber)
                {
                    iBiggerNumber = iNextNumber;
                    iOrderNumber = i;
                }
    }

$("#sp_resultat_code").html("Le nombre " + iOrderNumber + " est le plus grand de la liste c'est : " + iBiggerNumber);


// Ecrire "Le nombre le plus grand de la liste est " + iBiggerNumber 
		
// Fin

}


function Saisie_prompt_exo_9()
{
    var  page = " ", iUserNumber = 1;

    while (iUserNumber != 0)
        {
            iUserNumber = prompt("Entrez votre nombre");
            iExo9++;
                if (iUserNumber != 0)
                {
                    page +=
                        "<p>" +
                        " Nombre " +
                        iExo9 +
                        '<input type ="number" name="nombre' +
                        iExo9 +
                        '"id="nombre' +
                        iExo9 +
                        '" value="' +
                        iUserNumber +
                        '"></p>';

                    iposition = '<input type="hidden" name="iposition" id="iposition" value="' + iExo9 + '">' ;
                    iposition2 = iExo9;      
                }
                
        }
            document.getElementById("input").innerHTML = page;
            document.getElementById("position").innerHTML = iposition;

}


function Exo_5_9_jsform()
{
// Variables iNumberName, iBiggerNumber, iUserNumber, iOrderNumber

let iNumberName, iNextNumber, iBiggerNumber, iOrderNumber=1;

// Début

// Ecrire Saisissez les entrées souhaiées.Pour arrêter la saisie taper 0.

// lire nombre1
// iBiggerNumber <- nombre1

iBiggerNumber = document.getElementById("nombre1").value;

// Pour i <- 2 à position

// 	iNumberName <- "nombre" + i

// 	lire iNumberName

// 		SI (iBiggerNumber < iNumberName)
// 			ALORS
// 				iBiggerName <- iNumberName
// 		FINSI

// 	i Suivant

for (i = 2; i <= iposition2; i++)
    {
        iNumberName = "nombre" + i;

        iNextNumber = document.getElementById(iNumberName).value;

            if(iBiggerNumber < iNextNumber)
                {
                    iBiggerNumber = iNextNumber;
                    iOrderNumber = i;

                }
    }

document.getElementById("sp_resultat_code").innerHTML = "Le nombre " + iOrderNumber + " est le plus grand de la liste c'est le : " + iBiggerNumber;


// Ecrire "Le nombre" + iOrderNumber +  " est le plus grand de la liste, c'est " + iBiggerNumber 
		
// Fin
}


function Exo_5_9_jquery()
{

    // Variables iNumberName, iBiggerNumber, iUserNumber, iOrderNumber

var iNumberName, iNextNumber, iBiggerNumber, iOrderNumber=1;

// Début

// Ecrire Saisissez les entrées souhaiées.Pour arrêter la saisie taper 0.

// lire nombre1
// iBiggerNumber <- nombre1

iBiggerNumber = $("#nombre1").val();

// Pour i <- 2 à position

// 	iNumberName <- "nombre" + i

// 	lire iNumberName

// 		SI (iBiggerNumber < iNumberName)
// 			ALORS
// 				iBiggerName <- iNumberName
// 		FINSI

// 	i Suivant

for (i = 2; i <= iposition2; i++)
    {
        iNumberName = "#nombre" + i;

        iNextNumber = $(iNumberName).val();

            if(iBiggerNumber < iNextNumber)
                {
                    iBiggerNumber = iNextNumber;
                    iOrderNumber = i;
                }
    }

$("#sp_resultat_code").html("Le nombre " + iOrderNumber + " est le plus grand de la liste c'est le : " + iBiggerNumber);


// Ecrire "Le nombre" + iOrderNumber +  " est le plus grand de la liste, c'est " + iBiggerNumber 
		
// Fin

}


function Saisie_prompt_exo_10()
{
    var  page = " ", iArticlePrice = 1;

    while (iArticlePrice != 0)
        {
            iArticlePrice = prompt("Entrez le prix de l'article.");
            iExo10++;
                if (iArticlePrice != 0)
                {
                    page +=
                        "<p>" +
                        " Prix article " +
                        iExo10 +
                        '<input type ="number" name="prixarticle' +
                        iExo10 +
                        '"id="prixarticle' +
                        iExo10 +
                        '" value="' +
                        iArticlePrice +
                        '"></p>';

                    iTotalPrice = parseInt(iTotalPrice) + parseInt(iArticlePrice);

                    iTotal = '<p> Prix Total <input type="text" name="iTotalPrice" id="iTotalPrice" value="' + iTotalPrice + '"></p>' ;

                    // iposition2 = iExo10;      
                }
            
        }

    iPayement = prompt("Entrez le montant de votre règlement. \nLe totale de vos achat est de : " + iTotalPrice + " euros");
    sPayement = '<p> Votre réglement <input type="text" name="iPayement" id="iPayement" value="' + iPayement + '"></p>';

            document.getElementById("input").innerHTML = page;
            document.getElementById("Total").innerHTML = iTotal;
            document.getElementById("Payement").innerHTML = sPayement;

}


function Exo_5_10_jsform()
{

let  iRendu, iNbB10=0, iNbB5=0, iNbP1=0;

iRendu = parseInt(iPayement) - parseInt(iTotalPrice);

console.log(iRendu)
console.log(iPayement)
console.log(iTotalPrice)


iNbB10 = Math.floor(iRendu / 10);

if (iRendu - (Math.floor(iRendu /10)) * 10 >= 5)
    {
        iNbB5 = 1;
    }
        else
        {
            iNbB5 = 0;
        }

if (iRendu - (Math.floor(iRendu / 10)) * 10 > 5)
    {
        iNbP1 = (iRendu - (Math.floor(iRendu / 10)) * 10 -5);
    }
        else
        {
            if (iRendu - (Math.floor(iRendu / 10)) * 10 < 5)
                {
                    iNbP1 = (iRendu - (Math.floor(iRendu / 10)) * 10);
                }
        }
        document.getElementById("sp_resultat_code").innerHTML = "La Monnaie qui vous est rendue est : </br>" + iNbB10 + " billet(s) de 10 euros. </br>" + iNbB5 + " billet(s) de 5 euros. </br>" + iNbP1 + " pièces(s) de 1 euro. </br>";

}


function Saisie_prompt_exo_11()
{
   // Saisie du nombre de chevaux partants et injection dans html pour trasfert variable vers php
   iNumbHorse = prompt("Entrez le nombre de chevaux partants.");

   document.getElementById("NumbHorse").innerHTML = '<p>Chevaux partants <input type="text" name="iNumbHorse" id="iNumbHorse" value="' + iNumbHorse + '"></p>';


    // Saisie du nombre de chevaux du paris et injection dans html pour trasfert variable vers php
    iPlayedHorse = prompt("Sur combien de chevaux pariez-vous?");

    document.getElementById("PlayedHorse").innerHTML = '<p>Chevaux joués <input type="text" name="iPlayedHorse" id="iPlayedHorse" value="' + iPlayedHorse + '"></p>';

}


function Exo_5_11a_jsform()
{

let rOrderChance=0, rUnorderChance=0, iFactoriellen=1, iFactoriellep=1, iFactoriellenmoinsp=1, i=1;


// Boucles calcul des factorielles nécessaires au calcul des chances
    //Factorielle du nombre des chevaux partants
        for(i = 1; i <= parseInt(iNumbHorse); i++)
            {

            iFactoriellen = parseInt(iFactoriellen) * i;
            
            }


    //Factorielle du nombre des chevaux pariés
        for(i = 1; i <= parseInt(iPlayedHorse); i++)
            {

            iFactoriellep = parseInt(iFactoriellep) * i;
            
            }


    //Factorielle du nombre des chevaux partant - nombre de chevaux pariés
        for(i = 1; i <= parseInt((iNumbHorse - iPlayedHorse)); i++)
            {

            iFactoriellenmoinsp = parseInt(iFactoriellenmoinsp * i);

            }


//Calcul de pourcentage de chance de gagner dans l'ordre.
    rOrderChance = parseInt(iFactoriellen / iFactoriellenmoinsp);


//Calcul de pourcentage de chance de gagner dans le désordre.
    rUnorderChance = parseInt(iFactoriellen / (iFactoriellep * iFactoriellenmoinsp));


//Affichage du résultat
    document.getElementById("sp_resultat_code").innerHTML = "Les chances de gagner dans l'ordre sont de 1 chance sur " + rOrderChance + ".</br>" + "Les chances de gagner dans le désordre sont de 1 chance sur " + rUnorderChance + ".";



}


function Exo_5_11a_jquery()
{
    var rOrderChance=0, rUnorderChance=0, iFactoriellen=1, iFactoriellep=1, iFactoriellenmoinsp=1, i=1;

    
    // Boucles calcul des factorielles nécessaires au calcul des chances
        //Factorielle du nombre des chevaux partants
            for(i = 1; i <= parseInt(iNumbHorse); i++)
                {
    
                iFactoriellen = parseInt(iFactoriellen) * i;
                
                }
    
    
        //Factorielle du nombre des chevaux pariés
            for(i = 1; i <= parseInt(iPlayedHorse); i++)
                {
    
                iFactoriellep = parseInt(iFactoriellep) * i;
                
                }
    
    
        //Factorielle du nombre des chevaux partant - nombre de chevaux pariés
            for(i = 1; i <= parseInt((iNumbHorse - iPlayedHorse)); i++)
                {
    
                iFactoriellenmoinsp = parseInt(iFactoriellenmoinsp * i);
    
                }
    
    
    //Calcul de pourcentage de chance de gagner dans l'ordre.
        rOrderChance = parseInt(iFactoriellen / iFactoriellenmoinsp);
    
    
    //Calcul de pourcentage de chance de gagner dans le désordre.
        rUnorderChance = parseInt(iFactoriellen / (iFactoriellep * iFactoriellenmoinsp));
    
    
    //Affichage du résultat
        $("#sp_resultat_code").html("Les chances de gagner dans l'ordre sont de 1 chance sur " + rOrderChance + ".</br>" + "Les chances de gagner dans le désordre sont de 1 chance sur " + rUnorderChance + ".");
    
    
    
}



function Exo_5_11b_jsform()
{

    function factorielle(iNumber)
        {

            let i, iFactorielle;

        
            iFactorielle = 1;

            for(i = 1; i <= iNumber; i++)
            {

            iFactorielle = iFactorielle * i;

            }

            return iFactorielle;
        }

    
//Calcul de pourcentage de chance de gagner dans l'ordre.
rOrderChance = parseInt(factorielle(iNumbHorse) / factorielle(iNumbHorse - iPlayedHorse));


//Calcul de pourcentage de chance de gagner dans le désordre.
rUnorderChance = parseInt(factorielle(iNumbHorse) / (factorielle(iPlayedHorse) * factorielle(iNumbHorse - iPlayedHorse)));


//Affichage du résultat
    document.getElementById("sp_resultat_code").innerHTML = "Les chances de gagner dans l'ordre sont de 1 chance sur " + rOrderChance + ".</br>" + "Les chances de gagner dans le désordre sont de 1 chance sur " + rUnorderChance + ".";


}


function Exo_5_11b_jquery()
{

    function factorielle(iNumber)
{

    var i, iFactorielle;

   
    iFactorielle = 1;

    for(i = 1; i <= iNumber; i++)
    {

    iFactorielle = iFactorielle * i;

    }

    return iFactorielle;
}

    
//Calcul de pourcentage de chance de gagner dans l'ordre.
rOrderChance = parseInt(factorielle(iNumbHorse) / factorielle(iNumbHorse - iPlayedHorse));


//Calcul de pourcentage de chance de gagner dans le désordre.
rUnorderChance = parseInt(factorielle(iNumbHorse) / (factorielle(iPlayedHorse) * factorielle(iNumbHorse - iPlayedHorse)));


//Affichage du résultat
    $("#sp_resultat_code").html("Les chances de gagner dans l'ordre sont de 1 chance sur " + rOrderChance + ".</br>" + "Les chances de gagner dans le désordre sont de 1 chance sur " + rUnorderChance + ".");

 

}