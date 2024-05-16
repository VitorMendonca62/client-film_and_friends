import { Link, useNavigate } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';

import InputForms from '../components/InputForms';
import Button from '../components/Button';
import { useForm, FieldErrors } from 'react-hook-form';
import { userPostSchema } from '../schemas/user';
import { useState } from 'react';
import { singUP } from '../services/api';
import { clearInputs, handleErrors } from '../utils/forms';

export default function SingUp() {
  const navigate = useNavigate();

  const [buttonIsDisabled, setButtonIsDisabled] = useState(false);
  const [message, setMessage] = useState('awdawdawdawdawdwa');
  const [visibleMessage, setVisibleMessage] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserBasicInputcSchema>({
    resolver: zodResolver(userPostSchema),
  });

  if (Object.keys(errors).length > 0) {
    handleErrors(errors);
  } else {
    clearInputs();
  }

  const createUser = async (dataForm: IUserBasicInputcSchema) => {
    const { msg, error } = await singUP(dataForm);
    setButtonIsDisabled(true);
    setMessage(msg);
    setVisibleMessage(true);

    if (error) {
      setTimeout(() => {
        setButtonIsDisabled(false);
        setVisibleMessage(false);
        setMessage("msg");
      }, 3500);
      return;
    }

    setTimeout(() => navigate('/singin'), 3500);
  };

  return (
    <main className="pt-16 bg-black h-screen flex items-center justify-center overflow-x-hidden">
      <div
        className={`absolute text-white right-0 ${
          visibleMessage ? '-translate-x-2' : 'translate-x-[16rem]'
        } top-24 bg-darkGreen p-8 rounded-3xl transition linear duration-500 `}
      >
        {message}
      </div>
      <section className="-translate-y-18 bg-lightBlack px-12 py-3 flex flex-col items-center rounded-3xl">
        <h3 className="font-bold text-white text-xl">Cadastro</h3>
        <form onSubmit={handleSubmit(createUser)}>
          <InputForms
            title={'Nome'}
            type={'text'}
            nameInput={'name'}
            placeholder={'Vitor Mendonça'}
            register={register}
          />
          <InputForms
            title={'Apelido'}
            type={'text'}
            nameInput={'username'}
            placeholder={'VitorMendonca62'}
            register={register}
          />
          <InputForms
            title={'Email'}
            type={'email'}
            nameInput={'email'}
            placeholder={'exemple@exemple.com'}
            register={register}
          />
          <InputForms
            title={'Senha'}
            type={'password'}
            nameInput={'password'}
            placeholder={'password'}
            register={register}
          />
          <InputForms
            title={'Confirmar enha'}
            type={'password'}
            nameInput={'confirmPassword'}
            placeholder={'password'}
            register={register}
          />
          <div className="flex justify-center pt-7">
            <Button
              title="Cadastrar"
              isBigger={false}
              type="submit"
              buttonIsDisabled={buttonIsDisabled}
            />
          </div>
        </form>
        <Link
          to="/singin"
          className="text-center leading-tight text-white hover:text-darkGreen hover:underline text-xs mt-6"
        >
          Já tem uma conta? <br /> Faça login
        </Link>
      </section>
    </main>
  );
}
