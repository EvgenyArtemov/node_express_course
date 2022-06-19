import { createReadStream } from 'fs';

const stream = createReadStream('./content/big.txt', { highWaterMark: 20000, encoding: 'utf8' });

stream.on('data', (result) => {
  console.log('result\'s part:', result);
})
