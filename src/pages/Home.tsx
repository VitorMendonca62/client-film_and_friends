import { useEffect, useState } from 'react';

import Modal from '../components/Modal';
import Room from '../components/layout/Room';

export default function Home() {
  const [visibleModal, setVisibleModal] = useState(false);
  const [contentModal, setContentModal] = useState<[ISerie | IMovie, IRoom]>();

  useEffect(() => {
    const body = document.querySelector('body');
    const headerElement = document.querySelector('header');
    if (visibleModal) {
      headerElement?.classList.add('bg-lightBlack');
      headerElement?.classList.remove('-translate-y-full');
      document.querySelector('html')?.classList.add('overflow-hidden');
    } else {
      document.querySelector('html')?.classList.remove('overflow-hidden');
    }
  }, [visibleModal]);

  return (
    <main className="bg-black">
      <section className="bg-main h-screen bg-no-repeat bg-cover z-0 flex justify-center items-center flex-col text-[#AAAAAA] animate-visible ">
        <h1
          className="font-bold text-3xl animate-visible duration-[2.5s]"
          onClick={() => {
            setVisibleModal(false);
          }}
        >
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
        <Room title="Recentes" setContentModal={setContentModal} setVisibleModal={setVisibleModal}/>
        {/* <Room title="Salas" />
        <Room title="Séries" />
        <Room title="Filmes" /> */}
      </section>
      {visibleModal && (
        <Modal setVisibleModal={setVisibleModal} contentModal={contentModal} />
      )}
    </main>
  );
}
