import styled from '@emotion/styled';
import React, { useRef, useState } from 'react';
import useOutsideClick from '../../hooks/useOutsideClick';

function DuelModal() {
  const [isOpen2, setIsOpen2] = useState(false);

  const modalRef = useRef(null);

  useOutsideClick(modalRef, () => setIsOpen2(false));

  const duelModalOpen = () => {
    setIsOpen2(true);
  };

  return (
    <KebabMenu ref={modalRef} onClick={duelModalOpen}>
      <Div>
        {isOpen2 && (
          <ModalWrap>
            <Contents>신고하기</Contents>
          </ModalWrap>
        )}
        <Icon />
        <Icon />
        <Icon />
      </Div>
    </KebabMenu>
  );
}

export default DuelModal;

const ModalWrap = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 50px;
  top: 55px;
  right: -57px;
  border-radius: 5px;
  border: 1px solid #d0d0d0;
  background-color: #fff;
  box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.25);
  transform: translate(-50%, -50%);
  @media (max-width: 640px) {
    width: 400px;
  }
`;

const Contents = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;

  &:hover {
    background-color: #e1e1e1;
  }
`;

const KebabMenu = styled.div`
  position: relative;
  margin-left: 10px;
`;

const Div = styled.div``;

const Icon = styled.div`
  width: 4px;
  height: 4px;
  margin: 2px;
  border-radius: 50%;
  background-color: black;
  cursor: pointer;
`;
