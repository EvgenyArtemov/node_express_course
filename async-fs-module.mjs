import { readFile, writeFile } from 'fs';

// callback hell methodology ;)
export default readFile('./content/first.txt', { encoding: 'utf8'}, (err, data) => {
  if(err){
    console.log(err);
    throw new Error(err);
  }
  const first = data;
  readFile('./content/subfolder/test.txt', 'utf8', (err, data) => {
    if(err){
      console.log(err);
      throw new Error(err);
    }
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
    }
      )
  })
});