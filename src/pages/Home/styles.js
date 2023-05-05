import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const Main = styled.main`
  color: ${colors.light_grey};
  background-color: ${colors.black};
  position: relative;
  top: 62px;
`;

export const Container = styled.div``;

export const Welcome = styled.div`
  background-image: url(${(props) => props.background});
  height: 680px;

  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 16px;
`;

export const MainTitle = styled.h2`
  font-size: 3.2rem;
`;

export const Logo = styled.span`
  color: ${colors.white};

  span {
    color: ${colors.green};
  }
`;

export const MainDescription = styled.p`
  font-size: 1.6rem;
  color: ${colors.grey};
  max-width: 450px;
  line-height: 20px;
  text-align: center;
`;
