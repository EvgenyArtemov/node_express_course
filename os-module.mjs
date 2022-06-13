import os from 'os';

export const osModule = () => {
  const user = os.userInfo();
  console.log('user:', user);

  console.log(`Your system uptime is ${Math.floor(os.uptime() / 60)} minutes`)

  const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMemory: os.totalmem(),
    freeMem: os.freemem()
  };

  console.dir(currentOS)
}