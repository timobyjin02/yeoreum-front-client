import { useEffect, RefObject } from 'react';

export default function useOutsideClick<T extends HTMLElement>(
  ref: RefObject<T>,
  handler: () => void,
) {
  useEffect(() => {
    const listener = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!ref.current || ref.current.contains(target)) {
        return;
      }
      handler();
    };
    document.addEventListener('mousedown', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
    };
  }, [ref, handler]);
}
