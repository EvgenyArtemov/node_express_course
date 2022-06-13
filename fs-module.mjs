import { readFileSync, writeFileSync } from 'fs';

export const fsModule = () => {
  const first = readFileSync('./content/subfolder/test.txt', 'utf-8');
  const second = readFileSync('./content/first.txt');

  writeFileSync(
    './content/result-sync.txt',
    `Here is the text content of both files: ${first}, ${second}`
  )
}