import { FaStar } from 'react-icons/fa';
import { MdOutlineGroup } from 'react-icons/md';
import { defineTypeMedia } from '../utils/media';


interface IPropsCard {
  media: [ISerie | IMovie, IRoom];
  setContentModal: (media: [ISerie | IMovie, IRoom]) => void;
  setVisibleModal: (visibleModal: boolean) => void;
}

export default function Card(props: IPropsCard) {
  const { media, setContentModal, setVisibleModal } = props;
  const posterPath = `url('${media[0].posterPath}')`;
  const typeMedia = defineTypeMedia(media[0]);

  const handleClick = () => {
    setVisibleModal(true);
    setContentModal(media);
  };

  return (
    <div
      className="w-72 bg-lightBlack pb-2 rounded-3xl transition ease-in-out duration-300 hover:scale-105 cursor-pointer"
      onClick={handleClick}
    >
      <div
        className={`w-full h-80 rounded-t-3xl overflow-hidden`}
        style={{ backgroundImage: posterPath }}
      ></div>
      <h4 className="font-bold mt-4 text-center">{media[0].title}</h4>
      <div className="flex justify-evenly text-black font-bold text-xs mt-4">
        <p className="bg-white p-1 flex items-center rounded-2xl">
          {media[0].genres[0]}
        </p>
        <p className="bg-white p-1 flex items-center rounded-2xl">
          {media[0].releaseDate.slice(0, 4)}
        </p>
      </div>
      <div className="flex justify-between px-4 mt-5 text-xs">
        <p className="w-14 text-center">
          {typeMedia
            ? typeMedia === 'movie'
              ? `${(media[0] as IMovie).duration} min`
              : (media[0] as ISerie).seasons
            : 'null'}
        </p>
        <p className="w-14 flex items-center justify-center gap-1">
          <MdOutlineGroup className="w-5 h-5 text-darkGreen" />
          {media[1].participants.length}/10
        </p>
        <p className="w-14 flex items-center justify-center gap-1">
          <FaStar className="w-4 h-4 text-darkGreen" />{' '}
          {Number(media[0].rating).toFixed(1)}
        </p>
      </div>
    </div>
  );
}
