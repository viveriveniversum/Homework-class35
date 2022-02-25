'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/blob/main/3-UsingAPIs/Week2/README.md#exercise-2-gotta-catch-em-all

Complete the four functions provided in the starter `index.js` file:

`fetchData`: In the `fetchData` function, make use of `fetch` and its Promise 
  syntax in order to get the data from the public API. Errors (HTTP or network 
  errors) should be logged to the console.

`fetchAndPopulatePokemons`: Use `fetchData()` to load the pokemon data from the 
  public API and populate the `<select>` element in the DOM.
  
`fetchImage`: Use `fetchData()` to fetch the selected image and update the 
  `<img>` element in the DOM.

`main`: The `main` function orchestrates the other functions. The `main` 
  function should be executed when the window has finished loading.

Use async/await and try/catch to handle promises.

Try and avoid using global variables. As much as possible, try and use function 
parameters and return values to pass data back and forth.
------------------------------------------------------------------------------*/
async function fetchData(url) {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error('HTTP Request Error!');
  }
  const data = res.json();
  return data;
}

async function fetchAndPopulatePokemons(pokemon) {
  try {
    const poke = await fetchData(pokemon);
    const select = document.createElement('select');
    select.id = 'select';
    poke.results.forEach((element) => {
      const option = document.createElement('option');
      option.text = element.name;
      select.appendChild(option);
    });
    document.body.appendChild(select);
    select.addEventListener('change', async () => {
      await fetchImage(select.value);
    });
  } catch (e) {
    console.log(e);
  }
}

async function fetchImage(pokemon) {
  try {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    const data = await fetchData(url);
    if (document.querySelector('img')) {
      body.removeChild(document.querySelector('img'));
    }
    const img = document.createElement('img');
    img.src = data.sprites.front_default;
    document.body.appendChild(img);
  } catch (e) {
    console.error(e);
  }
}

async function main() {
  try {
    const button = document.createElement('button');
    button.textContent = 'New Pokemon';
    document.body.appendChild(button);
    button.addEventListener('click', async () => {
      await fetchAndPopulatePokemons('https://pokeapi.co/api/v2/pokemon');
      button.style.display = 'none';
    });
  } catch (e) {
    console.log(e);
  }
}

window.addEventListener('load', main);
