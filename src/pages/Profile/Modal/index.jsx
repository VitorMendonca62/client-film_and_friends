import { AiOutlineCloseCircle, AiFillCamera } from 'react-icons/ai';
import {
  Container,
  Blur,
  ModalContainer,
  Header,
  Title,
  Button,
} from './styles';
import { useNavigate } from 'react-router-dom';

export default function Modal({ setVisibleModal, visibleModal, data }) {
  const navigate = useNavigate();

  // const Edit = ()

  return (
    <>
      {visibleModal && (
        <Container>
          <Blur onClick={() => setVisibleModal(false)}></Blur>
          <ModalContainer>
            <Header>
              <AiOutlineCloseCircle onClick={() => setVisibleModal(false)} />
              <Title>{data.title}</Title>
              {data.button && (
                <Button onClick={() => navigate('/')}>Salvar</Button>
              )}
            </Header>
          </ModalContainer>
        </Container>
      )}
    </>
  );
}
