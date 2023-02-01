import React from 'react';
import PostContainer from '../../components/board/PostContainer';
import PostPageTitle from '../../components/board/PostPageTitle';
import NotificationLists from '../../components/notifications/Notifications';

function Notification() {
  return (
    <PostContainer>
      <PostPageTitle title="알림" />
      <NotificationLists />
    </PostContainer>
  );
}

export default Notification;
