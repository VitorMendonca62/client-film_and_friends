import axios from 'axios';
import Cookies from 'js-cookie';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

import { showUser } from '../../services/api';

import InputForms from '../../components/InputForms';
import ButtonForms from '../../components/ButtonForms';
import { GrFacebook } from 'react-icons/gr';
import { FaGoogle } from 'react-icons/fa';

import {
  Main,
  Container,
  Title,
  ForgotPassword,
  NoAccount,
  LoginToo,
  IconsLoginToo,
  Messege,
} from './styles';

export default function Login() {
  const [messege, setMessege] = useState('');
  const [visibleMessege, setVisibleMessege] = useState(false);
  const { register, handleSubmit } = useForm();

  const navigate = useNavigate();

  const loginUser = async (dataForm) => {
    const API_URL = 'http://localhost:4004';

    try {
      const response = await axios.post(API_URL + '/auth/login', dataForm);
      const data = await response.data;

      setMessege(data.msg);
      setVisibleMessege(true);

      const user = await showUser(data.id);
      sessionStorage.setItem('user', JSON.stringify(user));
      Cookies.set('token', data.token);

      setTimeout(() => {
        navigate('/', user);
        setVisibleMessege(false);
      }, 3000);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Main>
      <Container>
        <Title>Login</Title>
        <form onSubmit={handleSubmit(loginUser)}>
          <InputForms
            title="Email"
            name="email"
            type="email"
            placeholder="exemplo@examplo.com"
            register={register}
          />
          <InputForms
            title="Senha"
            name="password"
            type="password"
            placeholder="Senha"
            register={register}
          />
          <ForgotPassword>
            <Link>Esqueceu a senha?</Link>
          </ForgotPassword>

          <ButtonForms title="Entrar" />
        </form>

        <NoAccount>
          Não tem uma conta?
          <Link to="/cadastro">Cadastre-se</Link>
        </NoAccount>

        <LoginToo>Faça login também com: </LoginToo>
        <IconsLoginToo>
          <Link>
            <FaGoogle />
          </Link>
          <Link>
            <GrFacebook />
          </Link>
        </IconsLoginToo>
        {visibleMessege && <Messege>{messege}</Messege>}
      </Container>
    </Main>
  );
}
