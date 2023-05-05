import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const Main = styled.main`
  background-color: ${colors.black};
  color: ${colors.white};
  height: calc(100vh - 62px);

  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 62px;
`;
export const Container = styled.div`
  width: 350px;
  background-color: ${colors.dark_grey};
  border-radius: 20px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  padding: 30px 16px;

  form {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;
export const Title = styled.h2`
  text-align: center;
  font-size: 2.8rem;
  margin-bottom: 16px;
`;

export const ForgotPassword = styled.span`
  transform: translate(-85px, -12px);
  text-align: left;
  a {
    text-decoration: none;
    color: inherit;
  }
  a:hover {
    color: ${colors.green};
  }
`;
export const NoAccount = styled.p`
  font-size: 1.4rem;
  display: flex;
  gap: 4px;
  a {
    color: ${colors.light_grey};
  }
  a:hover {
    color: ${colors.green};
  }
`;
export const LoginToo = styled.h3`
  font-size: 2rem;
  margin: 24px 0;
`;
export const IconsLoginToo = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;

  a {
    text-decoration: none;
    color: inherit;
  }
  a:hover {
    color: ${colors.green};
  }

  svg {
    width: 25px;
    height: 25px;
  }
`;

export const Messege = styled.div`
  padding: 18px 0;
  width: 80%;
  font-size: 1.2rem;
  text-align: center;
  font-weight: 700;
  transform: translateX(6px);
  background-color: ${colors.green};
  margin-top: 16px;
  border-radius: 40px;
`;
