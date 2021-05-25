const pokeContainer = document.getElementById("poke-container");
const pokeNumber = 200;

const getPokemon = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const result = await fetch(url);
    const pokemon = await result.json();
    // console.log(pokemon);
    displayPokemon(pokemon);
}

const fetchPokemon = async () => {
    for(let i=1;i<=pokeNumber;i++) {
        await getPokemon(i);
    }
}

const displayPokemon = (pokemon) => {

    pokemonEl = document.createElement("div");
    pokemonEl.classList.add("pokemon");
    const {id, name, sprites, types } = pokemon;
    pokemonHTML = `<img class="img-container" src = "${sprites.front_default}"></img>
    <br>
    <span>${id}</span>
    <h3 class="name">${name}</h3>
    <small class="type">${types[0].type.name}</small>`;
    pokemonEl.innerHTML = pokemonHTML
    pokeContainer.appendChild(pokemonEl);
}

fetchPokemon()