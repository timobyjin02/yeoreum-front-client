import React from 'react';
import PostContainer from '../../components/board/PostContainer';
import FriendTop from '../../components/friend/page/FriendTop';
import UserSearch from '../../components/friend/page/UserSearch';
import MyFriendList from '../../components/friend/page/MyFriendList';

function index() {
  return (
    <PostContainer>
      <FriendTop />
      <UserSearch />
      <MyFriendList />
    </PostContainer>
  );
}

export default index;
