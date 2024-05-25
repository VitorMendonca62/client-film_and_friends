import { useContext, useEffect, useState } from 'react';

import Modal from '../components/Modal';
import Room from '../components/layout/Room';
import { UserContext } from '../context/user';
import { GoPlus } from 'react-icons/go';
import ModalCreateRoom from '../components/ModalCreateRoom';

export default function Home() {
  const [visibleModal, setVisibleModal] = useState(false);
  const [contentModal, setContentModal] = useState<[ISerie | IMovie, IRoom]>();
  const [visibleModalCreateRoom, setVisibleModalCreateRoom] = useState(false);
  const [refetch, setRefetch] = useState(false);
  const [canRefetch, setCanRefetch] = useState(false);

  const context = useContext<IUserContext | null>(UserContext);
  const user = context?.user;

  const isLogged = !!user?.isLogged;

  useEffect(() => {
    const html = document.querySelector('html');
    const headerElement = document.querySelector('header');
    if (visibleModal || visibleModalCreateRoom) {
      headerElement?.classList.add('bg-lightBlack');
      headerElement?.classList.remove('-translate-y-full');
      html?.classList.add('overflow-hidden');
    } else {
      html?.classList.remove('overflow-hidden');
    }
  }, [visibleModal, visibleModalCreateRoom]);

  return (
    <main className="bg-black">
      <div
        className={`fixed text-white -top-16  transition duration-[1s] linear ${
          canRefetch ? 'translate-y-36' : 'translate-y-0'
        }   translate-x-[calc(50vw-50%)] cursor-pointer p-3 bg-darkGreen rounded-3xl border border-transparent hover:border-white `}
        onClick={() => setRefetch(true)}
      >
        Há novas salas, clique aqui para atualizar!
      </div>
      <div
        className="fixed bottom-7 right-7 bg-darkGreen p-4 rounded-full cursor-pointer border border-transparent hover:border-white"
        onClick={() => setVisibleModalCreateRoom(true)}
      >
        <GoPlus className="text-white w-6 h-6" />
      </div>
      <section className="bg-main bg-center h-screen bg-no-repeat bg-cover z-0 flex justify-center items-center flex-col text-[#AAAAAA] animate-visible ">
        <h1 className="font-bold text-3xl animate-visible duration-[2.5s]">
          Seja bem-vindo ao <br />
          <span className="text-white ">
            Movies<span className="text-darkGreen">And</span>Friends.
          </span>
        </h1>
        <p className="text-center mt-1 text-sm animate-visible duration-[2.75s]">
          Aqui você pode assistir filmes <br />
          enquanto conversa com seus amgigos.
        </p>
      </section>
      <section className="bg-black text-white px-7 pt-5">
        <Room
          title="Recentes"
          setContentModal={setContentModal}
          setVisibleModal={setVisibleModal}
          setCanRefetch={setCanRefetch}
          setRefetch={setRefetch}
          refetch={refetch}
        />
        {/* <Room title="Salas" />
        <Room title="Séries" />
        <Room title="Filmes" /> */}
      </section>
      {visibleModal && contentModal && (
        <Modal
          setVisibleModal={setVisibleModal}
          contentModal={contentModal}
          isLogged={isLogged}
        />
      )}
      {visibleModalCreateRoom && (
        <ModalCreateRoom
          isLogged={isLogged}
          setVisibleModalCreateRoom={setVisibleModalCreateRoom}
        />
      )}
    </main>
  );
}
