import styled, { keyframes } from 'styled-components';
import { colors } from '../../../styles/colors';

const showModal = keyframes`
    from {
    width: 0;
  }

  to {
    width: 950px;
  }
`;

export const Container = styled.div``;
export const Blur = styled.div`
  position: fixed;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(4px);
  width: 100vw;
  height: 100vh;
  z-index: 3;
  top: 0;
  left: 0;
`;

export const ModalContainer = styled.section`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 4;
  width: 950px;
  box-shadow: 10px 10px 30px 0px rgba(0, 0, 0, 0.5);
  animation: ${showModal} 0.5s linear;
  transition: 0.5s;
`;

export const Header = styled.header`
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  background-color: ${colors.black};
  width: 100%;
  padding: 8px 0;

  svg {
    fill: ${colors.white};
    margin-left: 16px;
    width: 20px;
    height: 20px;
  }

  svg:hover {
    fill: ${colors.light_grey};
    cursor: pointer;
  }
`;
export const Title = styled.h5`
  width: 100%;
  text-align: center;
  color: ${colors.white};
  font-size: 1.8rem;
`;

export const Button = styled.button`
  background-color: ${colors.white};
  color: ${colors.black};
  font-weight: 700;
  border: none;
  cursor: pointer;
  border-radius: 40px;
  margin-right: 16px;

  &:hover {
    background-color: ${colors.light_grey};
  }
`;

export const Main = styled.main`
  background-color: ${colors.dark_grey};
  width: 100%;
  padding: 16px 0;
`;
