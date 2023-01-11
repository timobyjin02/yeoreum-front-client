import { useEffect } from 'react';

type Action = string;
type BreakPoint = number;
type OnClose = () => void;

export default function useResize(
  action: Action,
  breakpoint: BreakPoint,
  onClose: OnClose,
) {
  useEffect(() => {
    if (!(action === 'above' || action === 'below')) {
      return;
    }
    const windowResize = () => {
      if (action === 'above') window.innerWidth >= breakpoint && onClose();
      if (action === 'below') window.innerWidth <= breakpoint && onClose();
    };
    window.addEventListener('resize', windowResize);

    return () => window.removeEventListener('resize', windowResize);
  }, [action, breakpoint, onClose]);
}
