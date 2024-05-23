import { useQuery } from 'react-query';
import { getPageRooms } from '../../services/api/room';
import Card from '../Card';
import { AiOutlineLoading } from 'react-icons/ai';
import { useEffect, useState } from 'react';

interface IPropsRoom {
  title: 'Recentes' | 'Filmes' | 'Séries';

  setContentModal: (media: [ISerie | IMovie, IRoom]) => void;
  setVisibleModal: (visibleModal: boolean) => void;
  setRefetch: (refetch: boolean) => void;
  setCanRefetch: (canRefetch: boolean) => void;
  refetch: boolean;
}

export default function Room(props: IPropsRoom) {
  const [medias, setMedias] = useState<TypeDataRoom[]>();
  const {
    title,
    setContentModal,
    setVisibleModal,
    refetch: isRefetch,
    setRefetch,
    setCanRefetch,
  } = props;


  // COLOCAR ENABLE COMO ISLOGGED OU !MEDIAS
  const { isLoading, refetch } = useQuery({
    queryKey: `getRooms${title}`,
    queryFn: async () => {
      try {
        const data = await getPageRooms(1, 'movie');

        if (JSON.stringify(data) !== JSON.stringify(medias)) {
          setCanRefetch(true);
        }
        if (!medias || isRefetch) {
          setCanRefetch(false);
          setRefetch(false);
          setMedias(data);
        }
      } catch (err) {
        console.log(err);
      }
    },
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchInterval: 1000 * 10,
  });

  useEffect(() => {
    refetch();
  }, [isRefetch]);
  return (
    <div className="my-10 ">
      <h3 className="text-xl font-bold pb-3">{title}</h3>
      {isLoading ? (
        <div className="w-full h-64 flex items-center justify-center ">
          <AiOutlineLoading className="animate-spin w-20 h-20" />
        </div>
      ) : medias && medias.length > 0 ? (
        <>
          <div className="flex flex-col gap-y-8">
            <div
              className={`grid grid-cols-[repeat(auto-fill,16rem)] grid-rows-${
                medias.length > 5 ? '2' : '1'
              } justify-center gap-x-12 gap-y-12`}
            >
              {medias.map((media: TypeDataRoom) => {
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
          {/* FAZER ISSO DE PAGINAS AQUI */}
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
        </>
      ) : (
        <div className="w-full h-64 flex items-center justify-center ">
          <p>Não há {title.toLowerCase()}</p>
        </div>
      )}
    </div>
  );
}
