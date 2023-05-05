import styled, { keyframes } from 'styled-components';
import { colors } from '../../../../styles/colors';

const showModal = keyframes`
    from {
    width: 0;
  }

  to {
    width: 950px;
  }
`;

export const Container = styled.div`
`;
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
  animation: ${showModal} .5s linear;
  transition: .5s;
  margin-top: 31px;
`;

export const Header = styled.header`
  background-color: ${colors.black};
  width: 100%;
  padding: 8px 0;

  svg {
    margin-left: 16px;
    width: 20px;
    height: 20px;
  }

  svg:hover {
    fill: ${colors.light_grey};
    cursor: pointer;
  }
`;
export const Main = styled.main`
  background-color: ${colors.dark_grey};
  width: 100%;
  padding: 16px 0;

  iframe {
    margin-left: 16px;
  }
`;
export const Infos = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 16px;
`;
export const AboutFilm = styled.div``;
export const Title = styled.h5`
  font-size: 2.4rem;
`;
export const Genres = styled.span`
  display: flex;
  justify-content: left;
  align-items: center;
  gap: 8px;
  color: ${colors.light_grey};
  margin-top: 4px;
  font-size: 1.2rem;
`;
export const Genre = styled.p``;
export const Synopsis = styled.p`
  max-width: 450px;
  margin: 16px;
  font-size: 1.4rem;
  color: ${colors.light_grey};
  font-weight: bold;
  line-height: 16px;
`;
export const Rating = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  font-size: 1.4rem;
  color: ${colors.green};

  svg {
    color: ${colors.light_green};
    width: 20px;
    height: 20px;
  }
`;
export const RatingInfo = styled.p`
  display: flex;
  align-items: center;
  gap: 2px;
`;
export const Room = styled.div`
  margin: 16px 16px;
`;
export const RoomTitle = styled.h6`
  font-size: 2rem;
  margin-bottom: 8px;
`;
export const RoomInfos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
export const Info = styled.p`
  display: flex;
  color: ${colors.light_grey};
  font-size: 1.4rem;
  gap: 4px;
`;
export const Value = styled.span`
  color: ${colors.white};
`;
export const Participants = styled.div`
  color: ${colors.light_grey};
  font-size: 1.4rem;
  display: flex;
  flex-direction: column;
  gap: 8px;

  div {
    display: grid;
    grid-template-columns: repeat(5, 25px);
    column-gap: 8px;
    row-gap: 8px;
  }
`;

export const Button = styled.button`
  position: relative;
  left: 50%;
  transform: translate(-50%);
  background-color: ${colors.white};
  color: ${colors.black};
  font-weight: 700;
  border: none;
  cursor: pointer;
  border-radius: 40px;
  padding: 8px 120px;
  margin: 8px 0 16px;
  &:hover {
    background-color: ${colors.light_grey};
  }

  svg {
    width: 35px;
    height: 35px;
    color: ${colors.green};
  }
`;
