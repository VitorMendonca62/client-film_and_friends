import { useEffect, useState } from 'react';
import Card from '../components/Card';
import Modal from '../components/Modal';

export default function Home() {
  const [visibleModal, setVisibleModal] = useState(false);
  useEffect(() => {
    const body = document.querySelector('body');
    const headerElement = document.querySelector('header');
    if (visibleModal) {
      headerElement?.classList.add('bg-lightBlack');
      headerElement?.classList.remove('-translate-y-full');
      body?.classList.add('overflow-hidden');
    } else {
      body?.classList.remove('overflow-hidden');
    }
  }, [visibleModal]);

  return (
    <main>
      <section className="bg-main h-screen bg-no-repeat bg-cover z-0 flex justify-center items-center flex-col text-[#AAAAAA]">
        <h1
          className="font-bold text-3xl"
          onClick={() => {
            setVisibleModal(false);
            console.log('a');
          }}
        >
          Seja bem-vindo ao <br />
          <span className="text-white">
            Movies<span className="text-darkGreen">And</span>Friends.
          </span>
        </h1>
        <p className="text-center mt-1 text-sm">
          Aqui você pode assistir filmes <br />
          enquanto conversa com seus amgigos.
        </p>
      </section>
      <section className="bg-black text-white px-7 pt-5">
        <div className="my-10">
          <h3 className="text-xl font-bold pb-3">Recentes</h3>
          <div className="flex flex-col gap-y-8">
            <div
              className="grid grid-cols-[repeat(auto-fill,16rem)] grid-rows-2 justify-center gap-x-12 gap-y-12"
              onClick={() => setVisibleModal(true)}
            >
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </div>
          <div className="flex justify-center gap-x-5 mt-8 text-sm">
            {'<'}
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
            {'>'}
          </div>
        </div>
        <div className="my-10">
          <h3 className="text-xl font-bold pb-3">Salas</h3>
        </div>
        <div className="my-10">
          <h3 className="text-xl font-bold pb-3">Séries</h3>
        </div>
        <div className="mt-10">
          <h3 className="text-xl font-bold pb-3">Filmes</h3>
        </div>
      </section>
      {visibleModal && <Modal setVisibleModal={setVisibleModal} />}
    </main>
  );
}
