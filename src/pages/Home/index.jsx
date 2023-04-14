import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { showUser } from '../../services/api';

import Section from '../../components/layout/Section';

import Image from '../../assets/imgs/main_image.svg';

import {
  Main,
  Container,
  Welcome,
  MainTitle,
  Logo,
  MainDescription,
} from './styles';

export default function Home() {
  const sessionUser = sessionStorage.getItem('user');

  // const [user, setUser] = useState(
  //   sessionUser
  //     ? JSON.parse(sessionUser)
  //     : {
  //         id: null,
  //         email: null,
  //         name: 'Visitante',
  //         role: 'user',
  //       }
  // );

  const location = useLocation();

  // useEffect(() => {
  //   async function fetchUser(id) {
  //     const userData = await showUser(id);
  //     setUser(userData);

  //   }

  //   if (location.state) {
  //     fetchUser(location.state.id);
  //   }
  // }, []);

  return (
    <Main>
      <Container>
        <Welcome background={Image}>
          <MainTitle>
            Seja bem vindo ao{' '}
            <Logo>
              Movie<span>And</span>Friends
            </Logo>
          </MainTitle>
          <MainDescription>
            Assista filmes e compartilhe emoções com seus amigos no
            MovieAndFriends - O lugar perfeito para conectar e desfrutar!
          </MainDescription>
        </Welcome>
        <Section />
      </Container>
    </Main>
  );
}
