import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import {
  useApplicationDetailQuery,
  useCreateChatMutation,
} from '../../../hooks/queries/posts';
import { Param } from '../../../pages/apply/[postNo]/application/[applicationNo]';

interface DetailHeaderProps {
  param: Param;
}

function DetailMain({ param }: DetailHeaderProps) {
  const router = useRouter();
  const { data } = useApplicationDetailQuery(param.postNo, param.applicationNo);

  const applicationData = data?.data.response.guestTeam;

  console.log(applicationData);

  const { mutate } = useCreateChatMutation(param.postNo, param.applicationNo);

  const btnClickHandler = () => {
    mutate();
    // router.push(`/mypage`);
  };

  return (
    <Main>
      <ContentWrapper>
        <Content>{applicationData?.description}</Content>
      </ContentWrapper>
      <PostButton onClick={btnClickHandler}>수락하기</PostButton>
    </Main>
  );
}

export default DetailMain;

const Main = styled.main`
  padding: 30px 0;
  display: flex;
  flex-direction: column;
`;

const ContentWrapper = styled.p`
  width: 100%;
  min-height: 140px;
  margin-bottom: 40px;
`;

const Content = styled.span`
  line-height: 1.6;
  letter-spacing: -1px;
`;

const PostButton = styled.button`
  margin-top: 40px;
  width: 240px;
  height: 40px;
  border-radius: 10px;

  align-self: center;
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 17px;
  font-weight: 600;
  color: white;
  background-color: ${({ theme }) => theme.palette.main};

  cursor: pointer;

  @media (max-width: 640px) {
    width: 50%;
  }
`;
