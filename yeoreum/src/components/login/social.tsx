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
  height: 15%;
`;
const ImageWrap = styled.div`
  & > img {
    margin: 4px;
  }
`;
const Line = styled.p`
  margin-bottom: 1em;
  color: #dbdbdb;
  font-size: 0.7em;
  font-weight: 100;
`;

export default Social;
