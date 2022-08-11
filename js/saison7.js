// Function that made a random Tab var with 100 entry witch is randomly sort or not

function hundredEntryTab() {
  let tabVar = new Array(100);
  let sorted;
  let i = 1;
  let j = 0;
  let k = 0;
  let valueToSort = 0;
  let randomNumber;
  let page = "";

  console.log("coucou");

  randomNumber = Math.floor(Math.random() * 100);

  if (randomNumber >= 50 && randomNumber < 100) {
    sorted = true;
  }

  if (sorted) {
    tabVar[0] = Math.floor(Math.random() * 100);

    for (i; i < 100; i++) {
      valueToSort = Math.floor(Math.random() * 100);

      j = i - 1;

      while (j >= 0 && tabVar[j] > valueToSort) {
        tabVar[j + 1] = tabVar[j];
        j--;
      }
      tabVar[j + 1] = valueToSort;
    }
  } else {
    for (k; k < 100; k++) {
      tabVar[k] = Math.floor(Math.random() * 100);
    }
  }

  for (let l = 1; l <= 100; l++) {
    page +=
      "<p>" +
      " Nombre " +
      l +
      '<input type ="number" name="nombre' +
      l +
      '"id="nombre' +
      l +
      '" value="' +
      tabVar[l - 1] +
      '"></p>';
  }

  document.getElementById("input").innerHTML = page;
  return tabVar;
}

function Exo_7_1_jsform() {
  let resultat = hundredEntryTab();

  i = 0;

  while (resultat[i + 1] >= resultat[i]) {
    i++;
  }

  if (i === 99) {
    document.getElementById("sp_resultat_code").innerHTML =
      "Les éléments du tableau sont triés";
  } else {
    document.getElementById("sp_resultat_code").innerHTML =
      "Les éléments du tableau ne sont pas triés";
  }
}
