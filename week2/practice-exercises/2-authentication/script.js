
/**
 * 2. Authentication
 * 
 * Using node-fetch make an authenticated request to https://restapiabasicauthe-sandbox.mxapps.io/api/books
 * Print the response to the console. Use async-await and try/catch.
 * 
 * Hints:
 * - for basic authentication the username and password need to be base64 encoded
 */

 const fetch = require('node-fetch');

 async function fetchData(url, credentials) {
   try {
     const encodedCredentials = Buffer.from(credentials).toString('base64');
     const jsonResponse = await fetch(url, {
      headers: { 'Authorization': `Basic ${encodedCredentials}` }
    }).then(response => response.json());
     return console.table(jsonResponse)
   } catch(error) {
     console.log(error);
   }
 }

function printBooks() {
  fetchData('https://restapiabasicauthe-sandbox.mxapps.io/api/books','admin:hvgX8KlVEa')
}

printBooks();