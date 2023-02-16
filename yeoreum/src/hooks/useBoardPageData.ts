import { useEffect, useState } from 'react';
import { throttle } from 'lodash';
import { useRouter } from 'next/router';

function useScrollHistory() {
  if (typeof window === 'undefined') return 0;
  const [scroll, setScroll] = useState(() =>
    Number(sessionStorage.getItem('scrollOffset')),
  );
  const scrollEventHandler = throttle(() => {
    sessionStorage.setItem('scrollOffset', JSON.stringify(window.scrollY));
    setScroll(Number(sessionStorage.getItem('scrollOffset')));
  }, 500);

  useEffect(() => {
    window.addEventListener('scroll', scrollEventHandler);

    return () => window.removeEventListener('scroll', scrollEventHandler);
  }, []);
  return scroll;
}

function useSaveFilterData(option: any) {
  sessionStorage.setItem('filterOptions', JSON.stringify(option));
}

function useGetFilterData() {
  return JSON.parse(sessionStorage.getItem('filterOptions') as string);
}

function useRemoveBoardPageData() {
  const router = useRouter();
  const isInBoardPage =
    router.pathname === '/board/post/[postNo]' || router.pathname === '/board';
  if (typeof window !== 'undefined' && !isInBoardPage) {
    sessionStorage.removeItem('scrollOffset');
    sessionStorage.removeItem('filterOptions');
  }
}

export {
  useScrollHistory,
  useSaveFilterData,
  useGetFilterData,
  useRemoveBoardPageData,
};
