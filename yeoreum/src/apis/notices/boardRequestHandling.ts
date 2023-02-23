import axios from 'axios';

const requestHandleBoard = (
  boardNo: number,
  type: number,
  isAccepted: boolean,
  token: string,
) => {
  const param = type === 5 ? 'guest' : 'host';

  return axios.patch(
    `/api/boards/${boardNo}/invite/${param}`,
    { isAccepted },
    {
      headers: { Authorization: `Bearer ${token}` },
    },
  );
};

export { requestHandleBoard };
