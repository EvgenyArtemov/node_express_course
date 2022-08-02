import http from 'http';
import { readFileSync } from 'fs';

const homePage = readFileSync('./index.html');

const server = http.createServer((req, res) => {
  if(req.url === '/') {
    res.writeHead(200, {'content-type': 'text/html'})
    res.write(homePage);
    res.end();
    return;
  }
  if(req.url === '/about') {
    res.writeHead(200, {'content-type': 'text/html'})
    res.write('Welcome to our About Page');
    res.end()
    return;
  }
  res.writeHead(404, {'content-type': 'text-html'})
  res.write(`
    <h1>404</h1>
    <p>It seems that this page doesn't exist!</p>
    <a href="/">Go back</a>
  `);
  res.end();
})

server.listen(5002);