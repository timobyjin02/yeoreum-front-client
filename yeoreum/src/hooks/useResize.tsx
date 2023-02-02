import { useEffect } from 'react';

type Action = string;
type BreakPoint = number;
type Handler = () => void;

export default function useResize(
  action: Action,
  breakpoint: BreakPoint,
  handler: Handler,
) {
  useEffect(() => {
    if (!(action === 'above' || action === 'below')) {
      return;
    }
    const windowResize = () => {
      if (action === 'above') window.innerWidth >= breakpoint && handler();
      if (action === 'below') window.innerWidth <= breakpoint && handler();
    };
    window.addEventListener('resize', windowResize);

    return () => window.removeEventListener('resize', windowResize);
  }, [action, breakpoint, handler]);
}
