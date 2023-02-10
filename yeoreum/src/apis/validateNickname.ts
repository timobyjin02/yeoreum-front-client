import axios from 'axios';
import { getToken } from '../utils/user';

const validateNickname = (nickname: string) => {
  const token = getToken();
  (async () => {
    try {
      const res = await axios.get(`/api/users/valid-nicknames/${nickname}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return res.data.response.isValidNickname;
    } catch (err) {
      return err;
    }
  })();
};
export default validateNickname;
