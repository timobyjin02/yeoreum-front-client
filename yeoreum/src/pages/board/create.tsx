import React from 'react';
import AddPartyMembers from '../../components/common/AddPartyMembers';
import CreateButton from '../../components/common/CreateButton';
import PostContainer from '../../components/common/PostContainer';
import PostGender from '../../components/common/PostGender';
import PostInput from '../../components/common/PostInput';
import PostPageTitle from '../../components/common/PostPageTitle';

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
      <CreateButton />
    </PostContainer>
  );
}

export default PostCreate;
