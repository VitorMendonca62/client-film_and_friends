import { useState, useEffect, useRef } from 'react';
import {
  Room,
  RoomEvent,
 
} from 'livekit-client';
import { useNavigate } from 'react-router-dom';
import { AiOutlineSend } from 'react-icons/ai';
import { socket } from '../../socket';
import {
  Url,
  Container,
  ContainerVideo,
  Video,
  Chat,
  ChatTitle,
  ChatMesseges,
  Message,
  ContainerChatInput,
  ChatInput,
  ChatButton,
} from './styles';

export default function Film() {
  const [url, setURL] = useState('');
  const [slug, setSlug] = useState('');
  const [messageList, setMessageList] = useState([]);
  const videoRef = useRef(null);
  const inputMessegeRef = useRef(null);

  const navigate = useNavigate();

  const author = sessionStorage.getItem('name');

  if (!author) {
    console.log('a');
    navigate('/quem_e_voce');
  }

  useEffect(() => {
    socket.on('receivedMessage', (data) => {
      setMessageList((current) => [...current, data]);
    });

    socket.on('receivedStateVideo', (data) => {
      if (data.isPaused) {
        videoRef.current.pause();
        return;
      }
      videoRef.current.play();
    });

    return () => {
      socket.off('receivedMessage');
      socket.off('receivedStateVideo');
    };
  }, [socket]);

  const handleSendMessege = (e) => {
    e.preventDefault();
    setSlug('');
    inputMessegeRef.current.focus();
    socket.emit('sendMessage', { author, slug });
  };

  const handleStateVideo = (e) => {
    socket.emit('stateVideo', {
      isPaused: videoRef.current.paused,
    });
  };

  return (
    <Container>
      <Url
        type="text"
        placeholder="url"
        onChange={(e) => setURL(e.target.value)}
        value={url}
      />
      <ContainerVideo>
        <Video
          ref={videoRef}
          controls
          onPlay={handleStateVideo}
          onPause={handleStateVideo}
          src="https://github.com/VitorMendonca62/portfolio/raw/master/src/assets/imgs/highlights/a.mp4"
        ></Video>
        <Chat>
          <ChatTitle>Chat</ChatTitle>
          <ChatMesseges>
            {messageList?.map((message, index) => (
              <Message>
                <strong>{message.author}</strong>
                <p>{message.slug}</p>
              </Message>
            ))}
          </ChatMesseges>
          <ContainerChatInput onSubmit={handleSendMessege}>
            <ChatInput
              type="text"
              onChange={(e) => setSlug(e.target.value)}
              value={slug}
              ref={inputMessegeRef}
            />
            <ChatButton>
              <AiOutlineSend />
            </ChatButton>
          </ContainerChatInput>
        </Chat>
      </ContainerVideo>
    </Container>
  );
}
