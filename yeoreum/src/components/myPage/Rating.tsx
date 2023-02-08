import styled from '@emotion/styled';
import React from 'react';
import dummyData from './dummyData';

function Rating() {
  return (
    <Container>
      <Title>매너온도</Title>
      <Graph>
        <ColorGraph>
          <Ballon>{dummyData.rating}</Ballon>
        </ColorGraph>
      </Graph>
    </Container>
  );
}

export default Rating;

const Container = styled.div`
  margin: 60px 0 80px 0;
  padding: 0 20px;
`;

const Title = styled.div`
  margin-bottom: 80px;
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.palette.font.headline};
`;

export const Graph = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  height: 15px;
  align-items: center;
  margin-top: 25px;
  padding: 5px;
  background-color: ${({ theme }) => theme.palette.background.grey};
  border-radius: 50px;
`;

export const ColorGraph = styled.div`
  position: relative;
  height: 10px;
  background: ${({ theme }) => theme.palette.main};
  border-radius: 50px;
`;

export const Ballon = styled.div`
  right: -53px;
  top: -50px;
  position: absolute;
  width: 60px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 74px;
  color: ${({ theme }) => theme.palette.dark};
  background: ${({ theme }) => theme.palette.light};
  border-radius: 13px;
  &:after {
    border-top: 7px solid ${({ theme }) => theme.palette.light};
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
    content: '';
    position: absolute;
    top: 30px;
    left: 20px;
  }
`;
