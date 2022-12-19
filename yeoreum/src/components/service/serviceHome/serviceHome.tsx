import styled from '@emotion/styled';
import Menu from './menu';
import Qna from './qna';

export default function ServiceHome() {
  return (
    <Container>
      <BannerWrap></BannerWrap>
      <Menu />
      <SloganWrap>
        <p>yeoreum</p>
      </SloganWrap>
      <Qna />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  color: #333333;
`;

const BannerWrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #573308;
`;

const SloganWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f6f7;
  width: 100%;
  height: 430px;
  & > p {
    // p style
  }
`;
