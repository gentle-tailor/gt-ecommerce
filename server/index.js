const fs = require('fs')
const https = require('https')
const express = require('express');
const consola = require('consola');
const config = require('./config');
const middleware = require('./middleware');

const app = express();

app.use(middleware);

if (module === require.main) {
  const server = (
    https.createServer({
      key: fs.readFileSync('server.key'),
      cert: fs.readFileSync('server.cert')
    }, app).listen(config.port, () => {
      const { address } = server.address();
      const host = address === '::' ? 'localhost' : address;
      const urlSafeHost = host.includes(':') ? `[${host}]` : host;
  
      consola.success(`Listening on https://${urlSafeHost}:${config.port}`);
    })
  )
}
