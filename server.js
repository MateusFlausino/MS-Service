const http = require('http');
const fs = require('fs');
const path = require('path');

const root = __dirname;
const port = Number(process.env.PORT || 4173);
const host = '127.0.0.1';

const types = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon'
};

const server = http.createServer((request, response) => {
  const url = new URL(request.url, `http://${host}:${port}`);
  const safePath = path.normalize(decodeURIComponent(url.pathname)).replace(/^(\.\.[/\\])+/, '');
  const requested = path.join(root, safePath === path.sep ? 'index.html' : safePath);
  const resolved = requested.startsWith(root) ? requested : path.join(root, 'index.html');

  fs.readFile(resolved, (error, data) => {
    if (error) {
      response.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      response.end('Arquivo nao encontrado');
      return;
    }

    response.writeHead(200, {
      'Content-Type': types[path.extname(resolved).toLowerCase()] || 'application/octet-stream',
      'Cache-Control': 'no-store'
    });
    response.end(data);
  });
});

server.listen(port, host, () => {
  console.log(`EV MasterClass rodando em http://${host}:${port}`);
});
