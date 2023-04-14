import ImageCard from '../../../assets/imgs/card_image.svg';
import { RiGroupLine } from 'react-icons/ri';
import { TfiStar } from 'react-icons/tfi';

import {
  SectionContainer,
  Container,
  Title,
  Rooms,
  Card,
  Image,
  CardTitle,
  Genres,
  Genre,
  Infos,
  InfosParagraph,
} from './styles';

export default function Section() {
  return (
    <SectionContainer>
      <Container>
        <Title>Salas</Title>
        <Rooms>
          <Card>
            <Image src={ImageCard} alt="" />
            <CardTitle>Até o último homem</CardTitle>
            <Genres>
              <Genre>Guerra</Genre>
              <Genre>2017</Genre>
            </Genres>
            <Infos>
              <InfosParagraph>174 min</InfosParagraph>
              <InfosParagraph>
                <RiGroupLine />
                1/10
              </InfosParagraph>
              <InfosParagraph>
                <TfiStar /> 5,0
              </InfosParagraph>
            </Infos>
          </Card>
        </Rooms>
      </Container>
    </SectionContainer>
  );
}
