import React from 'react';
import AddPartyMembers from '../../components/board/create/AddPartyMembers';
import SubmitButton from '../../components/board/create/SubmitButton';
import PostContainer from '../../components/board/PostContainer';
import PostGender from '../../components/board/create/PostGender';
import PostInput from '../../components/board/create/PostInput';
import PostPageTitle from '../../components/board/PostPageTitle';

// 나중에 페이지에 렌더링하는 컴포넌트 div대신 section으로 바꾸기
function PostCreate() {
  return (
    <PostContainer>
      <PostPageTitle title="게시글 작성" />
      <PostInput title="제목" />
      <PostInput title="장소" />
      <PostGender />
      <AddPartyMembers />
      <PostInput title="내용" textarea />
      <SubmitButton content="등록하기" />
    </PostContainer>
  );
}

export default PostCreate;
