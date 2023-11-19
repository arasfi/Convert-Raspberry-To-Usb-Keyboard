const fs = require('fs');

function send(hidPath, controlKeys, hidKeycode) {
    const buf = Buffer.alloc(8);
    buf[0] = controlKeys;
    buf[2] = hidKeycode;
    console.log(buf);
    try {
        //fs.writeFileSync(hidPath, buf);
        //fs.writeFileSync(hidPath, Buffer.alloc(8)); // Write zeros to clear the buffer
    } catch (error) {
        console.error(`Error writing to HID path ${hidPath}: ${error.message}`);
    }
}

module.exports = { send };
