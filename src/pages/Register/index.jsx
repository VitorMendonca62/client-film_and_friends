import axios from 'axios';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

import InputForms from '../../components/InputForms';
import ButtonForms from '../../components/ButtonForms';
import { Main, Container, Title, NoAccount, Messege } from '../Login/styles';

export default function Login() {
  const [messege, setMessege] = useState('');
  const [visibleMessege, setVisibleMessege] = useState(false);
  const [buttonActive, setButtonActive] = useState(false);
  const { register, handleSubmit } = useForm();

  const navigate = useNavigate();

  const createUser = async (dataForm) => {
    const API_URL = 'http://localhost:4004';

    try {
      const response = await axios.post(API_URL + '/auth/users', dataForm);
      const data = await response.data;

      setMessege(data.msg);
      setVisibleMessege(true);
      setButtonActive(true);

      setTimeout(() => {
        navigate('/login');
        setVisibleMessege(false);
      }, 3000);
    } catch (error) {
      console.log(error);
    }
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
            name="password"
            type="password"
            placeholder="Confirmar senha"
            register={register}
          />

          <ButtonForms buttonActive={buttonActive} title="Cadastrar" />
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
