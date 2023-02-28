import styled from '@emotion/styled';
import { useState } from 'react';
import sliceString from '../../../utils/sliceString';
import ProfileImage from '../../common/ProfileImage';

function FriendList() {
  const [isOpen, setIsOpen] = useState(false);

  const openProfileHandler = () => {
    setIsOpen(true);
  };

  return (
    <List>
      <ImageWrapper>
        {/* <ProfileImage src={friend?.friendProfileImage} size={70} /> */}
      </ImageWrapper>
      <InfoWrapper onClick={openProfileHandler}>
        {/* {isOpen && (
                  <Modal onClose={() => setIsOpen(false)}>
                    <ElseProfile
                      img={friend.friendProfileImage}
                      name={friend.friendNickname}
                      description={friend.friendDescription}
                    />
                  </Modal>
                )} */}
        <Nickname>sss</Nickname>
        <Description>
          ddd
          {/* {sliceString(, 65)} */}
        </Description>
      </InfoWrapper>
    </List>
  );
}

export default FriendList;

const List = styled.div`
  display: flex;
  align-items: center;
  max-width: 600px;
  padding: 8px 20px 10px;
  cursor: pointer;
`;

const ImageWrapper = styled.div`
  margin-right: 15px;
`;

const InfoWrapper = styled.div`
  width: calc(100% - 65px);
  height: 100%;
`;

const Nickname = styled.div`
  margin-bottom: 10px;
  font-weight: 600;
  color: ${({ theme }) => theme.palette.font.headline};
`;

const Description = styled.div`
  font-size: 14px;
  letter-spacing: 0.6px;
  line-height: 20px;
  color: ${({ theme }) => theme.palette.font.headline};
`;

const ListItem = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 30px;
  color: ${({ theme }) => theme.palette.font.subHeadline};
`;
