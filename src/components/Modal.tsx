import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { IoCloseCircleOutline } from 'react-icons/io5';
import { FaRegStar } from 'react-icons/fa6';
import { FaStar } from 'react-icons/fa6';
import Button from './Button';
import { defineTypeMedia } from '../utils/media';

interface IPropsModal {
  setVisibleModal: (visibleModal: boolean) => void;
  contentModal: [ISerie | IMovie, IRoom];
  isLogged: boolean;
}

export default function Modal(props: IPropsModal) {
  const [visibleRating, setVisibleRating] = useState(false);
  const [rating, setRating] = useState<null | number>(null);
  const [stars] = useState<JSX.Element[]>([]);
  const [enablesStars, setEnablesStars] = useState(rating || 0);

  const { setVisibleModal, contentModal, isLogged } = props;

  const typeMedia = defineTypeMedia(contentModal[0]);

  let description = contentModal[0].description;

  if (description.length > 450) {
    description = description.slice(0, 450) + '...';
  }

  const navigate = useNavigate();


  const enterInRoom = () => {
    navigate(`/sala/${contentModal[1].id}`);
  };

  const createStars = () => {
    stars.length = 0;

    for (let i = 1; i <= enablesStars; i++) {
      stars.push(
        <FaStar
          className="text-xl cursor-pointer text-darkGreen"
          aria-value={i}
          onMouseOver={() => setEnablesStars(i)}
          onClick={() => {
            setRating(i);
            setEnablesStars(i);
          }}
        />,
      );
    }
    for (let j = enablesStars + 1; j <= 5; j++) {
      stars.push(
        <FaRegStar
          className="text-xl cursor-pointer  text-darkGreen"
          aria-value={j}
          onMouseOver={() => setEnablesStars(j)}
          onClick={() => {
            setRating(j);
            setEnablesStars(j);
          }}
        />,
      );
    }
  };

  const handleStars = () => {
    if (rating === null) {
      setEnablesStars(0);
    } else {
      setEnablesStars(rating);
    }
  };

  createStars();

  return (
    <section className=" fixed top-0 translate-y-16 flex items-center justify-center h-screen w-screen ">
      <div
        className="bg-[rgb(255,255,255,0.1)] h-full w-full absolute backdrop-blur-sm z-40"
        onClick={() => setVisibleModal(false)}
      ></div>
      {isLogged ? (
        <div className="-translate-y-10 text-white z-50 animate-showModal">
          <header className="bg-black flex justify-between items-center px-6 py-2 rounded-t-2xl">
            <p className="text-sm cursor-pointer hover:text-darkGreen hover:underline">
              Favoritar
            </p>
            <IoCloseCircleOutline
              className="w-8 h-8 cursor-pointer hover:text-darkGreen"
              onClick={() => setVisibleModal(false)}
            />
          </header>
          <main className="bg-lightBlack px-6 p-6 rounded-b-2xl">
            <h3 className="font-bold text-2xl">{contentModal[0].title}</h3>
            <div className="flex w-full justify-between text-fonts items-center">
              <p className="text-sm">
                {contentModal[0].releaseDate.slice(0, 4)} |{' '}
                {contentModal[0].genres[0]} |{' '}
                {typeMedia
                  ? typeMedia === 'movie'
                    ? `${(contentModal[0] as IMovie).duration} min`
                    : (contentModal[0] as ISerie).seasons
                  : 'null'}
              </p>
              <div className="flex gap-x-20 mr-12 pl-96">
                <p>
                  <span className="text-white pr-1">Avaliação:</span>{' '}
                  {Number(contentModal[0].rating).toFixed(1)} / 5.0
                </p>
                <div
                  className="flex flex-col items-center"
                  onMouseOut={handleStars}
                >
                  <span
                    className="hover:text-darkGreen hover:underline cursor-pointer"
                    onClick={() => setVisibleRating(!visibleRating)}
                  >
                    Avaliar
                  </span>
                  {visibleRating && (
                    <div className="absolute flex gap-x-1.5 bg-black rounded-3xl p-2.5 mt-6">
                      {stars}
                    </div>
                  )}
                </div>
              </div>
            </div>
            <p className="my-4 text-fonts w-full max-w-lg">{description}</p>
            <div>
              <h3 className="font-bold text-2xl pb-2">Sala</h3>
              <p>
                Dono:{' '}
                <span className="text-fonts">{contentModal[1].author}</span>
              </p>
              <p>
                ID: <span className="text-fonts">{contentModal[1].id}</span>
              </p>
              <p>
                ID API:{' '}
                <span className="text-fonts">{contentModal[0].idAPI}</span>
              </p>
              <p>
                Participantes:{' '}
                <span className="text-fonts">
                  {contentModal[1].participants.length}
                </span>
              </p>
            </div>
            <div>
              <h3 className="font-bold text-2xl pb-2 mt-3">Trailer</h3>
              <iframe
                width="500"
                height="250"
                src={contentModal[0].urlTrailer?.replace('watch?v=', 'embed/')}
                title="YouTube video player"
              ></iframe>{' '}
              <div className="flex justify-center mt-5" onClick={enterInRoom}>
                <Button title="Entrar" isBigger={true} type="button" />
              </div>
            </div>
          </main>
        </div>
      ) : (
        <div className="-translate-y-10 text-white z-50 rounded-3xl animate-showModal">
          <header className="bg-black flex justify-end items-center px-6 py-2 rounded-t-2xl">
            <IoCloseCircleOutline
              className="w-8 h-8 cursor-pointer hover:text-darkGreen"
              onClick={() => setVisibleModal(false)}
            />
          </header>
          <main className="bg-lightBlack px-6 p-6 rounded-b-2xl flex items-center flex-col">
            <h3 className="font-bold text-2xl">Você não está logado!</h3>
            <p className="my-4 text-fonts w-full max-w-lg">
              Faça login ou cadastra-se para assistir todos os filmes e séries
              junto com seus amigos
            </p>
            <Link to={'/singup'} className="w-full flex justify-center mt-5">
              <Button title="Cadastrar" isBigger={true} type="button" />
            </Link>
            <p className="my-4 text-fonts w-full max-w-lg text-center">OU</p>
            <Link to={'/singin'} className="w-full flex justify-center">
              <Button title="Entrar" isBigger={true} type="button" />
            </Link>
          </main>
        </div>
      )}
    </section>
  );
}
