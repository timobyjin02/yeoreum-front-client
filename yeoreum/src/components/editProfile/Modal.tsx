import React, { useRef } from 'react';
import styled from '@emotion/styled';
import useOutsideClick from '../../hooks/useOutsideClick';
import useLockScroll from '../../hooks/useLockScroll';

interface Props {
  onClose: () => void;
  children: React.ReactNode;
}

function Modal({ onClose, children }: Props) {
  const modalRef = useRef(null);

  const handleClose = () => {
    onClose?.();
  };

  useOutsideClick(modalRef, handleClose);

  useLockScroll();

  return (
    <Overlay>
      <ModalWrap ref={modalRef}>
        <Contents>{children}</Contents>
      </ModalWrap>
    </Overlay>
  );
}

export default Modal;

const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 9999;
`;

const ModalWrap = styled.div`
  width: 500px;
  height: fit-content;
  border-radius: 15px;
  background-color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const CloseButton = styled.div`
  float: right;
  width: 40px;
  height: 40px;
  margin: 20px;
  cursor: pointer;
  i {
    color: #5d5d5d;
    font-size: 30px;
  }
`;

const Contents = styled.div``;

const Button = styled.button`
  font-size: 14px;
  padding: 10px 20px;
  border: none;
  background-color: #ababab;
  border-radius: 10px;
  color: white;
  font-weight: 200;
  cursor: pointer;
  &:hover {
    background-color: #898989;
  }
`;
