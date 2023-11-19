const express = require('express');
const http = require('http');
const hid  = require('./classes/hid');
const jsToHid = require('./classes/converter');
const app = express();
const server = http.createServer(app);
const logger = require('winston'); // You may need to install the winston library
const WebSocket = require('ws');
const path = require('path');

logger.level = 'info';

const host = process.env.HOST || '0.0.0.0';
const port = parseInt(process.env.PORT, 10) || 8000;
const debug = process.env.DEBUG === 'true';
const hidPath = process.env.HID_PATH || '/dev/hidg0';

// Initialize the web socket server instance port : 3000
const wss = new WebSocket.Server({ port: 3000 });
app.use(express.static(path.join(__dirname, 'public')));


function parseKeyEvent(payload) {


    return new jsToHid.JavascriptKeyEvent(
        payload.metaKey,
        payload.altKey,
        payload.shiftKey,
        payload.ctrlKey,
        payload.key,
        payload.keyCode,
    );
}
wss.on('connection', (ws) => {
    logger.info('Client connected');

    ws.on('message', (message) => {
        message = JSON.parse(message);
        const keyEvent = parseKeyEvent(message.data);
        let hidKeycode;
        let success = false;
        let controlKeys_hidKeycode;
        try {
            controlKeys_hidKeycode = jsToHid.convert(keyEvent);
            control_keys = controlKeys_hidKeycode[0];
            hid_keycode = controlKeys_hidKeycode[1];
            hidKeycode = hid_keycode;
            hid.send(hidPath, control_keys, hidKeycode);
            success = true;
        } catch (error) {
            if (error instanceof jsToHid.UnrecognizedKeyCodeError) {
                logger.warn('Unrecognized key: %s (keycode=%d)', keyEvent.key, keyEvent.key_code);
            }
        }

        ws.emit('keystroke-received', { success });
    });

    ws.on('disconnect', () => {
        logger.info('Client disconnected');
    });
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

server.listen(port, host, () => {
    logger.info(`Server started on http://${host}:${port}`);
});
