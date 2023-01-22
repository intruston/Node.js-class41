
/**
 * 3: Party time
 * 
 * After reading the documentation make a request to https://reservation100-sandbox.mxapps.io/rest-doc/api
 * and print the response to the console. Use async-await and try/catch.
 * 
 * Hints:
 * - make sure to use the correct headers and http method in the request
 */
 const fetch = require('node-fetch');

 async function fetchData(url, name, number) {
   try {
    const request = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        numberOfPeople: number
      })};
     const jsonResponse = await fetch(url, request).then(response => response.json());
     return console.log(jsonResponse)
   } catch(error) {
     console.log(error);
   }
 }

function makeReservation() {
  fetchData('https://reservation100-sandbox.mxapps.io/api/reservations','Ivan Ivanov',4)
}

makeReservation();