import React from 'react';
import AddPartyMembers from '../../components/board/create/AddPartyMembers';
import PostInput from '../../components/board/create/PostInput';
import SubmitButton from '../../components/board/create/SubmitButton';
import PostContainer from '../../components/board/PostContainer';
import PostPageTitle from '../../components/board/PostPageTitle';

function YeoreumApplication() {
  return (
    <PostContainer>
      <PostPageTitle title="여름 신청서" />
      <PostInput title="제목" />
      <AddPartyMembers />
      <PostInput title="내용" textarea />
      <SubmitButton content="신청" />
    </PostContainer>
  );
}

export default YeoreumApplication;
