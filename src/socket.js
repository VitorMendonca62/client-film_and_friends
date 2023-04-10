import { io } from 'socket.io-client';

const URL = 'https://film-and-filmds.onrender.com';

export const socket = io(URL, { port: 4004, });
console.log(socket);
