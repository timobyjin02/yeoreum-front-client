import axios from 'axios';

const requestHandleBoard = (
  boardNo: number,
  type: number,
  isAccepted: boolean,
  token: string,
) => {
  const url = type === 5 ? 'guest' : 'host';

  return axios.patch(
    `/api/boards/${boardNo}/invite/${url}`,
    { isAccepted },
    {
      headers: { Authorization: `Bearer ${token}` },
    },
  );
};

export { requestHandleBoard };
