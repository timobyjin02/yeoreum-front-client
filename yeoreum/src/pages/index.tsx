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
        <MainText>너의 여름은</MainText>
        <SubText>여름과 청춘, 아직 만난 적 없는 너를 찾고 있어</SubText>
      </BannerWrapper>
      <Previews />
      <AA />
    </div>
  );
}

const MainBanner = styled.img`
  width: 100%;
`;

const BannerWrapper = styled.div`
  position: relative;
`;

const MainText = styled.span`
  position: absolute;
  top: 45%;
  left: 29%;
  transform: translate(-50%, -50%);
  font-size: 50px;
  color: #ffffff;
  font-weight: 700;
`;

const SubText = styled.span`
  position: absolute;
  top: 55%;
  left: 33.3%;
  transform: translate(-50%, -50%);
  font-size: 20px;
  color: #ffffff;
`;

const AA = styled.div`
  background-color: skyblue;

  width: 100%;
  padding: 0;
  height: 550px;
`;
