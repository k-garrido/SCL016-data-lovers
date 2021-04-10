import pokemon from './data/pokemon/pokemon.js';
import {filteredByType,sortA_Z,sortZ_A,ascending_Sort,descending_Sort} from './data.js';

const pokemonData = pokemon.pokemon;
const bttnWatchAllPokemons = document.getElementById("bttnWatchAllPokemons");
const filteredBttn = document.querySelectorAll("#filterSection li")
const sortBttn = document.querySelectorAll ("#sortSection li")

//Se crea la siguiente funcion para que cuando se haga click en el boton del pokemon  se muestre la pagina de detalles del pokemon con
//toda la informacion correspondiente.
const onClicCard = (event) => {
  const targetPokemonName = event.currentTarget.name;

  document.getElementById("mainPage").style.display = "none";
  document.getElementById("pokemonsCardPage").style.display = "none";
  document.getElementById("pokemonDetails").style.display = "block";

  for (let i = 0; i < pokemonData.length; i++) {
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
      <img class="imgPokemonStats" src="pokemon/Eggs/${pokemonData[i].egg}.png"></img>
      <p class="pokemonStatsText">Puedes conseguirlo en un huevo de ${pokemonData[i].egg}.</p>`;
      } else if (pokemonData[i].egg == "5 km") {
        document.getElementById("eggInformation").innerHTML = `
        <img class="imgPokemonStats" src="pokemon/Eggs/${pokemonData[i].egg}.png"></img>
        <p class="pokemonStatsText">Puedes conseguirlo en un huevo de ${pokemonData[i].egg}.</p>`;
      } else if (pokemonData[i].egg == "7 km") {
        document.getElementById("eggInformation").innerHTML = `
        <img class="imgPokemonStats" src="pokemon/Eggs/${pokemonData[i].egg}.png"></img>
        <p class="pokemonStatsText">Puedes conseguirlo en un huevo de ${pokemonData[i].egg}.</p>`;
      } else if (pokemonData[i].egg == "10 km") {
        document.getElementById("eggInformation").innerHTML = `
        <img class="imgPokemonStats" src="pokemon/Eggs/${pokemonData[i].egg}.png"></img>
        <p class="pokemonStatsText">Puedes conseguirlo en un huevo de ${pokemonData[i].egg}.</p>`;
      } else {
        document.getElementById("eggInformation").innerHTML = `
      <img class="imgPokemonStats" src="pokemon/Eggs/2 km.png"></img>
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
      Ataque: ${pokemonData[1].stats['base-attack']}<br>
      Defensa: ${pokemonData[1].stats['base-defense']}<br>
      Stamina: ${pokemonData[1].stats['base-stamina']}<br>
      Max-CP: ${pokemonData[1].stats['max-cp']}<br>
      Max-HP: ${pokemonData[1].stats['max-hp']}<br>`;
      //Agragando la cantidad de KM que se debe caminar para conseguir un caramelo del Pokemon.
      document.getElementById("candyKM").innerHTML = `Camina ${pokemonData[i]['buddy-distance-km']} KM para ganar un caramelo.`;
      
      
      
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
      <img  class="pokemonImg" src="${data[i].img}">
      <P class="textInsideCards">#${data[i].num}</P>
      <P id="pokemonName" class="textInsideCards">${data[i].name}</P>`
    pokemonButton.addEventListener("click", onClicCard);
    allPokemonsCards.appendChild(pokemonButton);
  }
  //Al hacer click en el boton se oculta la pagina principal y se muestra solo la pagina
  // con los botones de los pokemons 
  document.getElementById("mainPage").style.display = "none";
  document.getElementById("pokemonsCardPage").style.display = "block";
};

//Se crea evento click en boton "!Quiero verlos todos!"
bttnWatchAllPokemons.addEventListener("click", () => {
  drawCards (pokemonData);
});

//Se crea el evento a los botones de filtrar.
filteredBttn.forEach (bttn => bttn.addEventListener("click", (e) => {
  
  const filteredByID = filteredByType(pokemonData,e.target.id);

  for (let i = 0; i< allPokemonsCards.childElementCount; i++) {      
    allPokemonsCards.childNodes[i].style.display = "none" 
  };       
  drawCards (filteredByID);
}));

 