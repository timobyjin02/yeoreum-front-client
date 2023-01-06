import styled from '@emotion/styled';
import Image from 'next/image';

const Header = () => (
  <Container>
    <ImageWrap>
      <Image src="/vercel.svg" width={40} height={40} alt="logo" />
    </ImageWrap>
    <Title>여름 입장</Title>
    <Subtitle>여름을 여름답게 보내기 위해</Subtitle>
  </Container>
);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 40%;
  padding-bottom: 20px;
`;
const ImageWrap = styled.div`
  margin: 0 auto auto 8px;
`;

const Title = styled.h2`
  font-size: 1.125em;
`;

const Subtitle = styled.p`
  font-size: 0.7em;
  margin: 0.5em;
`;

export default Header;
