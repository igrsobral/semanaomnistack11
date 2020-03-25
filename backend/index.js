const express = require('express');

const app = express();

app.get('/', (request, response ) => {
  return response.json({
    name: 'Igor Ribeiro',
    course: 'Fullstack Developer'
  });
});

app.listen(3333);
