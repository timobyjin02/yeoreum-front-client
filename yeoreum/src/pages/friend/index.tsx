import React, { useEffect, useState } from 'react';
import PostContainer from '../../components/board/PostContainer';
import FriendTop from '../../components/friend/page/FriendTop';
import UserSearch from '../../components/friend/page/UserSearch';
import MyFriendList from '../../components/friend/page/MyFriendList';
import { fetchFriends, FriendsResponseType } from '../../api/friendPage';

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
      <UserSearch
        setFriendList={setFriendList}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <MyFriendList friendList={friendList} searchTerm={searchTerm} />
    </PostContainer>
  );
}

export default index;
