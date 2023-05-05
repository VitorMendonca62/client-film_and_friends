import { io } from 'socket.io-client';

const URL = 'https://film-and-filmds.onrender.com';
// const URL = 'http://localhost:4004';

export const socket = io(URL, { transports: ['websocket'] });
