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
  const button = document.createElement('button');
  button.textContent = 'New Pokemon';
  let body = document.querySelector('body');
  body.appendChild(button);
  button.addEventListener('click', async () => {
    const poke = await fetchData(pokemon);
    let select = document.createElement('select');
    select.id = 'mySel';
    poke.results.forEach((element) => {
      const opt = document.createElement('option');
      opt.text = element.name;
      select.appendChild(opt);
    });
    button.disabled = true;
    body.appendChild(select);
  });
  const select = document.getElementById('mySel');
  select.addEventListener('change', async () => {
    await fetchImage(select.value);
  });
}

async function fetchImage(pokemon) {
  try {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    const body = document.querySelector('body');
    const data = await fetchData(url);
    const img = document.createElement('img');
    img.src = data.sprites.front_default;
    body.appendChild(img);
  } catch (e) {
    console.error(e);
  }
}

async function main() {
  try {
    await fetchAndPopulatePokemons('https://pokeapi.co/api/v2/pokemon');
  } catch (e) {
    console.log(e);
  }
}

window.addEventListener('load', main);
//https://pokeapi.co/api/v2/pokemon/{id or name}/
//https://pokeapi.co/api/v2/pokemon/?limit=5
