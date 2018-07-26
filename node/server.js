
'use strict';

const express = require('express');

const os = require('os');
var hostname = os.hostname();

const PORT = 8000;
const HOST = '0.0.0.0';

const app = express();
app.get('/', (req, res) => {
  res.send("<html><head><h1>hostname : " + hostname +
    	"</h1></head><body><img src='https://blog.docker.com/wp-content/uploads/Swarmnado-357x627-30-1.gif'></body></html>");
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

