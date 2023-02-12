import React, { useCallback, useEffect, useState } from 'react';
import PostContainer from '../../components/board/PostContainer';
import FriendTop from '../../components/friend/page/FriendTop';
import UserSearch from '../../components/friend/page/UserSearch';
import MyFriendList from '../../components/friend/page/MyFriendList';
import {
  fetchFriends,
  fetchSearchFriends,
  FriendsResponseType,
} from '../../api/friendPage';
import axios from 'axios';

function index() {
  const [searchTerm, setSearchTerm] = useState('');
  const [friendList, setFriendList] = useState<FriendsResponseType>({
    friends: [],
  });

  useEffect(() => {
    (async () => {
      const friend = await fetchFriends();
      console.log(friend);
      setFriendList(friend);
    })();
  }, []);

  return (
    <PostContainer>
      <FriendTop />
      <UserSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <MyFriendList friendList={friendList} searchTerm={searchTerm} />
    </PostContainer>
  );
}

export default index;
