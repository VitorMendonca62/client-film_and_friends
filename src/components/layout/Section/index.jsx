import { useState } from 'react';
import CardRoom from '../../CardRoom';
import Modal from './Modal';
import { SectionContainer, Container, Title, Rooms } from './styles';
export default function Section() {
  const [film, setFilm] = useState({});
  const [visibleModal, setVisibleModal] = useState(false);

  const filmRoom = [
    {
      title: 'Até o último homem',
      release: 2017,
      genre: 'Guerra',
      duration: 174,
      synopsis:
        'Em Até o Último Homem, durante a Segunda Guerra Mundial, o médico do exército Desmond T. Doss (Andrew Garfield) se recusa a pegar em uma arma e matar pessoas, porém, durante a Batalha de Okinawa ele trabalha na ala médica e salva mais de 75 homens, sendo condecorado. O que faz de Doss o primeiro Opositor Consciente da história norte-americana a r',
      participants: 1,
      rating: 5,
    },
  ];

  return (
    <SectionContainer>
      <Container>
        <Title>Salas</Title>
        <Rooms>
          <CardRoom
            film={filmRoom[0]}
            setFilm={setFilm}
            setVisibleModal={setVisibleModal}
          />
        </Rooms>
      </Container>
      <Modal
        data={filmRoom[0]}
        setVisibleModal={setVisibleModal}
        visibleModal={visibleModal}
      />
    </SectionContainer>
  );
}
