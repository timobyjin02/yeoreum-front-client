const useIntersectionObserver = (element: HTMLElement | null, handler: any) => {
  if (!element) return;

  const observer = new IntersectionObserver(
    entries => {
      if (entries[0].isIntersecting === true) {
        handler();
        observer.unobserve(element);
      }
    },
    { threshold: 1 },
  );

  observer.observe(element);
};

export default useIntersectionObserver;
