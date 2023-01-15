import React from 'react';
import PostContainer from '../board/PostContainer';
import PostPageTitle from '../board/PostPageTitle';
import Lists from './Lists';
import Rating from './Rating';
import Profile from './Profile';

function Container() {
  return (
    <PostContainer>
      <PostPageTitle title="마이페이지" />
      <Profile />
      <Rating />
      <Lists />
    </PostContainer>
  );
}

export default Container;
