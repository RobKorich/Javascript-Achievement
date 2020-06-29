var pokemonRepository = (function () {
    var pokemonList = [
        {
            name: 'Charmander',
            height: 2, 
            type: ['fire']
        },
        {
            name: 'Pikachu', 
            height: 1, 
            type: ['electric']
        },
        {
            name: 'Squirtle', 
            height: 1.5, 
            type: ['water']
        }
    ];

    function add(pokemon) {
        pokemonList.push(pokemon);
    }

    function getAll() {
        return pokemonList;
    }

    return {
        add,
        getAll
    }
})();

pokemonRepository.getAll().forEach(function(pokemon){
    document.write('<p>' + pokemon.name + ' (height: ' + pokemon.height + ')')
    if (pokemon.height > 1) {
        document.write(' - Wow, thats\'s big!')
    }
    document.write('</p>')
})

/* reference code for later (old version)

for (var i = 0; i < pokemonList.length; i++) {
    var className = 'otherPokemon'
    if (pokemonList[i].name === 'Charmander') {
        className = 'pokemon'
    }
    document.write('<p class="'+ className +'">' + pokemonList[i].name + ' (height: ' + pokemonList[i].height + ')')
    if (pokemonList[i].height > 1) {
        document.write(' - Wow, that\'s big!')
    }
    document.write('</p>')
}
*/

/* how to add a pokemon

console.log(pokemonRepository.getAll());
pokemonRepository.add({
    name: 'Bulbasaur',
    height: 1,
    type: ['poison']
});
console.log(pokemonRepository.getAll());
*/