import styled from '@emotion/styled';
import React, { useRef } from 'react';
import dummyData from '../myPage/dummyData';
import DuelModal from './DuelModal';

function ElseProfile() {
  const modalRef = useRef(null);

  return (
    <ProfileWrap ref={modalRef}>
      <ProfileImg>
        <Img />
      </ProfileImg>
      <ProfileEvent>
        <Nickname>미친저글링</Nickname>
        <Wrap>
          <AddFriend>친구신청</AddFriend>
          <DuelModal />
        </Wrap>
      </ProfileEvent>
      <div></div>
      <ProfileInfo>
        <Description>
          주짓수 그린벨트 태권도3단 유도2단 주부9단 합기도2단 새벽기도 5시 반
          3대 중량 700kg 미친 존잘에 키도 큰 사람 그게 나야 나란 남자 감자
          고구마깡 새우깡 수수깡 바리깡
        </Description>
        <Graph>
          <ColorGraph>
            <Ballon>{dummyData.rating}</Ballon>
          </ColorGraph>
        </Graph>
      </ProfileInfo>
    </ProfileWrap>
  );
}

export default ElseProfile;

const ProfileWrap = styled.div`
  display: grid;
  grid-template-columns: 100px auto;
  grid-template-rows: 100px auto;
  grid-template-areas:
    'profileImg profileEvent'
    'empty profileInfo';
  width: 600px;
  height: 300px;
  padding: 0 15px;
  @media (max-width: 640px) {
    width: auto;
  }
`;

const ProfileImg = styled.div`
  display: flex;
  align-items: center;
  grid-area: profileImg;
`;

const Img = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50px;
  background-color: antiquewhite;
`;

const ProfileEvent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  grid-area: profileEvent;
  @media (max-width: 640px) {
    grid-area: profileEvent;
  }
`;

const Nickname = styled.div`
  font-weight: 600;
  color: ${({ theme }) => theme.palette.font.headline};
  &::after {
    content: '님';
    font-weight: 400;
  }
  @media (max-width: 640px) {
    grid-area: empty;
    /* margin-bottom: 30px; */
  }
`;

const Wrap = styled.div`
  display: flex;
  align-items: center;
`;

const AddFriend = styled.button`
  width: 84px;
  height: 40px;
  border-radius: 8px;
  color: white;
  background-color: ${({ theme }) => theme.palette.main};

  cursor: pointer;
`;

const ProfileInfo = styled.div`
  grid-area: profileInfo;
`;

const Description = styled.div`
  margin-bottom: 85px;
  font-size: 14px;
  letter-spacing: 0.6px;
  line-height: 23px;
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
  border-radius: 50px;
  background-color: ${({ theme }) => theme.palette.background.grey};
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
