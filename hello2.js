const express = require('express');
const app = express();
app.listen(3000, () => {
  console.log('start - http://localhost:3000');
});

app.get('/', (req, res) => {
  res.send(
    '<form method="POST">' +
    '<textarea name="memo">TEST</textarea>' +
    '<br /><input type="submit" value="SEND">' +
    '</form>'
  );
});

app.post('/', (req, res) => {
  res.send(
    'GET POST'
  );
});
