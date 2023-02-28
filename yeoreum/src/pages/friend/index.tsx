import React, { useState } from 'react';
import PostContainer from '../../components/board/PostContainer';
import FriendTop from '../../components/friend/page/FriendTop';
import UserSearch from '../../components/friend/page/UserSearch';
import MyFriendList from '../../components/friend/page/MyFriendList';
import FriendMain from '../../components/friend/page/FriendMain';

function index() {
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);

  return (
    <PostContainer>
      <FriendTop />
      <UserSearch
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        loading={loading}
      />
      {searchTerm ? <MyFriendList searchTerm={searchTerm} /> : <FriendMain />}
    </PostContainer>
  );
}

export default index;
