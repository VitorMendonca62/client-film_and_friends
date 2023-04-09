import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { socket } from '../../socket';
import {
  Container,
  Header,
  Title,
  Description,
  Label,
  Forms,
  InputName,
  Button,
} from './styles';

export default function WhoAreYou() {
  const [name, setName] = useState('');

  const navigate = useNavigate();

  const nameInSessionStorage = sessionStorage.getItem('name');

  if (nameInSessionStorage) {
    navigate('/filme', { state: { user: name } });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    sessionStorage.setItem('name', name);

    socket.emit('select-name', {
      name,
    });
    navigate('/filme', { state: { user: name } });
  };
  return (
    <Container>
      <Header>
        <Title>Seja bem-vindo ao Filme com amigos.</Title>
        <Description>
          Aqui você pode assistir filmes com seus amigos em uma chamada e
          conversar através do chat.
        </Description>
      </Header>
      <Forms onSubmit={handleSubmit}>
        <Label>Como se chama?</Label>
        <InputName
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="text"
          name="name"
          id="name"
          placeholder="Como se chama?"
        />
        <Button type="submit">Esse sou eu!</Button>
      </Forms>
    </Container>
  );
}
