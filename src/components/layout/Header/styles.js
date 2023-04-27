import styled from 'styled-components';

import { colors } from '../../../styles/colors';

export const HeaderContainer = styled.header`
  background-color: ${colors.dark_grey};
  padding: 20px 28px;
  color: ${colors.white};
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.h1`
  font-size: 2rem;

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export const Mark = styled.span`
  color: ${colors.green};
`;

export const HeaderRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.4rem;
  gap: 32px;
  position: relative;
`;

export const Nav = styled.nav`
  color: ${colors.light_grey};
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
`;

export const Item = styled.li`
  a {
    color: inherit;
    text-decoration: none;
  }
  a:hover {
    color: ${colors.green};
  }
`;

export const Welcome = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3px;
  cursor: pointer;

  svg:nth-child(1) {
    width: 22px;
    height: 22px;
  }

  &:hover {
    color: ${colors.green};
    span {
      color: ${colors.light_green};
    }
  }
`;

export const ParagraphWelcome = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
`;

export const Menu = styled.div`
  position: absolute;
  right: 20px;
  transform: translateY(74px);
`;
export const MenuNav = styled.nav``;

export const MenuList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  a {
    color: inherit;
    text-decoration: none;
    width: 100%;
  }
  a:hover {
    color: ${colors.green};
  }
`;
export const MenuItem = styled.li`
  background-color: ${colors.dark_grey};

  width: 100%;
  padding: 12px 24px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  &:hover {
    background-color: ${colors.light_grey};
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;
