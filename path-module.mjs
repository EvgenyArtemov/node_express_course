import path from 'path';

// replicate good old __dirname
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


export const pathModule = () => {
  console.log('plathform specific separator is ', path.sep );

  const filePath = path.join('/content', 'subfolder', 'test.txt');

  console.log('filePath is:', filePath);

  const baseName = path.basename(filePath);

  console.log('baseName:', baseName);

  const absolute = path.resolve(__dirname, ...filePath.split('/'));

  console.log('absolute path:', absolute)
  console.log('__dirname:', __dirname)
}