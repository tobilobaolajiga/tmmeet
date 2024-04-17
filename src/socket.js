import { io } from 'socket.io-client';

// "undefined" means the URL will be computed from the `window.location` object
const URL = 'ws://89.38.135.41:9877/';

export const socket = io(URL);
