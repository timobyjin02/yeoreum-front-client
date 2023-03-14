import styled from '@emotion/styled';
import Image from 'next/image';

const Banner = () => (
  <Container>
    <ImageWrap>
      <Image src="/logo.png" width={110} height={32} alt="logo" />
    </ImageWrap>
  </Container>
);

const ImageWrap = styled.div``;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  border: 1px solid #dbdbdb;
  border-right: 0;
  & > img {
    width: 100%;
    height: auto;
  }
  @media (max-width: 339px) {
    display: none;
  }
`;

export default Banner;
