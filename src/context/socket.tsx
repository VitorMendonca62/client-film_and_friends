import { createContext, useState } from 'react';
import { Socket } from 'socket.io-client';
import { io } from 'socket.io-client';
import { ISocketContext } from '../types/socket';

export const SocketContext = createContext<ISocketContext | null>(null);

export default function SocketProvider(props: IPropsContenxt) {
  const [socket, setSocket] = useState<Socket | null>(null);
  let url: string | undefined = undefined;

  const handleUpdateSocket = (newSocket: Socket) => {
    setSocket(newSocket);
  };

  const connectSocket = () => {
    const URL = "http://localhost:4004";

    const _socket = io(URL, { transports: ["websocket"] });
    handleUpdateSocket(_socket);
    return _socket;
  };

  if (props) {
    const { children } = props;

    return (
      <SocketContext.Provider
        value={{
          socket,
          url,
          updateSocket: handleUpdateSocket,
          connectSocket
        }}
      >
        {children}
      </SocketContext.Provider>
    );
  }
}
