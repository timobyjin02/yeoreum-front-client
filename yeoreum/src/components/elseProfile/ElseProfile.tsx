import styled from '@emotion/styled';
import React, { useRef, useState } from 'react';
import useOutsideClick from '../../hooks/useOutsideClick';
import ModalPortal from '../modalPortal/ModalPortal';
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
  grid-template-columns: 100px 1.5fr;
  grid-template-rows: 100px 1.5fr;
  width: 600px;
  height: 300px;
  padding: 0 15px;
`;

const ProfileImg = styled.div`
  display: flex;
  align-items: center;
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
`;

const Nickname = styled.div`
  font-weight: 600;
  &::after {
    content: '님';
    font-weight: 400;
  }
`;

const Wrap = styled.div`
  display: flex;
  align-items: center;
`;

const AddFriend = styled.button`
  width: 75px;
  height: 35px;
  border-radius: 10px;
  color: white;
  background-color: #e86b66;

  cursor: pointer;
`;

const ProfileInfo = styled.div``;

const Description = styled.div`
  margin-bottom: 85px;
  font-size: 14px;
  letter-spacing: 0.6px;
  line-height: 23px;
`;

export const Graph = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  height: 15px;
  align-items: center;
  margin-top: 25px;
  padding: 5px;
  background-color: #fdf3f4;
  /* box-shadow: 5px 5px 6px rgba(63, 63, 143, 0.25), -5px -5px 6px #ffffff; */
  border-radius: 50px;
`;

export const ColorGraph = styled.div`
  position: relative;
  height: 10px;
  background: #e14f4c;
  /* box-shadow: 5px 5px 6px rgba(63, 63, 143, 0.25), -5px -5px 6px #ffffff; */
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
  background: #f8d6d8;
  color: #46110e;
  /* box-shadow: 5px 5px 6px rgba(63, 63, 143, 0.25), -5px -5px 6px #ffffff; */
  border-radius: 13px;
  &:after {
    border-top: 7px solid #f8d6d8;
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
    content: '';
    position: absolute;
    top: 30px;
    left: 20px;
  }
`;

//

const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 10;
  z-index: 9999;
`;

const ModalWrap = styled.div`
  position: absolute;
  padding: 10px 15px;
  top: 43%;
  left: 66%;
  border-radius: 5px;
  border: 1px solid #d0d0d0;
  background-color: #fff;
  box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.25);
  transform: translate(-50%, -50%);
  @media (max-width: 640px) {
    width: 400px;
  }
`;

const Contents = styled.div``;

const KebabMenu = styled.div`
  margin-left: 10px;
`;

const Icon = styled.div`
  width: 4px;
  height: 4px;
  margin: 2px;
  border-radius: 50%;
  background-color: black;

  cursor: pointer;
`;
