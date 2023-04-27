import { useParams } from 'react-router-dom';
import ImageProfilePng from '../../assets/imgs/image-profile.png';
import ImageFavoritePng from '../../assets/imgs/card_image.svg';
import styled from 'styled-components';
import { colors } from '../../styles/colors';
import { useState } from 'react';
import Modal from './Modal';

const Main = styled.main`
  background-color: ${colors.black};
  padding: 24px;
  display: flex;
  justify-content: center;
  min-height: 90vh;
`;
const Container = styled.div`
  background-color: ${colors.dark_grey};
  border-radius: 20px;
  width: 80%;
  height: 70%;
  padding: 24px 48px;
`;
const ContainerUp = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Infos = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;
const ImageProfile = styled.img``;
const Info = styled.div`
  display: flex;
  gap: 48px;
  flex-direction: column;
`;
const Name = styled.h2`
  color: ${colors.white};
  font-size: 2.4rem;
`;
const Username = styled.p`
  color: ${colors.light_grey};
  margin: 4px;
  font-size: 1.4rem;
`;
const Group = styled.div`
  display: flex;
  gap: 32px;
  color: ${colors.light_grey};
  font-size: 1.4rem;
`;
const Item = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  & p:first-child {
    margin-bottom: 6px;
  }
`;
const ButtonsActions = styled.div``;
const Button = styled.button`
  background-color: ${colors.white};
  color: ${colors.black};
  font-weight: 700;
  border: none;
  cursor: pointer;
  border-radius: 40px;
  padding: 4px 36px;
  margin: 8px 0 16px;
  &:hover {
    background-color: ${colors.light_grey};
  }
`;
const AboutMe = styled.div`
  margin: 32px 0;

  p {
    color: ${colors.light_grey};
    font-size: 1.4rem;
    max-width: 600px;
  }
`;
const TitleContainerDown = styled.h3`
  color: ${colors.white};
  font-size: 1.6rem;
  margin-bottom: 7px;
`;
const Favorites = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 250px);
  grid-gap: 48px;
`;
const Favorite = styled.div``;
const ImageFavorite = styled.img`
  width: 250px;
`;
const TitleFavorite = styled.h4`
  text-align: center;
  color: ${colors.white};
  font-size: 1.6rem;
  margin-top: 16px;
`;

export default function Profile() {
  const [visibleModal, setVisibleModal] = useState(false);
  const [dataModal, setDataModal] = useState({});
  const { username } = useParams();

  return (
    <Main>
      <Container>
        <ContainerUp>
          <Infos>
            <ImageProfile src={ImageProfilePng} />
            <Info>
              <div>
                <Name>Vitor Hugo</Name>
                <Username>@vitormendonca62</Username>
              </div>
              <Group>
                <Item>
                  <p>0</p>
                  <p>Seguindo</p>
                </Item>
                <Item>
                  <p>0</p>
                  <p>Seguidores</p>
                </Item>
                <Item>
                  <p>0</p>
                  <p>Amigos</p>
                </Item>
              </Group>
            </Info>
          </Infos>
          <ButtonsActions>
            <Button
              onClick={() => {
                setVisibleModal(true);
                setDataModal({
                  title: 'Editar',
                  type: "edit",
                  button: true,
                  titleButton: 'Salvar',
                  direcButton: '/salvar',
                });
              }}
            >
              Editar perfil
            </Button>
          </ButtonsActions>
        </ContainerUp>
        <AboutMe>
          <TitleContainerDown>Sobre mim</TitleContainerDown>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
            tempora eum dignissimos molestiae. Atque suscipit ea voluptas
            commodi autem voluptatum, consequatur eligendi ad modi nemo aut,
            quibusdam velit porro. Aliquid?
          </p>
        </AboutMe>
        <TitleContainerDown>Favoritos</TitleContainerDown>
        <Favorites>
          <Favorite>
            <ImageFavorite src={ImageFavoritePng} />
            <TitleFavorite>Até o ultimo homem</TitleFavorite>
          </Favorite>
          <Favorite>
            <ImageFavorite src={ImageFavoritePng} />
            <TitleFavorite>Até o ultimo homem</TitleFavorite>
          </Favorite>
          <Favorite>
            <ImageFavorite src={ImageFavoritePng} />
            <TitleFavorite>Até o ultimo homem</TitleFavorite>
          </Favorite>
          <Favorite>
            <ImageFavorite src={ImageFavoritePng} />
            <TitleFavorite>Até o ultimo homem</TitleFavorite>
          </Favorite>
        </Favorites>
      </Container>
      {visibleModal && (
        <Modal setVisibleModal={setVisibleModal} visibleModal={visibleModal} data={dataModal}/>
      )}
    </Main>
  );
}
