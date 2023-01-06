import styled from '@emotion/styled';
import Image from 'next/image';

const Social = () => (
  <Container>
    <ImageWrap>
      <Image src="/login/kakao.png" width={36} height={36} alt="kakao" />
      <Image src="/login/naver.png" width={36} height={36} alt="kakao" />
      <Image src="/login/google.png" width={35} height={35} alt="kakao" />
    </ImageWrap>
  </Container>
);

const Container = styled.div`
  display: flex;
  align-items: flex-end;
  height: 22%;
`;
const ImageWrap = styled.div`
  & > img {
    margin-right: 0.7em;
  }
  @media (max-width: 769px) {
    & > img {
      width: 2em;
      height: 2em;
    }
  }
`;

export default Social;
