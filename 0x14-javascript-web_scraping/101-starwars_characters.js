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

    // Use a recursive function to handle asynchronous requests
    function printCharacter(index) {
      if (index < charactersUrls.length) {
        request.get(charactersUrls[index], (characterError, characterResponse, characterBody) => {
          if (characterError) {
            console.error(characterError);
          } else {
            const characterData = JSON.parse(characterBody);
            console.log(characterData.name);
            printCharacter(index + 1);
          }
        });
      }
    }

    // Start printing characters
    printCharacter(0);
  }
});
