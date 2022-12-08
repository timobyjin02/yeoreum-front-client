import styled from '@emotion/styled';
import Menu from './menu';
import Qna from './qna';

export default function ServiceHome() {
  return (
    <Container>
      <BannerWrap></BannerWrap>
      <SloganWrap>
        <p>yeoreum</p>
      </SloganWrap>
      <Menu />
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
  border: solid 1px black;
`;

const BannerWrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #573308;
`;

const SloganWrap = styled.div`
  height: 430px;
  display: flex;
  justify-content: center;
  align-items: center;
  & > p {
    // p style
  }
`;
