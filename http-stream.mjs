import { createServer } from 'http';
import { createReadStream } from 'fs';

const server = createServer((req, res) => {
  const stream = createReadStream('./content/big.txt')
  stream.on('open', () => {
    stream.pipe(res)
  })
  stream.on('error', (err) => {
    res.end(err);
  })
});

server.listen(5003);