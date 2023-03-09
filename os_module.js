const os=require('os');
// or destructure using {}

// current user info
const user=os.userInfo();
console.log(user);

// system uptime in secs
console.log(`System uptime is ${os.uptime()} seconds`);

const currentOS={
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem()
};
console.log(currentOS);