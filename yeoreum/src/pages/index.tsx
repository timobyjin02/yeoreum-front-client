import styled from '@emotion/styled';
import Head from 'next/head';
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
    </div>
  );
}

const AA = styled.div`
  background-color: blue;

  width: 100%;
  padding: 0;
  height: 2000px;
`;
