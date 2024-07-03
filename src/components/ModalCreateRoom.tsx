import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from './Button';

import { IoCloseCircleOutline } from 'react-icons/io5';
import { useForm } from 'react-hook-form';
import { basicMediaStoreInputSchema } from '../schemas/room';
import { zodResolver } from '@hookform/resolvers/zod';
import { clearInputs, handleErrors } from '../utils/forms';
import InputForms from './InputForms';
import Select from './Select';
import { createRoom } from '../services/api/room';

interface IPropsModal {
  setVisibleModalCreateRoom: (visibleModalCreateRoom: boolean) => void;
  isLogged: boolean;
}

export default function ModalCreateRoom(props: IPropsModal) {

  const { isLogged, setVisibleModalCreateRoom } = props;
  const [buttonIsDisabled, setButtonIsDisabled] = useState(false);
  const [message, setMessage] = useState('');
  const [visibleMessage, setVisibleMessage] = useState(false);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm<IRoomInput>({
    resolver: zodResolver(basicMediaStoreInputSchema),
  });

  if (Object.keys(errors).length > 0) {
    handleErrors(errors);
  } else {
    clearInputs();
  }
  const createRoomInSubmit = async (dataform: IRoomInput) => {
    const { msg, error, data } = await createRoom(dataform);
    const id = data.id;
    setButtonIsDisabled(true);
    setMessage(msg);
    setVisibleMessage(true);

    if (error) {
      setTimeout(() => {
        setButtonIsDisabled(false);
        setVisibleMessage(false);
        setMessage('msg');
      }, 3500);
      return;
    }


    setTimeout(() => navigate(`/sala/${id}`), 3500);
  };

  return (
    <section className=" fixed top-0 translate-y-16 flex items-center justify-center h-screen w-screen ">
      <div
        className={`fixed text-white right-0 ${visibleMessage ? '-translate-x-2' : 'translate-x-[16rem]'
          } top-20 bg-darkGreen p-8 rounded-3xl transition linear duration-500 z-50 `}
      >
        {message}
      </div>
      <div
        className="bg-[rgb(255,255,255,0.1)] h-full w-full absolute backdrop-blur-sm z-40"
        onClick={() => setVisibleModalCreateRoom(false)}
      ></div>
      {isLogged ? (
        <div className="-translate-y-10 text-white z-50 animate-showModal">
          <header className="bg-black flex flex-end items-center px-6 py-2 rounded-t-2xl">
            <IoCloseCircleOutline
              className="w-8 h-8 cursor-pointer hover:text-darkGreen"
              onClick={() => setVisibleModalCreateRoom(false)}
            />
          </header>
          <main className="bg-lightBlack px-6 p-6 rounded-b-2xl">
            <form onSubmit={handleSubmit(createRoomInSubmit)}>
              <InputForms
                title={'ID'}
                nameInput={'id'}
                type={'text'}
                placeholder={'Escolha um ID de filme'}
                register={register}
              />
              <Select
                nameInput="type"
                placeholder="Selecione um tipo"
                title="Tipo"
                control={control}
                setValue={setValue}
                options={[
                  { value: 'movie', label: 'Filme' },
                  { value: 'tv', label: 'Série' },
                ]}
              />
              <Select
                nameInput="APIName"
                placeholder="Escolha o nome de uma API"
                title="Nome da API"
                control={control}
                setValue={setValue}
                options={[
                  { value: 'imdb', label: 'IMDB' },
                  { value: 'tmdb', label: 'TMDB' },
                ]}
              />

              <div className="flex justify-center pt-7">
                <Button
                  title="Entrar"
                  isBigger={false}
                  type="submit"
                  buttonIsDisabled={buttonIsDisabled}
                />
              </div>
            </form>
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
