import pokemon from './data/pokemon/pokemon.js';
import {
  filteredByType,
  sortA_Z,
  sortZ_A,
  ascending_Sort,
  descending_Sort
} from './data.js';

const pokemonData = pokemon.pokemon;
const bttnWatchAllPokemons = document.getElementById("bttnWatchAllPokemons");
const filteredBttn = document.querySelectorAll("#filterSection li");
const sortBttn = document.querySelectorAll("#sortSection li");
const searchEngine = document.getElementById("findYourPokemonInpt")
const searchEngine2 = document.getElementById ("findYourPokemonInpt2")
//Se crea la siguiente funcion para que cuando se haga click en el boton del pokemon  se muestre la pagina de detalles del pokemon con
//toda la informacion correspondiente.
const onClicCard = (event) => {
  const targetPokemonName = event.currentTarget.name;

  document.getElementById("mainPage").style.display = "none";
  document.getElementById("pokemonsCardPage").style.display = "none";
  document.getElementById("pokemonDetails").style.display = "block";

  for (let i = 0; i < pokemonData.length; i++) {
    // console.log (pokemonData[i]['quick-move'][0])
    if (pokemonData[i].name == targetPokemonName) {
      //Se agrega un if para ir agregando las imagenes del tipo de pokemon.
      if (pokemonData[i].type.length == 1) {
        document.getElementById("pokemonType").innerHTML = `
        <img class="pokemonTypeImg" src="pokemon/PokemonType/${pokemonData[i].type[0]}.png"></img>`;
      } else if (pokemonData[i].type.length == 2) {
        document.getElementById("pokemonType").innerHTML = `
        <img class="pokemonTypeImg" src="pokemon/PokemonType/${pokemonData[i].type[0]}.png"></img>
        <img class="pokemonTypeImg" src="pokemon/PokemonType/${pokemonData[i].type[1]}.png"></img>`;
      };
      //insertando los iconos de los elementos a los cual el pokemon es fuerte.
      if (pokemonData[i].resistant.length == 1) {
        document.getElementById("strongAgainstImg").innerHTML = `
        <img class="strongWeakAgainstImgClass" src="pokemon/PokemonElements/${pokemonData[i].resistant[0]}.png">`;
      } else if (pokemonData[i].resistant.length == 2) {
        document.getElementById("strongAgainstImg").innerHTML = `
        <img class="strongWeakAgainstImgClass" src="pokemon/PokemonElements/${pokemonData[i].resistant[0]}.png">
        <img class="strongWeakAgainstImgClass" src="pokemon/PokemonElements/${pokemonData[i].resistant[1]}.png">`;
      } else if (pokemonData[i].resistant.length == 3) {
        document.getElementById("strongAgainstImg").innerHTML = `
        <img class="strongWeakAgainstImgClass" src="pokemon/PokemonElements/${pokemonData[i].resistant[0]}.png">
        <img class="strongWeakAgainstImgClass" src="pokemon/PokemonElements/${pokemonData[i].resistant[1]}.png">
        <img class="strongWeakAgainstImgClass" src="pokemon/PokemonElements/${pokemonData[i].resistant[2]}.png">`;
      } else if (pokemonData[i].resistant.length == 4) {
        document.getElementById("strongAgainstImg").innerHTML = `
        <img class="strongWeakAgainstImgClass" src="pokemon/PokemonElements/${pokemonData[i].resistant[0]}.png">
        <img class="strongWeakAgainstImgClass" src="pokemon/PokemonElements/${pokemonData[i].resistant[1]}.png">
        <img class="strongWeakAgainstImgClass" src="pokemon/PokemonElements/${pokemonData[i].resistant[2]}.png">
        <img class="strongWeakAgainstImgClass" src="pokemon/PokemonElements/${pokemonData[i].resistant[3]}.png">`;
      } else if (pokemonData[i].resistant.length == 5) {
        document.getElementById("strongAgainstImg").innerHTML = `
        <img class="strongWeakAgainstImgClass" src="pokemon/PokemonElements/${pokemonData[i].resistant[0]}.png">
        <img class="strongWeakAgainstImgClass" src="pokemon/PokemonElements/${pokemonData[i].resistant[1]}.png">
        <img class="strongWeakAgainstImgClass" src="pokemon/PokemonElements/${pokemonData[i].resistant[2]}.png">
        <img class="strongWeakAgainstImgClass" src="pokemon/PokemonElements/${pokemonData[i].resistant[3]}.png">
        <img class="strongWeakAgainstImgClass" src="pokemon/PokemonElements/${pokemonData[i].resistant[4]}.png">`;
      } else if (pokemonData[i].resistant.length == 6) {
        document.getElementById("strongAgainstImg").innerHTML = `
        <img class="strongWeakAgainstImgClass" src="pokemon/PokemonElements/${pokemonData[i].resistant[0]}.png">
        <img class="strongWeakAgainstImgClass" src="pokemon/PokemonElements/${pokemonData[i].resistant[1]}.png">
        <img class="strongWeakAgainstImgClass" src="pokemon/PokemonElements/${pokemonData[i].resistant[2]}.png">
        <img class="strongWeakAgainstImgClass" src="pokemon/PokemonElements/${pokemonData[i].resistant[3]}.png">
        <img class="strongWeakAgainstImgClass" src="pokemon/PokemonElements/${pokemonData[i].resistant[4]}.png">
        <img class="strongWeakAgainstImgClass" src="pokemon/PokemonElements/${pokemonData[i].resistant[5]}.png">`;
      } else if (pokemonData[i].resistant.length == 7) {
        document.getElementById("strongAgainstImg").innerHTML = `
        <img class="strongWeakAgainstImgClass" src="pokemon/PokemonElements/${pokemonData[i].resistant[0]}.png">
        <img class="strongWeakAgainstImgClass" src="pokemon/PokemonElements/${pokemonData[i].resistant[1]}.png">
        <img class="strongWeakAgainstImgClass" src="pokemon/PokemonElements/${pokemonData[i].resistant[2]}.png">
        <img class="strongWeakAgainstImgClass" src="pokemon/PokemonElements/${pokemonData[i].resistant[3]}.png">
        <img class="strongWeakAgainstImgClass" src="pokemon/PokemonElements/${pokemonData[i].resistant[4]}.png">
        <img class="strongWeakAgainstImgClass" src="pokemon/PokemonElements/${pokemonData[i].resistant[5]}.png">
        <img class="strongWeakAgainstImgClass" src="pokemon/PokemonElements/${pokemonData[i].resistant[6]}.png">`;
      };
      //insertando los iconos de los elementos a los cual el pokemon es debil.
      if (pokemonData[i].weaknesses.length == 1) {
        document.getElementById("weakAgainstImg").innerHTML = `
        <img class="strongWeakAgainstImgClass" src="pokemon/PokemonElements/${pokemonData[i].weaknesses[0]}.png">`;
      } else if (pokemonData[i].weaknesses.length == 2) {
        document.getElementById("weakAgainstImg").innerHTML = `
        <img class="strongWeakAgainstImgClass" src="pokemon/PokemonElements/${pokemonData[i].weaknesses[0]}.png">
        <img class="strongWeakAgainstImgClass" src="pokemon/PokemonElements/${pokemonData[i].weaknesses[1]}.png">`;
      } else if (pokemonData[i].weaknesses.length == 3) {
        document.getElementById("weakAgainstImg").innerHTML = `
        <img class="strongWeakAgainstImgClass" src="pokemon/PokemonElements/${pokemonData[i].weaknesses[0]}.png">
        <img class="strongWeakAgainstImgClass" src="pokemon/PokemonElements/${pokemonData[i].weaknesses[1]}.png">
        <img class="strongWeakAgainstImgClass" src="pokemon/PokemonElements/${pokemonData[i].weaknesses[2]}.png">`;
      } else if (pokemonData[i].weaknesses.length == 4) {
        document.getElementById("weakAgainstImg").innerHTML = `
        <img class="strongWeakAgainstImgClass" src="pokemon/PokemonElements/${pokemonData[i].weaknesses[0]}.png">
        <img class="strongWeakAgainstImgClass" src="pokemon/PokemonElements/${pokemonData[i].weaknesses[1]}.png">
        <img class="strongWeakAgainstImgClass" src="pokemon/PokemonElements/${pokemonData[i].weaknesses[2]}.png">
        <img class="strongWeakAgainstImgClass" src="pokemon/PokemonElements/${pokemonData[i].weaknesses[3]}.png">`;
      } else if (pokemonData[i].weaknesses.length == 5) {
        document.getElementById("weakAgainstImg").innerHTML = `
        <img class="strongWeakAgainstImgClass" src="pokemon/PokemonElements/${pokemonData[i].weaknesses[0]}.png">
        <img class="strongWeakAgainstImgClass" src="pokemon/PokemonElements/${pokemonData[i].weaknesses[1]}.png">
        <img class="strongWeakAgainstImgClass" src="pokemon/PokemonElements/${pokemonData[i].weaknesses[2]}.png">
        <img class="strongWeakAgainstImgClass" src="pokemon/PokemonElements/${pokemonData[i].weaknesses[3]}.png">
        <img class="strongWeakAgainstImgClass" src="pokemon/PokemonElements/${pokemonData[i].weaknesses[4]}.png">`;
      } else if (pokemonData[i].weaknesses.length == 6) {
        document.getElementById("weakAgainstImg").innerHTML = `
        <img class="strongWeakAgainstImgClass" src="pokemon/PokemonElements/${pokemonData[i].weaknesses[0]}.png">
        <img class="strongWeakAgainstImgClass" src="pokemon/PokemonElements/${pokemonData[i].weaknesses[1]}.png">
        <img class="strongWeakAgainstImgClass" src="pokemon/PokemonElements/${pokemonData[i].weaknesses[2]}.png">
        <img class="strongWeakAgainstImgClass" src="pokemon/PokemonElements/${pokemonData[i].weaknesses[3]}.png">
        <img class="strongWeakAgainstImgClass" src="pokemon/PokemonElements/${pokemonData[i].weaknesses[4]}.png">
        <img class="strongWeakAgainstImgClass" src="pokemon/PokemonElements/${pokemonData[i].weaknesses[5]}.png">`;
      } else if (pokemonData[i].weaknesses.length == 7) {
        document.getElementById("weakAgainstImg").innerHTML = `
        <img class="strongWeakAgainstImgClass" src="pokemon/PokemonElements/${pokemonData[i].weaknesses[0]}.png">
        <img class="strongWeakAgainstImgClass" src="pokemon/PokemonElements/${pokemonData[i].weaknesses[1]}.png">
        <img class="strongWeakAgainstImgClass" src="pokemon/PokemonElements/${pokemonData[i].weaknesses[2]}.png">
        <img class="strongWeakAgainstImgClass" src="pokemon/PokemonElements/${pokemonData[i].weaknesses[3]}.png">
        <img class="strongWeakAgainstImgClass" src="pokemon/PokemonElements/${pokemonData[i].weaknesses[4]}.png">
        <img class="strongWeakAgainstImgClass" src="pokemon/PokemonElements/${pokemonData[i].weaknesses[5]}.png">
        <img class="strongWeakAgainstImgClass" src="pokemon/PokemonElements/${pokemonData[i].weaknesses[6]}.png">`;
      };
      //Agregando un if  para agregar la imagen y texto del huevo dependiendo de la informacion entregada.
      if (pokemonData[i].egg == "2 km") {
        document.getElementById("eggInformation").innerHTML = `
        <div id="eggPicture"><img class="imgPokemonStats" src="pokemon/Eggs/${pokemonData[i].egg}.png"></img></div>
        <p class="pokemonStatsText">Puedes conseguirlo en un huevo de ${pokemonData[i].egg}.</p>`;
      } else if (pokemonData[i].egg == "5 km") {
        document.getElementById("eggInformation").innerHTML = `
        <div id="eggPicture"><img class="imgPokemonStats" src="pokemon/Eggs/${pokemonData[i].egg}.png"></img></div>
        <p class="pokemonStatsText">Puedes conseguirlo en un huevo de ${pokemonData[i].egg}.</p>`;
      } else if (pokemonData[i].egg == "7 km") {
        document.getElementById("eggInformation").innerHTML = `
        <div id="eggPicture"><img class="imgPokemonStats" src="pokemon/Eggs/${pokemonData[i].egg}.png"></img></div>
        <p class="pokemonStatsText">Puedes conseguirlo en un huevo de ${pokemonData[i].egg}.</p>`;
      } else if (pokemonData[i].egg == "10 km") {
        document.getElementById("eggInformation").innerHTML = `
        <div id="eggPicture"><img class="imgPokemonStats" src="pokemon/Eggs/${pokemonData[i].egg}.png"></img></div>
        <p class="pokemonStatsText">Puedes conseguirlo en un huevo de ${pokemonData[i].egg}.</p>`;
      } else {
        document.getElementById("eggInformation").innerHTML = `
        <div id="eggPicture"><img class="imgPokemonStats" src="pokemon/Eggs/2 km.png"></img></div>
        <p class="pokemonStatsText">Este pokemon no se puede obtener de huevo.</p>`;
      };
      //Agregando el nombre del pokemon a la pagina de "Detalles del pokemon".
      document.getElementById("pokemonPresentationTitle").innerHTML = pokemonData[i].name;
      //Agregando la imagen del pokemon a la pagina de "Detalles del pokemon".
      document.getElementById("pokemonPrincipalImg").innerHTML = `<img class="pokemonImg2"src="${pokemonData[i].img}">`;
      //Agregando la descripcion del pokemon a la pagina de "Detalles del pokemon".
      document.getElementById("pokemonDescription").innerHTML = pokemonData[i].about;
      //Agregando las estadisticas basicas del pokemon a la pagina de "Detalles del pokemon".
      document.getElementById("baseAttack").innerHTML = `
      Ataque: ${pokemonData[i].stats['base-attack']}<br>
      Defensa: ${pokemonData[i].stats['base-defense']}<br>
      Stamina: ${pokemonData[i].stats['base-stamina']}<br>
      Max-CP: ${pokemonData[i].stats['max-cp']}<br>
      Max-HP: ${pokemonData[i].stats['max-hp']}<br>`;
      //Agragando la cantidad de KM que se debe caminar para conseguir un caramelo del Pokemon.
      document.getElementById("candyKM").innerHTML = `Camina ${pokemonData[i]['buddy-distance-km']} KM para ganar un caramelo.`;
      //Agregando las habilidades de cada pokemon. 
      pokemonData[i]['quick-move'].forEach((element) => {
        const table = document.getElementById("pkmAttack");
        const quickMoveTable = document.createElement("td");
        quickMoveTable.id = pokemonData[i].name;
        quickMoveTable.className = "quickMoveTD"
        quickMoveTable.innerHTML += `
        <td>${element.name + "<br>"+"<br>" + "Tipo: " + element.type + "<br>" + "Daño base: " + element['base-damage'] + "<br>" + "Energia: " + element.energy + "<br>" + "Tiempo de animación: " + element['move-duration-seg'] }</td>`;
        table.appendChild(quickMoveTable);
      });
      pokemonData[i]['special-attack'].forEach((element) => {
        const table = document.getElementById("pkmAttack");
        const specialMoveTable = document.createElement("td");
        specialMoveTable.id = pokemonData[i].name;
        specialMoveTable.className = "specialMoveTD"
        specialMoveTable.innerHTML += `
        <td>${element.name + "<br>"+"<br>" + "Tipo: " + element.type + "<br>" + "Daño base: " + element['base-damage'] + "<br>" + "Energia: " + element.energy + "<br>" + "Tiempo de animación: " + element['move-duration-seg'] }</td>`;
        table.appendChild(specialMoveTable);
      });
      document.getElementById("title1").setAttribute("colSpan", pokemonData[i]['quick-move'].length);
      document.getElementById("title2").setAttribute("colSpan", pokemonData[i]['special-attack'].length);
      //Agregando evoluciones.
      //Pokemon con 2 evoluciones adelante.
      if (pokemonData[i].evolution['next-evolution'][0]['next-evolution'] !== undefined) {
        if (pokemonData[i].evolution['next-evolution'] != undefined) {
          const evolution2Img = pokemonData.find((img) => {
            if (img.name == pokemonData[i].evolution['next-evolution'][0].name) {
              return pokemonData;
            }
          });
          const evolution3Img = pokemonData.find((img) => {
            if (img.name == pokemonData[i].evolution['next-evolution'][0]['next-evolution'][0].name) {
              return pokemonData;
            }
          });
          document.getElementById("evolution1").innerHTML = `
          <img  class="pokemonImg" src="${pokemonData[i].img}">
          <P class="textInsideCards">#${pokemonData[i].num}</P>
          <P id="pokemonName" class="textInsideCards">${pokemonData[i].name}</P>`;
          document.getElementById("evolution2").innerHTML = `
          <img  class="pokemonImg" src="${evolution2Img.img}">
          <P class="textInsideCards">#${pokemonData[i].evolution['next-evolution'][0].num}</P>
          <P id="pokemonName" class="textInsideCards">${pokemonData[i].evolution['next-evolution'][0].name}</P>`;
          document.getElementById("evolution3").innerHTML = `
          <img  class="pokemonImg" src="${evolution3Img.img}">
          <P class="textInsideCards">#${pokemonData[i].evolution['next-evolution'][0]['next-evolution'][0].num}</P>
          <P id="pokemonName" class="textInsideCards">${pokemonData[i].evolution['next-evolution'][0]['next-evolution'][0].name}</P>`;
        };
      };
      // Pokemon con una pre-evolucion y una evolucion. 
      if (pokemonData[i].evolution['prev-evolution'] !== undefined) {
        if (pokemonData[i].evolution['next-evolution'] != undefined) {
          const evolution3Img = pokemonData.find((img) => {
            if (img.name == pokemonData[i].evolution['next-evolution'][0].name) {
              return pokemonData;
            }
          });
          const evolution1Img = pokemonData.find((img) => {
            if (img.name == pokemonData[i].evolution['prev-evolution'][0].name) {
              return pokemonData;
            }
          });
          document.getElementById("evolution1").innerHTML = `
          <img  class="pokemonImg" src="${evolution1Img.img}">
          <P class="textInsideCards">#${pokemonData[i].evolution['prev-evolution'][0].num}</P>
          <P id="pokemonName" class="textInsideCards">${pokemonData[i].evolution['prev-evolution'][0].name}</P>`;
          document.getElementById("evolution2").innerHTML = `
          <img  class="pokemonImg" src="${pokemonData[i].img}">
          <P class="textInsideCards">#${pokemonData[i].num}</P>
          <P id="pokemonName" class="textInsideCards">${pokemonData[i].name}</P>`;
          document.getElementById("evolution3").innerHTML = `
          <img  class="pokemonImg" src="${evolution3Img.img}">
          <P class="textInsideCards">#${pokemonData[i].evolution['next-evolution'][0].num}</P>
          <P id="pokemonName" class="textInsideCards">${pokemonData[i].evolution['next-evolution'][0].name}</P>`;
        };
      };

    } // cierre if principal 
  } //cierre for
}; //cierre funcion
//Se declara la siguiente funcion para crear las tarjetas principales de los pokemons
const drawCards = (data) => {
  const allPokemonsCards = document.getElementById("allPokemonsCards");
  for (let i = 0; i < data.length; i++) {
    const pokemonButton = document.createElement("div");
    pokemonButton.className = "pokemonCard";
    pokemonButton.id = data[i].name;
    pokemonButton.name = data[i].name;
    pokemonButton.innerHTML = `
    <div class="pkmnPicture"><img  class="pokemonImg" src="${data[i].img}"></div>
      <P class="textInsideCards">#${data[i].num}</P>
      <P id="pokemonName" class="textInsideCards">${data[i].name}</P>`;
    pokemonButton.addEventListener("click", onClicCard);
    allPokemonsCards.appendChild(pokemonButton);
  }; 
  document.getElementById("mainPage").style.display = "none";
  document.getElementById("pokemonsCardPage").style.display = "block";
};
//Se declara la siguiente funcion para los buscadores de pokemon.
const search = (data) => {
  let findYourPokemonDiv = document.getElementById("pokemonFoundCard");
  findYourPokemonDiv.innerHTML = ""

  for (let i = 0; i < data.length; i++) {
    const foundPokemon = document.createElement("div");
    foundPokemon.id = data[i].name;
    foundPokemon.className = "PokemonCardForSearch";
    foundPokemon.name = data[i].name;
    foundPokemon.innerHTML = `
    <P class="pokemonFoundTXT">${data[i].name}</P>
    <img  class="pokemonFoundImg" src="${data[i].img}">`;
    foundPokemon.addEventListener("click", onClicCard);
    findYourPokemonDiv.appendChild(foundPokemon);
  };
};
const search2 = (data) => {
  let findYourPokemonDiv2 = document.getElementById("pokemonFoundCard2");
  findYourPokemonDiv2.innerHTML = ""

  for (let i = 0; i < data.length; i++) {
    const foundPokemon2 = document.createElement("div");
    foundPokemon2.className = "PokemonCardForSearch2";
    foundPokemon2.name = data[i].name;
    foundPokemon2.innerHTML = `
    <P class="pokemonFoundTXT">${data[i].name}</P>
    <img  class="pokemonFoundImg" src="${data[i].img}">`;
    foundPokemon2.addEventListener("click", onClicCard);
    findYourPokemonDiv2.appendChild(foundPokemon2);
  };
};

//Se crea evento click en boton "!Quiero verlos todos!"
bttnWatchAllPokemons.addEventListener("click", () => {
  drawCards(pokemonData);
});
//Se crea el evento a los botones de filtrar.
filteredBttn.forEach(bttn => bttn.addEventListener("click", (e) => {
  const filteredByID = filteredByType(pokemonData, e.target.id);
  for (let i = 0; i < allPokemonsCards.childElementCount; i++) {
    allPokemonsCards.childNodes[i].style.display = "none"
  };
  drawCards(filteredByID);
}));
//Se crea el siguiente evento para darle funcionalidad a los botones de "ordenar por".
sortBttn.forEach(bttn => bttn.addEventListener("click", (e) => {
  const sortBttnId = e.currentTarget.id
  let pokemonSorted = []
  console.log(sortBttnId)
  if (sortBttnId == "sortAZ") {
    pokemonSorted = sortA_Z(pokemonData)
  } else if (sortBttnId == "sortZA") {
    pokemonSorted = sortZ_A(pokemonData)
  } else if (sortBttnId == "ascendingSort") {
    pokemonSorted = ascending_Sort(pokemonData)
  } else if (sortBttnId == "descendingSort") {
    pokemonSorted = descending_Sort(pokemonData)
  };
  for (let i = 0; i < allPokemonsCards.childElementCount; i++) {
    allPokemonsCards.childNodes[i].style.display = "none"
  };
  drawCards(pokemonSorted);
}));
//Se agrega el evento al buscador principal.
searchEngine.addEventListener("keypress", () => {

  const enteredText = searchEngine.value.toLowerCase()
  const filteredBySearch = pokemonData.filter(x => x.name.includes(enteredText));
  if (enteredText.length > 1) {
    search(filteredBySearch)
  };
});
searchEngine2.addEventListener("keypress", () => {

  const enteredText2 = searchEngine2.value.toLowerCase()
  const filteredBySearch2 = pokemonData.filter(x => x.name.includes(enteredText2));
  if (enteredText2.length > 1) {
    search2(filteredBySearch2)
  };
});