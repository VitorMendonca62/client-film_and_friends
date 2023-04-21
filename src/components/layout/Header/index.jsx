import { useState } from 'react';

import { Link } from 'react-router-dom';
import { AiOutlineUser, AiOutlineDown } from 'react-icons/ai';
import { FaUserAlt, FaUserPlus } from 'react-icons/fa';

import {
  HeaderContainer,
  Container,
  Logo,
  Mark,
  HeaderRight,
  Nav,
  List,
  Item,
  Welcome,
  ParagraphWelcome,
  Menu,
  MenuNav,
  MenuList,
  MenuItem,
} from './styles';

export default function Header() {
  const [visibleMenu, setVisibleMenu] = useState(false);
  const sessionUser = sessionStorage.getItem('user');
  const isLogged = !!sessionUser;

  const [user, setUser] = useState(
    sessionUser
      ? JSON.parse(sessionUser)
      : {
          id: null,
          email: null,
          name: 'Visitante',
          role: 'user',
        }
  );
        
  const items = [
    {
      title: 'Recentes',
      direct: '/recentes',
    },
    {
      title: 'Salas',
      direct: '/salas',
    },
    {
      title: 'Séries',
      direct: '/series',
    },
    {
      title: 'Filmes',
      direct: '/filmes',
    },
  ];
  const name = user.name.split(' ')[0];

  return (
    <HeaderContainer>
      <Container>
        <Logo>
          Movie
          <Mark>And</Mark>
          Friends
        </Logo>
        <HeaderRight>
          <Nav>
            <List>
              {items.map((item, index) => (
                <Item key={index}>
                  <Link to={item.direct}>{item.title}</Link>
                </Item>
              ))}
            </List>
          </Nav>
          <Welcome onClick={() => setVisibleMenu(!visibleMenu)}>
            <AiOutlineUser />
            <ParagraphWelcome>
              Olá, <Mark>{name}</Mark> <AiOutlineDown />
            </ParagraphWelcome>
          </Welcome>
          {visibleMenu && (
            <Menu>
              <MenuNav>
                <MenuList>
                  {isLogged ? (
                    ''
                  ) : (
                    <>
                      <Link to="/login">
                        <MenuItem>
                          <FaUserAlt />
                          Login
                        </MenuItem>
                      </Link>
                      <Link to="/cadastro">
                        <MenuItem>
                          <FaUserPlus /> Cadastro
                        </MenuItem>
                      </Link>
                    </>
                  )}
                </MenuList>
              </MenuNav>
            </Menu>
          )}
        </HeaderRight>
      </Container>
    </HeaderContainer>
  );
}
