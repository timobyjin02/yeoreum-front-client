import styled from '@emotion/styled';
import React, { useRef, useState } from 'react';
import {
  useFriendsValidateQuery,
  usePostFriendApplicationMutation,
} from '../../hooks/queries/friends';
import { useLoginState } from '../../store/hooks';
import { FriendResponseType } from '../../types/friend';
import ProfileImage from '../common/ProfileImage';
import dummyData from '../myPage/dummyData';
import DuelModal from './DuelModal';

interface FriendProps {
  modal: FriendResponseType;
}

function ElseProfile({ modal }: FriendProps) {
  const modalRef = useRef(null);

  const { mutate } = usePostFriendApplicationMutation(
    modal.friendUserNo as number,
  );

  const applicationHandler = () => {
    mutate();
  };

  const { data } = useFriendsValidateQuery(modal.friendUserNo as number);

  const isFriend = data?.data.response.isFriend;

  return (
    <ProfileWrap ref={modalRef}>
      <ImageWrapper>
        <ProfileImage src={modal.friendProfileImage} size={70} />
      </ImageWrapper>
      <ProfileEvent>
        <Nickname>{modal.friendNickname}</Nickname>
        <Wrap>
          {isFriend ? (
            <AddFriend className="isFriend">이미 친구</AddFriend>
          ) : (
            <AddFriend onClick={applicationHandler}>친구신청</AddFriend>
          )}
          <DuelModal />
        </Wrap>
      </ProfileEvent>
      <div></div>
      <ProfileInfo>
        <Description>{modal.friendDescription}</Description>
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

const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  grid-area: profileImg;
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
  &.isFriend {
    background-color: ${({ theme }) => theme.palette.disable};
    cursor: default;
  }
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
