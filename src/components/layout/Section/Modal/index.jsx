import { UserContext } from '../../../../context/user';
import { useContext, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  AiOutlineCloseCircle,
  AiFillStar,
  AiOutlineStar,
} from 'react-icons/ai';
import { HiPlay } from 'react-icons/hi';

import {
  Container,
  Blur,
  ModalContainer,
  Header,
  Main,
  Infos,
  AboutFilm,
  Title,
  Genres,
  Genre,
  Synopsis,
  Rating,
  RatingInfo,
  Room,
  RoomTitle,
  RoomInfos,
  Info,
  Value,
  Participants,
  Button,
} from './styles';

import Foto from '../../../../assets/imgs/my-footo.png';

export default function Modal({ data, setVisibleModal, visibleModal }) {
  const { user } = useContext(UserContext);

  const isLogged = user.auth;
  const navigate = useNavigate();

  const {
    title,
    release,
    genre,
    duration,
    synopsis,
    rating,
    id,
    participant,
    imdbID,
  } = data;

  const handleClick = () => {
    navigate(`/filme/${id}`, { state: { imdbID } });
  };

  return (
    <>
      {visibleModal && (
        <Container>
          <Blur onClick={() => setVisibleModal(false)}></Blur>
          <ModalContainer>
            <Header>
              <AiOutlineCloseCircle onClick={() => setVisibleModal(false)} />
            </Header>
            <Main>
              <Infos>
                <AboutFilm>
                  <Title>{title}</Title>
                  <Genres>
                    <Genre>{release}</Genre> |<Genre>{genre}</Genre> |
                    <Genre>{duration} min</Genre>
                  </Genres>
                </AboutFilm>
                <Rating>
                  <RatingInfo>
                    <AiFillStar />
                    {Number(rating).toFixed(1)}
                  </RatingInfo>
                  <RatingInfo>
                    <AiOutlineStar />
                    Avaliar
                  </RatingInfo>
                </Rating>
              </Infos>
              <Synopsis>{synopsis}</Synopsis>
              <iframe
                width="600"
                height="300"
                src="https://www.youtube.com/embed/4s4UCxCv_OE"
                title="YouTube video player"
              ></iframe>
              <Room>
                <RoomTitle>Sala</RoomTitle>
                <RoomInfos>
                  <Info>
                    ID: <Value>{id}</Value>
                  </Info>
                  <Info>
                    Participantes: <Value>{participant.length} / 10</Value>
                  </Info>
                  <Participants>
                    Integrantes:
                    <div>
                      <img src={Foto} alt="" srcset="" />
                      <img src={Foto} alt="" srcset="" />
                      <img src={Foto} alt="" srcset="" />
                      <img src={Foto} alt="" srcset="" />
                      <img src={Foto} alt="" srcset="" />
                      <img src={Foto} alt="" srcset="" />
                      <img src={Foto} alt="" srcset="" />
                      <img src={Foto} alt="" srcset="" />
                      <img src={Foto} alt="" srcset="" />
                      <img src={Foto} alt="" srcset="" />
                    </div>
                  </Participants>
                </RoomInfos>
              </Room>
              <Button onClick={handleClick}>
                <HiPlay />
              </Button>
            </Main>
          </ModalContainer>
        </Container>
      )}
    </>
  );
}
