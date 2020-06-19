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
