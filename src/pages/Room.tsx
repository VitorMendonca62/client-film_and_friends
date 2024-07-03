import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { showRoom } from '../services/api/room';
// import socket from '../services/socket';

import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';
import Chat from '../components/layout/Chat';
import useSocket from '../hooks/useSocket';

export default function Room() {
  const { id } = useParams();
  console.log(id)
  const navigate = useNavigate();
  const [room, setRoom] = useState({});

  const effectExecuted = useRef(false);
  const username = useRef('');

  const { connectSocket } = useSocket()


  useEffect(() => {
    if (effectExecuted.current) return;
    effectExecuted.current = true;

    const fetch = async () => {
      try {
        if (!id) return navigate('/home');

        const data = await showRoom(id);
        if (!data.data) return navigate('/home');

        setRoom(data.data);
      } catch (error) {
        navigate('/home');
      }
    };
    fetch();

    const token = Cookies.get('USER_TOKEN')?.split(' ')[1];
    if (token) {
      const tokenDecoded = jwtDecode(token) as JwtPayload;
      username.current = tokenDecoded.username;
    } else {
      navigate('/home');
    }

    const socket = connectSocket()

    window.addEventListener("beforeunload", () => {
      console.log(socket)
      socket?.emit("_disconnect", id, username.current)
    })

    socket.emit('joinRoom', id, username.current);
  }, []);

  return (
    <div className="h-[calc(100vh-4rem)] translate-y-[4rem] overflow-hidden">
      {/* <Chat socket={socket} username={username.current} /> */}
      {/* <iframe
        id="EmbedderContainer"
        src={room.path}
        width="100%"
        height="100%"
        allowfullscreen="allowfullscreen"
        frameborder="0"
      ></iframe> */}
    </div>
  );
}
