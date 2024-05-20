import { useQuery } from 'react-query';
import { getPageRooms } from '../../services/api/room';
import { useState } from 'react';
import Card from '../Card';

interface IPropsRoom {
  title: "Recentes" | "Filmes" | "Séries"
  setContentModal: (media: [ISerie | IMovie, IRoom]) => void;
  setVisibleModal: (visibleModal: boolean) => void;
}

export default function Room(props: IPropsRoom) {
  const [medias, setMedias] = useState<TypeDataRoom[]>([]);
  const { title,setContentModal, setVisibleModal } = props;

  const { isLoading, data, error } = useQuery({
    queryKey: `getRooms${title}`,
    queryFn: async () => {
      try {
        const { data } = await getPageRooms(1, 'movie');
        setMedias(data);
      } catch (err) {
        console.log(err);
      }
    },
  });

  return (
    <div className="my-10">
      <h3 className="text-xl font-bold pb-3">{title}</h3>
      <div className="flex flex-col gap-y-8">
        <div className="grid grid-cols-[repeat(auto-fill,16rem)] grid-rows-2 justify-center gap-x-12 gap-y-12">
          {(medias as TypeDataRoom[]).map((media: TypeDataRoom) => {
            return (
              <Card
                media={media}
                key={media[1].id}
                setContentModal={setContentModal}
                setVisibleModal={setVisibleModal}
              />
            );
          })}
        </div>
      </div>
      <div className="flex justify-center gap-x-5 mt-8 text-sm">
        <span>{'<'}</span>

        <span className="hover:underline cursor-pointer hover:text-lightBlack">
          1
        </span>
        <span className="hover:underline cursor-pointer hover:text-lightBlack">
          2
        </span>
        <span className="hover:underline cursor-pointer hover:text-lightBlack">
          3
        </span>
        <span className="hover:underline cursor-pointer hover:text-lightBlack">
          ...
        </span>
        <span className="hover:underline cursor-pointer hover:text-lightBlack">
          6
        </span>
        <span>{'>'}</span>
      </div>
    </div>
  );
}
