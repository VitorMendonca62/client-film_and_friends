import { useContext } from 'react';
import { SocketContext } from '../context/socket';
import { ISocketContext } from '../types/socket';


export default function useSocket() {
  const context = useContext<ISocketContext | null>(SocketContext);

  if (context === null) {
    throw new Error('Algo de errado em SocketContext');
  }
  
  return context;
}