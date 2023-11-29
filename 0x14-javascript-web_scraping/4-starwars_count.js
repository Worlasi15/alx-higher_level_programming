#!/usr/bin/node
const axios = require('axios');

const apiUrl = process.argv[2];
const characterId = 18; // ID for the character "Wedge Antilles"

axios.get(apiUrl)
  .then((response) => {
    const filmsData = response.data.results;
    const moviesWithWedge = filmsData.filter((film) =>
      film.characters.includes(`https://swapi-api.alx-tools.com/api/people/${characterId}/`)
    );

    console.log(moviesWithWedge.length);
  })
  .catch((error) => {
    console.error(error);
  });
