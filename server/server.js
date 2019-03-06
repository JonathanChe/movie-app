require('dotenv').config();
const express = require('express');
const PORT = process.env.PORT || 8000;
const API_KEY = process.env.API_KEY || undefined;

const app = express();

app.post('/fetch', (req, res) => {
  const query = req.body;
  // fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${query}`)
});

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
