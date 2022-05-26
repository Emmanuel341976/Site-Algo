// ALGORITHME Exo_3_1


function Exo_3_1_jsform()
{

    // Début

    // Variables : iUserNumber Entier
    let iUserNumber;

    // Ecrire : "Entrez un nombre."
    // Lire iUserNumber
    iUserNumber = document.getElementById("iUserNumber").value;

    // SI iUserNumber < 0 ALORS
    //     Ecrire : "Ce nombre est négatif"
    // SINON
    //     Ecrire : "Ce nombre est positif"

    if (iUserNumber < 0){
            document.getElementById("sp_resultat_code").innerHTML = "Ce nombre est négatif";
    }
    else {
            document.getElementById("sp_resultat_code").innerHTML = "Ce nombre est positif";
    }

    // FINSI

    // Fin



}



function Exo_3_1_jquery()
{

    // Début

    // Variables : iUserNumber Entier
    var iUserNumber;

    // Ecrire : "Entrez un nombre."
    // Lire iUserNumber
    iUserNumber = $("#iUserNumber").val();

    // SI iUserNumber < 0 ALORS
    //     Ecrire : "Ce nombre est négatif"
    // SINON
    //     Ecrire : "Ce nombre est positif"

    if ( iUserNumber > 0 ) {
            $("#sp_resultat_code").html("Ce nombre est positif");}
    else {
            $("#sp_resultat_code").html("Ce nombre est négatif");}
    

    // FINSI

    // Fin



}


// ALGORITHME Exo_3_2

function Exo_3_2_jsform()
{

// Début
// Variables : iUserNumber iUserNumber1 Entier
let iUserNumber, iUserNumber1;


// Ecrire : "Entrez un nombre."
// Lire iUserNumber
iUserNumber = document.getElementById("iUserNumber").value;


// Ecrire : "Entrez un second nombre."
// Lire iUserNumber1
iUserNumber1= document.getElementById("iUserNumber1").value;

// SI iUserNumber < 0 ET iUserNumber1 < 0 ALORS
// 	Ecrire : "Le produit des deux nombres est positif"
if (iUserNumber < 0 & iUserNumber1 < 0  ) {
        document.getElementById("sp_resultat_code").innerHTML ="Le produit des deux nombres est positif";
}

// FINSI

// SI iUserNumber > 0 ET iUserNumber1 > 0 ALORS
// 	Ecrire : "Le produit des deux nombres est positif"
if (iUserNumber > 0 & iUserNumber1 > 0  ) {
        document.getElementById("sp_resultat_code").innerHTML ="Le produit des deux nombres est positif";
}

// FINSI

// SI iUserNumber < 0 XOR iUserNumber1 < 0 ALORS
// 	Ecrire : "Le produit des deux nombres est négatif"
if (iUserNumber < 0 ^ iUserNumber1 < 0  ) {
       document.getElementById("sp_resultat_code").innerHTML ="Le produit des deux nombres est négatif"
}

// FINSI

// Fin

}

function Exo_3_2_jquery()
{

// Début
// Variables : iUserNumber iUserNumber1 Entier
var iUserNumber, iUserNumber1;


// Ecrire : "Entrez un nombre."
// Lire iUserNumber
iUserNumber = $("#iUserNumber").val();


// Ecrire : "Entrez un second nombre."
// Lire iUserNumber1
iUserNumber1 = $("#iUserNumber1").val();

// SI iUserNumber < 0 ET iUserNumber1 < 0 ALORS
// 	Ecrire : "Le produit des deux nombres est positif"
if (iUserNumber < 0 && iUserNumber1 < 0) {
        $("#sp_resultat_code").html("Le produit des deux nombres est positif");}

// FINSI

// SI iUserNumber > 0 ET iUserNumber1 > 0 ALORS
	Ecrire : "Le produit des deux nombres est positif"
if (iUserNumber > 0 && iUserNumber1 > 0) {
        $("#sp_resultat_code").html("Le produit des deux nombres est positif");}


// FINSI

// SI iUserNumber < 0 XOR iUserNumber1 < 0 ALORS
// 	Ecrire : "Le produit des deux nombres est négatif"
if (iUserNumber < 0 ^ iUserNumber1 < 0) {
        $("#sp_resultat_code").html("Le produit des deux nombres est négatif");}


// FINSI


// Fin
}


function Exo_3_3_jsform()
{



// Début
// Variables : sName sName1 sName2 Caractères
let sName, sName1, sName2;

// Ecrire : "Entrez un prénom."
// Lire sName
sName = document.getElementById("sName").value;

// Ecrire : "Entrez un second prénom."
// Lire sName1
sName1 = document.getElementById("sName1").value;

// Ecrire : "Entrez un troisième prénom."
// Lire sName2
sName2 = document.getElementById("sName2").value;

// SI sName < sName1 ET sName1 < sName2 ALORS
// 	Ecrire : "Les prénoms sont classés par ordre alphabétique"

if (sName < sName1 & sName1 < sName2){

        document.getElementById("sp_resultat_code").innerHTML = ("Les prénoms sont classés par ordre alphabétique");
}

// SINON
// 	Ecrire : "Les prénoms ne sont pas classés par ordre alphabétique"

else{
        document.getElementById("sp_resultat_code").innerHTML = ("Les prénoms ne sont pas classés par ordre alphabétique");
 }
// FINSI

// Fin

}

function Exo_3_3_jquery()
{



// Début
// Variables : sName sName1 sName2 Caractères
var sName, sName1, sName2;

// Ecrire : "Entrez un prénom."
// Lire sName
sName = $("#sName").val();

// Ecrire : "Entrez un second prénom."
// Lire sName1
sName1 = $("#sName1").val();

// Ecrire : "Entrez un troisième prénom."
// Lire sName2
sName2 = $("#sName2").val();

// SI sName < sName1 ET sName1 < sName2 ALORS
// 	Ecrire : "Les prénoms sont classés par ordre alphabétique"

if (sName < sName1 && sName1 < sName2){

        $("#sp_resultat_code").html("Les prénoms sont classés par ordre alphabétique");
}

// SINON
// 	Ecrire : "Les prénoms ne sont pas classés par ordre alphabétique"

else{
        $("#sp_resultat_code").html("Les prénoms ne sont pas classés par ordre alphabétique");
 }
// FINSI

// Fin

}

function Exo_3_4_jsform()
{

// Variable : iUserNumber Entier
let iUserNumber;

// Début

// Ecrire : "Entrez un nombre."
// Lire iUserNumber
iUserNumber = document.getElementById("iUserNumber").value;

// SI iUserNumber < 0 ALORS
// 	Ecrire : "Le nombre est négatif"
if (iUserNumber < 0){
        document.getElementById("sp_resultat_code").innerHTML = ("Le nombre est négatif");}

        // SINONSI iUserNumber > 0 ALORS
        // Ecrire : "Le nombre est positif"

else {
        if (iUserNumber > 0){
                document.getElementById("sp_resultat_code").innerHTML = ("Le nombre est positif");
        }

        // SINON
        // Ecrire : "Le nombre est égal à zéro"

        else {
                        document.getElementById("sp_resultat_code").innerHTML = ("Le nombre est égal à zéro"); 
                }
     }

// FINSI

// Fin

}


function Exo_3_4_jquery()
{

// Variable : iUserNumber Entier
var iUserNumber;

// Début

// Ecrire : "Entrez un nombre."
// Lire iUserNumber
iUserNumber = $("#iUserNumber").val();

// SI iUserNumber < 0 ALORS
// 	Ecrire : "Le nombre est négatif"
if (iUserNumber < 0){
        $("#sp_resultat_code").html("Le nombre est négatif");}

        // SINONSI iUserNumber > 0 ALORS
        // Ecrire : "Le nombre est positif"

else  if (iUserNumber > 0){
                $("#sp_resultat_code").html("Le nombre est positif");
        }

        // SINON
        // Ecrire : "Le nombre est égal à zéro"

        else {
                        $("#sp_resultat_code").html("Le nombre est égal à zéro"); 
                }
     

// FINSI

// Fin

}


function Exo_3_5_jsform()
{

// Début

// Variable : iUserNumber iUserNumber1 Entier

let iUserNumber, iUserNumber1;

// Ecrire : "Entrez un nombre."
// Lire iUserNumber

iUserNumber = document.getElementById("iUserNumber").value;

// Ecrire : "Entrez un second nombre."
// Lire iUserNumber1

iUserNumber1 = document.getElementById("iUserNumber1").value;

// SI iUserNumber == 0 ou iUserNumber1 == 0 ALORS
// 	Ecrire : "Le résultat est égal à 0"

// SINONSI iUserNumber < 0 ET iUserNumber1 < 0 ALORS
// 	Ecrire : "Le nombre est positif"

// SINONSI iUserNumber > 0 ET iUserNumber1 > 0 ALORS
// 	Ecrire : "Le nombre est positif"

// SINON
// 	Ecrire : "le résultat est négatif"

// FINSI

        if (iUserNumber == 0 | iUserNumber1 == 0){

                document.getElementById("sp_resultat_code").innerHTML = ("Le résultat est égal à zéro");}

                else {
                        if (iUserNumber < 0 & iUserNumber1 < 0){

                                document.getElementById("sp_resultat_code").innerHTML = ("Le résultat est positif"); }

                                else {
                                        if (iUserNumber > 0 & iUserNumber1 > 0){

                                                document.getElementById("sp_resultat_code").innerHTML = ("Le résultat est positif"); }

                                                else{
                                                        document.getElementById("sp_resultat_code").innerHTML = ("Le résultat est négatif");
                                                }
                                
                                }

                                
                
                }


// Fin


}


function Exo_3_5_jquery()
{

// Début

// Variable : iUserNumber iUserNumber1 Entier

var iUserNumber, iUserNumber1;

// Ecrire : "Entrez un nombre."
// Lire iUserNumber

iUserNumber = $("#iUserNumber").val();

// Ecrire : "Entrez un second nombre."
// Lire iUserNumber1

iUserNumber1 = $("#iUserNumber1").val();

// SI iUserNumber == 0 ou iUserNumber1 == 0 ALORS
// 	Ecrire : "Le résultat est égal à 0"

// SINONSI iUserNumber < 0 ET iUserNumber1 < 0 ALORS
// 	Ecrire : "Le nombre est positif"

// SINONSI iUserNumber > 0 ET iUserNumber1 > 0 ALORS
// 	Ecrire : "Le nombre est positif"

// SINON
// 	Ecrire : "le résultat est négatif"

// FINSI




        if (iUserNumber == 0 || iUserNumber1 == 0)
                {$("#sp_resultat_code").html("Le résultat est égal à zéro");}

                        else if (iUserNumber < 0 && iUserNumber1 < 0)
                                {$("#sp_resultat_code").html("Le résultat est positif");}

                                        else if (iUserNumber > 0 && iUserNumber1 > 0)
                                                {$("#sp_resultat_code").html("Le résultat est positif"); }

                                                        else{$("#sp_resultat_code").html("Le résultat est négatif");}
                                
                                

                                
                
                


// Fin


}


function Exo_3_6_jsform()
{

// Début

// Variable : iUserAge Entier A et B Booléen
let iUserAge, bA, bB;

// Ecrire : "Entrez l'age de l'enfant."
// Lire iUserAge

iUserAge = document.getElementById("iUserAge").value;

// A ← iUserAge < 6
// B ← iUserAge > 12

bA = iUserAge < 6;
bB = iUserAge > 12;

// SI A ALORS
// 	Ecrire : "L'enfant est trop petit"

// SINONSI B ALORS
// 	Ecrire : "L'enfant est en Cadet"

// SINONSI iUserAge >= 6 0 ET iUserAge <= 7 ALORS
// 	Ecrire : "L'enfant est en poussin"

// SINONSI iUserAge >= 8 0 ET iUserAge <= 9 ALORS
// 	Ecrire : "L'enfant est en pupille"

// SINON iUserAge >= 10 0 ET iUserAge <= 11 ALORS
// 	Ecrire : "L'enfant est en Minime"

// FINSI


if (bA) {
        document.getElementById("sp_resultat_code").innerHTML=("l'enfant est trop petit");}

        else {
                if (bB) {
                        document.getElementById("sp_resultat_code").innerHTML=("l'enfant est en cadet");}
                        else {
                                if (iUserAge >= 6 & iUserAge <= 7) {
                                        document.getElementById("sp_resultat_code").innerHTML=("l'enfant est en poussin");}

                                else {
                                        if (iUserAge >= 8 & iUserAge <= 9) {
                                                document.getElementById("sp_resultat_code").innerHTML=("l'enfant est en pupille");}

                                        else {
                                                document.getElementById("sp_resultat_code").innerHTML=("l'enfant est en minime");}
                                }
                        }
        }



// FIN


}


function Exo_3_6_jquery()
{

        // Début

// Variable : iUserAge Entier A et B Booléen
var iUserAge, bA, bB;

// Ecrire : "Entrez l'age de l'enfant."
// Lire iUserAge

iUserAge = $("#iUserAge").val();

// A ← iUserAge < 6
// B ← iUserAge > 12

bA = iUserAge < 6;
bB = iUserAge > 12;

// SI A ALORS
// 	Ecrire : "L'enfant est trop petit"

// SINONSI B ALORS
// 	Ecrire : "L'enfant est en Cadet"

// SINONSI iUserAge >= 6 0 ET iUserAge <= 7 ALORS
// 	Ecrire : "L'enfant est en poussin"

// SINONSI iUserAge >= 8 0 ET iUserAge <= 9 ALORS
// 	Ecrire : "L'enfant est en pupille"

// SINON iUserAge >= 10 0 ET iUserAge <= 11 ALORS
// 	Ecrire : "L'enfant est en Minime"

// FINSI


if (bA)
        {$("#sp_resultat_code").html("l'enfant est trop petit");}

        else if (bB) 
                {$("#sp_resultat_code").html("l'enfant est en cadet");}

                else if (iUserAge >= 6 && iUserAge <= 7) 
                        {$("#sp_resultat_code").html("l'enfant est en poussin");}

                                else if (iUserAge >= 8 && iUserAge <= 9) 
                                        {$("#sp_resultat_code").html("l'enfant est en pupille");}

                                                else {$("#sp_resultat_code").html("l'enfant est en minime");}
                                
                        
        



// FIN

}