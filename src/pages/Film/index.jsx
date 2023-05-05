import { useState, useEffect, useRef, useContext } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { AiOutlineSend } from 'react-icons/ai';
import { socket } from '../../socket';
import { UserContext } from '../../context/user';
import {
  Container,
  ContainerVideo,
  Chat,
  ChatTitle,
  ChatMesseges,
  Message,
  ContainerChatInput,
  ChatInput,
  ChatButton,
} from './styles';

export default function Film() {
  const [slug, setSlug] = useState('');
  const [messageList, setMessageList] = useState([]);
  const inputMessegeRef = useRef(null);
  const { id } = useParams();

  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useContext(UserContext);

  const imdbID = location.state.imdbID;

  if (!user) {
    navigate('/login');
  }

  const author = user.username;

  useEffect(() => {
    socket.emit('join-room');
    console.log('A'); // Renderiza 2 vezes quando dar refresh
  }, []);

  useEffect(() => {
    socket.on('received-message', (data) => {
      setMessageList((current) => [...current, data]);
      console.log('C'); // ele vem 4 vezes
    });
    console.log('B'); // Vem renderiza 2 vezes quando dar refresh
  }, [socket]);

  const handleSendMessege = (e) => {
    e.preventDefault();
    if (!slug) {
      return;
    }
    setSlug('');
    inputMessegeRef.current.focus();
    socket.emit('send-message', { author, slug }); // EMITE APENAS 1 VEZ
    console.log("EMITOU")
  };

  return (
    <Container>
      <ContainerVideo>
        {/* <iframe
          id="EmbedderContainer"
          src={'https://embedder.net/e/' + imdbID}
          allowfullscreen="allowfullscreen"
          frameborder="0"
        ></iframe> */}
        <Chat>
          <ChatTitle>Chat</ChatTitle>
          <ChatMesseges>
            {messageList?.map((message, index) => (
              <Message key={index}>
                <span></span>
                <div>
                  <strong>{message.author}</strong>
                  <p>{message.slug}</p>
                </div>
              </Message>
            ))}
          </ChatMesseges>
          <ContainerChatInput onSubmit={handleSendMessege}>
            <ChatInput
              type="text"
              onChange={(e) => setSlug(e.target.value)}
              value={slug}
              ref={inputMessegeRef}
              placeholder="Digite sua mensagem"
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
