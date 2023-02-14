import React, { useEffect, useState } from 'react';
import PostContainer from '../../components/board/PostContainer';
import FriendTop from '../../components/friend/page/FriendTop';
import UserSearch from '../../components/friend/page/UserSearch';
import MyFriendList from '../../components/friend/page/MyFriendList';
import { RequestGetSearchFriends } from '../../api/friends';
import { FriendResponseType } from '../../types/friend';

function index() {
  const [searchTerm, setSearchTerm] = useState('');
  const [friendList, setFriendList] = useState<FriendResponseType>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const friends = await RequestGetSearchFriends(searchTerm);
      setFriendList(friends);

      if (!searchTerm) {
        setFriendList(friends.friends);
      }
      if (searchTerm) {
        setFriendList(friends.searchResult);
      }
    })();
  }, [searchTerm]);

  return (
    <PostContainer>
      <FriendTop />
      <UserSearch
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        loading={loading}
      />
      <MyFriendList friendList={friendList} />
    </PostContainer>
  );
}

export default index;
