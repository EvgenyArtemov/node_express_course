import { readFile, writeFile } from 'fs';

// callback hell methodology ;)
console.log('start task')
readFile('./content/first.txt', { encoding: 'utf8'}, (err, data) => {
  if(err){
    console.log(err);
    throw new Error(err);
  }
  console.log('done reading 1')
  const first = data;
  readFile('./content/subfolder/test.txt', 'utf8', (err, data) => {
    if(err){
      console.log(err);
      throw new Error(err);
    }
  console.log('done reading 2')
    const second = data;

    writeFile(
      './content/result-async.txt',
      `Here is the text content of both files created with callback hell asyncronousity: ${first}, ${second}`,
    (err, data) => {
      if(err) {
        console.log(err);
        return;
      }
      console.log(data);
      console.log('done writing')
    }
      )
  })
});

console.log('start next task')

// prints to the console

// start task
// start next task
// done reading 1
// done reading 2
// undefined
// done writing