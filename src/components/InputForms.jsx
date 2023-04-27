import { useState } from 'react';

import styled from 'styled-components';
import { colors } from '../styles/colors';

const Label = styled.label`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  margin-bottom: 24px;
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
const Error = styled.span`
  position: absolute;
  color: 
  rgb(255, 102, 102)
  ;
  transform: translate(4px,32px);
`;
export default function InputForms({
  title,
  placeholder,
  type,
  name,
  register,
}) {
  return (
    <Label>
      <Title>{title}</Title>
      <Input
        type={type}
        name={name}
        placeholder={placeholder}
        
        {...register(name.toString())}
      />
      <Error></Error>
    </Label>
  );
}
