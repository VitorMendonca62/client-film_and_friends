import styled from 'styled-components';
import { colors } from '../styles/colors';
import { useRef } from 'react';

const Button = styled.button`
  background-color: ${colors.white};
  color: ${colors.black};
  font-weight: 700;
  border: none;
  cursor: pointer;
  border-radius: 40px;
  padding: 4px 36px;
  margin: 8px 0 16px;
  &:hover {
    background-color: ${colors.light_grey};
  }
  &:disabled {
    opacity: 0.5;
  }
`;

export default function ButtonForms({ title, buttonIsDisabled }) {
  const buttonRef = useRef(null);

  if (!!buttonRef.current) {
    buttonRef.current.disabled = buttonIsDisabled;
  }

  return (
    <Button ref={buttonRef} type="submit">
      {title}
    </Button>
  );
}
