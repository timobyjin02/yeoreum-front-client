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
      <AA />
      <Previews />
      <AA />
    </div>
  );
}

const AA = styled.div`
  background-color: skyblue;

  width: 100%;
  padding: 0;
  height: 550px;
`;
