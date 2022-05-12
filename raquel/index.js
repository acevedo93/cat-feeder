const express = require('express');
const app = express();

app.get('/schedule', (req, res) => {
  res.json({ data: ' this is the schedule' });
});

app.post('/schedule', (req, res) => {
  res.json({ data: 'new schedule created' });
});

app.post('/feed', (req, res) => {
  res.json({ data: 'cat feed' });
});

app.listen(3000, () => {
  console.log('listen');
});
