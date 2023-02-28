import styled from '@emotion/styled';
import ProfileImage from '../../common/ProfileImage';
import { UsersResponseType } from '../../../types/user';
import { usePostFriendApplicationMutation } from '../../../hooks/queries/friends';

interface ItemProps {
  item: UsersResponseType;
}

function AllUserList({ item }: ItemProps) {
  const { mutate } = usePostFriendApplicationMutation(item.userNo);

  const applicationHandler = () => {
    mutate();
  };

  return (
    <AllUsersList key={item.userNo}>
      <UserInfo>
        <ProfileImage src={item.profileImage} size={40} />
        <Nickname>{item.nickname}</Nickname>
      </UserInfo>
      <ApplicationButton onClick={applicationHandler}>신청</ApplicationButton>
    </AllUsersList>
  );
}

export default AllUserList;

const AllUsersList = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  padding: 0 15px 0 30px;
  margin-right: 5px;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
`;

const Nickname = styled.div`
  width: 250px;
  margin-left: 10px;
  font-size: 14px;
  color: ${({ theme }) => theme.palette.font.headline};
`;

const ApplicationButton = styled.button`
  width: 58px;
  height: 30px;
  border-radius: 8px;
  color: white;
  background-color: ${({ theme }) => theme.palette.main};
  cursor: pointer;
`;
