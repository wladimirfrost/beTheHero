const express = require('express');

const app = express();

app.get('/', (req, res) => {
  return res.json({
    evento: 'Oministack week 11',
    aluno: 'Frost',
  });
});

app.listen(3333);
