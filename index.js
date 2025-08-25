// index.js
const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
const { TELEGRAM_TOKEN, CHAT_ID } = require('./config');

const app = express();
app.use(bodyParser.json());

app.post('/sendOrder', (req, res) => {
  const { name, phone, cart } = req.body;
  const message = `Новый заказ:\nИмя: ${name}\nТелефон: ${phone}\nЗаказ: ${JSON.stringify(cart)}`;

  fetch(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: CHAT_ID,
      text: message
    })
  })
  .then(() => res.json({ status: 'ok' }))
  .catch(() => res.status(500).json({ status: 'error' }));
});

app.listen(3000, () => console.log('Server running on port 3000'));


// В Vercel требуется экспортировать handler
module.exports = app;