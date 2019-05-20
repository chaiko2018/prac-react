const express = require('express');
const app = express();
const portNum = 3000;

app.get('/', (req, res) => {
  res.send(
    '<p><a href="/dice/6">6面体のサイコロ</a><br />' +
    '<a href="/dice/12">12面体のサイコロ</a></p>'
  );
});
{/*
app.get('/dice/6', (req, res) => {
  res.send(
    '今回の値は...' + dice(6)
  );
});

app.get('/dice/12', (req, res) => {
  res.send(
    '今回の値は...' + dice(12)
  );
});
*/}

app.get('/dice/:num', (req, res) => {
  res.send(
    '今回の値は...' + dice(req.params.num)
  );
});

function dice(num) {
  return Math.floor(Math.random() * num) + 1;
};

app.listen(portNum, () => {
  console.log('start', `http://localhost:${portNum}`);
});
