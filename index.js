const express = require('express');

// console.log(express);
// console.log("Teste", express.response.download);

const server = express();

// server.get("/teste", () => {
server.get('/teste', (req, res) => {
  console.log('teste');
  // return res.send("Hello Word");
  return res.json({ message: 'Hello World' });
});

server.listen(3000);
