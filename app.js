// dom objects
const displayScreen = document.querySelector('.DisplayScreen');
const pokemonId = document.querySelector('.pokemonId');
const pokemonName = document.querySelector('.pokemonName');
const pokemonTypeOne = document.querySelector('.pokemonTypeOne');
const pokemonTypeTwo = document.querySelector('.pokemonTypeTwo');
const pokemonWeight = document.querySelector('.pokemonWeight');
const pokemonHeight = document.querySelector('.pokemonHeight');
const pokemonBio = document.querySelector('.pokemonBio');
const pokemonSprite = document.querySelector('.pokemonSprite');
const searchQuery = document.querySelector('.pokemonSearchBar');
const searchButton = document.querySelector('.pokemonSearchButton');
const lineOne = document.querySelector('.lineOne');
const lineTwo= document.querySelector('.lineTwo');
const lineThree = document.querySelector('.lineThree');
const lineFour= document.querySelector('.lineFour');
const lineHeader = document.querySelector('.lineHeader');
//functions
function drawLines() {
      lineHeader.className='lineHeaderActive';
      lineOne.className='lineOneActive';
      lineTwo.className='lineTwoActive';
      lineThree.className='lineThreeActive';
      lineFour.className='lineFourActive';
  }

//function to lowercase result otherwise can cause error when searching
const lowercaseResult = str => str.toLowerCase();

//function to pad number to show appopriatly
const padding = num => num.toString().padStart(3,'0');
//write error check for 404s
// need to add dash if space detected on first space and error detection of user input spaces periods
//function to take in search result and display results


//event listeners
searchButton.addEventListener('click', () => fetchPokemonData(lowercaseResult(searchQuery.value)))
