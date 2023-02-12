import { ReactNode, ReactPortal, useRef } from 'react';
import ReactDOM from 'react-dom';

interface ModalProps {
  children: ReactNode;
}

const ModalPortal = ({ children }: ModalProps) => {
  const el: HTMLElement | null = document.getElementById('modal');
  if (el === null) return <></>;

  return ReactDOM.createPortal(children, el);
};

export default ModalPortal;
