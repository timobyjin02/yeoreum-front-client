import styled from '@emotion/styled';
import Head from 'next/head';
import Previews from '../components/Home/Previews';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Yeoreum</title>
        <meta name="description" content="Yeoreum" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BannerWrapper>
        <MainBanner src="/banner.svg" />
        <MainTitle>너의 여름은</MainTitle>
        <MainDesc>여름과 청춘, 아직 만난 적 없는 너를 찾고 있어</MainDesc>
      </BannerWrapper>
      <Previews />
      <SubBannerWrapper>
        <SubBannerBox>
          <TextWrapper>
            <SubTitle>"여름의 한가운데 우리가 있었다"</SubTitle>
            <SubDesc>-스물다섯 스물하나</SubDesc>
          </TextWrapper>
        </SubBannerBox>
      </SubBannerWrapper>
    </div>
  );
}

const MainBanner = styled.img`
  width: 100%;
  /* display: flex;

height: 608px;
margin: 40px auto;

width: 975px;

position: relative;

@media (max-width: 975px) {
  width: 100%;
  height: 100%;
  margin: 20px auto;
  flex-direction: column;
} */
`;

const BannerWrapper = styled.div`
  position: relative;
`;

const MainTitle = styled.span`
  position: absolute;
  top: 45%;
  left: 29%;
  transform: translate(-50%, -50%);
  font-size: 50px;
  color: #ffffff;
  font-weight: 700;
`;

const MainDesc = styled.span`
  position: absolute;
  top: 55%;
  left: 33.3%;
  transform: translate(-50%, -50%);
  font-size: 20px;
  color: #ffffff;
`;

const SubBannerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 470px;
  margin: 40px auto;
  margin-bottom: 0;

  background-color: ${({ theme }) => theme.palette.disable};
  @media (max-width: 975px) {
    width: 100%;
    height: 100%;
    margin: 20px auto;
    flex-direction: column;
  }
`;

const SubBannerBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 975px;
  height: 250px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.palette.background.light};
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const SubTitle = styled.span`
  margin-bottom: 7px;
  font-size: 24px;
  font-weight: 600;
  color: ${({ theme }) => theme.palette.font.headline};
`;

const SubDesc = styled.span`
  display: flex;
  justify-content: flex-end;
  font-size: 12px;
  color: ${({ theme }) => theme.palette.font.headline};
`;
