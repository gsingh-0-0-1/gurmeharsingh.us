const express = require('express');
const http = require('http');
const fs = require('fs')

const PORT_WEB = '80'
const HOST = '0.0.0.0'


const app = express();
const server = http.createServer(app);

server.listen(PORT_WEB, HOST, () => console.log(`Server running on port ${PORT_WEB}`));

app.get('/', (req, res) => {
  res.send('Gurmehar Singh');
});

