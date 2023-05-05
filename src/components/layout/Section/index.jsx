import { indexFilms } from '../../../services/rooms';

import { useQuery } from 'react-query';

import { useState } from 'react';
import CardRoom from '../../CardRoom';
import Modal from './Modal';
import { SectionContainer, Container, Title, Rooms } from './styles';

export default function Section() {
  const [film, setFilm] = useState({});
  const [visibleModal, setVisibleModal] = useState(false);
  const [roomsWithFilm, setRoomsWithFilm] = useState([]);

  const { isLoading, error, data } = useQuery('films', async () => {
    try {
      const data = await indexFilms();
      setRoomsWithFilm(data);
    } catch (error) {
      console.log(error);
    }
  });

  return (
    <SectionContainer>
      <Container>
        <Title>Salas</Title>
        <Rooms>
          {roomsWithFilm.map((filme, index) => (
            <CardRoom
              key={index}
              film={filme}
              setFilm={setFilm}
              setVisibleModal={setVisibleModal}
            />
          ))}
        </Rooms>
      </Container>
      <Modal
        data={film}
        setVisibleModal={setVisibleModal}
        visibleModal={visibleModal}
      />
    </SectionContainer>
  );
}
