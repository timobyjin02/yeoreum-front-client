import React, { useState } from 'react';
import AddPartyMembers from '../../components/board/create/AddPartyMembers';
import SubmitButton from '../../components/board/create/SubmitButton';
import PostContainer from '../../components/board/PostContainer';
import PostGender from '../../components/board/create/PostGender';
import PostInput from '../../components/board/create/PostInput';
import PostPageTitle from '../../components/board/PostPageTitle';
import { PostCreateData } from '../../types/post';
import { getToken } from '../../utils/user';
import { useRouter } from 'next/router';
import { useCreatePostMutation } from '../../hooks/queries/posts';

// 나중에 페이지에 렌더링하는 컴포넌트 div대신 section으로 바꾸기
function PostCreate() {
  const [postData, setPostData] = useState<PostCreateData>({
    title: '',
    description: '',
    location: '',
    meetingTime: '',
    recruitMale: 0,
    recruitFemale: 0,
    hostMembers: [],
  });

  const router = useRouter();

  console.log(postData);

  const onSuccess = (data: any) => {
    // console.log(data);
    alert('게시글이 작성되었습니다.');
    router.push('/board');
  };

  const onError = (error: any) => {
    // console.log(error);
    alert('알 수 없는 오류가 발생했습니다.');
  };

  const { mutate } = useCreatePostMutation(postData, onSuccess, onError);

  const submitPostCreateHandler = () => {
    if (!postData.title) return alert('제목은 비워둘 수 없습니다.');
    if (!postData.location) return alert('장소는 비워둘 수 없습니다.');
    if (!postData.meetingTime) return alert('시간은 비워둘 수 없습니다.');
    if (postData.recruitMale + postData.recruitFemale < 2)
      return alert('모집 인원을 한명 이상 설정해주세요.');
    if (!postData.hostMembers.length)
      return alert('함께할 친구를 한명 이상 등록해주세요.');
    if (!postData.description) return alert('내용은 비워둘 수 없습니다.');
    mutate();
  };

  return (
    <PostContainer>
      <PostPageTitle title="게시글 작성" />
      <PostInput
        title="제목"
        keyName="title"
        postData={postData}
        setPostData={setPostData}
      />
      <PostInput
        title="장소"
        keyName="location"
        postData={postData}
        setPostData={setPostData}
      />
      <PostInput
        title="시간"
        keyName="meetingTime"
        postData={postData}
        setPostData={setPostData}
      />
      <PostGender setPostData={setPostData} />
      <AddPartyMembers keyName="hostMembers" setPostData={setPostData} />
      <PostInput
        title="내용"
        keyName="description"
        postData={postData}
        setPostData={setPostData}
        textarea
      />
      <SubmitButton onClick={submitPostCreateHandler} content="등록" />
    </PostContainer>
  );
}

export default PostCreate;
