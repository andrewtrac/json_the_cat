const request = require('request');
const input = process.argv[2];

const breed = `https://api.thecatapi.com/v1/breeds/search?q=${input}`;

const breedFetcher = request(breed, (error, response, body) => {
  if (error) {
    return console.log(error);
  } else if (body === '[]') {
    return console.log('Error: Breed is not found');
  } else {
    const data = JSON.parse(body);
    console.log(data[0].description);
  }
});


