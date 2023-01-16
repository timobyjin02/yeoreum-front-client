import React from 'react';
import PostContainer from '../../components/board/PostContainer';
import PostPageTitle from '../../components/board/PostPageTitle';
import Lists from '../../components/myPage/Lists';
import Profile from '../../components/myPage/Profile';
import Rating from '../../components/myPage/Rating';

function index() {
  return (
    <PostContainer>
      <PostPageTitle title="마이페이지" />
      <Profile />
      <Rating />
      <Lists />
    </PostContainer>
  );
}

export default index;
