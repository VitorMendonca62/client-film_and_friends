import Cookies from 'js-cookie';
import * as Yup from 'yup';
import { UserContext } from '../../context/user';

import { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

import { singIn } from '../../services/api';

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
  const [buttonIsDisabled, setButtonIsDisabled] = useState(false);
  const { register, handleSubmit } = useForm();
  const { user, updateUser } = useContext(UserContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (Cookies.get('USER_TOKEN')) {
      navigate('/');
    }
  }, []);
    
  const userSchema = Yup.object().shape({
    email: Yup.string()
      .email('E-mail inválido.')
      .required('O e-mail é obrigatório.'),
    password: Yup.string()
      .min(6, 'A senha deve ter pelo menos 6 caracteres.')
      .required('A senha é obrigatória.'),
  });

  const singInUser = async (dataForm) => {
    try {
      userSchema.validateSync(dataForm, { abortEarly: false });

      const { data } = await singIn(dataForm);

      setMessege(data.msg);
      setVisibleMessege(true);
      setButtonIsDisabled(true);

      if (!data.error) {
        Cookies.set('USER_ID', data.id, { expires: 7 });
        Cookies.set('USER_TOKEN', data.token, { expires: 7 });

        updateUser(data);

        setTimeout(() => {
          navigate('/');
        }, 3500);
      }
      if (data.error) {
        setTimeout(() => {
          setButtonIsDisabled(false);
          setVisibleMessege(false);
        }, 3500);
      }
    } catch (err) {
      handleError({ type: err.inner[0].path, msg: err.inner[0].errors[0] });
    }
  };

  const handleError = (erro) => {
    const element = document.querySelector(`form input[name=${erro.type}]`);
    element.style.borderColor = '#f00';
    const brotherElement = element.nextElementSibling;
    brotherElement.innerText = erro.msg;
  };

  return (
    <Main>
      <Container>
        <Title>Login</Title>
        <form onSubmit={handleSubmit(singInUser)}>
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

          <ButtonForms buttonIsDisabled={buttonIsDisabled} title="Entrar" />
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
