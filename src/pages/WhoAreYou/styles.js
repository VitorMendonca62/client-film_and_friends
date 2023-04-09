import styled from 'styled-components';
export const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  gap: 48px;
`;
export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const Title = styled.h1`
  font-size: 3.2rem;
`;
export const Description = styled.p`
  font-size: 1.6rem;
  max-width: 65%;
  text-align: center;
`;
export const Label = styled.h2`
  font-size: 2rem;
`;

export const Forms = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;
export const InputName = styled.input`
  height: 20px;
  width: 200px;
  padding: 3px 8px;
`;
export const Button = styled.button`
  width: 100%;
`;
