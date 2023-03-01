import styled from '@emotion/styled';
import { useFriendsSentQuery } from '../../../../hooks/queries/friends';
import { SentFriendsResponseType } from '../../../../types/friend';
import sliceString from '../../../../utils/sliceString';
import ProfileImage from '../../../common/ProfileImage';

function SentFriendsRequests() {
  const { data } = useFriendsSentQuery();
  const sentFriends = data?.data.response.sentFriendRequests;

  return (
    <>
      {sentFriends?.map(
        (sentFriend: SentFriendsResponseType, index: number) => {
          return (
            <List key={index}>
              <ImageWrapper>
                <ProfileImage
                  src={sentFriend?.receiverUserProfileImage}
                  size={70}
                />
              </ImageWrapper>
              <InfoWrapper>
                <Nickname>{sentFriend.receiverUserNickname}</Nickname>
                <Description>
                  {sliceString(sentFriend.receiverUserDescription, 65)}
                </Description>
              </InfoWrapper>
            </List>
          );
        },
      )}
    </>
  );
}

export default SentFriendsRequests;

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
