import { osModule } from './os-module.mjs';
import { pathModule } from './path-module.mjs';
import { fsModule } from './fs-module.mjs';
// import './async-fs-module.mjs'; // import default calls module internals 
import './App.mjs';
import './event-emitter-module.mjs';
import { writeBigFile } from './content/big-fle.mjs'
import './readStream-module.mjs';
import './http-stream.mjs';

osModule();
// pathModule();
// fsModule();
// asyncFsModule();

// generate really big file to read it later with read Stream B)
writeBigFile();