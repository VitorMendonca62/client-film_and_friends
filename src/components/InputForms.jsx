import { useState } from 'react';

import styled from 'styled-components';
import { colors } from '../styles/colors';

const Label = styled.label`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
`;
const Title = styled.p`
  color: ${colors.light_grey};
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 6px;
`;
const Input = styled.input`
  width: 100%;
  padding: 6px 10px 7px;
  margin-bottom: 16px;
  border-radius: 40px;
  border: 1px solid transparent;
  outline: none;
  color: ${colors.black};
  font-size: 1.2rem;

  &::placeholder {
    color: ${colors.light_grey};
    font-size: 1.2rem;
  }
`;

export default function InputForms({
  title,
  placeholder,
  type,
  name,
  register,
}) {
  const [messege, setMessege] = useState('');
  const [visibleMessege, setVisibleMessege] = useState(false);
  const [password, setPassword] = useState('');

  const handleBlur = (e) => {
    const element = e.target;
    const name = e.target.name;
    const value = e.target.value;

    const regexEmail =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    // console.log(type, name, !value);
    const addMessege = (slug) => {
      element.style.borderColor = '#f00';
      console.log(slug);
      setMessege(slug);
      setVisibleMessege(true);
    };

    switch (name) {
      case 'name':
        if (value.length <= 4) {
          addMessege('Nome curto demais!');
          return '';
        }
        element.style.borderColor = 'transparent';
        break;

      case 'email':
        const emailisValid = regexEmail.test(value);
        if (!emailisValid) {
          addMessege('Email inválido!');
          break;
        }

        if (!value) {
          addMessege('Email é obrigatório !');
          break;
        }
        element.style.borderColor = 'transparent';
        break;

      case 'confirmPassword':
        console.log(value, password, value !== password);
        if (value !== password) {
          addMessege('A confirmação da senha está diferente da senha!');
          break;
        }
        element.style.borderColor = 'transparent';

        break;

      case 'password':
        console.log(password, value);
        setPassword(() => value);
        if (!value) {
          addMessege('Senha é obrigatória!');
          break;
        }
        if (value.length < 6) {
          addMessege('Senha é curta demais!');
          break;
        }
        element.style.borderColor = 'transparent';
    }
  };

  return (
    <Label>
      <Title>{title}</Title>
      <Input
        onKeyUp={handleBlur}
        type={type}
        name={name}
        placeholder={placeholder}
        required
        {...register(name.toString())}
      />
    </Label>
  );
}
