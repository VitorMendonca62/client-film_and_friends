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
