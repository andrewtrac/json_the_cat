const request = require('request')

const fetchBreedDescription = function (breedName, callback) {

  const breed = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(breed, (error, response, body) => {
    const data = JSON.parse(body);
    if (error || body === '[]') {
    callback("Invalid Link");
    } else {
      callback(error, data[0].description.trim())
    }
   }
  )}
  
  module.exports = { fetchBreedDescription };
;