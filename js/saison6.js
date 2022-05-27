var iUserNumber = 1;

function generate_field()
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

function Saisie_prompt()
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


function Exo_6_1_jsform()
{
    let tab = new Array(), i=0;

        for (i; i <= 6; i++)
            
            {
                tab[i] = 0;
            }

    document.getElementById("sp_resultat_code").innerHTML = tab;

}

function Exo_6_1_jquery()
{

    var tab = new Array(), i=0;

        for (i; i <= 6; i++)
            
            {
                tab[i] = 0;
            }

    $("#sp_resultat_code").html(tab);

}

function Exo_6_2_jsform()
{
    let tab = new Array(6);
    
    

    tab [0]="a";
    tab [1]="e";
    tab [2]="i";   
    tab [3]="o";            
    tab [4]="u";
    tab [5]="y";        

    document.getElementById("sp_resultat_code").innerHTML = tab;

}

function Exo_6_2_jquery()
{

    var tab = new Array(6);
    
    

    tab [0]="a";
    tab [1]="e";
    tab [2]="i";   
    tab [3]="o";            
    tab [4]="u";
    tab [5]="y";

    $("#sp_resultat_code").html(tab);

}

function Saisie_prompt_exo_3()
{
    var  page = " ", iUserNumber = 1, i = 0;

    for (i; i <=8; i++ )
        {
            iUserNumber = prompt("Entrez la note " + (i+1));
           
                    page +=
                        "<p>" +
                        " Note " +
                        (i+1) +
                        '<input type ="number" name="nombre' +
                        i +
                        '"id="nombre' +
                        i +
                        '" value="' +
                        iUserNumber +
                        '"></p>';
  
        }
            document.getElementById("input").innerHTML = page;

}

function Exo_6_3_jsform()
{
    let tab = new Array(9), i = 0;
    
    for (i; i <= 8; i++)
        {
            tab[i] = document.getElementById("nombre" + i).value;
        }
          

    document.getElementById("sp_resultat_code").innerHTML = tab;

}

function Exo_6_3_jquery()
{

    var tab = new Array(9), i = 0;
    
    for (i; i <= 8; i++)
        {
            tab[i] = $("#nombre" + i).val();
        }
          

    $("#sp_resultat_code").html(tab);

}

function Exo_6_5_jsform()
{
    let tab = new Array(6), k=1, i = 0;
    
    tab [0] = 1;

    for (k; k < 6; k++)
        {
            tab[k] = tab [(k-1)] + 2;
        }
          


    document.getElementById("sp_resultat_code").innerHTML = tab;

}

function Exo_6_7_jsform()
{
    let tab = new Array(9), i = 0, Somme = 0, Moyenne = 0;
    
    for (i; i < 9; i++)
        {
            tab[i] = document.getElementById("nombre" + i).value;
            Somme = parseInt(Somme) + parseInt(tab[i]);
    
        }
        

    Moyenne = (Somme / 9).toFixed(2);     

    document.getElementById("sp_resultat_code").innerHTML = "La variable tableau contenant les notes est : " + tab + "</br>" + "La moyenne des notes est : " + Moyenne;

}

function Exo_6_7_jquery()
{

    var tab = new Array(9), i = 0, Somme = 0, Moyenne = 0;
    
    for (i; i <= 8; i++)
        {
            tab[i] = $("#nombre" + i).val();
            Somme = parseInt(Somme) + parseInt(tab[i]);
        }
          
    Moyenne = (Somme / 9).toFixed(2);

    $("#sp_resultat_code").html("La variable tableau contenant les notes est : " + tab + "</br>" + "La moyenne des notes est : " + Moyenne);

}

function Saisie_exo_8()
{
    
    var  page = " ", iUserNumber = 1, i = 0;

    iUserNumber = prompt("Entrez nombre de valeurs à enregistrer");

    for (i; i < iUserNumber; i++ )
        {
            iValue = prompt("Entrez la valeur " + (i+1));
           
                    page += "<p>" + " Valeur " + (i+1) + '<input type ="number" name="nombre' + i + '"id="nombre' + i + '" value="' + iValue + '"></p>';
            
        }
            document.getElementById("input").innerHTML = page;
            document.getElementById("iUserNumber").innerHTML = '<p><input type ="hidden" name="UserNumber" id="UserNumber" value="' + iUserNumber +'"></p>';
            
}


function Exo_6_8_jsform()
{
    var  page = " ", iUserNumber = 1, iValue=0, iNbNegatif = 0, i = 0, tab = new Array();

    iUserNumber = prompt("Entrez nombre de valeurs à enregistrer");

    for (i; i < iUserNumber; i++ )
        {
            iValue = prompt("Entrez la valeur " + (i+1));

                    tab[i] = parseInt(iValue);
           
                    page += "<p>" + " Valeur " + (i+1) + '<input type ="number" name="nombre' + i + '"id="nombre' + i + '" value="' + iValue + '"></p>';

            if (iValue < 0)
                {
                    iNbNegatif = iNbNegatif + 1;
                }
            
        }
            document.getElementById("input").innerHTML = page;
            document.getElementById("iUserNumber").innerHTML = '<p><input type ="hidden" name="UserNumber" id="UserNumber" value="' + iUserNumber +'"></p>';
            document.getElementById("sp_resultat_code").innerHTML = "Le nombre d'entrées négative est : " + iNbNegatif + "." + "</br>" + "Le nombre d'entrées positives est : " + (iUserNumber - iNbNegatif);

}


function Exo_6_8_jquery()
{
    var  page = " ", iUserNumber = 1, iValue=0, iNbNegatif = 0, i = 0, tab = new Array();

    iUserNumber = prompt("Entrez nombre de valeurs à enregistrer");

    for (i; i < iUserNumber; i++ )
        {
            iValue = prompt("Entrez la valeur " + (i+1));

                    tab[i] = parseInt(iValue);
           
                    page += "<p>" + " Valeur " + (i+1) + '<input type ="number" name="nombre' + i + '"id="nombre' + i + '" value="' + iValue + '"></p>';

            if (iValue < 0)
                {
                    iNbNegatif = iNbNegatif + 1;
                }
            
        }
            $("#input").innerHTML = page;
            $("#iUserNumber").innerHTML = '<p><input type ="hidden" name="UserNumber" id="UserNumber" value="' + iUserNumber +'"></p>';
            $("#sp_resultat_code").innerHTML = "Le nombre d'entrées négative est : " + iNbNegatif + "." + "</br>" + "Le nombre d'entrées positives est : " + (iUserNumber - iNbNegatif);

}

function generate_field_exo_9()
{
    let page = "", i = 0;

    nb = parseInt(document.getElementById("iUserNumber").value);

    for (i; i < nb; i++) {
        page +=
            "<p>" +
            " Nombre " +
            (i+1) +
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


function Exo_6_9_jsform()
{

let iUserNumber=0, Tab = new Array(), i = 0, iTabIndexSum = 0, iValue;    

iUserNumber = document.getElementById("iUserNumber").value;

for (i; i < iUserNumber; i++)
    {
        iValue = "nombre" + i;
        Tab[i] = document.getElementById(iValue).value;
        iTabIndexSum = parseInt(iTabIndexSum) + parseInt(Tab[i]);
    }

    document.getElementById("sp_resultat_code").innerHTML = "La somme des index du tableau est : " + iTabIndexSum;
}


function Exo_6_9_jquery()
{

    var iUserNumber=0, Tab = new Array(), i = 0, iTabIndexSum = 0, iValue;    

    iUserNumber = $("#iUserNumber").val();

    for (i; i < iUserNumber; i++)
        {
            iValue = "#nombre" + i;
            Tab[i] = $(iValue).val();
            iTabIndexSum = parseInt(iTabIndexSum) + parseInt(Tab[i]);
        }

        $("#sp_resultat_code").html("La somme des index du tableau est : " + iTabIndexSum);
}


function generate_field_exo_10()
{
    let page = ["",""], i = 0, j = 0;

    nb = parseInt(document.getElementById("iUserNumber").value);

    for(j; j < 2; j++)
        {
            for (i; i < nb; i++)
                {
                    page [j] += "<p>" + " Nombre " + (i+1) + '<input type ="number" name="nombre'+ j + '_' + i + '"id="nombre' + j + '_' + i + '" value="' + Math.floor(Math.random() * 100) + '"></p>';
                }
            i=0;           
        }

        document.getElementById("input0").innerHTML  = page[0];
        document.getElementById("input1").innerHTML  = page[1];
 
}

function Exo_6_10_jsform()
{
    let i=0, iUserNumber;

    iUserNumber = parseInt(document.getElementById("iUserNumber").value);
    Tab0 = new Array(iUserNumber);
    Tab1 = new Array(iUserNumber);
    Tab2 = new Array(iUserNumber);

    
    for (i; i < iUserNumber; i++)       
            {
                Tab0[i] = document.getElementById("nombre0_" + i).value;
                Tab1[i] = document.getElementById("nombre1_" + i).value;
                Tab2[i] = parseInt(Tab0[i]) + parseInt(Tab1[i]); 
            }

        document.getElementById("sp_resultat_code").innerHTML = "La sommes des deux tableau est le tableau suivant : </br>" + Tab2;
}


function Exo_6_10_jquery()
{
    let i=0, iUserNumber;

    iUserNumber = parseInt(document.getElementById("iUserNumber").value);
    Tab0 = new Array(iUserNumber);
    Tab1 = new Array(iUserNumber);
    Tab2 = new Array(iUserNumber);

   
    for (i; i < iUserNumber; i++)       
            {
                Tab0[i] = $("#nombre0_" + i).val();
                Tab1[i] = $("#nombre1_" + i).val();
                Tab2[i] = parseInt(Tab0[i]) + parseInt(Tab1[i]); 
            }

        $("#sp_resultat_code").html( "La sommes des deux tableau est le tableau suivant : </br>" + Tab2);
}

function Exo_6_11_jsform()
{
    let Tab1 = [4, 8, 7, 12], Tab2 = [3, 6], Toon = 0, i = 0, j = 0;

    for (i; i < 2; i++)
        {
            for (j; j < 4; j++)
                {
                    Toon = Toon + Tab1[j] * Tab2[i];
                }
            j = 0;
        }
   document.getElementById("sp_resultat_code").innerHTML = Toon;
}


function Exo_6_11_jquery()
{
    var Tab1 = [4, 8, 7, 12], Tab2 = [3, 6], Toon = 0, i = 0, j = 0;

    for (i; i < 2; i++)
        {
            for (j; j < 4; j++)
                {
                    Toon = Toon + Tab1[j] * Tab2[i];
                }
            j = 0;
        }
   $("#sp_resultat_code").html(Toon);
}


function generate_field_exo_12()
{
    let page = "", i = 0;

    nb = parseInt(document.getElementById("iUserNumber").value);

    for (i; i < nb; i++) {
        page +=
            "<p>" +
            " Nombre " +
            (i+1) +
            '<input type ="number" name="nombre' +
            i +
            '"id="nombre' +
            i +
            '" value="' +
            '"></p>';
    }

    document.getElementById("input").innerHTML = page;
}

function Exo_6_12_jsform()
{
    let iUserNumber=0, Tab = new Array(), i = 0, iValue;    

iUserNumber = document.getElementById("iUserNumber").value;

for (i; i < iUserNumber; i++)
    {
        iValue = "nombre" + i;
        Tab[i] = parseInt(document.getElementById(iValue).value)+1;
        
    }

    document.getElementById("sp_resultat_code").innerHTML = Tab;
}


function Exo_6_12_jquery()
{
    var iUserNumber=0, Tab = new Array(), i = 0, iValue;    

iUserNumber = $("#iUserNumber").val();

for (i; i < iUserNumber; i++)
    {
        iValue = "#nombre" + i;
        Tab[i] = parseInt($(iValue).val())+1;
        
    }

    $("#sp_resultat_code").html(Tab);
}


function generate_field_exo_13()
{
    let page = "", i = 0;

    nb = parseInt(document.getElementById("iUserNumber").value);

    for (i; i < nb; i++) {
        page +=
            "<p>" +
            " Nombre " +
            (i+1) +
            '<input type ="number" name="nombre' +
            i +
            '"id="nombre' +
            i +
            '" value="' +
            '"></p>';
    }

    document.getElementById("input").innerHTML = page;
}


function Exo_6_13_jsform()
{
    let iUserNumber=0, Tab = new Array(), Tab2 = new Array(2), i = 0, j=1, iValue, icompt=0;    

iUserNumber = document.getElementById("iUserNumber").value;

for (i; i < iUserNumber; i++)
    {
        iValue = "nombre" + i;
        Tab[i] = parseInt(document.getElementById(iValue).value);
    }
                        
Tab2 = [0, Tab[0]];
icompt = iUserNumber -1;
                                          

for (j; j < icompt; j++)
        {
            if (Tab2[1] < Tab[j])
                {
                    Tab2[1] = Tab[(j)];
                    Tab2[0] = parseInt(j);
                }
        }
    document.getElementById("sp_resultat_code").innerHTML = "Le nombre le plus grand est : " + Tab2[1] + ".</br>" + "Il est à l'index " + Tab2[0] + " du tableau.";
}


function Exo_6_13_jquery()
{
    var iUserNumber=0, Tab = new Array(), Tab2 = new Array(2), i = 0, j=1, iValue, icompt=0;    

iUserNumber = $("#iUserNumber").val();

for (i; i < iUserNumber; i++)
    {
        iValue = "#nombre" + i;
        Tab[i] = parseInt($(iValue).val());
    }
                        
Tab2 = [0, Tab[0]];
icompt = iUserNumber -1;
                                          

for (j; j < icompt; j++)
        {
            if (Tab2[1] < Tab[j])
                {
                    Tab2[1] = Tab[(j)];
                    Tab2[0] = parseInt(j);
                }
        }
    $("#sp_resultat_code").html("Le nombre le plus grand est : " + Tab2[1] + ".</br>" + "Il est à l'index " + Tab2[0] + " du tableau.");
}


function generate_field_exo_14()
{
    let page = "", i = 0;

    nb = parseInt(document.getElementById("iUserNumber").value);

    for (i; i < nb; i++) {
        page +=
            "<p>" +
            " Note " +
            (i+1) +
            '<input type ="number" name="nombre' +
            i +
            '"id="nombre' +
            i +
            '" value="' +
            '"></p>';
    }

    document.getElementById("input").innerHTML = page;
}


function Exo_6_14_jsform()
{
    let iUserNumber=0, Tab = new Array(), i = 0, j=0, iValue, rNoteSum = 0, rAverage = 0, iNbSup = 0;    

iUserNumber = document.getElementById("iUserNumber").value;

for (i; i < iUserNumber; i++)
    {
        iValue = "nombre" + i;
        Tab[i] = parseInt(document.getElementById(iValue).value);
        rNoteSum = rNoteSum + Tab[i]; 
    }

rAverage = (rNoteSum / iUserNumber).toFixed(2);    
                                  

for (j; j < iUserNumber; j++)
        {
            if (rAverage < Tab[j])
                {
                    iNbSup = iNbSup +1;
                }
        }
    document.getElementById("sp_resultat_code").innerHTML = "La moyenne de la classe est : " + rAverage + ".</br>" + iNbSup + " élève(s) ont eut une note supérieure à la moyenne de la classe.";
}


function Exo_6_14_jquery()
{
    var iUserNumber=0, Tab = new Array(), i = 0, j=0, iValue, rNoteSum = 0, rAverage = 0, iNbSup = 0;    

iUserNumber = $("#iUserNumber").val();

for (i; i < iUserNumber; i++)
    {
        iValue = "#nombre" + i;
        Tab[i] = parseInt($(iValue).val());
        rNoteSum = rNoteSum + Tab[i]; 
    }

rAverage = (rNoteSum / iUserNumber).toFixed(2);    
                                  

for (j; j < iUserNumber; j++)
        {
            if (rAverage < Tab[j])
                {
                    iNbSup = iNbSup +1;
                }
        }
    $("#sp_resultat_code").html("La moyenne de la classe est : " + rAverage + ".</br>" + iNbSup + " élève(s) ont eut une note supérieure à la moyenne de la classe.");
}



function Exo_6_15_jsform()
    {

        let Tab = new Array(21), i=1;

        iUserNumber = parseInt(document.getElementById("iUserNumber").value);

        Tab[0] = 1000;

        for (i; i < 21; i++)
            {
                Tab[i] = Tab[i-1] + Tab[i-1] * 2.75 / 100;
            }

        document.getElementById("sp_resultat_code").innerHTML = "L'éparge réalisée à " + iUserNumber + " ans est : " + (Tab[iUserNumber]).toFixed(2) + " euros";

    }


    function Exo_6_15_jquery()
    {

        var Tab = new Array(21), i=1;

        iUserNumber = $("#iUserNumber").val();

        Tab[0] = 1000;

        for (i; i < 21; i++)
            {
                Tab[i] = Tab[i-1] + Tab[i-1] * 2.75 / 100;
            }

        $("#sp_resultat_code").html("L'éparge réalisée à " + iUserNumber + " ans est : " + (Tab[iUserNumber]).toFixed(2) + " euros");

    }

function generate_consecutive_exo_16()
{

    let page = "", i = 1, iUserNumber;

    iUserNumber = parseInt(document.getElementById("iUserNumber").value);

    page = "<p>" + '<input type ="hidden" name="nombre' + 0 + '"id="nombre' + 0 + '" value="' + iUserNumber + '"></p>';

    for (i; i < 100; i++) {
        
        page += "<p>" + '<input type ="hidden" name="nombre' + i + '"id="nombre' + i + '" value="' + (iUserNumber + i) + '"></p>';
    }

    document.getElementById("input").innerHTML = page;

    
}

function generate_random_exo_16()
{
    let page = "", i = 1, iUserNumber;

    iUserNumber = parseInt(document.getElementById("iUserNumber").value);

    page = "<p>" + '<input type ="hidden" name="nombre' + 0 + '"id="nombre' + 0 + '" value="' + iUserNumber + '"></p>';

    for (i; i < 100; i++) {
        
        page += "<p>" + '<input type ="hidden" name="nombre' + i + '"id="nombre' + i + '" value="' + Math.floor(Math.random() * 100) + '"></p>';
    }

    document.getElementById("input").innerHTML = page;


}

function Exo_6_16_jsform()
{
    var k=1, j=1, Tab16 = [], bVar = "", iValue = "";

    Tab16[0] = parseInt(document.getElementById("iUserNumber").value);

    for (k; k < 100; k++)
        {
            iValue = "nombre" + k;
         
            Tab16[k] = parseInt(document.getElementById(iValue).value);
          
        }

    for (j; j < 100; j++)
        {           
            if ((Tab16[j]) == (Tab16[j-1]+1))
                {
                    bVar = true;
                }
            else
                {
                    bVar = false;
                    break
                }
        }

    if (bVar == true)
        {
            document.getElementById("sp_resultat_code").innerHTML = "Les valeurs du tableau sont consécutives" + Tab16;
        } 
    else
        { 
            document.getElementById("sp_resultat_code").innerHTML = "Les valeurs du tableau ne sont pas consécutives" + Tab16;
        }
}


function Exo_6_16_jquery()
{
    var k=1, j=1, Tab16 = [], bVar = "", iValue = "";

    Tab16[0] = parseInt($("#iUserNumber").val());

    for (k; k < 100; k++)
        {
            iValue = "#nombre" + k;
         
            Tab16[k] = parseInt($(iValue).val());
          
        }

    for (j; j < 100; j++)
        {           
            if ((Tab16[j]) == (Tab16[j-1]+1))
                {
                    bVar = true;
                }
            else
                {
                    bVar = false;
                    break
                }
        }

    if (bVar == true)
        {
            $("#sp_resultat_code").html("Les valeurs du tableau sont consécutives" + Tab16);
        } 
    else
        { 
            $("#sp_resultat_code").html("Les valeurs du tableau ne sont pas consécutives" + Tab16);
        }
}