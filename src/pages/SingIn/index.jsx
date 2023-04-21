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

export default function SingIn() {
  const [messege, setMessege] = useState('');
  const [visibleMessege, setVisibleMessege] = useState(false);
  const { register, handleSubmit } = useForm();

  const navigate = useNavigate();

  const loginUser = async (dataForm) => {};

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
