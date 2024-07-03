import { Link, useNavigate } from 'react-router-dom';
import InputForms from '../components/InputForms';
import Button from '../components/Button';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { userLoginSchema } from '../schemas/user';
import { useContext, useEffect, useState } from 'react';
import { clearInputs, handleErrors } from '../utils/forms';
import { singIn } from '../services/api/user';
import Cookies from 'js-cookie';
import { UserContext } from '../context/user';
import { jwtDecode } from 'jwt-decode';
import useUser from '../hooks/useUser';

export default function SingIn() {
  const [buttonIsDisabled, setButtonIsDisabled] = useState(false);
  const [message, setMessage] = useState('');
  const [visibleMessage, setVisibleMessage] = useState(false);

  const navigate = useNavigate();
  const { updateUser } = useUser()

  useEffect(() => {
    document.querySelector('html')?.classList.add('overflow-x-hidden');
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserBasicInputcSchema>({
    resolver: zodResolver(userLoginSchema),
  });

  if (Object.keys(errors).length > 0) {
    handleErrors(errors);
  } else {
    clearInputs();
  }

  const singInUser = async (dataForm: IUserLoginSchema) => {
    const { msg, error, token } = await singIn(dataForm);
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

    setTimeout(() => {
      Cookies.set('USER_TOKEN', `token ${token}`, {
        expires: 7,
        secure: true,
        sameSite: 'Strict',
      });

      const tokenDecoded = jwtDecode(token) as JwtPayload;
      const { username } = tokenDecoded;
      if (updateUser)
        updateUser({ auth: true, username, isLogged: true, token });
      navigate('/home');
    }, 3500);
  };
  return (
    <main className="pt-16 bg-black h-screen flex items-center justify-center overflow-hidden">
      <div
        className={`absolute text-white right-0 ${visibleMessage ? '-translate-x-2' : 'translate-x-[16rem]'
          } top-24 bg-darkGreen p-8 rounded-3xl transition linear duration-500 `}
      >
        {message}
      </div>
      <section className="-translate-y-16 bg-lightBlack px-12 py-3 flex flex-col items-center rounded-3xl">
        <h3 className="font-bold text-white text-xl">Login</h3>
        <form onSubmit={handleSubmit(singInUser)}>
          <InputForms
            title={'Email'}
            nameInput={'email'}
            type={'email'}
            placeholder={'exemple@exemple.com'}
            register={register}
          />
          <InputForms
            title={'Senha'}
            nameInput={'password'}
            type={'password'}
            placeholder={'password'}
            register={register}
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
        <Link
          to=""
          className="text-fonts w-full align-center text-[0.7rem] hover:text-darkGreen hover:underline -translate-y-14"
        >
          Esqueceu a senha?
        </Link>
        <Link
          to="/singup"
          className="text-center leading-tight text-white hover:text-darkGreen hover:underline text-xs mt-1"
        >
          Não tem uma conta? <br /> Cadastra-se
        </Link>
        <h4 className="font-bold text-white text-lg mt-4">
          Faça login também com:
        </h4>
      </section>
    </main>
  );
}
