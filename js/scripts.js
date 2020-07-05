var pokemonRepository = (function () { /*IIFE start*/
    var pokemonList = [];
    var apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
        /*{
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
    ];*/

    function loadList() { /*new code to review*/
        return fetch(apiUrl).then(function (response) {
          return response.json();
        }).then(function (json) {
          json.results.forEach(function (item) {
            var pokemon = {
              name: item.name,
              detailsUrl: item.url
            };
            add(pokemon);
          });
        }).catch(function (e) {
          console.error(e);
        })
      }

    function loadDetails(item) {
        var url = item.detailsUrl;
        return fetch(url).then(function (response) {
          return response.json();
        }).then(function (details) {
          // Now we add the details to the item
          item.imageUrl = details.sprites.front_default;
          item.height = details.height;
          item.types = details.types;
        }).catch(function (e) {
          console.error(e);
        });
      } /*new code to review end*/

    /* how to add a pokemon
    console.log(pokemonRepository.getAll());

    pokemonRepository.add({
        name: 'Bulbasaur',
        height: 1,
        type: ['poison']
    });

    console.log(pokemonRepository.getAll());
    */

    function add(pokemon) {
        pokemonList.push(pokemon);
    }

    function getAll() {
        return pokemonList;
    }

    function showDetails(pokemon) {
        loadDetails(pokemon).then(function () { /*new code to review*/
            console.log(pokemon);
        });
    }
    
    function addListItem(pokemon) {
        var pokedexList = document.querySelector('.pokemon-list'); /*selects <ul> in HTML and assigns it as the pokedexList variable*/
        var listItem = document.createElement('li'); /*creates the <li> element and assigns it as the listItem variable*/
        var button = document.createElement('button'); /* creates a <button> element and assings it as the button variable*/
        button.innerText = pokemon.name; /*?? got it to work but why is it pokemon and not pokemonList again*/
        button.classList.add('pokedexButton'); /*adds a class name 'pokedexButton' to button so it can be edited in css*/
        button.addEventListener('click', () => showDetails(pokemon)); /*wrap showDetails function in another function so it isn't called immediately when code runs but when click event executes*/
        listItem.appendChild(button); /*states parent element then adds child button*/
        pokedexList.appendChild(listItem);/*states parent element then adds child listItem*/
    }

    /*only things visible outside of IIFE*/
    return {
        add,
        getAll,
        addListItem,
        loadList,
        loadDetails
    }

})(); /*IIFE end*/

pokemonRepository.loadList().then(function() { /*new code to review*/
    pokemonRepository.getAll().forEach(function(pokemon){
        pokemonRepository.addListItem(pokemon);
    });
});

/*document.write('<p>' + pokemon.name + ' (height: ' + pokemon.height + ')')
if (pokemon.height > 1) {
    document.write(' - Wow, thats\'s big!')
}
document.write('</p>')*/

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