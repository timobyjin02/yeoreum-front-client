import styled from '@emotion/styled';
import Image from 'next/image';
import { useApplicationDetailQuery } from '../../../hooks/queries/posts';
import { Param } from '../../../pages/apply/[postNo]/application/[applicationNo]';

interface DetailHeaderProps {
  param: Param;
}

function DetailHeader({ param }: DetailHeaderProps) {
  const { data } = useApplicationDetailQuery(param.postNo, param.applicationNo);

  const applicationData = data?.data.response.guestTeam;

  return (
    <Header>
      <PostTitle>{applicationData?.title}</PostTitle>
      <PostInfo>
        <FlexRowContainer>
          <PosterProfile
            width={100}
            height={100}
            src={'/anonymous.png'}
            alt="profile"
            priority
          />
          <NicknameDate>
            <Nickname>{'postData?.hostNickname'}</Nickname>
            <PostedAt>2022.10.8</PostedAt>
          </NicknameDate>
        </FlexRowContainer>
      </PostInfo>
    </Header>
  );
}

export default DetailHeader;

const Header = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
  border-bottom: 1px solid #e8e8e8;
`;

const PostTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 30px;
  letter-spacing: -0.2px;
`;

const FlexRowContainer = styled.div`
  display: flex;
`;

const PostInfo = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const PosterProfile = styled(Image)`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background-color: lightgray;
  margin-right: 12px;
`;

const NicknameDate = styled.div`
  display: flex;
  flex-direction: column;
`;

const Nickname = styled.span`
  color: ${({ theme }) => theme.palette.fontBlack};
`;

const PostedAt = styled.span`
  font-size: 0.8125rem;
  color: ${({ theme }) => theme.palette.fontGrey};
`;
