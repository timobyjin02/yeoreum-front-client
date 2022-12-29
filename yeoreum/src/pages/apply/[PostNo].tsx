import React from 'react';
import PostContainer from '../../components/common/PostContainer';
import PostList from '../../components/PostList/PostList';
import PostPageTitle from '../../components/common/PostPageTitle';

function ApplyStatus() {
  return (
    <PostContainer>
      <PostPageTitle title="신청 현황" />
      <PostList />
    </PostContainer>
  );
}

export default ApplyStatus;
