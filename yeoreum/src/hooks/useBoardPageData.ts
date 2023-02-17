import { useRouter } from 'next/router';

function useSaveScrollData() {
  if (typeof window !== 'undefined') {
    sessionStorage.setItem('scrollOffset', JSON.stringify(window.scrollY));
  }
}

function useGetScrollData() {
  return Number(sessionStorage.getItem('scrollOffset'));
}

function useSaveFilterData(option: any) {
  if (typeof window !== 'undefined') {
    sessionStorage.setItem('filterOptions', JSON.stringify(option));
  }
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

function useRemoveFilterData() {
  sessionStorage.removeItem('filterOptions');
}

export {
  useSaveScrollData,
  useGetScrollData,
  useSaveFilterData,
  useGetFilterData,
  useRemoveBoardPageData,
  useRemoveFilterData,
};
