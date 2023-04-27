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

