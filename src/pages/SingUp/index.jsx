import * as Yup from 'yup';

import { singUp } from '../../services/api';

import { useState } from 'react';
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


  const createUser = async (dataForm) => {
    // const isErrorInInputs = verifyInputs(dataForm);
    try {
      const { response, data } = await singUp(dataForm);

      setVisibleMessege(true);

      // if (data.error) {
      //   setMessege(data.msg);
      //   setTimeout(() => {
      //     setVisibleMessege(false);
      //   }, 3000);
      //   return '';
      // }

      setMessege(data.msg);
      setButtonIsDisabled(true);

      setTimeout(() => {
        setVisibleMessege(false);
        navigate('/login');
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
            name="confirmPassword"
            type="password"
            placeholder="Confirmar senha"
            register={register}
          />

          <ButtonForms ButtonIsDisabled={buttonIsDisabled} title="Cadastrar" />
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
