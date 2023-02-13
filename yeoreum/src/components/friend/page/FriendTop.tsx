import styled from '@emotion/styled';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { notShowModal, showModal } from '../../../store/modules/modal';
import PostPageTitle from '../../board/PostPageTitle';
import Modal from '../../common/Modal';
import ApplicationFriendModal from '../applicationModal/ApplicationFriendModal';

function FriendTop() {
  const dispatch = useAppDispatch();
  const modal = useAppSelector(state => state.modal.show);

  const AddFriend = () => {
    dispatch(showModal());
  };

  return (
    <Container>
      <PostPageTitle title="친구" />
      <AddIcon src="/icons/useradd.svg" onClick={AddFriend} />
      {modal === 'YES' && (
        <Modal onClose={() => dispatch(notShowModal())}>
          <ApplicationFriendModal onClose={() => dispatch(notShowModal())} />
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

const AddIcon = styled.img`
  width: 30px;
  height: 30px;
  cursor: pointer;
`;
