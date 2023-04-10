import { io } from 'socket.io-client';

const URL = 'https://film-and-filmds.onrender.com:4004';

export const socket = io(URL, {} );
//SEila
console.log(socket);
