import http from 'http';

const server = http.createServer((req, res) => {
  if(req.url === '/') {
    res.end('Welcome to our Home Page');
    return;
  }
  if(req.url === '/about') {
    res.end('Welcome to our About Page');
    return;
  }
  res.end(`
    <h1>404</h1>
    <p>It seems that this page doesn't exist!</p>
    <a href="/">Go back</a>
  `)
})

server.listen(5002);