import styled from '@emotion/styled';
import React, { useState } from 'react';
import PostPageTitle from '../../board/PostPageTitle';
import Modal from '../../common/Modal';
import ApplicationFriendModal from '../applicationModal/ApplicationFriendModal';

function FriendTop() {
  const [isOpen3, setIsOpen3] = useState(false);

  const AddFriend = () => {
    setIsOpen3(true);
  };

  return (
    <Container>
      <PostPageTitle title="친구" />
      <AddIcon onClick={AddFriend} />
      {isOpen3 && (
        <Modal onClose={() => setIsOpen3(false)}>
          <ApplicationFriendModal />
        </Modal>
      )}
    </Container>
  );
}

export default FriendTop;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AddIcon = styled.div`
  width: 30px;
  height: 30px;
  margin-bottom: 20px;
  margin-left: 10px;
  background-color: antiquewhite;
  cursor: pointer;
`;
