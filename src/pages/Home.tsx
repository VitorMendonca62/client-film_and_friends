import { useEffect, useState } from 'react';

import Modal from '../components/Modal';
import Room from '../components/layout/Room';

export default function Home() {
  const [visibleModal, setVisibleModal] = useState(false);
  const [contentModal, setContentModal] = useState<[ISerie | IMovie, IRoom]>();
  const [refetch, setRefetch] = useState(false);
  const [canRefetch, setCanRefetch] = useState(false);

  useEffect(() => {
    const html = document.querySelector('html');
    const headerElement = document.querySelector('header');
    if (visibleModal) {
      headerElement?.classList.add('bg-lightBlack');
      headerElement?.classList.remove('-translate-y-full');
      html?.classList.add('overflow-hidden');
    } else {
      html?.classList.remove('overflow-hidden');
    }
  }, [visibleModal]);

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
        <Modal setVisibleModal={setVisibleModal} contentModal={contentModal} />
      )}
    </main>
  );
}
