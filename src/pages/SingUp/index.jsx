import Cookies from 'js-cookie';
import * as Yup from 'yup';

import { singUp } from '../../services/api';

import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

import InputForms from '../../components/InputForms';
import ButtonForms from '../../components/ButtonForms';
import { Main, Container, Title, NoAccount, Messege } from '../SingIn/styles';

export default function SingUp() {
  const [messege, setMessege] = useState('');
  const [visibleMessege, setVisibleMessege] = useState(false);
  const [buttonIsDisabled, setButtonIsDisabled] = useState(false);
  const { register, handleSubmit } = useForm();

  const navigate = useNavigate();

  useEffect(() => {
    if (Cookies.get('USER_TOKEN')) {
      navigate('/');
    }
  }, []);

  const userSchema = Yup.object().shape({
    name: Yup.string()
      .required('Nome é obrigatório')
      .max(50, 'Nome muito longo')
      .min(8, 'Nome muito cuito'),
    username: Yup.string()
      .required('Apelido é obrigatório')
      .min(3, 'Apelido muito curto')
      .max(20, 'Nome muito longo'),
    email: Yup.string()
      .email('E-mail inválido.')
      .required('O e-mail é obrigatório.'),
    password: Yup.string()
      .min(6, 'A senha deve ter pelo menos 6 caracteres.')
      .required('A senha é obrigatória.'),
    confirmPassword: Yup.string()
      .oneOf(
        [Yup.ref('password'), null],
        'A confirmação da senha está diferente da senha!'
      )
      .required('A confirmação da senha é obrigatória.'),
  });

  const createUser = async (dataForm) => {
    cleanInputs();

    try {
      userSchema.validateSync(dataForm, { abortEarly: false });

      const { data } = await singUp(dataForm);

      setMessege(data.msg);
      setVisibleMessege(true);

      if (!data.error) {
        setButtonIsDisabled(true);
        setTimeout(() => {
          navigate('/login');
        }, 3500);
      }
    } catch (err) {
      handleError({ type: err.inner[0].path, msg: err.inner[0].errors[0] });
    }
  };

  const cleanInputs = () => {
    [...document.querySelectorAll(`form input`)].forEach((e) => {
      e.style.borderColor = 'transparent';
      e.nextElementSibling.innerText = '';
    });
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
        <Title>Cadastro</Title>
        <form onSubmit={handleSubmit(createUser)}>
          <InputForms
            title="Nome completo"
            name="name"
            type="text"
            placeholder="Nome completo"
            register={register}
          />
          <InputForms
            title="Apelido"
            name="username"
            type="text"
            placeholder="Apelido"
            register={register}
          />
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
          <InputForms
            title="Confirmar senha"
            name="confirmPassword"
            type="password"
            placeholder="Confirmar senha"
            register={register}
          />

          <ButtonForms buttonIsDisabled={buttonIsDisabled} title="Cadastrar" />
        </form>

        <NoAccount>
          Já tem uma conta?
          <Link to="/login">Faça login</Link>
        </NoAccount>
        {visibleMessege && <Messege>{messege}</Messege>}
      </Container>
    </Main>
  );
}
