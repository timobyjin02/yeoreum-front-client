import tokenAxios from '../config';

const requestHandleBoard = (
  boardNo: number,
  type: number,
  isAccepted: boolean,
) => {
  const param = type === 5 ? 'guest' : 'host';

  return tokenAxios.patch(`/boards/${boardNo}/invitation/${param}`, {
    isAccepted,
  });
};

export { requestHandleBoard };
