import { Socket } from 'socket.io-client';

interface ISocketContext {
  socket: Socket | null;
  url: string | undefined;
  updateSocket: (newSocket: Socket) => void;
  connectSocket: () => Socket;
}
