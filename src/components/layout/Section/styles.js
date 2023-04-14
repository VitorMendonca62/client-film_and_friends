import styled from 'styled-components';
import { colors } from '../../../styles/colors';

export const SectionContainer = styled.section`
  padding-left: 32px;
  color: ${colors.white};
  margin-top: 56px;
`;
export const Container = styled.div``;

export const Title = styled.h3`
  font-size: 2.4rem;
  margin-bottom: 16px;
`;

export const Rooms = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 350px);
  grid-column-gap: 16px;
  grid-row-gap: 32px;
`;

export const Card = styled.div`
  position: relative;
  width: 300px;
  height: 350px;
  border-radius: 40px;
  background-color: ${colors.dark_grey};
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  transition: all 0.4s ease;
  cursor: pointer;

  &:hover {
    scale: 1.1;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 210px;
  position: relative;
  transform: translateY(-13px);
`;

export const CardTitle = styled.h4`
  font-size: 2.2rem;
  transform: translateY(-10px);
`;

export const Genres = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  margin-top: 20px;
`;

export const Genre = styled.div`
  background-color: ${colors.white};
  color: ${colors.black};
  font-weight: 700;
  font-size: 1.3rem;
  padding: 6px 12px;
  text-align: center;
  border-radius: 56px;
`;

export const Infos = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  align-items: center;
  position: absolute;
  bottom: 10px;
  color: ${colors.light_grey};
  font-size: 1.4rem;
`;

export const InfosParagraph = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3px;

  svg {
    width: 20px;
    height: 20px;
  }
`;
