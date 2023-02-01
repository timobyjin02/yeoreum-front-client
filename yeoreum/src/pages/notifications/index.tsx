import React from 'react';
import PostContainer from '../../components/board/PostContainer';
import PostPageTitle from '../../components/board/PostPageTitle';
import NotificationList from '../../components/notifications/NotificationList';

function Notification() {
  return (
    <PostContainer>
      <PostPageTitle title="알림" />
      <NotificationList />
    </PostContainer>
  );
}

export default Notification;
