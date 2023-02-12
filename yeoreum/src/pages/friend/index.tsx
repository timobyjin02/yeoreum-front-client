import React, { useEffect, useState } from 'react';
import PostContainer from '../../components/board/PostContainer';
import FriendTop from '../../components/friend/page/FriendTop';
import UserSearch from '../../components/friend/page/UserSearch';
import MyFriendList from '../../components/friend/page/MyFriendList';
import { fetchSearchFriends, FriendResponseType } from '../../api/friendPage';

function index() {
  const [searchTerm, setSearchTerm] = useState('');
  const [friendList, setFriendList] = useState<FriendResponseType>([]);

  useEffect(() => {
    (async () => {
      const friend = await fetchSearchFriends(searchTerm);
      setFriendList(friend);

      if (!searchTerm) {
        setFriendList(friend.friends);
      }
      if (searchTerm) {
        setFriendList(friend.searchResult);
      }
    })();
  }, [searchTerm]);

  return (
    <PostContainer>
      <FriendTop />
      <UserSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <MyFriendList friendList={friendList} searchTerm={searchTerm} />
    </PostContainer>
  );
}

export default index;
