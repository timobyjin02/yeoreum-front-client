import { useRouter } from 'next/router';
import React, { useState } from 'react';
import AddPartyMembers from '../../../components/board/create/AddPartyMembers';
import PostInput from '../../../components/board/create/PostInput';
import SubmitButton from '../../../components/board/create/SubmitButton';
import PostContainer from '../../../components/board/PostContainer';
import PostPageTitle from '../../../components/board/PostPageTitle';
import {
  useCreateApplicationMutation,
  usePostDetailQuery,
} from '../../../hooks/queries/posts';
import { ApplicationCreateData } from '../../../types/post';

function ApplicationCreate() {
  const [applicationData, setApplicationData] = useState<ApplicationCreateData>(
    {
      title: '',
      description: '',
      guests: [],
    },
  );

  const router = useRouter();
  const boardNo = Number(router.query.postNo);

  usePostDetailQuery(boardNo);

  const onSuccess = (data: any) => {
    console.log('여름 신청 성공', data);
    router.push(`/board`);
    alert('여름 신청이 완료되었습니다.');
  };

  const onError = (error: any) => {
    const errorData = error.response.data;
    console.log('여름 신청 실패', error);
    if (errorData.statusCode === 400) {
      alert(errorData?.message);
      return;
    }
    if (errorData.statusCode === 404) {
      alert(errorData?.message);
      return;
    }
    alert('알 수 없는 오류가 발생했습니다.');
  };

  const { mutate } = useCreateApplicationMutation(
    boardNo,
    applicationData,
    onSuccess,
    onError,
  );

  const submitApplicationCreateHandler = () => {
    if (!applicationData.title) return alert('제목은 비워둘 수 없습니다.');
    if (!applicationData.guests.length)
      return alert('함께할 친구를 한명 이상 등록해주세요.');
    if (!applicationData.description)
      return alert('내용은 비워둘 수 없습니다.');
    mutate();
  };

  return (
    <PostContainer>
      <PostPageTitle title="여름 신청서" />
      <PostInput
        title="제목"
        keyName="title"
        postData={applicationData}
        setPostData={setApplicationData}
      />
      <AddPartyMembers keyName="guests" setPostData={setApplicationData} />
      <PostInput
        title="내용"
        keyName="description"
        postData={applicationData}
        setPostData={setApplicationData}
        textarea
      />
      <SubmitButton onClick={submitApplicationCreateHandler} content="등록" />
    </PostContainer>
  );
}

export default ApplicationCreate;
