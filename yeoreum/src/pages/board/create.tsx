import React, { useState } from 'react';
import AddPartyMembers from '../../components/board/create/AddPartyMembers';
import SubmitButton from '../../components/board/create/SubmitButton';
import PostContainer from '../../components/board/PostContainer';
import PostGender from '../../components/board/create/PostGender';
import PostInput from '../../components/board/create/PostInput';
import PostPageTitle from '../../components/board/PostPageTitle';
import { PostCreateData } from '../../types/post';

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

  console.log(postData);

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
      <PostGender setPostData={setPostData} />
      <AddPartyMembers setPostData={setPostData} />
      <PostInput
        title="내용"
        keyName="description"
        postData={postData}
        setPostData={setPostData}
        textarea
      />
      <SubmitButton content="등록하기" />
    </PostContainer>
  );
}

export default PostCreate;
