/**
 * 1. Chuck Norris programs do not accept input
 * 
 * `GET` a random joke inside the function, using the API: http://www.icndb.com/api/
 * (use `node-fetch`) and print it to the console. 
 * Make use of `async/await` and `try/catch`
 * 
 * Hints
 * - To install node dependencies you should first initialize npm
 * - Print the entire response to the console to see how it is structured.
 */

const fetch = require('node-fetch');

async function fetchJoke(url) {
  try {
    const jsonResponse = await fetch(url).then(response => response.json());
    return console.log(jsonResponse),console.log(jsonResponse.value)
  } catch(error) {
    console.log(error);
  }
}

function printChuckNorrisJoke() {
  fetchJoke('https://api.chucknorris.io/jokes/random');
}

printChuckNorrisJoke();