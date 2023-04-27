import ImageCard from '../../assets/imgs/card_image.svg';
import { RiGroupLine } from 'react-icons/ri';
import { AiFillStar } from 'react-icons/ai';
import {
  Card,
  Image,
  CardTitle,
  Genres,
  Genre,
  Infos,
  InfosParagraph,
} from './styles';

export default function CardRoom({ film, setVisibleModal, setFilm }) {
  return (
    <Card
      onClick={() => {
        setVisibleModal(true);
        setFilm(film);
      }}
    >
      <Image src={ImageCard} alt="" />
      <CardTitle>{film.title}</CardTitle>
      <Genres>
        <Genre>{film.release}</Genre>
        <Genre>{film.genre}</Genre>
      </Genres>
      <Infos>
        <InfosParagraph>{film.duration} min</InfosParagraph>
        <InfosParagraph>
          <RiGroupLine />
          {film.participants}/10
        </InfosParagraph>
        <InfosParagraph>
          <AiFillStar /> {film.rating},0
        </InfosParagraph>
      </Infos>
    </Card>
  );
}
