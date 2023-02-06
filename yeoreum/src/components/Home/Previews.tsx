import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import React from 'react';
import Card from './Card';

function Previews() {
  const router = useRouter();

  return (
    <Container>
      <InteractiveHeading>당신의 여름을 찾아보세요~!</InteractiveHeading>
      <Description>
        <Heading>당신의 여름을 찾아보세요~!</Heading>
        <SubHeading>
          26년 인생 먹방길 걸었는데
          <br />
          남은 인생 같이 먹방길 걸을 분
        </SubHeading>
        <MoreBtn onClick={() => router.push('/board')}>더보기</MoreBtn>
      </Description>
      <Cards>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <ReactiveBtn onClick={() => router.push('/board')}>더보기</ReactiveBtn>
      </Cards>
    </Container>
  );
}

export default Previews;

const Container = styled.div`
  display: flex;

  height: 608px;
  margin: 40px auto;

  width: 975px;

  position: relative;

  @media (max-width: 975px) {
    width: 100%;
    height: 100%;
    margin: 20px auto;
    flex-direction: column;
  }
`;

const Cards = styled.div`
  width: 100%;
  overflow-x: auto;

  display: flex;
  flex-flow: column-reverse wrap-reverse;
  justify-content: flex-start;
  align-content: flex-start;

  @media (max-width: 975px) {
    width: 100%;
    margin: 20px 0;
    padding: 0 14px;

    flex-flow: row nowrap;
    ::-webkit-scrollbar {
      width: 0;
    }
  }
`;

const Description = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  flex-direction: column;

  @media (max-width: 975px) {
    position: static;
    order: 1;
  }
`;

const InteractiveHeading = styled.h2`
  font-size: 1.625rem;
  margin: 8px 24px;

  @media (min-width: 976px) {
    display: none;
  }
`;

const Heading = styled.h2`
  font-size: 1.75rem;
  margin-bottom: 8px;

  @media (max-width: 975px) {
    display: none;
  }
`;

const SubHeading = styled.p`
  font-size: 0.875rem;
  color: #7f7f7f;
  margin-bottom: 32px;

  @media (max-width: 975px) {
    display: none;
  }
`;

const MoreBtn = styled.button`
  font-size: 0.875rem;
  width: 102px;
  height: 40px;
  border-radius: 100px;
  background-color: inherit;
  color: #333;
  border: 1px solid #333;

  cursor: pointer;

  @media (max-width: 975px) {
    display: none;
  }
`;

const ReactiveBtn = styled.button`
  display: none;
  @media (max-width: 975px) {
    display: block;
    margin: 0 20px;

    align-self: center;
    flex-shrink: 0;
    font-size: 0.875rem;
    width: 122px;
    height: 40px;
    border-radius: 100px;
    background-color: inherit;
    color: #333;
    border: 1px solid #333;

    cursor: pointer;
  }
`;
