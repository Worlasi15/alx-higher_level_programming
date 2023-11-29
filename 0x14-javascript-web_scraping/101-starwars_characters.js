#!/usr/bin/node
const request = require('request');

const movieId = process.argv[2];
const apiUrl = `https://swapi-api.alx-tools.com/api/films/${movieId}/`;

request.get(apiUrl, (error, response, body) => {
  if (error) {
    console.error(error);
  } else {
    const movieData = JSON.parse(body);
    const charactersUrls = movieData.characters;

    // Use a promise to handle asynchronous requests
    function fetchCharacter(characterUrl) {
      return new Promise((resolve, reject) => {
        request.get(characterUrl, (characterError, characterResponse, characterBody) => {
          if (characterError) {
            reject(characterError);
          } else {
            const characterData = JSON.parse(characterBody);
            resolve(characterData.name);
          }
        });
      });
    }

    // Fetch all characters and print them
    Promise.all(charactersUrls.map(fetchCharacter))
      .then((characters) => {
        characters.forEach((character) => {
          console.log(character);
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }
});
