import { UserContext } from '../../../context/user';
import { useContext, useState } from 'react';

import { Link } from 'react-router-dom';
import { AiOutlineUser, AiOutlineDown } from 'react-icons/ai';
import { FaUserAlt, FaUserPlus } from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';

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
  const { user, updateUser, logoutUser } = useContext(UserContext);
  const isLogged = user.auth;

  console.log(user)
  const firstName = user.username;

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

  return (
    <HeaderContainer>
      <Container>
        <Logo>
          <Link to="/">
            Movie
            <Mark>And</Mark>
            Friends
          </Link>
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
              Olá, <Mark>{firstName}</Mark> <AiOutlineDown />
            </ParagraphWelcome>
          </Welcome>
          {visibleMenu && (
            <Menu>
              <MenuNav>
                <MenuList>
                  {isLogged ? (
                    <>
                      <Link to="/meu-perfil">
                        <MenuItem>
                          <FaUserAlt />
                          Meu perfil
                        </MenuItem>
                      </Link>
                      <Link onClick={logoutUser}>
                        <MenuItem>
                          <FiLogOut />
                          Sair
                        </MenuItem>
                      </Link>
                    </>
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
