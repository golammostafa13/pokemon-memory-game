export const fetchPokemons = async (amount) =>{
    
    let pokemons = [];
    for(let i = 1; i <= amount; i++){
        const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${i}`;
        const response = await fetch(pokemonUrl, {mode: 'cors',
            method:'POST',
            headers: {'Content-Type': 'application/json', 'Access-Control-Allow-Origin':'*'}});
        const pokemon = await response.json();
        const id = await pokemon.id;
        const name = await pokemon.name;
        const image = await pokemon.sprites?.front_default;
        await pokemons.push({id, name, image});
        // console.log(pokemons);
    }
    return pokemons;
}

export const suffleArray = (array) =>{
    return [...array].sort(() => Math.random() - 0.5);
}
