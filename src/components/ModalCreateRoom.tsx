import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

import { IoCloseCircleOutline } from 'react-icons/io5';


interface IPropsModal {
  setVisibleModalCreateRoom: (visibleModalCreateRoom: boolean) => void;
  isLogged: boolean;
}

export default function ModalCreateRoom(props: IPropsModal) {
  const {isLogged, setVisibleModalCreateRoom} = props

  return (
    <section className=" fixed top-0 translate-y-16 flex items-center justify-center h-screen w-screen ">
      <div
        className="bg-[rgb(255,255,255,0.1)] h-full w-full absolute backdrop-blur-sm z-40"
        onClick={() => setVisibleModalCreateRoom(false)}
      ></div>
      {isLogged ? (
        <div className="-translate-y-10 text-white z-50 animate-showModal">
          <header className="bg-black flex justify-between items-center px-6 py-2 rounded-t-2xl">
            <p className="text-sm cursor-pointer hover:text-darkGreen hover:underline">
              Favoritar
            </p>
            <IoCloseCircleOutline
              className="w-8 h-8 cursor-pointer hover:text-darkGreen"
              onClick={() => setVisibleModalCreateRoom(false)}
            />
          </header>
          <main className="bg-lightBlack px-6 p-6 rounded-b-2xl">
            
          </main>
        </div>
      ) : (
        <div className="-translate-y-10 text-white z-50 rounded-3xl animate-showModal">
          <header className="bg-black flex justify-end items-center px-6 py-2 rounded-t-2xl">
            <IoCloseCircleOutline
              className="w-8 h-8 cursor-pointer hover:text-darkGreen"
              onClick={() => setVisibleModalCreateRoom(false)}
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
